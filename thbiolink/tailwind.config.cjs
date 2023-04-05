/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				pupdad: {
				  DEFAULT: '#F2F2F2',
				  50: '#F2F2F2',
				  200: '#CCCCCC',
				  300: '#A5A5A5',
				  500: '#7F7F7F',
				  600: '#4B4A4A',
				  700: '#8C271E',
				},
			  },
		},
	},
	plugins: [],
};
