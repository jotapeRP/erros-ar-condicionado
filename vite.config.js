import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Consulta Erros Ar Condicionado",
        short_name: "Erros AC",
        description: "App para consulta de códigos de erro de ar condicionado",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-192.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
