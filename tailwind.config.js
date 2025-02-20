/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Notice how `jsx` is already there!
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
