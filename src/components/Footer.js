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
        <p2>When life ain't going right go left</p2>
        <br />
        <p2>&copy; 2022</p2>
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