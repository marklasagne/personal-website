// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect, useState } from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { AboutPageData } from '../assets/data/pages/about.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Column } from '../components/PageComponents.js';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    Aos.init({ duration: 500 });
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1000;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>Howdy! I'm Mark</h1>
            <h1 style={{fontSize: 12}}>[ software / art / fabrication / anxiety ]</h1>
            {AboutPageData.map((data, id) => {
              return(
              <Row key={id} style={{ zIndex: -1 }} data-aos='fade-up'>
                <Column>
                <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>Hello Mom</p>
                  <br/>
                </Column>
              </Row>
              )
            })}
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>Howdy! I'm Mark</h1>
            <h1 style={{fontSize: 12}}>[ software / art / fabrication / anxiety ]</h1>
            <Portrait />
            {AboutPageData.map((data, id) => {
              return(
              <Row key={id} style={{ zIndex: -1 }} data-aos='fade-up'>
                <Column>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>{data.main}</p>
                  <br/>
                  <p>Hello Mom</p>
                  <br/>
                </Column>
                <Column>
                  <p style={{ opacity: 0 }}>{data.hidden}</p>
                </Column>
              </Row>
              )
            })}
          </motion.div>
        </>
      )}
    </>
  );
}

export default About;
