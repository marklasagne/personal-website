import React from 'react';
import AboutPage from '../components/AboutPage/MainSection';
import { motion } from 'framer-motion';

const About = () => {
    return (
      <>
      <motion.div 
      initial={ {opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}>
        <AboutPage/>
      </motion.div>
      </>
    );
  };
    
  export default About;