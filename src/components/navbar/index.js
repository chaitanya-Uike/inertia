import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><NavLink className="Navbar-name" to="/"><p className='navbar-text'>Home</p></NavLink></li>
                <li><NavLink className="Navbar-name" to="/about">About us</NavLink></li>
                <li><NavLink className="Navbar-name" to="/schedule">Schedule</NavLink></li>
                <li><NavLink className="Navbar-name" to="/map">Map</NavLink></li>
                <li><NavLink className="Navbar-name" to="/leaderboard">Leaderboard</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar