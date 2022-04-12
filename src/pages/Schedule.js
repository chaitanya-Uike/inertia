import React from 'react'
import TitleHero from '../components/titleHero'
import './schedule.css'
// import im from '../assets/static/roboRace.jpeg'

// const data = [
//     {
//         number: "1",
//         eventname: "Roborace",
//         time: "All Day",
//     },
//     {
//         number: "2",
//         eventname: "Robosoccer",
//         time: "All Day",
//     },
//     {
//         number: "3",
//         eventname: "Squid Game",
//         time: "All Day",
//     },
//     {
//         number: "4",
//         eventname: "Roborace",
//         time: "10:00",
//     },

// ]
function Schedule() {
    return (
        <>
            <div>
                <TitleHero title="Schedule" />
            </div>
            <div className='schedule-container'>
            <h2 className='leaderboard-coming-soon'>EVENTS STARTS FROM 10:00AM</h2>
            <h2 className='leaderboard-info'>INAUGURATION - 10:00AM</h2>
            <h2 className='leaderboard-info'>ALL TECHNICAL AND NON TECHNICAL EVENTS - 10:30AM</h2>

                {/* <div className='schedule-div'>
                    {data.map((card) => {
                        return (
                            <>
                                <div className='schedule-individual-box'>
                                    <div className='schedule-name-div'>
                                        <h3 className='schedule-postition'>{card.number}.</h3>
                                        <h3 className='schedule-name'>{card.eventname}</h3>
                                    </div>
                                    <div>
                                        <h3 className='schedule-time'>{card.time}</h3>
                                    </div>

                                </div>

                                <div className='schedule-line'></div>
                            </>
                        )
                    })}

                </div> */}
            </div>
        </>

    )
}

export default Schedule