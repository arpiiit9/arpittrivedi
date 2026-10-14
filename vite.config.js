import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Multi-page Vite site: engineering portfolio + design portfolio.
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        design: resolve(process.cwd(), 'design-work.html')
      }
    }
  }
});
