import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/react-ui-a11y-code-cleanup/",
  plugins: [react()],
})
