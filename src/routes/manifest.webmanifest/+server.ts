import { website } from '$lib/data/config';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export const GET = function get({ setHeaders }) {
	const { backgroundColor, siteDescription, siteShortTitle, siteTitle, themeColor } = website;

	const manifest = {
		name: siteTitle,
		short_name: siteShortTitle,
		siteDescription,
		start_url: '/',
		background_color: backgroundColor,
		theme_color: themeColor,
		display: 'standalone',
		icons: [{ src: '/favicon.ico', type: 'image/x-icon', sizes: '376x352' }]
	};

	setHeaders({
		'content-type': 'application/json'
	});

	return new Response(JSON.stringify(manifest));
};
