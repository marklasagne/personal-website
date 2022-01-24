// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import behance from '../assets/icons/behance.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import github from '../assets/icons/github.svg';
import codepen from '../assets/icons/codepen.svg';
import styled from 'styled-components';

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
  }

const SideBarContainer = styled.div`
    width: 3.125rem;
    position: fixed;
    top: 50%;
    left: 0;
    padding: 2rem;
    z-index: 69;
    @media screen and (max-width: 1000px) {
      top: 0;
      padding: 0.25rem;
  }  
`;
  
const SocialIcon = styled.img`           
    color: black;
    display: block;
    width: 2.5rem;
    text-decoration: none;
    margin-bottom: 5px;
    &:hover {
        opacity: 75%;
    } 
`;
  
  export default SideBar;