const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vColor;
  varying vec3 vViewPosition;

  uniform float scrollY;
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
    vec3 specularColor = keyLightColor * (keyLightBrightness / 6.0) * vec3(1.0) * pow(max(dot(reflect(-lightDirection, vNormal), normalize(vViewPosition)), 0.0), shininess);

    vec3 finalColor = ambient + diffuseColor + specularColor;

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

const old2 = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vColor;

uniform sampler2D headTexture;
uniform vec3 keyLightColor;
uniform float keyLightBrightness;
uniform vec3 keyLightPosition;
uniform float keyLightWidth;
uniform float keyLightHeight;

void main() {
  vec3 originalColor = texture2D(headTexture, vUv).xyz;
  vec3 normal = normalize(vNormal);
    
  
  vec3 lightDirection = normalize(keyLightPosition + vec3(gl_FragCoord.xy, 0.5));
  lightDirection.x *= keyLightWidth / keyLightPosition.x;
  lightDirection.y *= keyLightHeight * keyLightPosition.y;

  vec3 viewDirection = normalize(vView);
  float lambertian = max(dot(normal, lightDirection), 0.3);

  vec3 reflectDirection = reflect(lightDirection, normal);
  float specular = pow(max(dot(reflectDirection, viewDirection), 0.0), 1.0);

  vec3 ambient = ambientColor * vColor;
  vec3 diffuse = lightColor * vColor * lambertian;
  vec3 specularComponent = lightColor * specular;

  vec3 finalColor = originalColor * (keyLightColor/4.0 * lambertian * keyLightBrightness);
  finalColor += keyLightColor * specular * keyLightBrightness;

  gl_FragColor = vec4(finalColor, 1.0);
}
  }
`