/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    colors: {
      gray: {
        100: '#F3F3F3',
        200: '#DADCE0',
        300: '#D3D6DA',
        400: '#939B9F',
        500: '#818181',
        600: '#56575E',
        700: '#939B9F4D'
      },
      navy: {
        100: '#565F7E',
        200: '#262B3C',
        300: '#202537'
      },
      yellow: {
        100: '#CEB02C'
      },
      green: {
        100: '#6AAA64',
        200: '#66A060'
      },
      white: '#fff',
      black: '#000'
    }
  },
  plugins: [require('tailwindcss-animate')]
}
