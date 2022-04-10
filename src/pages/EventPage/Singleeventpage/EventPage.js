import React from 'react'
import { useParams } from 'react-router-dom'
import TitleHero from '../../../components/titleHero/index.js';
import data from '../../../Data/Event.js'
function EventPage() {
  let {id}=useParams();
  const event=data[id];

  return (
    <div>
        <TitleHero title={event.eventName} />
    </div>
  )
}

export default EventPage