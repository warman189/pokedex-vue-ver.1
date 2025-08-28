import { ref, onMounted, watch } from 'vue';
import { startShader, shaderWebBackground } from 'glsl-canvas/glslCanvas.js';
import { getTypeColor } from '../utils/pokemonTypes';
const props = defineProps();
const canvas = ref(null);
const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_color;    // base color from type
uniform int u_mode;      // 0=water, 1=fire, 2=grass

float rnd(in vec2 st){return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);}
float noise (in vec2 st){
  vec2 i=floor(st); vec2 f=fract(st);
  float a=rnd(i);
  float b=rnd(i+vec2(1.0,0.0));
  float c=rnd(i+vec2(0.0,1.0));
  float d=rnd(i+vec2(1.0,1.0));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.y*u.x;
}

#define OCTAVES 5
float fbm(in vec2 st){
  float v=0.0; float a=.5; for(int i=0;i<OCTAVES;i++){v+=a*noise(st); st*=2.0; a*=.5;} return v;
}

vec3 water(vec2 st){
  st.x *= u_resolution.x/u_resolution.y;
  vec2 q; q.x=fbm(st+0.05*u_time); q.y=fbm(st+vec2(1.0));
  vec2 r; r.x=fbm(st+1.0*q+vec2(1.7,9.2)+0.11*u_time);
  r.y=fbm(st+1.0*q+vec2(8.3,2.8)+0.13*u_time);
  float f=fbm(st+r);
  vec3 base = u_color;
  vec3 deep = mix(base, vec3(0.05,0.08,0.2), 0.7);
  vec3 highlights = mix(base, vec3(0.8,0.9,1.0), 0.7);
  vec3 col = mix(deep, base, clamp(f*f*4.0,0.0,1.0));
  col = mix(col, highlights, clamp(length(q),0.0,1.0));
  return (f*f*f+.6*f*f+.5*f)*col;
}

vec3 fire(vec2 st){
  st *= 1.5;
  st.y += u_time*0.6;                 // upward flow
  float f = fbm(st + vec2(0.0, u_time*0.3));
  float flames = smoothstep(0.2, 1.0, f);
  float flicker = noise(st*4.0 + u_time*2.0);
  vec3 base = mix(vec3(0.1,0.0,0.0), u_color, 0.8);
  vec3 hot  = vec3(1.0,0.9,0.3);
  vec3 col = mix(base, hot, clamp(flames + 0.3*flicker, 0.0, 1.0));
  // embers
  float sparks = step(0.985, noise(st*10.0 + u_time*3.0));
  col += vec3(1.0,0.6,0.2) * sparks * 0.6;
  return col;
}

vec3 grass(vec2 st){
  st *= 1.2;
  float f = fbm(st + vec2(0.0, sin(u_time*0.5)*0.1));
  vec3 base = mix(vec3(0.05,0.1,0.05), u_color, 0.7);
  vec3 light = vec3(0.6, 0.9, 0.5);
  vec3 col = mix(base, light, smoothstep(0.3, 0.9, f));
  // leaf-like noise speckles
  float speck = smoothstep(0.86, 0.9, noise(st*6.0 + vec2(0.0, u_time*0.2)));
  col += vec3(0.1, 0.2, 0.1) * speck * 0.3;
  return col;
}

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 col;
  if(u_mode==1)      col = fire(st);
  else if(u_mode==2) col = grass(st);
  else               col = water(st);
  gl_FragColor = vec4(col, 1.0);
}
`;
onMounted(() => {
    if (!canvas.value)
        return;
    // Prepare a reactive color uniform [r,g,b]
    const color = ref([0.6, 0.8, 1.0]);
    const mode = ref(0); // 0 water, 1 fire, 2 grass
    // Initialize library with our fragment shader and target DOM container
    startShader({ domElement: canvas.value.parentElement, fragShader: fragmentShader });
    // Start rendering on the provided canvas with uniforms that update each frame
    shaderWebBackground.shade({
        canvas: canvas.value,
        shaders: {
            main: {
                uniforms: {
                    u_resolution: (gl, loc, g) => gl.uniform2f(loc, g.width, g.height),
                    u_time: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
                    u_color: (gl, loc) => gl.uniform3f(loc, color.value[0], color.value[1], color.value[2]),
                    u_mode: (gl, loc) => gl.uniform1i(loc, mode.value),
                },
            },
        },
    });
    // React to active type changes by updating the color and opacity
    watch(() => props.activeType, (newType) => {
        if (newType) {
            const hex = getTypeColor(newType);
            color.value = [
                parseInt(hex.slice(1, 3), 16) / 255,
                parseInt(hex.slice(3, 5), 16) / 255,
                parseInt(hex.slice(5, 7), 16) / 255,
            ];
            // Map pokemon types to shader modes
            if (newType === 'fire')
                mode.value = 1;
            else if (newType === 'grass' || newType === 'bug')
                mode.value = 2;
            else
                mode.value = 0; // default water-like
            if (canvas.value)
                canvas.value.style.opacity = '1';
        }
        else {
            if (canvas.value)
                canvas.value.style.opacity = '0';
        }
    }, { immediate: true });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.canvas, __VLS_elements.canvas)({
    ref: "canvas",
    ...{ class: "dynamic-background" },
});
/** @type {typeof __VLS_ctx.canvas} */ ;
// @ts-ignore
[canvas,];
/** @type {__VLS_StyleScopedClasses['dynamic-background']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        canvas: canvas,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
