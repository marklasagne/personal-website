import React from 'react'
import Tilt from 'react-parallax-tilt';
import {
  TopSection,
  AboutHeading,
  AboutInfo,
  Container,
  Right,
  Left
} from './AboutPageStyles';

import portraitForeground from '../../assets/images/about_page_portrait.png';

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
            </Right>
          </TopSection>
        </Container>

      </>
    );
  };
  
  export default MainSection;