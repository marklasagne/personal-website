import React, {Suspense} from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ScriptTag from 'react-script-tag';
//import { OrbitControls } from '@react-three/drei/OrbitControls';
import Portrait from './Portrait.js';

const LandingPage = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading... </div>}>
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity ={0.2} />
        <Portrait />
      </Canvas>
      </ Suspense>
    </div>
  );
}

export default LandingPage;