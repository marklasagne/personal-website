// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

const staticVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz; 
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export default staticVertexShader;