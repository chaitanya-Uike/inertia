import React from 'react'
import { NavLink } from 'react-router-dom'
import './card.css'
function card(props) {

    const link=props.eventcategory?`/event/${props.eventcategory}/${props.lnk}`:`/event/${props.lnk}`

    return (
        <div className='event-card'>
            <div className=''>
            <NavLink to={link}> <img className='event-image' src={props.img} alt=''></img></NavLink>
            </div>
            <h1 className='event-name'>{props.name}</h1>
            <p>{props.description}</p>
            <a className='event-link' href="www.google.com">{props.registration}</a>
        </div>
    )
}

export default card