import Tilt from 'react-parallax-tilt';
import {
  PortraitContainer,
  PortraitImageBackground,
  PortraitImage
} from './AboutPageStyles';


import portraitBackground from '../../assets/about/about_page_portrait_background.png';
import portraitForeground from '../../assets/about/about_page_portrait.png';

/// classed and styles FUN do the parallax thingy
const MainSection = () => {
    return (
      <>
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
      </>
    );
  };
  
  export default MainSection;