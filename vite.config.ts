import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // prevents dependency pre-bundling issues
  },
  base: '/', // Vercel serves at the root, so '/' is fine
})
