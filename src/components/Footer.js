// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <p>When life ain't going right go left.</p>
        <p>&copy; 2023</p>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.5;
  height: 2.5rem; 
  text-align: center;
`;

export default Footer;