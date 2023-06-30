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
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid';


const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isScrolled, setIsScrolled] = useState(false);

  let leftAmount = window.innerWidth
  const scrollRight = () => {
    setIsScrolled(!isScrolled)
    window.scrollTo({
      left: leftAmount,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    setIsScrolled(!isScrolled)
    window.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

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
        <Arrow src={arrow} onClick={!isScrolled ? scrollRight : scrollLeft} isScrolled={isScrolled} />
      </ArrowContainer>
      {isMobile ? (
        <div id="container">
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
        </div>
      ) : (
        <>
          <HorizontalScreen id="container">
            <Column>
              <div id="about-section">
                <p>Hello Mom</p>
                <br />
                <p>Hello Mom</p>
                <br />
                <p>Hello Mom</p>
                <br />
                <p>Hello Mom</p>
                <br />
              </div>
              </Column>
              <Column>
              <Portrait />
              </Column>
              <Column>
              <ProjectsPage />
              </Column>
          </HorizontalScreen>
        </>
      )}
    </MainFont>
  );
}

const HorizontalScreen = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: visible;
  width: 300%;
`;

const Arrow = styled.img`
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




