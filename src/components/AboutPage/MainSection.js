import React from 'react'
import Tilt from 'react-parallax-tilt';
import {
  PortraitContainer,
  PortraitImageBackground,
  PortraitImage,
  TopSection,
  AboutHeading,
  AboutInfo,
  Container,
  Right,
  Left
} from './AboutPageStyles';

import portraitBackground from '../../assets/images/about_page_portrait_background.png';
import portraitForeground from '../../assets/images/about_page_portrait.png';


/// classed and styles FUN do the parallax thingy
const MainSection = () => {
    return (
      <>
        <Container>
          <TopSection>
            <Left>
              <AboutHeading>
                Designing? Developing? Pasta? 
              </AboutHeading>
              <AboutInfo>
                Mark Lisanti is a lover of all things creative, with a knack for technology. 
                Since graduating from the University of North Carolina Wilmington in the fall of 2018 with a 
                Bachelor of Science in computer science, he has worked at IBM as a cloud development support 
                engineer. As a master’s student, he is excited to explore the world of UX design to aid in 
                creating appealing, interactive and practical interfaces for web and software projects. 
                When not found at a computer, Mark enjoys skateboarding, mountain biking and rock climbing.
              </AboutInfo>
            </Left>
            <Right>
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              perspective={900}
              scale={1}
              transitionSpeed={5000}
              gyroscope={true}
              reset={false}
            >
              <PortraitContainer>
                <PortraitImageBackground src={portraitBackground} alt="image" />
                <PortraitImage src={portraitForeground} alt="image" />
              </PortraitContainer>
              </Tilt>
            </Right>
          </TopSection>
        </Container>

      </>
    );
  };
  
  export default MainSection;