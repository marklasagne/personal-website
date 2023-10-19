// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Boulder Parks Sign Page

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, PageContainer, MainFont, Image, TextLink } from '../../components/PageComponents.js';
import { BoulderParksData } from '../../assets/data/pages/boulderparks.js';

const BoulderParks = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <PageContainer>
        <MainFont>
          <motion.div
            key='boulder-parks'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Row data-aos='fade-up'>

            </ Row>

            <Row data-aos='fade-up'>

              <p>{BoulderParksData[0].description}</p>
            </Row>

            <Row data-aos='fade-up'>
              <p>My Role(s): {BoulderParksData[0].roles}</p>
              <p>Stack: {BoulderParksData[0].stack}</p>
              <p>Hardware: {BoulderParksData[0].hardware}</p>

            </Row>

            <Row data-aos='fade-up'>

            </Row>

            <Row data-aos='fade-up'>
              <h1>{BoulderParksData[1].heading}</h1>
              <p>{BoulderParksData[1].text1}</p>
            </Row>
            <Row data-aos='fade-up'>
              <h1>IMAGES COMING... EVENTUALLY...</h1>
            </Row>


          </motion.div>
        </MainFont>
      </PageContainer>
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


export default BoulderParks;

