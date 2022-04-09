import React from 'react'
import TitleHero from '../../../components/titleHero'
import data from './Draicplaygrounddata'
import Card from '../../../components/card/card'
function DRAICplayground() {

  //     let {id}=useParams();
  //   const event=data[id];

  return (
    <div>
      <TitleHero title="DRAIC Robo Playground"></TitleHero>
      <div className='event-container'>
      {data.map((card, index) => {
        return (
          <Card lnk={"draicplayground"} eventName={card.eventName}
            img={card.img} sublnk={index} key={index} name={card.eventName} description={card.description} />
        )
      })}
      </div>
    </div>
  )
}

export default DRAICplayground