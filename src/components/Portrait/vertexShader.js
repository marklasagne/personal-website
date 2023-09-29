const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal; 
  varying vec3 vViewPosition;
  varying vec3 vColor;

  uniform float scrollY;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * scrollY + scrollY * 2.0) * 0.2;
    
    // Uncomment the code and hit the refresh button below for a more complex effect 🪄
    // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
  
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
  
    gl_Position = projectedPosition;
  }
`

export default vertexShader;

const old = `
  varying vec2 vUv;
  varying vec3 vNormal; 
  varying vec3 vViewPosition;
  varying vec3 vColor;

  uniform float scrollY;

  void main() {
    vUv = uv;

    vNormal = normalize(normalMatrix * normal);
    vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz; 
    
    vec3 pos = position;
    float noiseFreq = 10.0;
    float noiseAmp = scrollY * 0.05;
    
    float distortionFactor = 1.0 - smoothstep(0.0, 1.0, pos.y);

    pos.y += snoise(vec3(pos.x * noiseFreq, pos.y, pos.z)) * noiseAmp * distortionFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`




