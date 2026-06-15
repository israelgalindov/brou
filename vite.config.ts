import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      preset: "vercel" // <- Añadido directamente aquí dentro
    },
  },
  // Puedes dejar o quitar el objeto nitro de abajo, pero el importante es el de arriba
  nitro: {
    preset: "vercel",
  },
});