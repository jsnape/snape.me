import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    site: `https://snape.me`,
    output: 'static',
    outDir: './docs',
    build: {
        assets: 'astro'
    }
});
