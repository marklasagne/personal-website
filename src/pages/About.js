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
import { Row, MainFont } from '../components/PageComponents.js';
import styled from 'styled-components';
import arrow from '../assets/icons/arrow.svg';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid';


const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isScrolled, setIsScrolled] = useState(false);
  const [leftAmmount, setLeftAmmount] = useState();
  
  const scrollRight = () => {
    setIsScrolled(!isScrolled)
    window.scrollTo({
      left: leftAmmount,
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
    setLeftAmmount(window.innerWidth)
    window.addEventListener('resize', () => {
      setLeftAmmount(window.innerWidth)
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
          <ReactScrollWheelHandler
            upHandler={() => {if(isScrolled) { scrollLeft() }}}
            downHandler={() => {if(!isScrolled) { scrollRight() }}}
          >
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
              <Portrait />
              <Column>
                <ProjectsPage />
              </Column>
            </HorizontalScreen>
          </ReactScrollWheelHandler>
        </>
      )}
    </MainFont>
  );
}

const HorizontalScreen = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: visible;
  height: 100vh;
  widtH: 200%;
`;

export const Column = styled.div`
    -ms-flex: 50%; /* IE10 */
    flex: 50%%;
    max-width: 50%;
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




