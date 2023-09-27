const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal; 

    void main() {
        vUv = uv;
        vNormal = normalMatrix * normal; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

export default vertexShader

const old = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`