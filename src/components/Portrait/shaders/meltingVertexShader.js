// Personal website and portfolio //
// 2023                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

const meltingVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal; 
  varying vec3 vViewPosition;
  varying vec3 vColor;

  uniform float scrollY;
  uniform float uTime;

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }
  
  // Simplex noise function (you can replace this with your own noise function)
  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0 ); 
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vViewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz; 

    float distanceFromCenter = length(position.xy);
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float blendFactor = smoothstep(0.0, 0.7, distanceFromCenter);
    
    if (scrollY > 0.0) {

      float meltingFactor = max(0.0, scrollY/ 2.5) * 0.014;
      float complexityFactor = snoise(position * 3.0);

      if (scrollY < 30.0) {
        float meltingFactor = scrollY * 0.005;
      } else {
        float meltingFactor = 30.0 * .0005;
      }
    
      if (position.y < -0.5) {
        float animationFactor = sin(uTime) * 0.05;
        float wiggleFactorX = snoise(position.yzx + uTime ) * 0.002; 
        float wiggleFactorY = snoise(position.zxy + uTime ) * 0.002; 
        modelPosition.y += (meltingFactor * complexityFactor + animationFactor) * blendFactor;
        modelPosition.y -= (meltingFactor + animationFactor) * blendFactor;
        modelPosition.x += wiggleFactorX / 2.0 * blendFactor;
        modelPosition.z += wiggleFactorY / 2.0 * blendFactor;

      }  
      if (position.y > -0.5) {
        float animationFactor = sin(uTime) * 0.05;
        float wiggleFactorX = snoise(position.yzx + uTime * 0.8) * 0.002; 
        float wiggleFactorY = snoise(position.zxy + uTime * 0.8) * 0.002; 

        modelPosition.y += (meltingFactor / 2.0 * complexityFactor + animationFactor) * blendFactor;
        modelPosition.y -= (meltingFactor / 4.0 + animationFactor) * blendFactor;
        modelPosition.x += wiggleFactorX / 2.0 * blendFactor;
        modelPosition.z += wiggleFactorY / 2.0 * blendFactor;
      }
    }
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
  }
`

export default meltingVertexShader;








