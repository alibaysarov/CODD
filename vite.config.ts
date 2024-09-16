import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      outDir: "dist",
      devOptions: {
        enabled: true,
      },
      workbox: {
        cleanupOutdatedCaches: false,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/codd\.vercel\.app\/.*$/, // Match your API
            handler: 'NetworkFirst', // Tries network first, falls back to cache
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50, // Max number of cached entries
                maxAgeSeconds: 86400, // One day
              },
            },
          },
        ]
      },
      manifest: {
        name: "CODD App PWA",
        short_name: "CODD",
        description: "Test page",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    }),
    svgr({
      include: "**/**/*.svg?react"
    })],
})
