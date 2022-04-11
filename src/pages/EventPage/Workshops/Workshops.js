import React from 'react'
import TitleHero from '../../../components/titleHero'
import data from './workshopdata'
import Card from '../../../components/card copy/card'
function Workshop() {
    return (
        <div>
            <TitleHero title="Workshops" />
            <div className='event-container'>
                {data.map((card, index) => {
                    return (
                        <Card eventName={card.eventName} img={card.img} key={index} name={card.eventName} description={card.description} />
                    )
                })}
            </div>
        </div>
    )
}

export default Workshop