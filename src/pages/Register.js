import React from 'react'
import TitleHero from '../components/titleHero'
import './register.css'
function Register() {
    return (
        <div>
            <TitleHero title="Register Here"></TitleHero>
            <div className="Register-outer-box">
                <h2 className="Register-fill-form">Fill this form to register</h2>
                <div className="Register-input-boxes-div">
                    <div className="Register-input-indi-div">
                        <div>
                            <label>Enter your name</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Name" required />
                        </div>
                    </div>
                    <div className="Register-input-indi-div">
                        <div>
                            <label>Enter your Email</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="Register-input-indi-div">
                        <div>
                            <label>Enter your Phone Number</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div>
                        <button className="register-btn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register