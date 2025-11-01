// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/',

  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    allowedHosts: ['mil.psy.ntu.edu.tw'],
    proxy: {
      '/terms': 'https://mil.psy.ntu.edu.tw:5000',
      '/query': 'https://mil.psy.ntu.edu.tw:5000',
      '/help': 'https://mil.psy.ntu.edu.tw:5000',
    }
  }
})

