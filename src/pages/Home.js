// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect, useState } from 'react';
import { AboutPageData } from '../assets/data/pages/about.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
// components
import Portrait from '../components/Portrait/Composition.js';
import { Row, MainFont } from '../components/PageComponents.js';
import ContactForm from '../components/ContactForm.js';
import ProjectsPage from '../components/ProjectsPage/ProjectsGrid.js';
// assets
import arrow from '../assets/icons/arrow.svg';
import behance from '../assets/icons/behance.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import codepen from '../assets/icons/codepen.svg';
import Navbar from '../components/Navbar.js'; 

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
  const [isScrolledX, setIsScrolledX] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [leftAmmount, setLeftAmmount] = useState();
  const [scrollInProgress, setScrollInProgress] = useState(false);

  const handleScrollButtonClick = () => {
    setIsScrolledX(!isScrolledX);
    if (isScrolledX && scrollY > 0) {
      scrollUp();
    } else if (!isScrolledX) {
      scrollRight();
    } else {
      scrollLeft();
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    document.body.style.overflowX = 'hidden';
    const handleResize = () => {
      setLeftAmmount(window.innerWidth);
      const isMobileNow = window.innerWidth < 1300;
      if (isMobile !== isMobileNow) {
        setIsMobile(isMobileNow);
      }
    };
    const handleScroll = () => {
      const scrollPosition = window.scrollX;
      setScrollY(window.scrollY);
      if (scrollPosition > window.innerWidth / 3) {
        window.history.replaceState(null, null, '/projects');
      } else {
        window.history.replaceState(null, null, '/');
      }
    };
    //const currentPath = window.location.pathname;
    console.log(window.location.pathname);
    
    // Initial setup
    handleResize();
    handleScroll();

    // Event listeners
    window.addEventListener('resize', handleResize, false);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isScrolledX]);

  return (
    <MainFont>
      <Navbar isMobile={isMobile} onNavLinkClick={handleScrollButtonClick} isScrolledX={isScrolledX} homeNavClick={handleScrollButtonClick}/>
      {isMobile ? (
        <div id="container">
          <motion.div key="about">
            <h1>Howdy! I'm Mark</h1>
            <h1 style={{ fontSize: 12 }}>[ software / art / fabrication / anxiety ]</h1>
              return (
                <>
                  <Row>
                    <h1>Howdy! I'm Mark</h1>
                    <h1 style={{ fontSize: 12 }}>[ software / art / fabrication / anxiety ]</h1>
                    <p>
                      {AboutPageData[0].main}
                    </p>
                    <ContactForm />
                    <SocialsContainer>
                      <a href="https://www.linkedin.com/in/marklisanti/" rel="noopener noreferrer" target="_blank"><SocialIcon src={linkedin} /></a>
                      <a href="https://github.com/marklasagne/" rel="noopener noreferrer" target="_blank"><SocialIcon src={github} /></a>
                      <a href="https://codepen.io/marklasagne" rel="noopener noreferrer" target="_blank"><SocialIcon src={codepen} /></a>
                      <a href="https://www.behance.net/marklasagne/" rel="noopener noreferrer" target="_blank"><SocialIcon src={behance} /></a>
                    </SocialsContainer>
                  </Row>
                  <Row>
                    <ProjectsPage />
                  </Row>
                </>
              )
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
                <ContactForm />
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
          <ArrowContainer>
            <Arrow src={arrow} onClick={!isScrolledX ? scrollRight : isScrolledX && scrollY > 0 ? scrollUp : scrollLeft} isScrolledX={isScrolledX} scrollY={scrollY}/>
          </ArrowContainer>
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
  overflow-x: ${props => props.isScrolledX === false ? `rotate(90deg)` : `rotate(-90deg)`};
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
  transform: ${props => props.isScrolledX === false ? `rotate(90deg)` : props.isScrolledX === true && props.scrollY > 0 ? `rotate(0deg)` : `rotate(-90deg)`};
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

const SocialsContainer = styled.div`
  flex-direction: horizontal;
  margin: 2rem 1rem 1rem 0;
`;

const SocialIcon = styled.img`           
    color: #000000;
    width: 3.5rem;
    text-decoration: none;
    margin: 1rem;
    &:hover {
        opacity: 75%;
    } 
`;

export default Home;

