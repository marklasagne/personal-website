const headShader = `
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

    vec3 ambientColor = vec3(0.0, 0.172, 0.172); 
    vec3 ambient = ambientColor * 0.4;
    vec3 diffuseColor = keyLightColor * (keyLightBrightness / 2.0) * originalColor * smoothstep(0.3, 1.0, diffuse);
    vec3 specularColor = keyLightBrightness/ 2.0 * (vec3(0.068, 0.172, 0.172))  * pow(max(dot(reflect(-lightDirection, vNormal), normalize(vViewPosition)), 0.0), 5.0);
    vec3 specularColor2 = keyLightBrightness/ 2.0 * (vec3(0.0, 0.068, 0.068)) * pow(max(dot(reflect(lightDirection, vNormal), normalize(vViewPosition)), 0.0), 5.0);

    vec3 finalColor =  ambient + diffuseColor + specularColor + specularColor2 ;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default headShader;


