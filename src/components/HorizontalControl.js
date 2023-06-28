// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import arrow from '../assets/icons/arrow.svg';
import styled from 'styled-components';

const HorizontalControl = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <UpArrow src={arrow} onClick={scrollToAbout} />
    </>
  );
}

const UpArrow = styled.img`
  cursor: pointer;
  color: black;
  z-index: 69;
  bottom: 0;
  right: 0;
  position: fixed;
  width: 5rem;
  margin: 3rem;
  text-decoration: none;
  &:hover {
      opacity: 75%;
  } 
`;

export default HorizontalControl;