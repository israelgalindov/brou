import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Forzamos a TanStack a compilar en modo Single Page Application (sin servidor)
    app: {
      ssr: false
    }
  },
  vite: {
    build: {
      // Nos aseguramos de que el destino final sea la carpeta dist estándar
      outDir: "dist",
    }
  }
});