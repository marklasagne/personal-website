const hairShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vColor;
  varying vec3 vViewPosition;

  uniform vec3 keyLightColor;
  uniform float keyLightBrightness;
  uniform vec3 keyLightPosition;

  void main() {
    float brownIntensity = 0.25;
    vec3 brownColor = vec3(63.0/255.0, 51.0/255.0, 46.0/255.0); 

    vec3 normal = normalize(vNormal);
    vec3 lightDirection = normalize(keyLightPosition - vViewPosition);
    float diffuse = max(dot(vNormal, lightDirection), 0.0);

    float shading = dot(normal, vec3(0.0, 1.0, 0.0)); 

    vec3 randomOffset = vec3(sin(vUv.x * 10.0), cos(vUv.y * 10.0), 0.0) * 0.02;
    vec3 diffuseColor = keyLightColor * (keyLightBrightness / 8.0) * brownColor * smoothstep(0.6, 1.0, diffuse);
    vec3 specularColor = keyLightBrightness/ 3.0 * (vec3(0.068, 0.172, 0.172)) * smoothstep(0.2, 1.0, pow(max(dot(reflect(-lightDirection, normal), normalize(vViewPosition)), 0.0), 5.0));
    
    vec3 finalColor = (brownColor * (brownIntensity + shading)) + randomOffset + diffuseColor + specularColor;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default hairShader;

const hairShaderSimple = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vColor;
varying vec3 vViewPosition;

void main() {
  float brownIntensity = 0.75;
  vec3 brownColor = vec3(102.0/255.0, 51.0/255.0, 0.0); 
  // Desaturate the brown color by averaging the RGB components
  vec3 greyBrownColor = (brownColor.r + brownColor.g + brownColor.b) / 7.0 * vec3(1.0);

  vec3 normal = normalize(vNormal);
  float shading = dot(normal, vec3(0.0, 1.0, 0.0)); 

  vec3 randomOffset = vec3(sin(vUv.x * 10.0 + uTime), cos(vUv.y * 10.0 + uTime), 0.0) * 0.02;

  vec3 finalColor = greyBrownColor * (brownIntensity + shading) + randomOffset;
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`