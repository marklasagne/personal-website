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

import AudioVisualizer_0 from '../../assets/images/AudioVisualizer/AudioVisualizer.gif';
import p5js from '../../assets/icons/p5.svg';

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
          <h1>3D Audio Visualization</h1>
        </ Row>

        <Row>
          <p>
              Team: Mark Lisanti <br />
              Role(s): Developer,  Artist <br />
              Stack: p5js, GLSL 
          </p>
        </Row>

        <Row>
          <Column>
            <p>
              This is a quick exploration of using FFT data from audio files to create visualization.  The waveform is passed as a 
              uniform to a vertex shader to manipulate the shape of the 3D model.  The amplitude is used to change the 
              rotational speed when the amplitude hits an upper threshold. 
            </p>
          </Column>
          <Column>
            <Image src={AudioVisualizer_0} alt="what even is this" />
          </Column>
        </ Row>
      </motion.div>
    </>
  );
}

export default AudioVisualizer;

