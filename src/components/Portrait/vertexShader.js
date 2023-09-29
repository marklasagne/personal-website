const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal; 
  varying vec3 vViewPosition;
  varying vec3 vColor;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export default vertexShader

const old = `  varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vColor;
varying vec3 vView;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;  // Update this line
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`

const fragmentShader = `
uniform float scrollY;
uniform float keyLightBrightness;
uniform vec3 keyLightColor;
uniform vec3 keyLightPosition;
uniform sampler2D headTexture; // Texture passed as uniform

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  // Define material properties (you can adjust these)
  vec3 materialColor = vec3(0.8, 0.8, 0.8);
  float shininess = 24.0;

  // Calculate lighting
  vec3 lightDirection = normalize(keyLightPosition - vViewPosition);
  float diffuse = max(dot(vNormal, lightDirection), 0.0);
  
  // Apply Phong shading
  vec3 ambient = 0.1 * materialColor;
  vec3 diffuseColor = keyLightColor * (keyLightBrightness / 6.0) * materialColor * diffuse;
  vec3 specularColor = keyLightColor * (keyLightBrightness / 6.0) * vec3(1.0) * pow(max(dot(reflect(-lightDirection, vNormal), normalize(vViewPosition)), 0.0), shininess);

  // Combine lighting components
  vec3 finalColor = ambient + diffuseColor + specularColor;
    
  // Apply scrollY-based camera animation
  float cameraOffset = scrollY * 0.005; // Adjust the factor as needed
  vec3 cameraPosition = cameraPosition + vec3(0.0, cameraOffset, 0.0);
    
  // Sample the head texture using UV coordinates
  vec3 textureColor = texture2D(headTexture, vUv).xyz;

  // Use the original material's color and the calculated lighting
  vec3 materialFinalColor = mix(materialColor, textureColor, 0.8); // Adjust the mix factor as needed

  // Output final color
  gl_FragColor = vec4(materialFinalColor * finalColor, 1.0);
}
`