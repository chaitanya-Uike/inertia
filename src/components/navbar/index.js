import React from 'react'

import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li href="/">Home</li>
                <li>About us</li>
                <li>Schedule</li>
                <li href="/map">Map</li>
                <li>Leaderboard</li>
            </ul>
        </div>
    )
}

export default Navbar