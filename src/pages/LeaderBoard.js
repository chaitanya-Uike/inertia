import React from 'react'
import TitleHero from '../components/titleHero'
import Loader from '../components/loader'
import './leaderboard.css'
import { useState, useEffect } from 'react'

function LeaderBoard() {
    const [leaderboard, setLeaderboard] = useState([])
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchLeaderboard = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://inertia-api-v2.herokuapp.com/leaderboard')
            const data = await res.json()

            setLoading(false)
            setLeaderboard(data.players)
        } catch (err) {
            console.log(err);
            setLoading(true)
        }
    }

    const fetchEventsList = async () => {
        const res = await fetch('https://inertia-api-v2.herokuapp.com/events')
        const data = await res.json()

        setEvents(data.events)
    }

    const fetchEventLeaderboard = async (e) => {
        if (e.target.value === 'All') {
            fetchLeaderboard()
            return
        }

        try {
            setLoading(true)
            const eventName = e.target.value
            const url = `https://inertia-api-v2.herokuapp.com/${eventName}/leaderboard`

            const res = await fetch(url)
            const data = await res.json()

            setLoading(false)
            setLeaderboard(data.players)
        } catch (err) {
            setLoading(true)
            console.log(err)
        }
    }

    useEffect(() => {
        fetchLeaderboard()
        fetchEventsList()
    }, [])


    const searchUsers = async (name) => {
        try {
            setLoading(true)
            const res = await fetch(`https://inertia-api-v2.herokuapp.com/player-search?name=${name}`)
            const data = await res.json()

            setLoading(false)
            setLeaderboard(data.players)
        } catch (error) {
            console.log(error);
            setLoading(true)
        }

    }

    const handleUserInput = (e) => {
        if (e.target.value === "") {
            fetchLeaderboard()
            return
        }

        searchUsers(e.target.value)
    }

    return (
        <>
            <div>
                <TitleHero title="LeaderBoard" />
            </div>
            <div className='leaderboard-outer-div'>
                {/* <h2 className='leaderboard-coming-soon'>Coming Soon...</h2> */}

                <div className="leaderboard-select-box">
                    <div className='left-box'>
                        <div className='leaderboard-select-your-text-box'>
                            <h2 className='leaderboard-select-your-event'>Check your Rank</h2>
                        </div>
                        <div className='leaderboard-select-your-text-box'>
                            <input type="text" className='leaderboard-selection-select' name="input-username" id="input-username" placeholder="Enter name" onChange={handleUserInput} />
                        </div>
                    </div>
                    {/* <div className='right-box'>
                        <div className='leaderboard-select-your-text-box'>
                            <h2 className='leaderboard-select-your-event'>Select your Event</h2>
                        </div>
                        <div>
                            <select id='workshop' name='workshop' className='leaderboard-selection-select' onChange={fetchEventLeaderboard}>
                                <option value="All">All</option>
                                {
                                    events.map((event, key) => <option key={key} value={event.name}>{event.name}</option>)
                                }
                            </select>
                        </div>
                    </div> */}


                </div>
                <div>
                    <p className='disclaimer'> <span className='disclaimer-tag'>Note :</span> Rank will be updated in every 10 mins</p>
                </div>
                <div className='leaderboard-div'>
                    {
                        loading ? <Loader type="spinningBubbles" color="white" /> : <>
                            {leaderboard.length === 0 ? <h1>No Players Found</h1> : leaderboard.map((card, index) => {
                                return (
                                    <div key={index}>
                                        <div className='leaderboard-individual-box' >
                                            <div className='leaderboard-name-div'>
                                                <h3 className='leaderboard-postition'>#{card.rank}</h3>
                                                <h3>{card.username}</h3>
                                            </div>
                                            <div className='leaderboard-points-div'>
                                                <h3 className='leaderboard-points'>{card.points}</h3>
                                            </div>
                                        </div>
                                        <div className='leaderboard-line'></div>
                                    </div>
                                )
                            }
                            )}</>}

                </div>
            </div>

        </>

    )
}

export default LeaderBoard