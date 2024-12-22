import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // Importante para Surge.sh
			precompress: false,
			strict: true
		}),
	},
	alias: {
		'@content': './src/routes/info/content/'
	}
};
