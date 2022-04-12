import React from 'react';
import TitleHero from '../components/titleHero'
import mp from '../assets/map.png'
import event_map from '../assets/event_map.png'
import './map.css'


const locationurl =
  "https://www.google.com/maps/place/D.Y.+Patil+College+of+Engineering/@18.6449794,73.7562764,16.5z/data=!4m9!1m2!2m1!1sD.+Y.+Patil+College+of+Engineering,+D.+Y.+Patil+Educational+Complex,+Sector+29,+Nigdi+Pradhikaran,+Akurdi,+Pune+411044.!3m5!1s0x3bc2b9f1ca8dab03:0x6237cfbd36f9acf9!8m2!3d18.6448378!4d73.7582119!15sCndELiBZLiBQYXRpbCBDb2xsZWdlIG9mIEVuZ2luZWVyaW5nLCBELiBZLiBQYXRpbCBFZHVjYXRpb25hbCBDb21wbGV4LCBTZWN0b3IgMjksIE5pZ2RpIFByYWRoaWthcmFuLCBBa3VyZGksIFB1bmUgNDExMDQ0LlptImtkeSBwYXRpbCBjb2xsZWdlIG9mIGVuZ2luZWVyaW5nIGR5IHBhdGlsIGVkdWNhdGlvbmFsIGNvbXBsZXggc2VjdG9yIDI5IG5pZ2RpIHByYWRoaWthcmFuIGFrdXJkaSBwdW5lIDQxMTA0NJIBB2NvbGxlZ2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnZNM010VEdGbkVBRQ";

const Map = () => {
  return (
    <>
      <div>
        <TitleHero title="Map" />
      </div>
      <div className='map-img-div'>
        <h3 className='map-heading'>Find Us</h3>
        <a href={locationurl} target="_blank" rel="noopener noreferrer" className="footer_location">
          <img className='map-image' src={mp} alt=''>
          </img>
        </a>
      </div>
      <div className='map-img-div'>
        <h3 className='map-heading'>Route To Events</h3>
        <a href={locationurl} target="_blank" rel="noopener noreferrer" className="footer_location">
          <img className='map-image' src={event_map} alt=''>
          </img>
        </a>
      </div>
    </>
  );
}

export default Map;
