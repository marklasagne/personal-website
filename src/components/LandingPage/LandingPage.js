import React, {Suspense} from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
//import { OrbitControls } from '@react-three/drei/OrbitControls';
import Portrait from './Portrait.js';
import Test from './LandingPageStyles.js';

const LandingPage = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading... </div>}>
      <Canvas style={{ width: 1000, height: 1000}}>
        <OrbitControls />
        <directionalLight intensity={0.1} />
        <ambientLight intensity ={0.2} />
        <Portrait />
      </Canvas>
      </ Suspense>
    </div>
  );
}

export default LandingPage;