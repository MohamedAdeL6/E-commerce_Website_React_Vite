import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Use relative base so JS/CSS load correctly on GitHub Pages even if the
// repository name does not match an old hardcoded path (wrong base = 404 assets = blank page).
export default defineConfig({
  plugins: [react()],
  base: "/E-commerce_Website_React_Vite/",
})
