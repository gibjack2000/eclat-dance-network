/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ./index.html,
    ./src/**/*.{js,ts,jsx,tsx},
  ],
  theme: { extend: { colors: { gold: '#D4AF37', crimson: '#8B0000', dark: '#121212', }, fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] } },
    extend: {},
  },
  plugins: [],
}
