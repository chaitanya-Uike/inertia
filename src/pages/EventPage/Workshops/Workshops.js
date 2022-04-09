import React from 'react'
import TitleHero from '../../../components/titleHero'
import data from '../../../Data/workshops'
import Card from '../../../components/card/card'
function Workshop() {
    return (
        <div>
            <TitleHero title="Workshop" />
            <div className='event-container'>
                {data.map((card, index) => {
                    return (
                        <Card lnk={"workshop"} eventName={card.eventName} img={card.img} sublnk={index} key={index} name={card.eventName} description={card.description} />
                    )
                })}
            </div>
        </div>
    )
}

export default Workshop