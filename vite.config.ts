import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  /**
   * GitHub Pages project site: https://<user>.github.io/Portfolio/
   * Change to '/' if deploying to a user/organization site or custom domain.
   */
  base: mode === 'production' ? '/Portfolio/' : '/',
}))
