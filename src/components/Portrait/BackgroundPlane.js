import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, } from '@react-three/drei';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const BackgroundPlane = () => {
    return (
      <mesh receiveShadow position={[0, 0, -1]}>
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshStandardMaterial attach="material" color="#3b1818" />
      </mesh>
    );
  };

  export default BackgroundPlane;