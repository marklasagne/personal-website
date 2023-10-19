// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Audio Visualizer

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, PageContainer, Image, MainFont, TextLink } from '../../components/PageComponents.js';
import { AudioVisualizerData } from '../../assets/data/pages/audiovisualizer.js'

const AudioVisualizer = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <PageContainer>
        <MainFont>
          <motion.div
            key='audioviz'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Row data-aos='fade-up'>
              <h1>{AudioVisualizerData[0].heading}</h1>
              <p>Current work in progress... </p>
            </ Row>

            <Row data-aos='fade-up'>
              <p>
                Role(s): {AudioVisualizerData[0].roles}
                <br />
                Stack: {AudioVisualizerData[0].stack}
              </p>
            </Row>

            <Row data-aos='fade-up'>
              <p>{AudioVisualizerData[1].text}</p>
            </ Row>

            <Row data-aos='fade-up'>
              <p><TextLink href="https://editor.p5js.org/lisantimark/sketches/4QeRjNe3a" rel="noopener noreferrer" target="_blank">See it for yourself, click here!</TextLink></p>
            </Row>

            <Row>
              <Image src={AudioVisualizerData[1].image} alt="hand-animation" />
            </ Row>

            <Row data-aos='fade-up'>
              <Image src={AudioVisualizerData[2].image} alt="ball-animation" />
            </Row>

            <Row style={{ marginBottom: '12rem' }} data-aos='fade-up'>
              <h1>{AudioVisualizerData[2].heading}</h1>
              <p>{AudioVisualizerData[2].text}</p>
            </Row>

          </motion.div>
        </MainFont>
      </PageContainer>
    </>
  );
}

export default AudioVisualizer;

