// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Audio Visualizer

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image } from '../../components/PageComponents.js';
import { AudioVisualizerData } from '../../assets/data/pages/audiovisualizer.js'

const AudioVisualizer = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row>
          <h1>{AudioVisualizerData[0].heading}</h1>
        </ Row>

        <Row>
          <p>
            Role(s): {AudioVisualizerData[0].roles}
            <br />
            Stack: {AudioVisualizerData[0].stack}
          </p>
        </Row>

        <Row>
          <Column>
            <p>{AudioVisualizerData[1].text}</p>
          </Column>
          <Column>
            <Image src={AudioVisualizerData[1].image} alt="fear?" />
          </Column>
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>{AudioVisualizerData[2].heading}</h1>
            <p>{AudioVisualizerData[2].text}</p>
          </Column>
        </Row>
      </motion.div>
    </>
  );
}

export default AudioVisualizer;

