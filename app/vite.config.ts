import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Raj-Hotel/',
  plugins: [react()],
  build: {
    outDir: '../',
    emptyOutDir: false,
    assetsDir: 'app-assets',
  },
})
