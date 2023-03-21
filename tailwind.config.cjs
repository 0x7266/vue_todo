/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sono: ['"Sono"', "sans-serif"],
				kalam: ['"Kalam", "cursive"'],
				noto: ['"Noto Sans", "sans-serif"'],
			},
		},
	},
	plugins: [],
};
