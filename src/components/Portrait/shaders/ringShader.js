// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

const ringShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vColor;
    varying vec3 vViewPosition;

    uniform vec3 keyLightColor;
    uniform float keyLightBrightness;
    uniform vec3 keyLightPosition;

    void main() {
        float silverIntensity = 0.25;
        vec3 silverColor = vec3(222.0/255.0, 230.0/255.0, 255.0/255.0); 

        vec3 normal = normalize(vNormal);
        vec3 lightDirection = normalize(keyLightPosition - vViewPosition);
        float diffuse = max(dot(vNormal, lightDirection), 0.0);

        float shading = dot(normal, vec3(0.0, 1.0, 0.0)); 

        vec3 randomOffset = vec3(sin(vUv.x * 10.0), cos(vUv.y * 10.0), 0.0) * 0.02;
        vec3 diffuseColor = keyLightColor * (keyLightBrightness / 5.0) * silverColor * smoothstep(0.6, 1.0, diffuse);
        vec3 specularColor = keyLightBrightness/ 3.0 * (vec3(0.068, 0.172, 0.172)) * smoothstep(0.2, 1.0, pow(max(dot(reflect(-lightDirection, normal), normalize(vViewPosition)), 0.0), 25.0));
        
        vec3 finalColor = (silverColor * (silverIntensity + shading)) + randomOffset + diffuseColor + specularColor;

        gl_FragColor = vec4(finalColor, 1.0);
    }
`

export default ringShader;