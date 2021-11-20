import React from 'react';
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";
import {
  Test,
} from './LandingPageStyles';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const materials = useLoader(MTLLoader, "portrait_wip_2.mtl");
  const obj = useLoader(OBJLoader, "portrait_wip_2.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={1} />;
};

const LandingPage = () => {
    return (
      <>
      <h1>hello world</h1>
      <Test>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </Test>
      </>
    )
    
  }

export default LandingPage;