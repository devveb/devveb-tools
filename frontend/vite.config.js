import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // src 폴더를 @ 로 참조하게 해줍니다
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
