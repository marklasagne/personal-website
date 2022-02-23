// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Ambie sense project page

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Column, Image, TextLink } from '../../components/PageComponents.js';
import { CardinalPrideData } from '../../assets/data/pages/cardinalpride.js'
import CardinalPride_1 from '../../assets/images/CardinalPride/CardinalPride_1.png';
import CardinalPride_2 from '../../assets/images/CardinalPride/CardinalPride_2.png';

const CardinalPride = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        key='cardinalpride'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row data-aos='fade-up'>
          <Column>
            <img src={CardinalPrideData[0].image} style={{ width: '75%' }} alt="save" />
          </Column>
          <Column>
            <p>{CardinalPrideData[0].description}</p>
            <br/>
            <br/>
            <p>
              Role(s): {CardinalPrideData[0].roles}
              <br />
              Stack: {CardinalPrideData[0].stack}
          </p>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
            <Image src={CardinalPride_1} alt="yourself" />
        </Row>

        <Row data-aos='fade-up'>
          <Image src={CardinalPride_2} alt="please?" />
        </Row>

        <Row data-aos='fade-up'>
          <h1><TextLink href="https://www.cardinalprideproperty.com" rel="noopener noreferrer" target="_blank">View the page now!</TextLink></h1>
        </Row>

        <Row data-aos='fade-up'>
          <Column>
            <h1>{CardinalPrideData[1].heading}</h1>
            <p>{CardinalPrideData[1].text}</p>
          </Column>
        </Row>
      </motion.div>
    </>
  );
}

export default CardinalPride;

