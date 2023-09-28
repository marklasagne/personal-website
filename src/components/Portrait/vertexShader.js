const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal; 
    varying vec3 vView; // View vector


    void main() {
        vUv = uv;
        vNormal = normalMatrix * normal; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

export default vertexShader

