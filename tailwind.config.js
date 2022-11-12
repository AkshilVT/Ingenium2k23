/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { StarWars: ['StarWars', 'cursive'] },
    },
  },
  plugins: [],
};
