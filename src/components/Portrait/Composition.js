// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// 3d model composition

import React, { Suspense, useRef } from 'react';
import Model from './Model.js';
import KeyLight from './KeyLight.js';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import LoadingImage from '../../assets/images/portrait_loading.png';

const Composition = () => {
  const keyLightRef = useRef(); 

  return (
    <>
      <ContainerDiv>
        <Suspense fallback={<LoadingDiv src={LoadingImage} />}>
          <Canvas camera={{ position: [0, 0, 4], fov: 60 }} shadowMap>
            <KeyLight brightness={4} color={"#ffffff"} ref={keyLightRef} />
            <Model keyLightData={keyLightRef} receiveShadow castShadow/>
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
