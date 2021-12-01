import React from 'react';
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
          <a href="https://www.linkedin.com/in/marklisanti/" rel="noopener noreferrer" target="_blank"><SocialIcon src={linkedin}/></a>
          <a href="https://twitter.com/marklasagne" rel="noopener noreferrer" target="_blank"><SocialIcon src={twitter}/></a>
          <a href="https://github.com/marklasagne/" rel="noopener noreferrer" target="_blank"><SocialIcon src={github}/></a>
          <a href="https://codepen.io/marklasagne" rel="noopener noreferrer" target="_blank"><SocialIcon src={codepen}/></a>
          <a href="https://www.behance.net/marklasagne/" rel="noopener noreferrer" target="_blank"><SocialIcon src={behance}/></a>
        </SideBarContainer>
      </>
    );
  };
  
  export default SideBar;