import Tilt from 'react-parallax-tilt';

import portraitBackground from '../../assets/about/about_page_portrait_background.png';
import portraitForeground from '../../assets/about/about_page_portrait.png';

const AboutPage = () => {
    return (
      <>
        <Tilt>
      <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
        <h1>WOOOOOOOOO</h1>
      </>
    );
  };
  
  export default AboutPage;