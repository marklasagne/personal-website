// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// 3d model composition

import React, { Suspense } from 'react';
import { KeyLight, FillLight, RimLight } from './Lights.js';
import Model from './Model.js';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const Composition = () => {
  return (
    <>
      <Suspense fallback={<LoadingDiv>Loading... </LoadingDiv>}>
        <Canvas
          style={{
            position: 'absolute', 
            top: '50%',
            bottom: '50%',
            transform: `translate(-50%, -50%)` 
          }}
          camera={{ position: [1.1, 0, 4], fov: 60 }}
          shadowMap
        >
          <KeyLight brightness={5.6} color={"#ffc9f9"} />
          <FillLight brightness={2.6} color={"#bdefff"} />
          <RimLight brightness={54} color={"#fff"} />
          <Model />
        </Canvas>
      </Suspense>
    </>
  )
}

const LoadingDiv = styled.div`
    font-size: 1.5rem;
    background: #ffffff;
    top: 50%;  
    left: 75%; 
    text-align: center;
    vertical-align: middle;
    line-height: 100%;
}
`;


export default Composition;
