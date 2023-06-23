import { defineConfig } from 'vite';

export default defineConfig({
  root: '../web',
  // publicDir: '../web/assets',
  build: {
    outDir: '../mobile/dist',
    minify: false,
    emptyOutDir: true,
  },
});
