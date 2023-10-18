// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //


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

    vec3 ambientColor = vec3(122.0/255.0, 120.0/255.0, 122.0/255.0); 
    vec3 ambient = ambientColor * 0.25;
    vec3 diffuseColor = keyLightColor * (keyLightBrightness / 3.5) * originalColor * smoothstep(0.3, 1.0, diffuse);
    vec3 specularColor = keyLightBrightness * vec3(10.0/255.0, 10.0/255.0, 10.0/255.0)  * pow(max(dot(reflect(-lightDirection, vNormal), normalize(vViewPosition)), -0.85), 5.0);
    vec3 specularColor2 = keyLightBrightness / 5.0 * vec3(59.0/255.0, 59.0/255.0, 59.0/255.0) * pow(max(dot(reflect(lightDirection, vNormal), normalize(vViewPosition)), -0.85), 5.0);

    vec3 finalColor =  ambient + diffuseColor + specularColor + specularColor2 ;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

export default headShader;


