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
    <ContainerDiv>
      <Suspense fallback={<LoadingDiv>Loading... </LoadingDiv>}>
        <Canvas
          style={{
          }}
          camera={{ position: [0, 0, 4], fov: 32 }}
          shadowMap
        >
          <KeyLight brightness={5.6} color={"#ffc9f9"} />
          <FillLight brightness={2.6} color={"#bdefff"} />
          <RimLight brightness={54} color={"#fff"} />
          <Model />
        </Canvas>
      </Suspense>
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
 
}
`;

const LoadingDiv = styled.div`
    font-size: 1.5rem;
    background: #ffffff;
    text-align: center;
    vertical-align: middle;
    line-height: 100%;
}
`;


export default Composition;
