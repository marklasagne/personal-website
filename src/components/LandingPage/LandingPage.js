import { useEffect, useRef }  from 'react';
import * as THREE from "three";
import { Scene } from 'three';
import { OBJLoader } from "three-obj-mtl-loader";


const LandingPage = () => {
  const loader = new OBJLoader();
  const mountRef = useRef(null);

  useEffect(() => {
    loader.load(
        '../assets/portrait_wit_2.obj',
        function ( object ) {
            Scene.add( object );
        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        function( error ) {
            console.log('error')
        }
    )
  }, []);

  return (
    <div ref={mountRef}>
    </div>
  );
}

export default LandingPage