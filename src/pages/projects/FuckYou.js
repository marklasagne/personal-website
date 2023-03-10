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
import { Row, Column, Image, TextLink } from '../../components/PageComponents.js';
// import { TriangleTrailStatusData } from '../../assets/data/pages/triangletrailstatus.js';
// import TriangTrail_0 from '../../assets/images/TriangleTrailStatus/TriangTrail_0.png';

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
          <img src={TriangTrail_0} style={{ width: '50%' }} alt="I will" />
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            <p>{TriangleTrailStatusData[0].description}</p>
          </Column>
          <Column>
            <p>Role(s): {TriangleTrailStatusData[0].roles}</p>
            <p>Stack: {TriangleTrailStatusData[0].stack}</p>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
 
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
            
          </Column>
          <Column>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
    
          </Column>
          <Column>
            
          </Column>
        </Row>

        <Row data-aos='fade-up'>
        </ Row>

        <Row data-aos='fade-up'>
        </ Row>

        <Row data-aos='fade-up'>
          <Column>
    
          </Column>
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

