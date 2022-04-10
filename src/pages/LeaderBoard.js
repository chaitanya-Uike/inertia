import React from 'react'
import TitleHero from '../components/titleHero'
import './leaderboard.css'
import { useState, useEffect } from 'react'


const data=[
    {
        username:'aryan jangid',
        points:'23'
    },
    {
        username:'aryan jangid',
        points:'23'
    },
    {
        username:'aryan jangid',
        points:'23'
    },
]
function LeaderBoard() {
    const [leaderboard, setLeaderboard] = useState([])

    const fetchLeaderboard = async () => {
        const res = await fetch('https://inertia-api-v2.herokuapp.com/leaderboard')
        const data = await res.json()

        setLeaderboard(data.players)
    }

    useEffect(() => {
        fetchLeaderboard()
    }, [])

    return (
        <>
            <div>
                <TitleHero title="LeaderBoard" />
            </div>
            <div className='leaderboard-outer-div'>
                <h2 className='leaderboard-coming-soon'>Coming Soon...</h2>
                <div className='leaderboard-div'>
                    {leaderboard.map((card, position) => {
                        return (
                            <div key={position}>
                                <div className='leaderboard-individual-box' >
                                    <div className='leaderboard-name-div'>
                                        <h3 className='leaderboard-postition'>#{position + 1}</h3>
                                        <h3>{card.username}</h3>
                                    </div>
                                    <div className='leaderboard-points-div'>
                                        <h3 className='leaderboard-points'>+ {card.points}</h3>
                                    </div>

                                </div>
                                <div className='leaderboard-line'></div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </>

    )
}

export default LeaderBoard