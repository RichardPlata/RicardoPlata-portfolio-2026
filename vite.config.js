import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-title',
      transformIndexHtml(html) {
        const name = 'Ricardo Plata'
        return html.replace('%SITE_NAME%', name)
      },
    },
  ],
})
