// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// GLTF model Auto-generated by: https://github.com/pmndrs/gltfjsx

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, } from '@react-three/drei';


const sumValues = (obj) => {
  return Object.values(obj).reduce((a,b) => a + b, 0)
}

export default function Model({ ...props }) {
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF('/portrait.gltf');
  const group = useRef();
  const eyes = useRef();
  let x_middle = viewport.width / 2;
  let y_middle = viewport.height / 2;

  /*
0.009111083391207324 2 Model.js:32
0.009522883770470928 Model.js:32
0.009934684149734535 Model.js:32
0.011993686046052578 Model.js:32
0.014876288700897832 Model.js:32
0.0185824921142703 Model.js:32
0.021876895148379174 Model.js:32
0.02640669932027885 Model.js:32
0.030524703112914938

  */


  useFrame(({ mouse }) => {
   
      let group_rotation_x = group.current.rotation.x;
      let group_rotation_y = group.current.rotation.y;

      if (mouse.x > -0.75 && mouse.x < 0.75 && mouse.y > -0.75 && mouse.y < 0.75 ) {
        //console.log('mouse entered')
        const x = (mouse.x * x_middle) / 30;
        const y = (mouse.y * y_middle) / 30;

    
        group.current.rotation.set(-y, x, 0);
        eyes.current.rotation.set(-y / 4, x / 4, 0);
      } else {
        
        // x
        if (group_rotation_x != 0) {
          if ((Math.abs(group_rotation_x)/10) < 0.001) {
            group.current.rotation.x = 0;
            eyes.current.rotation.x = 0;
          }
          if (group.current.rotation.x > 0) {
            group.current.rotation.x -= 0.00001 * 500; 
            eyes.current.rotation.x -= 0.00001 * 100; 
          } else {
            group.current.rotation.x += 0.00001 * 500; 
            eyes.current.rotation.x += 0.00001 * 100; 
          }
        }

        // y
        if (group_rotation_y != 0) {
          if ((Math.abs(group_rotation_y)/10) < 0.001) {
            group.current.rotation.y = 0;
            eyes.current.rotation.y = 0;
          }
          if (group.current.rotation.y > 0) {
            group.current.rotation.y -= 0.00001 * 500;
            eyes.current.rotation.y -= 0.00001 * 100;
          } else {
            group.current.rotation.y += 0.00001 * 500; 
            eyes.current.rotation.y += 0.00001 * 100; 
          }
        }
  }
})
  



  // while (Math.floor(kernelArray[0]) === 0)
  //const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

  return (
    <group receiveShadow ref={group} {...props} dispose={null} position={[1.25, 0, 0]}>
      <mesh 
        geometry={nodes.beanie_low_RetopoFlow017.geometry}
        material={materials['Material.002']}
        position={[0, 0.94, -0.15]}
        rotation={[1.45, 0, 0]}
        scale={[0.77, 0.74, 0.83]}
      />
      <group ref={eyes}>
        <mesh 
          geometry={nodes.uploads_files_172137_eye.geometry}
          material={materials['Default OBJ']}
          position={[0.3, 0.35, 0.89]}
          rotation={[1.68, 0.51, -0.23]}
          scale={[0.26, 0.3, 0.25]}
        />
        <mesh 
          geometry={nodes.uploads_files_172137_eye001.geometry}
          material={materials['Default OBJ.004']}
          position={[-0.28, 0.36, 0.89]}
          rotation={[1.44, 0.51, 0.27]}
          scale={[0.26, 0.3, 0.25]}
        />
      </group>
      <mesh geometry={nodes.FaceBuilderHead.geometry} material={materials.FaceTexture} />
      <mesh geometry={nodes.Mesh.geometry} material={materials.Mustache} />
      <mesh 
        geometry={nodes.Torus.geometry}
        material={materials['Material.005']}I
        position={[0, -0.07, 1.23]}
        rotation={[1.56, 0, 0.02]}
        scale={[0.06, 0.06, 0.06]}
      />
    </group>
  )
}

useGLTF.preload('/portrait.gltf')
