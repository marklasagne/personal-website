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

        <Row data-aos='fade-up'>
          <Column>
            <h1>
              Conclusion and Reflection
            </h1>
            <p>
              Exploring shaders and 3d objects was fun.  I like the direction that this exploration went and would love to expand on this 
              project in the future.  I invision users being able to create their own visualization by uploading 3d models and music of their 
              own tastes.
            </p>
          </Column>
        </Row>
      </motion.div>
    </>
  );
}

export default AudioVisualizer;

