import React from 'react'
import TitleHero from '../components/titleHero'
import './schedule.css'
// import im from '../assets/static/roboRace.jpeg'

const data = [
    {
        number: "1",
        eventname: "Roborace",
        time: "10:00",
    },
    {
        number: "2",
        eventname: "Roborace",
        time: "10:00",
    },
    {
        number: "3",
        eventname: "Roborace",
        time: "10:00",
    },
    {
        number: "4",
        eventname: "Roborace",
        time: "10:00",
    },

]
function Schedule() {
    return (
        <>
            <div>
                <TitleHero title="Schedule" />
            </div>
            <div className='schedule-container'>
                <div className='schedule-div'>
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

                </div>
            </div>
        </>

    )
}

export default Schedule