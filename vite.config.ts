import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Nécessaire pour GitHub Pages si le repo n'est pas à la racine du domaine
  // Vite injectera automatiquement le nom du repo ici si déployé via GH Actions
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});