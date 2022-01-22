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
  const x = 300;
  return (
    <>
      <Suspense fallback={<div>Loading... </div>}>
        <StyledCanvas
          style={{
            position: 'absolute', 
            height: '75%', 
            width: 1000,
          }}
          camera={{ position: [1.1, 0, 4], fov: 60 }}
          shadowMap
        >
          <KeyLight brightness={5.6} color={"#ffc9f9"} />
          <FillLight brightness={2.6} color={"#bdefff"} />
          <RimLight brightness={54} color={"#fff"} />
          <Model />
        </StyledCanvas>
      </Suspense>
    </>
  )
}

const StyledCanvas = styled(Canvas)`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export default Composition;
