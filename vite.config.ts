import postcss from './postcss.config';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [preact()],
    base: '/',
    css: {
        postcss
    }
});
