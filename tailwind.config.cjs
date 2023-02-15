const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				archivo: ['Archivo'],
				mono: ['IBMPlexMono']
			},
			colors: {
				pri: {
					100: '#ccfff5',
					200: '#99ffeb',
					300: '#66ffe1',
					400: '#33ffd7',
					500: '#00ffcd',
					600: '#00cca4',
					700: '#00997b',
					800: '#006652',
					900: '#003329'
				},
				sec: '#9795f0',
				ter: '#fbc8d4'
			}
		}
	},

	plugins: []
};

module.exports = config;
