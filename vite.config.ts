import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Only split vendor (react + react-dom) — these are genuinely large and cacheable
          vendor: ['react', 'react-dom'],
        }
      }
    },
    target: 'esnext',
    sourcemap: false,
    minify: 'esbuild',
    // Inline CSS into JS bundle so there's no separate CSS fetch round-trip that causes FOUC
    cssCodeSplit: false,
  }
})

