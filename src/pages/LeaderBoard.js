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

    return (
        <>
            <div>
                <TitleHero title="LeaderBoard" />
            </div>
            <div className='leaderboard-outer-div'>
                {/* <h2 className='leaderboard-coming-soon'>Coming Soon...</h2> */}
                <div>
                    <h2 className='leaderboard-select-your-event'>Select your Event</h2>
                    <select id='workshop' name='workshop' className='leaderboard-selection-select' onChange={fetchEventLeaderboard}>
                        <option value="All">All</option>
                        {
                            events.map((event, key) => <option key={key} value={event.name}>{event.name}</option>)
                        }
                    </select>
                </div>

                <div className='leaderboard-div'>
                    {
                        loading ? <Loader type="spinningBubbles" color="white" /> : <>
                            {leaderboard.length === 0 ? <h1>No Players found</h1> : leaderboard.map((card, position) => {
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
                            }
                            )}</>}

                </div>
            </div>

        </>

    )
}

export default LeaderBoard