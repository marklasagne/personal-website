// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Ambie sense project page

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image } from '../../components/PageComponents.js';
import { AffinityData } from '../../assets/data/pages/affinity';

const AmbioSense = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        key='affinity'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row data-aos='fade-up'>
          <Column>
            <Image src={AffinityData[0].image} alt="logo" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <p>{AffinityData[0].description}</p>
          </Column>
          <Column>
            <p>Team: {AffinityData[0].team}</p>
            <p>My Role(s): {AffinityData[0].roles}</p>
            <p>Stack: {AffinityData[0].stack}</p>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <ReactPlayer url='https://youtu.be/-2GlO4wlVD4' /> 
          <p style={{ fontSize: '12px',  }}>HUGE thanks to Ryan Policky for helping capture photos and videos of our project at EXPO</p>
        </Row>

        <Row data-aos='fade-up'>
          <h1>{AffinityData[1].heading}</h1>
          <p>{AffinityData[1].text}</p>
        </Row>

        <Row data-aos='fade-up'>
          <h1>{AffinityData[2].heading}</h1>
          <p>{AffinityData[2].text}</p>
        </Row>

        <Row data-aos='fade-up'>
          <ReactPlayer url='https://youtu.be/aQZIhZwkYc4' />
        </Row>

        <Row data-aos='fade-up'>
          <p>{AffinityData[3].text}</p>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <Image src={AffinityData[3].image3} alt="visual sketch 1" />
          </Column>
          <Column>
            <Image src={AffinityData[3].image4} alt="visual sketch 2" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <Image src={AffinityData[3].image1} alt="room mockup 1" />
          </Column>
          <Column>
            <Image src={AffinityData[3].image2} alt="room mockup 2" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <p>{AffinityData[4].text}</p>
        </Row>

        <Row data-aos='fade-up'>
          <ReactPlayer url='https://youtu.be/aH1Mo9KutyU' />
        </Row>
        
        <Row data-aos='fade-up'>
          <p>{AffinityData[5].text}</p>
        </Row>

        <Row data-aos='fade-up'>
          <h1>VIDEO OF DANCERS GOES HERE?!</h1>
        </Row>

        <Row data-aos='fade-up'>
          <p>{AffinityData[6].text}</p>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <Image src={AffinityData[6].image6} alt="arduino / biometric setup 1" />
          </Column>
          <Column>
            <Image src={AffinityData[6].image7} alt="arduino / biometric setup 2" />
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <h1>Probabably should wrap this up somehow</h1>
        </Row>

    
      </motion.div>
    </>
  );
}

export default AmbioSense;

