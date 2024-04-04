import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                ourMission: resolve(__dirname, 'ourMission.html'),
                technology: resolve(__dirname, 'technology.html'),
            }
        }
    }
});