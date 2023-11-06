// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Boulder Parks Sign Page

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, PageContainer, MainFont, VideoPlayer } from '../../components/PageComponents.js';
import Navbar from '../../components/Navbar.js';
import NavigationArrow from '../../components/NavigationArrow.js';
import { BoulderParksData } from '../../assets/data/pages/boulderparks.js';
import SlideShow from '../../components/SlideShow.js'

const BoulderParks = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
    window.scrollTo(0, 0);
  }, []);

  const slideshow_1 = [
    BoulderParksData[2].image0,
    BoulderParksData[2].image1,
    BoulderParksData[2].image2,
    BoulderParksData[2].image3,
    BoulderParksData[2].image4,
    BoulderParksData[2].image5,
    BoulderParksData[2].image6,
    BoulderParksData[2].image7,
    BoulderParksData[2].image8,
    BoulderParksData[2].image9,
    BoulderParksData[2].image10,
  ];


  return (
    <>
      <Navbar />
      <NavigationArrow />
      <MainFont>
        <PageContainer>
          <motion.div
            key='boulder-parks'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Row style={{
              backgroundImage: `url(${BoulderParksData[0].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              minHeight: 300, 
            }} data-aos='fade-up'>
            </Row>
            <Row data-aos='fade-up'>
            <div >
              <p>{BoulderParksData[0].description}</p>
              <br />
              <p>{BoulderParksData[0].text1}</p>
              </div>
            </Row>
            <Row data-aos='fade-up'>
              <p>Key Technology: {BoulderParksData[0].stack}</p>
              <p>Hardware: {BoulderParksData[0].hardware}</p>
            </Row>
            <Row data-aos='fade-up'>
              <VideoPlayer controls={true} url='https://youtu.be/6n3zG3Fx4qk' />
            </Row>
            <Row data-aos='fade-up'>
              <h1>{BoulderParksData[1].heading}</h1>
              <p>{BoulderParksData[1].text1}</p>
            </Row>
            <Row data-aos='fade-up'>
              <SlideShow images={slideshow_1} />
            </Row>
            <Row data-aos='fade-up'>
              <p>{BoulderParksData[3].text1}</p>
            </Row>
          </motion.div>
        </PageContainer>
      </MainFont>
    </>
  );
}

export default BoulderParks;

