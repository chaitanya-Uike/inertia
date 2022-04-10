import React from 'react'
import TitleHero from '../components/titleHero'
import { useState } from 'react'
import './register.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const [user, setUser] = useState({ username: '', email: '', phone: '' })

    const handleUserInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const notify = (msg) => toast(msg);


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (user.phone.length !== 10) {
            notify('invalid phone number!')
            return
        }

        const res = await fetch('https://inertia-api-v2.herokuapp.com/player-register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()

        if (data.status === 'OK') {
            notify('register successful');
            return
        }

        notify(data.message)

    }

    return (
        <div>
            <TitleHero title="Register Here"></TitleHero>
            <div className="Register-outer-box">
                <h2 className="Register-fill-form">Fill this form to register</h2>
                <form className="Register-input-boxes-div" onSubmit={handleSubmit}>
                    <div className="Register-input-indi-div">
                        <div>
                            <label>Enter your name</label>
                        </div>
                        <div>
                            <input name="username" type="text" className="form-control" placeholder="Name" required onChange={handleUserInput} />
                        </div>
                    </div>
                    <div className="Register-input-indi-div">
                        <div>
                            <label>Enter your Email</label>
                        </div>
                        <div>
                            <input name="email" type="email" className="form-control" placeholder="Email" required onChange={handleUserInput} />
                        </div>
                    </div>
                    <div className="Register-input-indi-div">
                        <div>
                            <label>Enter your Phone Number</label>
                        </div>
                        <div>
                            <input name="phone" type="number" className="form-control" placeholder="Phone Number" required onChange={handleUserInput} />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className="register-btn">Submit</button>
                    </div>
                </form>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
}

export default Register