/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: ["cupcake", "light", "dark", "night", "winter", "lofi",
			{
				lofi: {
					...require("daisyui/src/theming/themes")["[data-theme=lofi]"],
					"primary": "#dbf8fb",
					"info":"#010D30"

				},
				dark: {
					...require("daisyui/src/theming/themes")["[data-theme=dark]"],
					"primary": "#00051C",
					"secondary": "#fde047"

				}
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")]
};

module.exports = config;
