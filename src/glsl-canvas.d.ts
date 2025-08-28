/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'glsl-canvas' {
  export function startShader(config: { domElement: HTMLElement; fragShader: string }): void
  export const shaderWebBackground: {
    shade(config: {
      canvas?: HTMLCanvasElement
      shaders: Record<
        string,
        {
          uniforms?: Record<
            string,
            (
              gl: WebGLRenderingContext | WebGL2RenderingContext,
              location: WebGLUniformLocation,
              g: any,
            ) => void
          >
          texture?: any
        }
      >
      onInit?: (g: any) => void
      onResize?: (w: number, h: number, g: any) => void
      onBeforeFrame?: (g: any) => void
      onAfterFrame?: (g: any) => void
      onError?: (err: any, canvas: HTMLCanvasElement) => void
    }): any
  }
}

declare module 'glsl-canvas/glslCanvas.js' {
  export function startShader(config: { domElement: HTMLElement; fragShader: string }): void
  export const shaderWebBackground: {
    shade(config: {
      canvas?: HTMLCanvasElement
      shaders: Record<
        string,
        {
          uniforms?: Record<
            string,
            (
              gl: WebGLRenderingContext | WebGL2RenderingContext,
              location: WebGLUniformLocation,
              g: { width: number; height: number },
            ) => void
          >
          texture?: unknown
        }
      >
      onInit?: (g: unknown) => void
      onResize?: (w: number, h: number, g: unknown) => void
      onBeforeFrame?: (g: unknown) => void
      onAfterFrame?: (g: unknown) => void
      onError?: (err: unknown, canvas: HTMLCanvasElement) => void
    }): unknown
  }
}
