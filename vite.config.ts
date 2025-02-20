import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [tailwindcss(), preact()],
    base: '/',
    css: {
        postcss: {
            plugins: [autoprefixer]
        }
    }
});
