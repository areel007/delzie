/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 allows toggling dark mode by adding a "dark" class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // you can extend colors, fonts, etc. here
    },
  },
  plugins: [],
};
