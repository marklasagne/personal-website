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
        <p2>When life ain't going right go left. 2022.</p2>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  position:absolute;
  width:100%;
  bottom:0;
  background: #fefefe;
  align-text: center;
  padding: 1rem;
  margin-top: 5rem;
  z-index: 1;
`;

export default Footer;