import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [
        vitePreprocess({}),
        preprocess({
            postcss: {
                configFilePath: join(__dirname, 'postcss.config.js')
            }
        })
    ],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            $chemdoodle: path.resolve('./src/lib/chemdoodle'),
            $components: path.resolve('./src/lib/components'),
            $styles: path.resolve('./src/lib/styles'),
            $icons: path.resolve('./src/lib/icons'),
            $types: path.resolve('./src/lib/types')
        }
    }
};

export default config;
