import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // Importante para Surge.sh
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		}
	},
	preprocess: vitePreprocess(),
	alias: {
		'@content': './src/routes/info/content/'
	}
};

export default config;
