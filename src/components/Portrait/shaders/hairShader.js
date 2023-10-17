// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

// vec3(233.0/255.0, 255.0, 255.0)

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
    vec3 brownColor = vec3(31.0/255.0, 25.0/255.0, 30.0/255.0); 

    vec3 normal = normalize(vNormal);
    vec3 lightDirection = normalize(keyLightPosition - vViewPosition);
    float diffuse = max(dot(vNormal, lightDirection), 0.0);

    float shading = dot(normal, vec3(0.0, 0.18, .6)); 

    vec3 randomOffset = vec3(sin(vUv.x * 10.0), cos(vUv.y * 10.0), 0.0) * 0.02;
    vec3 diffuseColor = keyLightColor * (keyLightBrightness / 8.0) * brownColor * smoothstep(0.6, 1.0, diffuse);
    vec3 specularColor = keyLightBrightness/ 20.0 * (keyLightColor) * smoothstep(0.2, 1.0, pow(max(dot(reflect(-lightDirection, normal), normalize(vViewPosition)), 0.0), 5.0));
    
    vec3 finalColor = (brownColor * (brownIntensity + shading)) + randomOffset + diffuseColor + specularColor;
    float alpha = 1.0 - shading; 

    gl_FragColor = vec4(finalColor, alpha);
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
  
  gl_FragColor = vec4(finalColor, 0.5);
}
`