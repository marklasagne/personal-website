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

import CardinalPride_0 from '../../assets/images/CardinalPride/CardinalPride_0.png';
import CardinalPride_1 from '../../assets/images/CardinalPride/CardinalPride_1.png';
import CardinalPride_2 from '../../assets/images/CardinalPride/CardinalPride_2.png';

const CardinalPride = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row data-aos='fade-up'>
          <Column>
            <img src={CardinalPride_0} style={{ width: '75%' }} alt='whatever man' />
          </Column>
          <Column>
            <p>Cardinal Pride Property care is a local business located in Wilmington, NC.  I was able to design and build a website for the owner.  What started with tinkering with web development turned 
                into a fully built react project.
            </p>
            <br/>
            <br/>
            <p>
              Role(s): Developer,  Designer <br />
              Stack: React, Firebase
          </p>
          </Column>
        </Row>

        <Row data-aos='fade-up'>
            <Image src={CardinalPride_1} alt="who let the dogs out" />
        </Row>

        <Row data-aos='fade-up'>
          <Image src={CardinalPride_2} alt="writing alts sucks" />
        </Row>

        <Row data-aos='fade-up'>
          <h1><TextLink href="https://www.cardinalprideproperty.com" rel="noopener noreferrer" target="_blank">View the page now!</TextLink></h1>
        </Row>
      </motion.div>
    </>
  );
}

export default CardinalPride;

