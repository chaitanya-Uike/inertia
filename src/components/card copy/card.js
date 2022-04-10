import React from 'react'
// import { NavLink } from 'react-router-dom'
import './card.css'
function card(props) {
    // let link = props.sublnk >= 0 ? `/event/${props.lnk}/${props.sublnk}` : `/event/${props.lnk}`

    return (
        <div className='event-card'>
            <div className=''>
               <img className='event-image' src={props.img} alt=''></img>
            </div>
            <h1 className='event-name'>{props.name}</h1>
            <p>{props.description}</p>
            <a className='event-link' href="www.google.com">{props.registration}</a>
        </div>
    )
}

export default card