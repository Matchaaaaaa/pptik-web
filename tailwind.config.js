/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        main: '#168ab7',
        whiteA: 'rgba(255, 255, 255, 0.60)',
        cardi: 'rgba(55,127,166,255)'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
};
