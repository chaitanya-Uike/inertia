import React from 'react'
import TitleHero from '../../../components/titleHero'
import data from '../../../Data/RoboLeague'
import Card from '../../../components/card/card'

function RobotLeague() {
  return (
    <div>
      <TitleHero title="Robot League"></TitleHero>
      <div className='event-container'>
            {data.map((card, index) => {
        return (
          <Card lnk={"robotleague"} eventName={card.eventName}
            img={card.img} sublnk={index} key={index} name={card.eventName} description={card.description} />
        )
      })}
      </div>
    </div>
  )
}

export default RobotLeague