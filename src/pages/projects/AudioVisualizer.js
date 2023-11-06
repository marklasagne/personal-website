// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Portfolio page for Audio Visualizer

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, PageContainer, MainFont, TextLink, VideoPlayer } from '../../components/PageComponents.js';
import { AudioVisualizerData } from '../../assets/data/pages/audiovisualizer.js';
import Navbar from '../../components/Navbar.js';
import NavigationArrow from '../../components/NavigationArrow.js';

const AudioVisualizer = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <NavigationArrow />
      <MainFont>
        <PageContainer>
          <motion.div
            key='audioviz'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Row data-aos='fade-up' style={{ marginTop: '6rem' }} >
              <h1>{AudioVisualizerData[0].heading}</h1>
            </ Row>

            <Row data-aos='fade-up'>
              <p>
                <br />
                Key Technologies: {AudioVisualizerData[0].stack}
              </p>
            </Row>
            <Row data-aos='fade-up'>
              <p>{AudioVisualizerData[1].text}</p>
            </ Row>
            <Row data-aos='fade-up'>
              <p><TextLink href="https://editor.p5js.org/lisantimark/sketches/4QeRjNe3a" rel="noopener noreferrer" target="_blank">View the p5js sketch here...</TextLink></p>
            </Row>
            <Row data-aos='fade-up'>
              <VideoPlayer controls={true} url='https://youtu.be/bvJFWBdfPic' />
            </Row>
            <Row data-aos='fade-up'>
              <VideoPlayer controls={true} url='https://youtu.be/PjI4bFFHDeM' />
            </Row>
            <Row data-aos='fade-up'>
              <VideoPlayer controls={true} url='https://youtu.be/jtrhRs7_qVI' />
            </Row>
            <Row data-aos='fade-up'>
              <p>{AudioVisualizerData[2].text}</p>
            </Row>
          </motion.div>
        </PageContainer>
      </MainFont>
    </>
  );
}

export default AudioVisualizer;

