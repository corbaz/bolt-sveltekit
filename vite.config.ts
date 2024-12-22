import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@content': fileURLToPath(new URL('./src/content', import.meta.url))
		}
	},
	optimizeDeps: {
		include: ['marked']
	}
});
