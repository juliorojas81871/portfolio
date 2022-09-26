/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["shadow-orange-500", "shadow-blue-500", "shadow-yellow-500", ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
