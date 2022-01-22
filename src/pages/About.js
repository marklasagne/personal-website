// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { core, work, extra } from '../assets/data/about.js';
import { motion } from 'framer-motion';
import { Row, Column, } from '../components/PageComponents.js';

const About = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Row>
          <Column>
            <h1>Hello</h1>
            <p>{core}</p>
          </Column>
        </Row> 
        <Row>
          <Column>
            <p>{work}</p>
          </Column>
        </Row> 
        <Row>
          <Column>
          <p2>{extra}</p2>
          </Column>
        </Row> 
        <Portrait />
      </motion.div>
    </>
  );
}

export default About;