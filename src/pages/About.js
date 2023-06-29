// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect, useState, useRef } from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { AboutPageData } from '../assets/data/pages/about.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, Column, MainFont } from '../components/PageComponents.js';
import styled from 'styled-components';
import arrow from '../assets/icons/arrow.svg';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    setIsScrolled(!isScrolled)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section')
    setIsScrolled(!isScrolled)
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useScrollPosition(({ prevPos, currPos }) => {
    console.log()
    if (currPos.y < prevPos.y) {
      if (!isScrolled) {
        scrollToAbout();
      } 
 
    }
    if (currPos.y > prevPos.y) {
      if (isScrolled) {
        scrollToTop();
      } 
    }
  })

  useEffect(() => {
    Aos.init({ duration: 500 });
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1000;
      if (isMobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <MainFont>
      <ArrowContainer>
        <HorizontalArrow src={arrow} onClick={!isScrolled ? scrollToAbout : scrollToTop} isScrolled={isScrolled} />
        <VerticalArrow src={arrow} onClick={!isScrolled ? scrollToAbout : scrollToTop} isScrolled={isScrolled} />
      </ArrowContainer>
      {isMobile ? (
        <>
          <motion.div
            key="about"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            
            >
            <h1>Howdy! I'm Mark</h1>
            <h1 style={{ fontSize: 12 }}>[ software / art / fabrication / anxiety ]</h1>
            {AboutPageData.map((data, id) => {
              return (
                <Row key={id} style={{ zIndex: -1 }} data-aos='fade-up'>
                  <Column>
                    <p>Mobile View</p>
                    <br />
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
                 initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      >
              <Portrait />
            </motion.div>
          </ModifiedRow>
          <ModifiedRow id="about-section">
            <Column>
              <p>Hello Mom</p>
              <br />
              <p>Hello Mom</p>
              <br />
              <p>Hello Mom</p>
              <br />
              <p>Hello Mom</p>
              <br />
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

const HorizontalArrow = styled.img`
  cursor: pointer;
  color: black;
  width: 5rem;
  text-decoration: none;
  &:hover {
      opacity: 75%;
  } 
  transform: ${props => props.isScrolled == false ? `rotate(180deg)` : `rotate(0deg)`};
`;

const VerticalArrow = styled.img`
  cursor: pointer;
  color: black;
  width: 5rem;
  text-decoration: none;
  &:hover {
      opacity: 75%;
  } 
  transform: ${props => props.isScrolled == false ? `rotate(90deg)` : `rotate(-90deg)`};
`;

const ArrowContainer = styled.div`
  bottom: 0;
  right: 0;
  z-index: 69;
  position: fixed;
  margin: 3rem;
  text-decoration: none;
  display: block;
`;

export default About;




