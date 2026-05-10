import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Using custom domain (dopomacsystems.com) — base is '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
