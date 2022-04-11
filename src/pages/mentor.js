import React from 'react'
import im from '../assets/pawan_main.png'
import im2 from '../assets/pawan_hover.png'
import './mentor.css'
const pawanlinkedin='https://www.linkedin.com/in/pawandeep-dhall/'
function mentor() {
  return (
    <div className="squid-game">
    <h1 className="mentor-games">OUR MENTOR</h1>
    
    <div className="squid-outer">
        <div className="squid-game-div">
            <div className="mentor-image-div">
                <img className="mentor-image main" alt="squidimg" src={im}></img>
                <img className="mentor-image hoverimg" alt="squidimg" src={im2}></img>
            </div>
            <div className="squid-game-content">
                <h1 className="squid-game-quotes">
                    
                </h1>
                <h1 className="mentor-quotes">
                Experienced Founder with a<span> demonstrated history of working in the CAD/CAM industry.</span> Skilled in Leadership, 3D Prototyping, Digital Marketing, and <span>Mechanical Engineering. </span> </h1>
                <div className="squid-game-quotes-name-div">
                <a
                href={[pawanlinkedin]}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a-link">
                    <h1 className="squid-game-quotes-name">– Pawandeep <span>Dhall</span> </h1>
                    </a>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default mentor