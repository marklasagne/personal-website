// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// 3d model composition

import React, { Suspense, useRef, useEffect, useState } from 'react';
import Model from './Model.js';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';
import LoadingImage from '../../assets/images/portrait_loading.png';

const KeyLight = ({ brightness, color, scrollX }) => {
  const keyLightRef = useRef();

  useEffect(() => {
    keyLightRef.current.position.set(-3, 0, 5);
  }, []);

  useFrame(() => {
    // Update the X position of the light based on the scrollX value
    keyLightRef.current.position.x = -3 + scrollX * 0.005; // Adjust the factor as needed
  });

  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      ref={keyLightRef}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

const Composition = () => {
  const [scrollX, setScrollX] = useState(0);
  // Attach scroll event listener to track horizontal scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ContainerDiv>
        <Suspense fallback={<LoadingDiv src={LoadingImage} />}>
          <Canvas camera={{ position: [0, 0, 4], fov: 60 }} shadowMap>
            <KeyLight brightness={5.6} color={"#fbede2"} scrollX={scrollX} />
            <Model />
          </Canvas>
        </Suspense>
      </ContainerDiv>
    </>
  );
}

const ContainerDiv = styled.div`
  display: flex;
  width: 50vw;
  height: 100vh;
`;

const LoadingDiv = styled.img`
  
  justify-content: center; 
  align-items: center; 
`;


export default Composition;
