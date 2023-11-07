// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// About page

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
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
import Navbar from '../components/Navbar.js';
// assets
import SocialIcons from '../components/SocialIcons';  
import arrow from '../assets/icons/arrow.svg';

const Home = () => {
  const [isMobile, setIsMobile] = useState();
  const [isScrolledX, setIsScrolledX] = useState(false);
  const [isScrolledY, setIsScrolledY] = useState(false);
  const [leftAmmount, setLeftAmmount] = useState(window.innerWidth);

  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const prevUrl = state && state.prevUrl;

  useEffect(() => {
    Aos.init({ duration: 500 });
    const handleResize = () => {
      setLeftAmmount(window.innerWidth);
      const isMobileNow = window.innerWidth < 1300;
      setIsMobile(isMobileNow)
      if (isMobile) {
        document.body.style.overflowY = 'scroll';
      }
    };
  
    const handleScrollY = () => {
      window.scrollY > 0 ? setIsScrolledY(true) : setIsScrolledY(false) 
    };

    const handleRoute = () => {
      const isProjectsRoute = location.pathname.includes('/projects');
      if (isProjectsRoute) {
        if (prevUrl !== '/') {
          window.scrollTo(leftAmmount, 0);
        } else {
          scrollRight();
        }
        setIsScrolledX(true);
        document.body.style.overflowY = 'scroll';
      } else {
        scrollLeft();
        setIsScrolledX(false)
        if (!isMobile) { 
          document.body.style.overflowY = 'hidden';
        }

      }
    };

    // Initial setup
    handleResize();
    handleRoute();

    window.addEventListener('scroll', handleScrollY);
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, location.pathname]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    window.scrollTo({
      left: leftAmmount,
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    window.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <MainFont>
      <Navbar isMobile={isMobile} />
      {isMobile ? (
        <div id="container">
          <motion.div key="about">
            <>
              <Row style={{ marginTop: '10rem' }}>
                <h1>Howdy! I'm Mark</h1>
                <h1 style={{ fontSize: 12 }}>[ software / art / fabrication / anxiety ]</h1>
                <p>
                  {AboutPageData[0].main}
                </p>
                <ContactForm />
                <SocialIcons />
              </Row>
              <Row>
                <ProjectsPage />
              </Row>
            </>
          </motion.div>
        </div>
      ) : (
        <>
          <ReactScrollWheelHandler
            upHandler={() => {
              if (!isScrolledY) {navigate('/', { state: { prevUrl: location.pathname } })}
            }}
            downHandler={() => {
              navigate('/projects', { state: { prevUrl: location.pathname } });
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
                <SocialIcons />
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
            <Arrow
              src={arrow}
              onClick={() => {
                if (!isScrolledX) {
                  navigate('/projects');
                } else if (isScrolledX && isScrolledY) {
                  scrollUp();
                } else {
                  navigate('/');
                }
              }}
              isScrolledX={isScrolledX}
              isScrolledY={isScrolledY}
            />
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
  margin-top: 6rem;
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
  transform: ${props => props.isScrolledX === false ? `rotate(90deg)` : props.isScrolledX === true && props.isScrolledY > 0 ? `rotate(0deg)` : `rotate(-90deg)`};
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

export default Home;

