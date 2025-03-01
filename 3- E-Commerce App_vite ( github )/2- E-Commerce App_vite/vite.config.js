import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/E-commerce-website-React-js/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  }
})
