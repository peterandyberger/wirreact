/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_BASE_URL: string,
    VITE_API_URL: string,
    VITE_PORT: number,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
