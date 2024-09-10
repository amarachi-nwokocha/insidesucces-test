/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBlack: '#161616',
        sideBg: '#0D0D0D',
        hoverGreen: '#2ECFCF',
        sideText: '#99938F',
        topText: '#FAFAFA',

      },
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

