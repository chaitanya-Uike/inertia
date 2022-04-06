import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="mainFooter">


                <div className="footer">
                    <div>
                        <h3>INERTIA</h3>
                        <h6>LETS MAKE A BITCH MOVE</h6>
                    </div>
                    <hr className="divider" />

                    <article className="contactDiv">
                        <h5>CONTACT US</h5>
                        <h6>johnDoe@email.com</h6>
                    </article>

                </div>
                <div className="copyright">


                    © Inertia 2022
                </div>
            </div>
        </>
    )
}

export default Footer