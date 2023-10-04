import React from 'react';

const GroundPlane = (props) => {
  return (
    <mesh receiveShadow {...props}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="#421e1e" />
    </mesh>
  );
};

export default GroundPlane;