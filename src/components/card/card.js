import React from 'react'
import { NavLink } from 'react-router-dom'
import './card.css'
function card(props) {
    return (
        <div className='event-card'>
            <div className=''>
            <NavLink to={`/event/${props.lnk}`}> <img className='event-image' src={props.img} alt=''></img></NavLink>
            </div>
            <h1 className='event-name'>{props.name}</h1>
            <a className='event-link' href="www.google.com">{props.description}</a>
        </div>
    )
}

export default card