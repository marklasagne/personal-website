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
import { Row, PageContainer, VideoPlayer, Image } from '../../components/PageComponents.js';
import { AmbieSenseData } from '../../assets/data/pages/ambiesense.js';
import AmbieSense_1 from '../../assets/images/AmbieSense/AmbieSense_1.png';

const AmbioSense = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        key='ambiesense'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row data-aos='fade-up'>
          <Image src={AmbieSenseData[0].image} alt="have" />
        </Row>
        <Row data-aos='fade-up'>

          <p>{AmbieSenseData[0].description}</p>
          <br />
          <br />
          <p>
            Team: {AmbieSenseData[0].team}
            <br />
            Role(s): {AmbieSenseData[0].roles}
            <br />
            Stack: {AmbieSenseData[0].stack}
          </p>

        </Row>

        <Row data-aos='fade-up'>
          <VideoPlayer url='https://youtu.be/bjNjeuMzyY0' />
        </Row>

        <Row data-aos='fade-up'>
          <Image src={AmbieSense_1} alt="you" />
        </Row>

        <Row data-aos='fade-up'>

          <h1>{AmbieSenseData[1].header}</h1>
          <p>
            {AmbieSenseData[1].text1}
            <br />
            <br />
            {AmbieSenseData[1].text2}
          </p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={AmbieSenseData[1].image} alt="ever" />

        </Row>

        <Row data-aos='fade-up'>

          <p>
            {AmbieSenseData[2].text1}
            <br />
            <br />
            {AmbieSenseData[2].text2}
          </p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={AmbieSenseData[2].image} alt="had a" />

        </Row>

        <Row data-aos='fade-up'>

          <h1>{AmbieSenseData[3].heading}</h1>
          <p>{AmbieSenseData[3].text}</p>
        </Row>
        <Row data-aos='fade-up'>
          <Image src={AmbieSenseData[3].image} alt="dream?" />

        </Row>

        <Row data-aos='fade-up'>
          <VideoPlayer url='https://youtu.be/jSV68a-6djw' />
        </Row>

        <Row data-aos='fade-up'>

          <h1>{AmbieSenseData[4].heading}</h1>
          <p>{AmbieSenseData[4].text}</p>
        </Row>
      </motion.div>
    </>
  );
}

export default AmbioSense;

