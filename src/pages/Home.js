import React from 'react'

import Hero from '../components/hero'
import EventBox from '../components/event'
import im from '../assets/static/roboRace.jpeg'
import './home.css'
import Card from '../components/card/card.js'
// import { NavLink } from 'react-router-dom'


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

const Home = () => {
    return (
        <>
            <Hero />
            {/* <section className="exploreEvents">
                <h3>Explore Events</h3>
                <div className="events">
                    <EventBox title="30 minutes-25 certificates" link="/30-mins" />
                    <EventBox title="Robo League" link="/robo-league" />
                    <EventBox title="15 minutes competition" link="/15-mins" />
                    <EventBox title="DRAIC Robo Playground" link="/robo-playground" />
                    <EventBox title="Space Tech" link="/space-tech" />
                    <EventBox title="Projects" link="/projects" />
                </div>
            </section> */}
            <section className="ongoing-events">
                <div className="ongoing-event-container">
                    <div>
                        <h1 className="ongoing-events-heading">Ongoing Events</h1>
                    </div>
                    <div className="ongoing-events-outer">

                        {data.map((card, index) => {
                            return (
                                <Card lnk={index} img={card.img} name={card.name} description={card.registerlink} />
                            )
                        })}

                    </div>
                </div>
            </section>
            <section className="liveTV">
                <h3>Live TV</h3>
                <div className="vdo">
                    <iframe width="100" height="600" src="https://www.youtube.com/embed/NJC12cMaCoM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        </>
    )
}

export default Home