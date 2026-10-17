
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/hito4/',
  build: {
    outDir: 'docs',
  },
  
})

