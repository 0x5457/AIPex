/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AI_HOST?: string
  readonly VITE_AI_TOKEN?: string
  readonly VITE_AI_MODEL?: string
  readonly VITE_DEV_MODE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Support for CSS imports with ?inline suffix
declare module "*.css?inline" {
  const content: string
  export default content
}

