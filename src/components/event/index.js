import React from 'react'

import './event.css'

const EventBox = (props) => {
    return (
        <div className="eventBox">
            <div className="info">
                <h4>{props.title}</h4>
                <a href={props.link}>Register</a>
            </div>
        </div>
    )
}

export default EventBox