import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'node:path'

export default defineConfig({
  root: '../web',
  build: {
    outDir: '../mobile/dist',
    minify: false,
    emptyOutDir: true,
    target: 'esnext',
  },

  // publicDir: '../web/assets', // doesn't work because it breaks the non-built version
  plugins: [

    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__dirname, '../web/assets/documents')) + '/[!.]*', // copy documents to build
          dest: 'assets/documents',
        },
        {
          src: normalizePath(path.resolve(__dirname, '../web/assets/images')) + '/[!.]*', // copy images to build
          dest: 'assets/images',
        },
      ],
    }),

  ],
});
