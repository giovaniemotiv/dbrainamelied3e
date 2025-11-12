uniform vec3 viewVector;
uniform float c;
uniform float p;
uniform float uTime;
uniform vec2 uMouse;
uniform float uFadeTime;
attribute vec2 aDelayDuration;
attribute float size;
varying float intensity;
varying float alpha;
uniform float uAlpha;
uniform bool isCustomAlpha;

void main()
{
    if(uFadeTime > 0.00001){

    // Decouple glow from camera angle: keep intensity constant
    vec3 vNormal = normalize( normalMatrix * normal );
    vec3 vNormel = normalize( normalMatrix * viewVector );
    intensity = 1.0;

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );

    // Continuous per-point flicker: stable, never fully off
    float phase = fract(sin(dot(position.xy, vec2(12.9898, 78.233))) * 43758.5453);
    float flicker = 0.5 + 0.5 * sin(uTime * 8.0 + phase * 6.2831853);
    alpha = mix(0.25, 0.7, flicker);


        //static ligthning
    if( isCustomAlpha ) {
      alpha = uAlpha;
    }


    gl_PointSize = 9.5 * size;

    gl_Position += projectionMatrix * mvPosition;

   }

}