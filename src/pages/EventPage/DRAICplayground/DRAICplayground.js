import React from 'react'
import { useParams } from 'react-router-dom';
import TitleHero from '../../../components/titleHero'
import data from '../../../Data/Draicplayground'
import Card from '../../../components/card/card'
function DRAICplayground() {

//     let {id}=useParams();
//   const event=data[id];

  return (
    <div>
        <TitleHero title="DRAIC Robo Playground"></TitleHero>
        {data.map((card)=>{
            return(
                    <Card lnk={card.id} eventName={card.eventName} 
                    img={card.img}/>
            )
        })}
    </div>
  )
}

export default DRAICplayground