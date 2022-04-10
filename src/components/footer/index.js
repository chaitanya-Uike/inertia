import React from 'react'

import './footer.css'

const aryanurl='https://www.linkedin.com/in/aryan-jangid-9641a2207/'
const chaitanyaurl='https://www.linkedin.com/in/chaitanya-uike-b15a2119a/'

const Footer = () => {
  return (
    <div className="footer-outer">
      <div className='footer'>
        <div className='footer-first'>
          <h1 className='footer-inertia'>INERTIA</h1>
          <p className='footer-inertia-description'>INERTIA'22 X DRAIC is the largest technical festival of Pune. Let’s make a Tech move.</p>
          <div className='footer-social-item'>
            <div>
              <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png" alt="" />
            </div>
            <div>
              <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/facebook-circled.png" alt="" />
            </div>
            <div>
              <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
            </div>
          </div>
        </div>
        {/* <div className='footer-second'>
          <h2 className='footer-menu-heading'>Menu</h2>
          <h6 className='footer-page-link'>About US</h6>
          <h6 className='footer-page-link'>Term of Use</h6>
          <h6 className='footer-page-link'>Privary Policy</h6>
          <h6 className='footer-page-link'>Order History</h6>
          <h6 className='footer-page-link'>Return policy</h6>
        </div> */}
        <div className='footer-third'>
          <h2 className='footer-menu-heading'>Contact Us</h2>
          <div className='footer-contact'>
            <div className='footer-contact-item-image'>
              <img className='footer-contact-image' src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" alt='' />
            </div>
            <div>
              <p>DY Patil College of Engineering, Pune</p>
            </div>
          </div>
          <div className='footer-contact'>
            <div>
              <img className='footer-contact-image' src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png" alt='' />
            </div>
            <div>
              <p>9898823172</p>
            </div>
          </div>
          <div className='footer-contact'>
            <div>
              <img className='footer-contact-image' src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png" alt='' />
            </div>
            <div>
              <p>inertiadypcoe@gmail.com</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className='footer-creator-div'>
        <h4 className='footer-creator'>
          Website designed and created by <a
              href={aryanurl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-a-link"
            >@Aryan Jangid</a> and <a
              href={chaitanyaurl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-a-link"
            > @Chaitanya Uike</a>
        </h4>
      </div>
    </div>
  )
}

export default Footer