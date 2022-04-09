import React from 'react'
import TitleHero from '../../../components/titleHero'
import data from '../../../Data/SpaceTech'
import Card from '../../../components/card/card'
function DRAICplayground() {

  //     let {id}=useParams();
  //   const event=data[id];

  return (
    <div>
      <TitleHero title="Space Tech"></TitleHero>
      {data.map((card, index) => {
        return (
          <Card lnk={"spaceTech"} eventName={card.eventName}
            img={card.img} sublnk={index} key={index} name={card.eventName} description={card.description} />
        )
      })}
    </div>
  )
}

export default DRAICplayground