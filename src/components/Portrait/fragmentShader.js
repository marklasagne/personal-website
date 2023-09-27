const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;

  uniform sampler2D headTexture;
  uniform vec3 keyLightColor;
  uniform float keyLightBrightness;
  uniform vec3 keyLightPosition;
  uniform float keyLightWidth;    
  uniform float keyLightHeight;   

  void main() {
      vec3 originalColor = texture2D(headTexture, vUv).xyz;
      vec3 normal = normalize(vNormal);
      
      // Use keyLightWidth and keyLightHeight to adjust the lightDirection
      vec3 lightDirection = normalize(keyLightPosition - vec3(gl_FragCoord.xy, 0.5));
      lightDirection.x *= keyLightWidth;
      lightDirection.y *= keyLightHeight;

      float lambertian = max(dot(normal, lightDirection), 0.2);
      vec3 finalColor = originalColor * (keyLightColor * lambertian * keyLightBrightness);

      gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default fragmentShader;

const old = `
  varying vec2 vUv;
  uniform sampler2D headTexture;

  void main() {
    vec3 originalColor = texture2D(headTexture, vUv).xyz;
    gl_FragColor = vec4(originalColor, 1.0);
  }
`