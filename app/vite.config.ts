import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// @ts-ignore
import path from "path";

export default defineConfig({
    esbuild: {
        logOverride: { "this-is-undefined-in-esm": "silent" }
    },
    build: {
        outDir: "./build",
        target: "esnext",
        sourcemap: true
    },
    optimizeDeps: { include: ["react/jsx-runtime"] },
    plugins: [
        react({})
    ]
})
