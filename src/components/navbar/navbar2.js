import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar2.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <div className="navbar-outer">
            <nav>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                        <li className="items"><NavLink className="Navbar-name" to="/"><p className='navbar-text'>Home</p></NavLink></li>
                        <li className="items"><NavLink activeClassName="active" className="Navbar-name" to="/about">About us</NavLink></li>
                        <li className="items"><NavLink activeClassName="active"className="Navbar-name" to="/event">Events</NavLink></li>
                        <li className="items"><NavLink activeClassName="active" className="Navbar-name" to="/schedule">Schedule</NavLink></li>
                        <li className="items"><NavLink activeClassName="active" className="Navbar-name" to="/map">Map</NavLink></li>
                        <li className="items"><NavLink activeClassName="active" className="Navbar-name" to="/leaderboard">Leaderboard</NavLink></li>
                    </ul>
                )}
                <button onClick={toggleNav} className="btn">BTN</button>
            </nav>
        </div>

    )
}
