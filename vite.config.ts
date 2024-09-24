import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { PluginOption } from 'vite';
// ...

function reactVirtualized(): PluginOption {
  const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;

  return {
    name: 'my:react-virtualized',
    async configResolved() {
      const reactVirtualizedPath = path.dirname(
        fileURLToPath(import.meta.resolve('react-virtualized'))
      );

      const brokenFilePath = path.join(
        reactVirtualizedPath,
        '..', // back to dist
        'es',
        'WindowScroller',
        'utils',
        'onScroll.js'
      );
      const brokenCode = await readFile(brokenFilePath, 'utf-8');

      const fixedCode = brokenCode.replace(WRONG_CODE, '');
      await writeFile(brokenFilePath, fixedCode);
    },
  };
}
import { config } from 'dotenv';
config()
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    tsconfigPaths(),
    reactVirtualized(),
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
        short_name: "CODD RSO",
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
