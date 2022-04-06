import React from 'react'
import TitleHero from '../components/titleHero'
import './schedule.css'
import im from '../assets/static/roboRace.jpeg'

const data = [
    {
        name: "RoboRace",
        img: im,
        registerlink: "dfasfd",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "dfasfd",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "dfasfd",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "dfasfd",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "dfasfd",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "dfasfd",
    },
    

]
function Schedule() {
    return (
        <>
            <div>
                <TitleHero title="Schedule" />
            </div>
            <div className='schedule-container'>
                {data.map(( card) => {
                    return (
                        <>
                            <div className='schedule-card'>
                                <div className=''>
                                    <img className='schedule-image' src={card.img} alt=''></img>
                                </div>
                                <h1 className='schedule-name'>{card.name}</h1>
                                <a className='schedule-link' href="www.google.com">{card.registerlink}</a>
                            </div>
                        </>
                    )
                })}

            </div>
        </>

    )
}

export default Schedule