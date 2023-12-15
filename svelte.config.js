import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [relativeImages]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$lib: 'src/lib',
			$data: 'src/lib/data',
			$assets: 'src/lib/assets',
			$static: 'static'
		}
		// csp: {
		// 	directives: {
		// 		'script-src': ['self']
		// 	},
		// 	reportOnly: {
		// 		'script-src': ['self'],
		// 		'report-to': ['self']
		// 	}
		// }
	}
};

export default config;
