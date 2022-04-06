import React from 'react'
import { NavLink } from 'react-router-dom'
import './hero.css'

const Hero = () => {
    return (
        
        <div className="hero">
            <h1 className="title">INERTIA</h1>
            <h5 className="sub-heading">LETS MAKE A TECH MOVE</h5>
            <NavLink to="/event" className="exploreBtn">Explore Events</NavLink>
        </div>
    )
}

export default Hero