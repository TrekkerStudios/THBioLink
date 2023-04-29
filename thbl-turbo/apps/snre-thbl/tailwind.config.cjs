/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				pupdad: {
				  DEFAULT: '#9BD9DB',
				  50: '#9BD9DB',
				  200: '#76949F',
				  300: '#6A6B83',
				  500: '#5F506B',
				  700: '#533747',
				},
			  },
		},
	},
	plugins: [],
};
