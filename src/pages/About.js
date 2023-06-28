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
import { Row, Column, MainFont } from '../components/PageComponents.js';
import styled from 'styled-components';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    Aos.init({ duration: 500 });
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1000;
      if ( isMobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <MainFont>
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
    
        <ModifiedRow>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
           <Portrait />
             
          </motion.div>
        </ModifiedRow>
        <ModifiedRow>
          <Column>
          <p>Hello Mom</p>
            <br/>
            <p>Hello Mom</p>
            <br/>
            <p>Hello Mom</p>
            <br/>
            <p>Hello Mom</p>
            <br/>
          </Column>
            
   
        </ModifiedRow>
        </>
      )}
    </MainFont>
  );
}

const ModifiedRow = styled.div`
  }
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default About;
