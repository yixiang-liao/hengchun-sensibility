import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: "/hengchun-sensibility/",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: '恆春感性 Hengchun Sensibility',
        short_name: 'IHL',
        start_url: '/hengchun-sensibility/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: './icon/icon_icon-192-1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './icon/icon_icon-512-1.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
