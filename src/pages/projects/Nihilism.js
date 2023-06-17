// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Nihilism page

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Column, Image, TextLink } from '../../components/PageComponents.js';
import { NihilismData } from '../../assets/data/pages/nihilism.js';

const Nihilism = () => {
  
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        key='fuckyou'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row data-aos='fade-up'> 
          <Image src={NihilismData[0].image} style={{ width: '80%' }} alt="save" />
        </Row>
        <Row data-aos='fade-up'>
            <p>{NihilismData[0].text1}</p>
          
        </Row>
        <Row data-aos='fade-up'>
          <p>{NihilismData[0].text2}</p>
        </Row>
        <Row data-aos='fade-up'>
          <StyledReactPlayer url='https://www.youtube.com/watch?v=IGaKpsVkoLo' />
        </Row>
        <Row data-aos='fade-up'>
            <h1>{NihilismData[1].heading}</h1>
            <p>{NihilismData[1].text1}</p>
        </Row>
        <Row data-aos='fade-up'>
            <p>{NihilismData[1].text2}</p>
        </Row>

      </motion.div>
    </>
  );
}

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
`;

export default Nihilism;

