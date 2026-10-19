import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api calls to the local contact/email server (npm run server)
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
