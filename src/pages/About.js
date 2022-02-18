// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect, useState } from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { core, work, extra, random_01, random_02, random_03 } from '../assets/data/about.js';
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
            <Row style={{ zIndex: -1 }} data-aos='fade-up'>
              <Column>
                <h1>Howdy! I'm Mark...</h1>
                <h1 style={{fontWeight: 'bold'}}>Creative Technologist / Coder</h1>
                <br />
                <p>{core}</p>
                <br />
                <p>contact@marklisanti.me</p>
              </Column>
            </Row>
            <Row style={{ zIndex: -1 }} data-aos='fade-up'>
              <Column>
                <p>{work}</p>
              </Column>
            </Row>
            <Row style={{ zIndex: -1 }} data-aos='fade-up'>
              <Column>
                <p>{extra}</p>
              </Column>
            </Row>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Portrait />
            <Row style={{ zIndex: -1 }} data-aos='fade-up'>
              <Column>
                <h1>Howdy!</h1>
                <p>{core}</p>
                <br />
                <p>contact@marklisanti.me</p>
              </Column>
              <Column>
                <p style={{ opacity: 0 }}>{random_01}</p>
              </Column>
            </Row>
            <Row style={{ zIndex: -1 }} data-aos='fade-up'>
              <Column>
                <p>{work}</p>
              </Column>
              <Column>
                <p style={{ opacity: 0 }}>{random_02}</p>
              </Column>
            </Row>
            <Row style={{ zIndex: -1 }} data-aos='fade-up'>
              <Column>
                <p>{extra}</p>
              </Column>
              <Column>
                <p style={{ opacity: 0 }}>{random_03}</p>
              </Column>
            </Row>
          </motion.div>
        </>

      )}

    </>
  );
}

export default About;
