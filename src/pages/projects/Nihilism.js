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
import { Row, PageContainer, Image } from '../../components/PageComponents.js';
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
              <StyledReactPlayer controls={true} url='https://www.youtube.com/watch?v=IGaKpsVkoLo' />
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

const StyledReactPlayer = styled(ReactPlayer)`
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    width: 100%;
    max-width: 100%; /* Set the max-width to 100% to allow scaling */
    height: auto;
`;

export default Nihilism;

