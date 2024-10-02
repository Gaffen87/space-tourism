/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			padding: {
				"spacing-25": "2px",
				"spacing-50": "4px",
				"spacing-100": "8px",
				"spacing-150": "12px",
				"spacing-200": "16px",
				"spacing-300": "24px",
				"spacing-400": "32px",
				"spacing-500": "40px",
				"spacing-600": "48px",
				"spacing-800": "64px",
				"spacing-1000": "80px",
				"spacing-1200": "96px",
				"spacing-1600": "128px",
			},
			colors: {
				"space-blue-900": "rgb(11,13,23)",
				"space-blue-300": "rgb(208,214,249)",
			},
			gap: {
				"spacing-25": "2px",
				"spacing-50": "4px",
				"spacing-100": "8px",
				"spacing-150": "12px",
				"spacing-200": "16px",
				"spacing-300": "24px",
				"spacing-400": "32px",
				"spacing-500": "40px",
				"spacing-600": "48px",
				"spacing-800": "64px",
				"spacing-1000": "80px",
				"spacing-1200": "96px",
				"spacing-1600": "128px",
			},
			fontFamily: {
				bellefair: ["Bellefair", "serif"],
				barlow: ["Barlow", "sans-serif"],
				barlowCondensed: ["Barlow Condensed", "sans-serif"],
			},
		},
	},
	plugins: [],
};
