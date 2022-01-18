// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page
import React from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { core } from '../assets/data/about.js';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Portrait />
        <h1>{core}</h1>
      </motion.div>
    </>
  );
}

export default About;