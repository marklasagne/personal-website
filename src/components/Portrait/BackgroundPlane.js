import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, } from '@react-three/drei';
import { Color } from 'three';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const BackgroundPlane = ({ lightData, ...props }) => {
  
  const backgroundUniforms = useMemo(() => {
    if (lightData.current) {
      return {
        headTexture: {
          value: new Color(0x2b1111),
        },
        keyLightBrightness: {
          value: lightData.current.intensity,
        },
        keyLightColor: {
          value: new Color(0x2B1111),
        },
        keyLightPosition: {
          value: lightData.current.position,
        },
        scrollY: {
          value: 0.0,
        },
        uTime: {
          value: 0.0,
        },
      };
    }
  }, [lightData.current]);
  
  return (
    <mesh receiveShadow position={[0, 0, -1]} {...props}>
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={backgroundUniforms}
      />
    </mesh>
  );
};

export default BackgroundPlane;