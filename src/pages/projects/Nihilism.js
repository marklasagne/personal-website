// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Nihilism page

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, PageContainer, VideoPlayer, Image } from '../../components/PageComponents.js';
import NavigationArrow from '../../components/NavigationArrow.js';
import { NihilismData } from '../../assets/data/pages/nihilism.js';
import FontStyles from '../../../src/assets/fonts/fonts.js';

const Nihilism = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <PageContainer>
        <MainFont>
        <FontStyles />
        <NavigationArrow />
          <motion.div
            key='fuckyou'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Row data-aos='fade-up'>
              <Image src={NihilismData[0].image} alt="save" />
            </Row>
            <Row data-aos='fade-up'>
              <p>{NihilismData[0].text1}</p>
            </Row>
            <Row data-aos='fade-up'>
              <p>{NihilismData[0].text2}</p>
            </Row>
            <Row data-aos='fade-up'>
              <VideoPlayer controls={true} url='https://www.youtube.com/watch?v=IGaKpsVkoLo' />
            </Row>
            <Row data-aos='fade-up'>
              <h1>{NihilismData[1].heading}</h1>
              <p>{NihilismData[1].text1}</p>
            </Row>
            <Row data-aos='fade-up' style={{ marginBottom: `6.25rem` }}>
              <p>{NihilismData[1].text2}</p>
            </Row>
          </motion.div>
        </MainFont>
      </PageContainer>
    </>
  );
}

const MainFont = styled.div`
  font-family: mainframeregular; 
`;

export default Nihilism;

