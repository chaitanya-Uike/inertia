import React from 'react'
import { NavLink } from 'react-router-dom'
import './hero.css'

const Hero = () => {
    return (

        <div className="hero">
            <h1 className="title">INERTIA</h1>
            <h5 className="sub-heading">LETS MAKE A TECH MOVE</h5>
            <div className="hero-button-div">
                <NavLink to="/event" className="exploreBtn">Explore Events</NavLink>
                <NavLink to="/register" className="exploreBtn">Register for Events</NavLink>
            </div>

        </div>
    )
}

export default Hero