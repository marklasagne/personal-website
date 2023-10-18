// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Fuck You Sign Page

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Image, TextLink } from '../../components/PageComponents.js';
import { FuckYouData } from '../../assets/data/pages/fuckyou.js';

const FuckYou = () => {

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

        </ Row>

        <Row data-aos='fade-up'>

          <p>{FuckYouData[0].description}</p>
        </Row>
        <Row data-aos='fade-up'>
          <p>My Role(s): {FuckYouData[0].roles}</p>
          <p>Stack: {FuckYouData[0].stack}</p>
          <p>Hardware: {FuckYouData[0].hardware}</p>

        </Row>

        <Row data-aos='fade-up'>
          <ReactPlayer url='https://www.youtube.com/watch?v=T_4N4yJ2iH0' />
        </Row>

        <Row data-aos='fade-up'>

          <h1>{FuckYouData[1].heading}</h1>
          <p>{FuckYouData[1].text1}</p>
        </Row>
        <Row data-aos='fade-up'>
          <h1>{FuckYouData[2].heading}</h1>
          <p>{FuckYouData[2].text1}</p>
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

export default FuckYou;

