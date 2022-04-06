import React from 'react';
import TitleHero from '../components/titleHero'
import mp from '../assets/map.png'
import './map.css'
const Map = () => {
    return (
        <>
            <div>
                <TitleHero title="Map" />
            </div>
            <div className='map-img-div'>
                <img className='map-image' src={mp} alt=''>
                    
                </img>
            </div>
        </>
    );
}

export default Map;
