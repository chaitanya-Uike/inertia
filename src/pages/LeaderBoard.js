import React from 'react'
import TitleHero from '../components/titleHero'
import './leaderboard.css'

const data = [
    {
        position: "1",
        name: "Aryan Jangid",
        points: "1492"
    },
    {
        position: "2",
        name: "Darshan kadam",
        points: "1332"
    },
    {
        position: "1",
        name: "Aryan Jangid",
        points: "1492"
    },
    {
        position: "1",
        name: "Aryan Jangid",
        points: "1492"
    },
    {
        position: "1",
        name: "Aryan Jangid",
        points: "1492"
    },
    {
        position: "1",
        name: "Aryan Jangid",
        points: "1492"
    },
    {
        position: "1",
        name: "Aryan Jangid",
        points: "1492"
    },

]

function LeaderBoard() {
    return (
        <>
            <div>
                <TitleHero title="LeaderBoard" />
            </div>
            <div className='leaderboard-outer-div'>
                <div className='leaderboard-div'>
                    {data.map((card) => {
                        return (<>
                            <div className='leaderboard-individual-box'>
                                <div className='leaderboard-name-div'>
                                    <h3 className='leaderboard-postition'>#{card.position}</h3>
                                    <h3>{card.name}</h3>
                                </div>
                                <div>
                                    <h3>{card.points}</h3>
                                </div>

                            </div>
                            <div className='leaderboard-line'></div>
                        </>)
                    })}

                </div>
                <div className='leaderboard-position-outer-div'>
                    <h2 className='leader-board-your-postion'>Your Position</h2>
                    <div className='leaderboard-your-postion-div'>
                        <div className='leaderboard-individual-box-your-position'>
                            <div className='leaderboard-name-div'>
                                <h3 className='leaderboard-postition'>#69</h3>
                                <h3>Prathis Upadhya</h3>
                            </div>
                            <div>
                                <h3>500</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default LeaderBoard