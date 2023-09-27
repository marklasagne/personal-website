const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D headTexture;

  void main() {
    vec3 originalColor = texture2D(headTexture, vUv).xyz;
    gl_FragColor = vec4(originalColor, 1.0);
  }
`

export default fragmentShader;