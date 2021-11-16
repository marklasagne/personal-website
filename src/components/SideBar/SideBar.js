import behance from '../../assets/icons/behance.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';
import github from '../../assets/icons/github.svg';
import codepen from '../../assets/icons/codepen.svg';
import {
    SideBarContainer,
    SocialIcon,
  } from './SideBarStyles';

const SideBar = () => {
    return (
      <>
        <SideBarContainer>
          <SocialIcon src={linkedin}/>
          <SocialIcon src={twitter}/>
          <SocialIcon src={github}/>
          <SocialIcon src={codepen}/>
          <SocialIcon src={behance}/>
        </SideBarContainer>
      </>
    );
  };
  
  export default SideBar;