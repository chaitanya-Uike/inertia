import React from 'react'
import './squidgame.css'
import squidgameimg from '../assets/Grouporange-min.png'
function squidgame() {
    return (
        <div className="squid-game">
        <h1 className="squid-game-games">GAMES</h1>
        
        <div className="squid-outer">
            <div className="squid-game-div">
                <div className="squid-game-image-div">
                    <img className="squid-game-image" alt="squidimg" src={squidgameimg}></img>
                </div>
                <div className="squid-game-content">
                    <h1 className="squid-game-quotes">
                        “
                    </h1>
                    <h1 className="squid-game-quotes">
                        You <span>Don’t Trust People</span> Here Because You Can. You Do It <span>Because You Don’t Have Anybody Else</span> ” </h1>
                    <div className="squid-game-quotes-name-div">
                        <h1 className="squid-game-quotes-name">– Player <span>456</span> </h1>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
export default squidgame