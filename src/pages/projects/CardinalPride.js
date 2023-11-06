// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Ambie sense project page

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, PageContainer, Image, TextLink, MainFont } from '../../components/PageComponents.js';
import { CardinalPrideData } from '../../assets/data/pages/cardinalpride.js';
import CardinalPride_1 from '../../assets/images/CardinalPride/CardinalPride_1.png';
import CardinalPride_2 from '../../assets/images/CardinalPride/CardinalPride_2.png';
import NavigationArrow from '../../components/NavigationArrow.js';
import Navbar from '../../components/Navbar.js';

const CardinalPride = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <NavigationArrow />
      <MainFont>
        <PageContainer>
          <motion.div
            key='cardinalpride'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Row data-aos='fade-up'>
              <img src={CardinalPrideData[0].image} style={{ width: '50%', marginTop: '6rem' }} alt="error" />
            </Row>
            <Row data-aos='fade-up'>
              <p>{CardinalPrideData[0].description}</p>
            </Row>
            <Row data-aos='fade-up'>
              <p>
                Key Technologies: {CardinalPrideData[0].stack}
              </p>
            </Row>
            <Row data-aos='fade-up'>
              <Image src={CardinalPride_1} alt="error" />
            </Row>
            <Row data-aos='fade-up'>
              <Image src={CardinalPride_2} alt="error" />
            </Row>

            <Row data-aos='fade-up'>
              <h1><TextLink href="https://www.cardinalprideproperty.com" rel="noopener noreferrer" target="_blank">View the page now!</TextLink></h1>
            </Row>
            <Row data-aos='fade-up'>
              <p>{CardinalPrideData[1].text}</p>
            </Row>
          </motion.div>
        </PageContainer>
      </MainFont>
    </>
  );
}

export default CardinalPride;

