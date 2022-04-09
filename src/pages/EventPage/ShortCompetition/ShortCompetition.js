import React from 'react'
import TitleHero from '../../../components/titleHero'
import data from './competitiondata'
import Card from '../../../components/card/card'
function ShortCompetition() {
  return (
    <div>
        <TitleHero title="15 min-Competition"></TitleHero>
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

export default ShortCompetition