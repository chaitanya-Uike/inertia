import React from 'react'
import { Link } from 'react-router-dom'
import im from '../assets/static/roboRace.jpeg'
import TitleHero from '../components/titleHero'
import './events.css'
import Card from '../components/card/card'

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
                {data.map((card, index) => {
                    return (
                        <Card lnk={index} img={card.img} name={card.name} description={card.registerlink} />
                    )
                })}

            </div>
        </div>
    )
}

export default Events