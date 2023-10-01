// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect, useState, useLayoutEffect } from 'react';
import Portrait from '../components/Portrait/Composition.js';
import { AboutPageData } from '../assets/data/pages/about.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Row, MainFont } from '../components/PageComponents.js';
import styled, { css } from 'styled-components';
import arrow from '../assets/icons/arrow.svg';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid.js';
import behance from '../assets/icons/behance.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import codepen from '../assets/icons/codepen.svg';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isScrolled, setIsScrolled] = useState(false);
  const [leftAmmount, setLeftAmmount] = useState(window.innerWidth);

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

  useLayoutEffect(() => {
    console.log(window.location.pathname.includes('/projects'));
    // Check if the URL contains '/projects' when the component initializes
    if (window.location.pathname.includes('/projects')) {
      // Scroll to the 'leftAmount' when '/projects' is in the URL
      scrollRight();
      setLeftAmmount(true)
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
    setLeftAmmount(window.innerWidth)
    if (window.location.pathname.includes('/projects')) {
      scrollRight();
    }
    window.addEventListener('resize', () => {
      setLeftAmmount(window.innerWidth)
      const ismobile = window.innerWidth < 1000;
      if (isMobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollX;
      let endpoint = '';
      if (scrollPosition > (window.innerWidth / 3)) {
        endpoint = 'projects';
      }
      window.history.pushState(null, null, `/${endpoint}`);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MainFont>
      <ArrowContainer>
        <Arrow src={arrow} onClick={!isScrolled ? scrollRight : scrollLeft} isScrolled={isScrolled} />
      </ArrowContainer>
      <Nav>
        <NavLink onClick={!isScrolled ? scrollRight : scrollLeft} className={isScrolled ? '' : 'active'} to="/">
          About
        </NavLink>
        <NavLink onClick={!isScrolled ? scrollRight : scrollLeft} className={isScrolled ? 'active' : ''} to="/projects">
          Projects
        </NavLink>
        <NavLink target="_blank" href="https://medium.com/@marklasagne">
          Blog
        </NavLink>
      </Nav>
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
                  <AboutColumn>
                    <p>Mobile View</p>
                    <br />
                  </AboutColumn>
                </Row>
              )
            })}
          </motion.div>
        </div>
      ) : (
        <>
          <ReactScrollWheelHandler
            upHandler={() => { if (isScrolled) { scrollLeft() } }}
            downHandler={() => { if (!isScrolled) { scrollRight() } }}
          >
            <HorizontalScreen id="container" isProjectsEndpoint={window.location.pathname.includes('/projects')}>
              <AboutColumn>
                <h1>Howdy! I'm Mark</h1>
                <h1 style={{ fontSize: 12 }}>[ software / art / fabrication / anxiety ]</h1>
                <p>
                  {AboutPageData[0].main}
                </p>
                <SocialsContainer>
                  <a href="https://www.linkedin.com/in/marklisanti/" rel="noopener noreferrer" target="_blank"><SocialIcon src={linkedin} /></a>
                  <a href="https://github.com/marklasagne/" rel="noopener noreferrer" target="_blank"><SocialIcon src={github} /></a>
                  <a href="https://codepen.io/marklasagne" rel="noopener noreferrer" target="_blank"><SocialIcon src={codepen} /></a>
                  <a href="https://www.behance.net/marklasagne/" rel="noopener noreferrer" target="_blank"><SocialIcon src={behance} /></a>
                </SocialsContainer>
              </AboutColumn>
              <AboutColumn>
                <Portrait />
              </AboutColumn>
              <ProjectColumn>
                <ProjectsPage />
              </ProjectColumn>
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
  overflow-x: scroll; /* Enable horizontal scrolling */
  justify-content: center; 
  width: 150%;
  ${({ isProjectsEndpoint }) => isProjectsEndpoint && css`
    height: 100vh;
  `}
`;

const AboutColumn = styled.div`
    flex: 1;
    margin-top: 5rem;
    padding: 5rem;
    align-items: center;
`;

const ProjectColumn = styled.div`
    flex: 1;
    margin-top: 5rem;
    padding: 5rem;
`

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

const Nav = styled.nav`
  display: flex;
  justify-content: left;
  padding: 1rem;
  margin-bottom: 5rem;
  position: fixed;
  z-index: 1;
`;

const NavLink = styled.a`
  color: #808080;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
    border-bottom: 2px solid #000000;
  }
`;

const SocialsContainer = styled.div`
  flex-direction: horizontal;
  margin-top: 1rem 1rem;
`;

const SocialIcon = styled.img`           
    color: black;
    width: 2.5rem;
    text-decoration: none;
    margin: 1rem;
    &:hover {
        opacity: 75%;
    } 
`;

export default Home;

