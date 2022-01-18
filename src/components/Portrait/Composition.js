// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// 3d model composition
import React, { Suspense } from 'react';
import { KeyLight, FillLight, RimLight } from './Lights.js';
import Model from './Model.js';
import { Canvas } from '@react-three/fiber';

const Composition = () => {
  return (
    <>
      <Suspense fallback={<div>Loading... </div>}>
        <Canvas
          style={{
            position: 'relative', height: 600, width: '100%'
          }}
          camera={{ position: [0, 0, 3], fov: 60 }}
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

export default Composition;
