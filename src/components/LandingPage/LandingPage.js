import React, {Suspense} from "react";
import { Canvas } from '@react-three/fiber';
import Portrait from './Portrait.js';
import { KeyLight, RimLight, FillLight } from './Lights';

const LandingPage = () => {

  return (
    <div>
      <Suspense fallback={<div>Loading... </div>}>
        <Canvas
        style={{
          width: '100%', 
          height: 1000,
        }}
        >
          {/*
          <pointLight brightness={0.5} 
            position={[2, 1, 4]}
            castShadow
          />
           */}
          <KeyLight brightness={5.6} color={"#ffc9f9"} /> 
          <FillLight brightness={2.6} color={"#bdefff"} />
          <RimLight brightness={54} color={"#fff"} />
          <Portrait scale={1} />
        </Canvas>
      </ Suspense>
    </div>
  );
}

export default LandingPage;