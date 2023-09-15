// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import styled from 'styled-components';
import { MainFont } from './PageComponents.js';


const Footer = () => {
  return (
    <MainFont>
      <StyledFooter>
        <p>scream into the void</p>
        <p>&copy; 2023</p>
      </StyledFooter>
    </MainFont>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.5;
  height: 2.5rem; 
  text-align: center;
`;

export default Footer;