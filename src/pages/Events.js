import React from 'react'
// import { Link } from 'react-router-dom'
// import im from '../assets/static/roboRace.jpeg'
import workshop from '../assets/events/workshop.jpg'
import robotleague from '../assets/events/robot league1.jpg'
import competition from '../assets/events/competition.jpg'
import space from '../assets/events/spaceship.jpg'
import draicimg from '../assets/static/draicimg.png'


import TitleHero from '../components/titleHero'
import './events.css'
import Card from '../components/card/card'

const data = [
    {
        name: "Workshops",
        img: workshop,
        page:"workshop",
        description:"Workshops"
    },
    {
        name: "Robot league",
        img: robotleague,
        page:"robotleague",
        description:"robotleague"
    },
    {
        name: "DRAIC Playground",
        img: draicimg,
        page:"draicplayground",
        description:"draicplayground"
    },
    {
        name: "Short Competition",
        img: competition,
        page:"shortcompetitions",
        description:"shortcompetitions"
    },
    {
        name: "Space Tech",
        img: space,
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
                        <Card lnk={card.page} img={card.img} name={card.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Events