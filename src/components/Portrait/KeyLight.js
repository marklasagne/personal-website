import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';

const KeyLight = forwardRef(({ brightness, color }, ref) => {
  const keyLightRef = useRef();
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
    keyLightRef.current.position.set(-3, 0, 5);
  }, []);

  useFrame(() => {
    // Update the X position of the light based on the scrollX value
    keyLightRef.current.position.x = -3 + scrollX * 0.005; // Adjust the factor as needed
  });
  
  // use conditional in ref to make sure the ref can be managed between here, and parent components
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      ref={(light) => {
        keyLightRef.current = light; 
        if (ref) {
            ref.current = light; 
        }
      }}

    />
  );
});

export default KeyLight;

