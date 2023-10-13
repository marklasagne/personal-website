// Personal website and portfolio //
// 2023                           //
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
  const [isScrolledX, setIsScrolledX] = useState(false);
  const [leftAmmount, setLeftAmmount] = useState(window.innerWidth);
  const [scrollInProgress, setScrollInProgress] = useState(false);

  const scrollRight = () => {
    setIsScrolledX(!isScrolledX)
    document.body.style.overflowY = 'scroll';
    window.scrollTo({
      left: leftAmmount,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    setIsScrolledX(!isScrolledX)
    document.body.style.overflowY = 'hidden';
    window.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    Aos.init({ duration: 500 });
    setLeftAmmount(window.innerWidth);
    document.body.style.overflowX = 'hidden';
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
  console.log(isScrolledX)
  return (
    <MainFont>
      <Nav>
        <NavLink onClick={!isScrolledX ? scrollRight : scrollLeft} className={isScrolledX ? '' : 'active'} to="/">
          About
        </NavLink>
        <NavLink onClick={!isScrolledX ? scrollRight : scrollLeft} className={isScrolledX ? 'active' : ''} to="/projects">
          Projects
        </NavLink>
        <NavLink target="_blank" href="https://medium.com/@marklasagne">
          Blog
        </NavLink>
      </Nav>
      <ArrowContainer>
        <Arrow src={arrow} onClick={!isScrolledX ? scrollRight : scrollLeft} isScrolledX={isScrolledX} />
      </ArrowContainer>
      {isMobile ? (
        <div id="container">
          <motion.div key="about">
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
            upHandler={() => {
              if (window.scrollY === 0 && isScrolledX && !scrollInProgress) {
                setScrollInProgress(true);
                scrollLeft();
              }
            }}
            downHandler={() => {
              if (!isScrolledX) {
                setScrollInProgress(false); 
                scrollRight();
              }
            }}
          >
            <HorizontalScreen id="container">
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
              <PortraitColumn>
                <Portrait />
              </PortraitColumn>
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
  justify-content: center; 
  width: 150%;
  ${({ isProjectsEndpoint }) => isProjectsEndpoint && css`
    height: 100vh;
  `}
`;

const AboutColumn = styled.div`
  flex: 1;
  margin-top: 5rem;
  padding: 10rem;
`;

const PortraitColumn = styled.div`
  flex: 1;  
  margin-top: 5rem;
`;

const ProjectColumn = styled.div`
  flex: 1;
  overflow-x: ${props => props.isScrolledX == false ? `rotate(90deg)` : `rotate(-90deg)`};
  margin-top: 5rem;
  padding: 10rem;
`

const Arrow = styled.img`
  cursor: pointer;
  color: black;
  width: 5rem;
  text-decoration: none;
  &:hover {
      opacity: 75%;
  } 
  transform: ${props => props.isScrolledX == false ? `rotate(90deg)` : `rotate(-90deg)`};
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
  background: #fff;
  padding: 1rem;
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
    width: 3.5rem;
    text-decoration: none;
    margin: 1rem;
    &:hover {
        opacity: 75%;
    } 
`;

export default Home;

