import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import Portrait from '../LandingPage/Portrait';
import { KeyLight, RimLight, FillLight } from '../LandingPage/Lights';
//import Tilt from 'react-parallax-tilt';
import {
  TopSection,
  AboutHeading,
  AboutInfo,
  Container,
  Right,
  Left
} from './AboutPageStyles';


/// classed and styles FUN do the parallax thingy
const MainSection = () => {
  return (
    <>
      <Container>
        <TopSection>
          <Left>
            <AboutHeading>
              uhhhhhhh...
            </AboutHeading>
            <AboutInfo>
              Hello, my name is Mark Lisanti. I am currently a master’s student at the University of Colorado Boulder,
              pursuing a degree in Creative Technology and Design.  Being a lover of all things creative
              I am interested in the intersections between art, design, and technology.  Previously
              I worked on IBM Cloud as a software support engineer.
            </AboutInfo>
          </Left>
          <Right>
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

            <>
              <Suspense fallback={<div>Loading... </div>}>
                <Canvas
                  style={{
                    width: 500,
                    height: 500,
                  }}
                >
                  <KeyLight brightness={5.6} color={"#ffc9f9"} />
                  <FillLight brightness={2.6} color={"#bdefff"} />
                  <RimLight brightness={54} color={"#fff"} />
                  <Portrait style={{
                    width: 500,
                    height: 500,
                  }}scale={1} />
                </Canvas>
              </ Suspense>
            </>
          </Right>
        </TopSection>
      </Container>
    </>
  );
};

export default MainSection;

