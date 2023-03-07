import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [ViteMinifyPlugin({}), ViteImageOptimizer({})],
  base: '',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        simple: resolve(root, 'simple.html'),
        advanced: resolve(root, 'advanced.html')
      }
    }
  }
});
