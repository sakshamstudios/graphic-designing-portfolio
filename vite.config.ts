import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ✅ Ensures all assets & routing work correctly on Vercel
  base: './',
  plugins: [react()],
});
