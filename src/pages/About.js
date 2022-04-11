import React from 'react'
import TitleHero from '../components/titleHero'
import './about.css'
import Mentor from './mentor'
function About() {
    return (
        <>
            <div>
                <TitleHero title="WHO WE ARE" />
            </div>
            <div className='about-us-description'>
                <p className='about-us-p'>INERTIA’22, DYPCOE is the annual science and technology festival of Dr. D. Y. Patil College of Engineering in Association with Draic. It provides a platform for the student community to develop and showcase their technical progress. It has grown into Pune's Largest Science and Technology Festival, attracting people from all walks of life, including students, academia, professionals, and the general public. So call your friends, mark your calendars, and gear up for INERTIA’22!!!</p>
            </div>
            <div>
                <Mentor/>
            </div>
        </>

    )
}

export default About