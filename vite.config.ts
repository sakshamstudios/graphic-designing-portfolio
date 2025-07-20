import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // 👈 This is very important for Vercel if you're using relative assets or router
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
