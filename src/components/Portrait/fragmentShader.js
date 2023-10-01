const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vColor;
  varying vec3 vViewPosition;

  uniform sampler2D headTexture;
  uniform vec3 keyLightColor;
  uniform float keyLightBrightness;
  uniform vec3 keyLightPosition;

  void main() {
    vec3 originalColor = texture2D(headTexture, vUv).xyz;
    float shininess = 24.0;

    vec3 normal = normalize(vNormal);

    vec3 lightDirection = normalize(keyLightPosition - vViewPosition);
    float diffuse = max(dot(vNormal, lightDirection), 0.0);

    // Apply Phong shading
    vec3 ambient = 0.1 * originalColor;
    vec3 diffuseColor = keyLightColor * (keyLightBrightness / 6.0) * originalColor * diffuse;
    vec3 specularColor = vec3(0.172, 0.068, 0.068) * (vec3(0.172, 0.068, 0.068) / 6.0) * vec3(1.0) * pow(max(dot(reflect(-lightDirection, vNormal), normalize(vViewPosition)), 0.0), shininess);

    vec3 finalColor = ambient + diffuseColor + specularColor;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default fragmentShader;
