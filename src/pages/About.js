import React from 'react';
import AboutPage from '../components/AboutPage/MainSection';
import { motion } from 'framer-motion';

const About = () => {
    return (
      <>
      <motion.div 
      initial={ {scaleX: 0 }} 
      animate={{ scaleX: 1 }} 
      exit={{ scaleX: 0 }}>
        <AboutPage/>
      </motion.div>
      </>
    );
  };
    
  export default About;