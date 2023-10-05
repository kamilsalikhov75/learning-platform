import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
// https://vitejs.dev/config/

const vitePwa = VitePWA({
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "learning-platform",
    short_name: "learnP",
    description: "this is learning platform",
    theme_color: "#ffffff",
    icons: [
      {
        src: "assets/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
});

export default defineConfig({
  plugins: [react(), vitePwa],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
