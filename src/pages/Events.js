import React from 'react'
import { Link } from 'react-router-dom'
import im from '../assets/static/roboRace.jpeg'
import TitleHero from '../components/titleHero'
import './events.css'
import Card from '../components/card/card'

const data = [
    {
        name: "Workshop",
        img: im,
        page:"workshop",
        description:"Workshops"
    },
    {
        name: "Robot league",
        img: im,
        page:"robotleague",
        description:"robotleague"
    },
    {
        name: "DRAIC Playground",
        img: im,
        page:"draicplayground",
        description:"draicplayground"
    },
    {
        name: "15 min Competition",
        img: im,
        page:"shortcompetitions",
        description:"shortcompetitions"
    },
    {
        name: "Space Tech",
        img: im,
        page:"spacetech",
        description:"spacetech"
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
                        <Card lnk={card.page} img={card.img} name={card.name} description={card.description}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Events