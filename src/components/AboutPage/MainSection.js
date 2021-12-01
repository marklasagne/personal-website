import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import Portrait from '../LandingPage/Portrait';
import { KeyLight, RimLight, FillLight } from '../LandingPage/Lights';
//import Tilt from 'react-parallax-tilt';
import {
  SingleColumnRow,
  Heading,
  Text,
} from '../Styles';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica;
  }
`;


/// classed and styles FUN do the parallax thingy
const MainSection = () => {
  return (
    <>
     <GlobalStyle />
          <Heading>
                Howdy!
              </Heading>
          <SingleColumnRow>
              
              <Text>
                My name is Mark Lisanti. I am currently a master’s student at the University of Colorado Boulder,
                pursuing a degree in Creative Technology and Design.  Being a lover of all things creative
                I am interested in the intersections between art, design, and technology.  Previously
                I worked on IBM Cloud as a software support engineer.
              </Text>
          </SingleColumnRow>
          <Suspense fallback={<div>Loading... </div>}>
          <SingleColumnRow>
    
              {/*
              <Tilt
                className="parallax-effect-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900}
                scale={1}
                transitionSpeed={5000}
                gyroscope={true}
                reset={false}
              >
                <img src={portraitForeground} alt="wow I used a lot of images." styles={{width: '100%'}} />
                </Tilt>
                */}
              <Canvas 
                style={{ 
                  position: 'relative', height: 600, width: '100%' 
                }} 
                camera={{ position: [0, 0, 3], fov: 70 }}
                shadowMap
              >
                <KeyLight brightness={5.6} color={"#ffc9f9"} />
                <FillLight brightness={2.6} color={"#bdefff"} />
                <RimLight brightness={54} color={"#fff"} />
                <Portrait />
              </Canvas>
          </SingleColumnRow>
        </Suspense>
    </>
  );
};

export default MainSection;

