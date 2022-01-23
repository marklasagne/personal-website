// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect } from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { core, work, extra } from '../assets/data/about.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Column, } from '../components/PageComponents.js';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Portrait />  
        <Row style={{zIndex: -1}} data-aos='fade-up'>
          <Column>
            <h1>Howdy!</h1>
            <p>{core}</p>
          </Column>
          <Column>
            <p style={{opacity: 0}}>Not sure why you're lookign at this text.
            Really this is here for reasons I will not say, but I guess its cool you found it.
            Just remember, there is no spoon. 
             </p>
          </Column>
        </Row> 
        <Row style={{zIndex: -1}} data-aos='fade-up'>
          <Column>
            <p>{work}</p>
          </Column>
          <Column>
            <p style={{opacity: 0}}>
            Some say the concept originated in ancient Greece where layered dough sheets (called laganon) 
            were cut into strips and baked. Others claim it resembles a Roman dish recorded in a cookbook in the 1st century AD.
             And still others place its origin in England or Italy in the 14th century, where cookbooks describe the concept of 
             layering cheese and pasta in a dish and baking it.
             </p>
          </Column>
        </Row> 
        <Row style={{zIndex: -1}} data-aos='fade-up'>
          <Column>
            <p>{extra}</p>
          </Column>
          <Column>
            <p style={{opacity: 0}}>Memento mori literally means "Remember you must die". 
              In earlier centuries, an educated European might place an actual skull on his desk to keep the idea of death always 
              present in his mind.</p>
          </Column>
        </Row> 
      </motion.div>
    </>
  );
}

export default About;
