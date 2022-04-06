import React from 'react'
import im from '../assets/static/roboRace.jpeg'
import TitleHero from '../components/titleHero'
import './events.css'


const data = [
    {
        name: "RoboRace",
        img: im,
        registerlink: "Resgister",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "Resgister",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "Resgister",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "Resgister",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "Resgister",
    },
    {
        name: "RoboRace",
        img: im,
        registerlink: "Resgister",
    },



]
function Events() {
    return (
        <div>
        <div>
                <TitleHero title="Events" />
            </div>
            <div className='event-container'>
                {data.map((card) => {
                    return (
                        <>
                            <div className='event-card'>
                                <div className=''>
                                    <img className='event-image' src={card.img} alt=''></img>
                                </div>
                                <h1 className='event-name'>{card.name}</h1>
                                <a className='event-link' href="www.google.com">{card.registerlink}</a>
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}

export default Events