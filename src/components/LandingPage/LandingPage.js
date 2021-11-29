import React, {Suspense} from "react";
import { Canvas } from '@react-three/fiber';
import Portrait from './Portrait.js';

const LandingPage = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading... </div>}>
      <Canvas style={{ width: 1000, height: 1000}}>
        <ambientLight intensity ={.75} />
        <Portrait />
      </Canvas>
      </ Suspense>
    </div>
  );
}

export default LandingPage;