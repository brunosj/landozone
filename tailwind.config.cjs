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
				sec: {
          100: "#eaeafc",
          200: "#d5d5f9",
          300: "#c1bff6",
          400: "#acaaf3",
          500: "#9795f0",
          600: "#7977c0",
          700: "#5b5990",
          800: "#3c3c60",
          900: "#1e1e30"
},
				ter: '#fbc8d4'
			}
		}
	},

	plugins: []
};

module.exports = config;
