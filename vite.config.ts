import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { servicesData } from './src/data/servicesData';

export default defineConfig((env) => {
  const serviceIds = Object.keys(servicesData);
  const isSsr = env.isSsrBuild || (env as any).ssrBuild;

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    ssgOptions: {
      script: 'async',
      formatting: 'none',
      includedRoutes(paths) {
        const filteredPaths = paths.filter(p => !p.includes(':'));
        const mappedPaths = filteredPaths.map(p => p === '*' ? '/404' : p);
        const servicePaths = serviceIds.map(id => `/services/${id}`);
        return [...mappedPaths, ...servicePaths];
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: isSsr ? undefined : {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'framer': ['framer-motion'],
            'helmet': ['react-helmet-async'],
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
