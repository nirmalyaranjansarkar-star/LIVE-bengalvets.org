import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const pages = [
  'about-us', 'contact-us', 'terms-and-conditions', 'privacy-policy',
  'refund-and-cancellation-policy', 'shipping-and-delivery-policy', 'disclaimer',
];

export default defineConfig({
  plugins: [react()],
  build: {
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
        ...Object.fromEntries(pages.map((p) => [p, resolve(__dirname, `${p}.html`)])),
      },
    },
  },
});
