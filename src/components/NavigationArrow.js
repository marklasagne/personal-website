// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Arrow component

import React from 'react';
import arrow from '../assets/icons/arrow.svg';
import styled from 'styled-components';

const goBack = () => {
  window.history.back();
};

const NavigationArrow = () => {
  return (
    <ArrowContainer>
      <Arrow src={arrow} onClick={goBack} />
    </ArrowContainer>
  )
}

const Arrow = styled.img`
  cursor: pointer;
  color: black;
  width: 5rem;
  text-decoration: none;
  &:hover {
      opacity: 75%;
  } 
  transform:  rotate(-90deg);
`;

const ArrowContainer = styled.div`
  bottom: 0;
  right: 0;
  z-index: 69;
  position: fixed;
  margin: 3rem;
  text-decoration: none;
  display: block;
`;

export default NavigationArrow;