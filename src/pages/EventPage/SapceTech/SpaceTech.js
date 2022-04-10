import React from 'react'
import TitleHero from '../../../components/titleHero'
// import data from '../../../Data/SpaceTech'
// import Card from '../../../components/card copy/card'
function DRAICplayground() {

    //     let {id}=useParams();
    //   const event=data[id];

    return (
        <div>
            <TitleHero title="Space Tech"></TitleHero>
            <div className='event-container'>
                <div className='about-us-description'>
                    <p className='about-us-p'>We are going to have a space tech gallery, where we are showing evolution of space tech in India. We are also displaying models of current fleet of ISRO rockets</p>
                </div>


                {/* {data.map((card, index) => {
        return (
          <Card eventName={card.eventName}
            img={card.img} key={index} name={card.eventName} description={card.description} />
        )
      })} */}
            </div>
        </div>
    )
}

export default DRAICplayground