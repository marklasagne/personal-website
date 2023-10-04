// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// GLTF model Auto-generated by: https://github.com/pmndrs/gltfjsx

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import hairShader from './hairShader';

const Model = ({ keyLightData, ...props }) => {
  const [scrollY, setScrollY] = useState(0);
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/portrait.glb');

  const head = useRef();
  const group = useRef();
  const eyes = useRef();

  let x_middle = viewport.width / 2;
  let y_middle = viewport.height / 2;

  useGLTF.preload('/portrait.glb');

  // listen and capture scroll y value
  useEffect(() => {
    const handleScroll = () => {
      setScrollY((window.scrollY / window.innerHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame(({ mouse }) => {
    const group_rotation_x = group.current.rotation.x;
    const group_rotation_y = group.current.rotation.y;
    if (mouse.x > -0.75 && mouse.x < 0.75 && mouse.y > -0.75 && mouse.y < 0.75) {
      const x = (mouse.x * x_middle) / 30;
      const y = (mouse.y * y_middle) / 30;
      group.current.rotation.set(-y, x, 0);
      eyes.current.rotation.set(-y / 4, x / 4, 0);
    } else {
      const step = 0.00001 * 500;
      const stepEyes = 0.00001 * 100;
      group.current.rotation.x = Math.abs(group_rotation_x) / 10 < 0.001 ? 0 : group.current.rotation.x > 0 ? group.current.rotation.x - step : group.current.rotation.x + step;
      eyes.current.rotation.x = Math.abs(group_rotation_x) / 10 < 0.001 ? 0 : eyes.current.rotation.x > 0 ? eyes.current.rotation.x - stepEyes : eyes.current.rotation.x + stepEyes;
      group.current.rotation.y = Math.abs(group_rotation_y) / 10 < 0.001 ? 0 : group.current.rotation.y > 0 ? group.current.rotation.y - step : group.current.rotation.y + step;
      eyes.current.rotation.y = Math.abs(group_rotation_y) / 10 < 0.001 ? 0 : eyes.current.rotation.y > 0 ? eyes.current.rotation.y - stepEyes : eyes.current.rotation.y + stepEyes;
    }
  });

  useFrame((state) => {
    const { clock } = state;
    head.current.material.uniforms.uTime.value = clock.getElapsedTime();
    head.current.material.uniforms.scrollY.value = scrollY;
  });

  const uniforms = useMemo(() => {
    if (keyLightData.current) {
      return {
        headTexture: {
          value: materials.Head_texture.map,
        },
        keyLightBrightness: {
          value: keyLightData.current.intensity,
        },
        keyLightColor: {
          value: keyLightData.current.color,
        },
        keyLightPosition: {
          value: keyLightData.current.position,
        },
        scrollY: {
          value: 0.0,
        },
        uTime: {
          value: 0.0,
        },
      };
    }
  }, [keyLightData.current]);


  return (
    <>
      <group receiveShadow ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Beanie.geometry} material={materials.Beanie_texture} position={[0, 1.013, -0.113]} rotation={[1.565, 0, 0]} scale={[0.795, 0.739, 0.741]} />
        <group ref={eyes}>
          <mesh geometry={nodes.Left_eye.geometry} material={materials.Left_eye_texture} position={[0.302, 0.355, 0.89]} rotation={[1.666, 0.513, -0.189]} scale={[0.255, 0.301, 0.249]} />
          <mesh geometry={nodes.Right_eye.geometry} material={materials.Right_eye_texture} position={[-0.287, 0.353, 0.892]} rotation={[1.603, 0.5, 0.159]} scale={[0.255, 0.301, 0.249]} />
        </group>
        <mesh geometry={nodes.Nose_ring.geometry} position={[-0.004, -0.071, 1.227]} rotation={[1.564, 0, 0.019]} scale={0.056}>
          <meshStandardMaterial attach="material" color='silver'></meshStandardMaterial>
        </mesh>
        <mesh ref={head} geometry={nodes.Head.geometry}>
          <shaderMaterial
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
          />
          <mesh geometry={nodes.Eyebrow_lashes.geometry}>
            <shaderMaterial
              fragmentShader={hairShader}
              vertexShader={vertexShader}
              uniforms={uniforms}
            />
          </mesh>
          <mesh geometry={nodes.Mustache.geometry}>
            <shaderMaterial
              fragmentShader={hairShader}
              vertexShader={vertexShader}
              uniforms={uniforms}
            />
          </mesh>
        </mesh>
      </group>
    </>
  )
};

useGLTF.preload('/portrait.glb');

export default Model;





