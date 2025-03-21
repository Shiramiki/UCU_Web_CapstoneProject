import { defineConfig } from 'vite'; // Import defineConfig
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [react(), tailwindcss()]
});



