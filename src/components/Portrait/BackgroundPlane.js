import React from 'react';

const BackgroundPlane = () => {
    return (
      <mesh receiveShadow position={[0, 0, -1]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" color="#3b1818" />
      </mesh>
    );
  };

  export default BackgroundPlane;