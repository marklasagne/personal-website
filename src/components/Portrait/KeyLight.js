import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';

const KeyLight = forwardRef(({ brightness, color }, ref) => {
  const lightRef = useRef(ref);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    lightRef.current.position.set(-3, 0, 5);
  }, []);

  useFrame(() => {
    // Update the X position of the light based on the scrollX value
    lightRef.current.position.x = -3 + scrollX * 0.005; // Adjust the factor as needed
  });
  
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      ref={lightRef}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
});

export default KeyLight;