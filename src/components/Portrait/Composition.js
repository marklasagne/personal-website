// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// 3d model composition

import React, { Suspense } from 'react';
import Model from './Model.js';
import KeyLight from './KeyLight.js';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import LoadingImage from '../../assets/images/portrait_loading.png';

const Composition = () => {
  return (
    <>
      <ContainerDiv>
        <Suspense fallback={<LoadingDiv src={LoadingImage} />}>
          <Canvas camera={{ position: [0, 0, 4], fov: 60 }} shadowMap>
            <KeyLight brightness={8} color={"#fbede2"} />
            <Model 
            />
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
