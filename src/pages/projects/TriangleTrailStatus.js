// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Triangle Trail Status Page

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Image, TextLink, VideoPlayer, PageContainer } from '../../components/PageComponents.js';
import { TriangleTrailStatusData } from '../../assets/data/pages/triangletrailstatus.js';
import TriangTrail_0 from '../../assets/images/TriangleTrailStatus/TriangTrail_0.png';
import TriangTrail_3 from '../../assets/images/TriangleTrailStatus/TriangTrail_3.png';
import TriangTrail_4 from '../../assets/images/TriangleTrailStatus/TriangTrail_4.png';
import TriangTrail_5 from '../../assets/images/TriangleTrailStatus/TriangTrail_5.png';
import FontStyles from '../../../src/assets/fonts/fonts.js';
import SlideShow from '../../components/SlideShow.js'

const TriangTrail = () => {
  
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const slideshow_1 = [
    TriangleTrailStatusData[2].image1,
    TriangleTrailStatusData[2].image2,
  ];


  return (
    <>
    <PageContainer>
    <MainFont>
      <FontStyles />
      <motion.div
        key='triangletrail'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row data-aos='fade-up'>
          <img src={TriangTrail_0} style={{ width: '50%' }} alt="logo" />
        </ Row>

        <Row data-aos='fade-up'>
            <p>{TriangleTrailStatusData[0].description}</p>
          </Row>
          <Row data-aos='fade-up'>
            <p>Role(s): {TriangleTrailStatusData[0].roles}</p>
            <p>Stack: {TriangleTrailStatusData[0].stack}</p>
        </Row>

        <Row data-aos='fade-up'>
          <VideoPlayer  controls={true} url='https://www.youtube.com/watch?v=JDh9jO79lLc' />
          <BackgroundImage src={TriangTrail_4} style={{ transform: `translate(150px, -275px)` }} alt="triangle" />
          <BackgroundImage src={TriangTrail_5} style={{ transform: `translate(-200px, 300px)` }} alt="triangle" />
        </ Row>

        <Row data-aos='fade-up'>
            <h1>{TriangleTrailStatusData[1].heading}</h1>
            <p>
              <TextLink href="https://www.trianglemtb.com/" target="_blank" rel="noopener noreferrer"> Triangle MTB's website</TextLink> {TriangleTrailStatusData[1].text1}
            </p>
            <p>{TriangleTrailStatusData[1].text2}</p>
          </Row>
          <Row data-aos='fade-up'>
          <Image src={TriangTrail_3} alt="logo" />
        </ Row>

        <Row data-aos='fade-up'>
            <h1>{TriangleTrailStatusData[2].heading}</h1>
            <p>{TriangleTrailStatusData[2].text}</p>
        </Row>
        
        <Row data-aos='fade-up'>
            <SlideShow images={slideshow_1} />
        </Row>

        

        <Row data-aos='fade-up'>
          <h1><TextLink href="https://play.google.com/store/apps/details?id=com.triangletrailstatus&hl=en_US&gl=US" rel="noopener noreferrer" target="_blank">Now available in the Google Play store.</TextLink></h1>
        </ Row>

        <Row data-aos='fade-up'>
            <p>
              {TriangleTrailStatusData[3].text1}
              <br />
              <br />
              {TriangleTrailStatusData[3].text2}
            </p>
        </Row>
      </motion.div>
    </MainFont>
    </PageContainer>
    </>
  );
}

const MainFont = styled.div`
  font-family: roboto; 
`;

const BackgroundImage = styled.img`
    position: absolute;
    z-index: -1;
    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

export default TriangTrail;

