/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./assets/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		screens: {
			md: "768px",
		},
    fontFamily: {
      youngSerif: ['Young Serif'],
      outfit: ['Outfit'],
    },
    fontSize: {
      sm: "0.75rem",
      md: ["14px", "150%"],
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": ['28px', '150%'],
      "4xl": "2.25rem",
      '5xl': ['42px', '100%'],
      "6xl": "4rem",
      "7xl": "5rem",
    },
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				"gray-100": "hsl(30, 54%, 90%)",
				"gray-200": "hsl(30, 18%, 87%)",
				"gray-600": "hsl(30, 10%, 34%)",
				"gray-900": "hsl(24, 5%, 18%)",
				brown: "hsl(14, 45%, 36%)",
				"rose-800": "hsl(332, 51%, 32%)",
				"rose-50": "hsl(330, 100%, 98%)",
			},
		},
	},
	plugins: [],
};
