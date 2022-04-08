import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../../Data/Event.js'
function EventPage() {
  let {id}=useParams();
  const event=data[id];

  return (
    <div>
        <h1>{event.eventName}</h1>
    </div>
  )
}

export default EventPage