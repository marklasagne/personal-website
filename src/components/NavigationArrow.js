// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// Arrow component

import React, { useEffect, useState } from 'react';
import arrow from '../assets/icons/arrow.svg';
import styled from 'styled-components';

const NavigationArrow = () => {
  const [isScrolledY, setIsScrolledY] = useState(false);

  useEffect(() => {
    const handleScrollY = () => {
      window.scrollY > 0 ? setIsScrolledY(true) : setIsScrolledY(false) 
    };

    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);
  
  const goBack = () => {
    window.history.back();
  };
  
  return (
    <>
      <ArrowContainer>
          <PageArrow src={arrow} onClick={goBack} isScrolledY={isScrolledY} />
        </ArrowContainer >
    </>
  );
}

const PageArrow = styled.img`
  cursor: pointer;
  color: black;
  width: 5rem;
  text-decoration: none;
  &:hover {
      opacity: 75%;
  } 
  transform: ${props => props.isScrolledY === false ? `rotate(-90deg)` : `rotate(0deg)` };
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

{/* 

 <>
      {isHome ? (
        <ArrowContainer>
          <HomeArrow src={arrow} onClick={goBack} />
        </ArrowContainer >
      ) : (
        <ArrowContainer>
          <PageArrow src={arrow} onClick={goBack} />
        </ArrowContainer >
      )}
    </>*/}