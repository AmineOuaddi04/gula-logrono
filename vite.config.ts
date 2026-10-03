import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process: { env: { GITHUB_PAGES?: string } };

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/gula-logrono/' : '/',
  build: { target: 'es2022' },
});
