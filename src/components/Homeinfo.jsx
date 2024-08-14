// import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({text, link, btnText}) =>(
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center"></p>
        {text}
        <Link to = {link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" alt='dive in!' />
        </Link>
    </div>
)


const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Ayush</span>
        👋
        <br />
        An Indian engineering student, constructing digital bridges through code and pixels.
      </h1>
    ),
    2:(
        <InfoBox
        text="Web developer with mechanical prowess, engaged in technology."
        link= "/about"
        btnText="Learn more"/>
    ),
    3:(
        <InfoBox
        text="Developed web projects with event pages, parallax designs, and responsive interfaces."
        link= "/projects"
        btnText="Visit my portfolio"/>
    ),
    4:(
        <InfoBox
        text="Unlock the door to creativity—my inbox eagerly awaits your message!"
        link= "/contact"
        btnText="Let's talk"/>
    )
}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
