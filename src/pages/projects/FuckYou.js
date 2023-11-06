// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Fuck You Sign Page

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, PageContainer, MainFont } from '../../components/PageComponents.js';
import { FuckYouData } from '../../assets/data/pages/fuckyou.js';
import Navbar from '../../components/Navbar.js';
import NavigationArrow from '../../components/NavigationArrow.js';
import SlideShow from '../../components/SlideShow.js';

const FuckYou = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const slideshow_1 = [
    FuckYouData[1].image0,
    FuckYouData[1].image1,
    FuckYouData[1].image2,
    FuckYouData[1].image3
  ];

  return (
    <>
      <Navbar />
      <NavigationArrow />
      <PageContainer>
        <MainFont>
        <motion.div
          key='fuckyou'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <Row data-aos='fade-up' style={{ marginTop: '6rem' }}>
            <p>{FuckYouData[0].description}</p>
          </Row>
          <Row data-aos='fade-up'>
            <p>Key Technologies: {FuckYouData[0].stack}</p>
            <p>Hardware: {FuckYouData[0].hardware}</p>
          </Row>
          <Row data-aos='fade-up'>
            <ReactPlayer url='https://www.youtube.com/watch?v=T_4N4yJ2iH0' />
          </Row>
          <Row data-aos='fade-up'>
            <p>{FuckYouData[0].text}</p>
          </Row>
          <Row data-aos='fade-up'>
            <ReactPlayer url=' https://youtu.be/6_zEE5xMQhM' />
          </Row>
          <Row data-aos='fade-up'>
            <p>{FuckYouData[1].text}</p>
          </Row>
          <Row data-aos='fade-up'> 
            <SlideShow images={slideshow_1} />
          </Row>
          <Row data-aos='fade-up'>
            <p>{FuckYouData[2].text}</p>
          </Row>
        </motion.div>
        </MainFont>
      </PageContainer>
    </>
  );
}

export default FuckYou;

