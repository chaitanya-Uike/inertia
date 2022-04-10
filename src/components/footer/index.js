import React from 'react'
import inertialogo from '../../assets/ineertia logo croped.png'
import draiclogo from '../../assets/draic logo.png'
import './footer.css'

const inertiainsta ='https://www.instagram.com/inertia_dypcoe/'
const inertialinkedin='https://www.linkedin.com/company/inertia-dypcoe/'
// const inertiaitwitter=''

const draicinsta='https://www.instagram.com/draicdypcoe/'
const draiclinkedin='https://www.linkedin.com/company/d-y-patil-robotics-ai-club/mycompany/'
const draictwitter='https://twitter.com/DraicDypcoe'
const draicwebsite='https://www.draicdypcoe.in/'



const aryanurl = 'https://www.linkedin.com/in/aryan-jangid-9641a2207/'
const chaitanyaurl = 'https://www.linkedin.com/in/chaitanya-uike-b15a2119a/'
const swanandurl = 'https://www.linkedin.com/in/swanand-mathekar/'
const prathisurl = 'https://www.linkedin.com/in/prathisupadhyay/'
const palashurl = 'https://www.linkedin.com/in/palash-rambhia-bb5b66214/'

const draicurl = 'https://www.draicdypcoe.in/'
const Footer = () => {
  return (
    <div className="footer-outer">
      <div className='footer'>
        <div className='footer-first'>
          <div className='footer-inertia-image-div'>
            <div>
              <img className='footer-inertia-image' src={inertialogo} alt='inertialogo'></img>
            </div>
            <div>
              <h1 className='footer-inertia'>INERTIA</h1>

            </div>
          </div>
          <p className='footer-inertia-description'>INERTIA'22 is the largest technical festival of Pune. Let’s make a Tech move.</p>
          <div className='footer-social-item'>
            <div>
              <a
                href={inertiainsta}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
                <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png" alt="" />
              </a>
            </div>
            <div>
              <a
                href={inertialinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
                <img className='footer-social-link' src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png" alt="" />
              </a>     </div>
            {/* <div>
              <a
                href={inertiatwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
                <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        <div className='footer-first'>
          <div className='footer-inertia-image-div'>
            <div>
              <a
                href={draicurl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
                <img className='footer-draic-image' src={draiclogo} alt='inertialogo'></img>
              </a>
            </div>
            <div>
              <h1 className='footer-inertia'>DRAIC</h1>
            </div>
          </div>
          <p className='footer-inertia-description'>DRAIC Club is working passionately in the field of Robotics & AI.</p>
          <div className='footer-social-item'>
            <div>
            <a
                href={draicinsta}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
              <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png" alt="" />
              </a>   </div>
            <div>
            <a
                href={draiclinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
              <img className='footer-social-link' src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png" alt="" />
              </a></div>
            <div>
            <a
                href={draictwitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
              <img className='footer-social-link' src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a> </div>
            <div>
            <a
                href={draicwebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
              <img className='footer-social-link' src="https://img.icons8.com/color/48/ffffff/domain--v1.png" alt="zsdsff" />
              </a></div>
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
          >@Aryan Jangid</a> , <a
            href={chaitanyaurl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-a-link"
          > @Chaitanya Uike</a> ,
          <a
            href={swanandurl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-a-link"
          > @Swanand Mathekar</a> ,
          <a
            href={prathisurl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-a-link"
          > @Prathis Upadhyay</a> and
          <a
            href={palashurl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-a-link"
          > @Palash Rambhia</a>
        </h4>
      </div>
    </div>
  )
}

export default Footer