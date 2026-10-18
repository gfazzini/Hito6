
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/hito5/',
  build: {
    outDir: 'docs',
  },
  
})

