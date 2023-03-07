/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT_SERVE: number
  readonly VITE_API_SISTEM: string
  readonly VITE_API_HUGGY: string
  readonly VITE_CLIENT_ID: string
  readonly VITE_CLIENT_SECRET: string
  readonly VITE_URL_CALLBACK: string
  readonly VITE_KEY_CRYPTO: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
