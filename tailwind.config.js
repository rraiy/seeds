/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xl: {'max': '1440px'},
      desktop: {'max': '1200px'},
      tablet:{'max': '990px'},
      mobile: {'max': '767px'},
      mobileSm: {'max': '414px'},
    },
    extend: {
      colors: {
        primary: '#2B2828',
        secondary: '#ECEBEB',
        headerBg: 'rgba(236, 235, 235, 0.9)',
        button:'rgba(43, 40, 40, 0.9)',
        buttonHover:'rgba(43, 40, 40, 0.5)',
        buttonDisabled:'#918989',
        buttonStroke: '#AAAAAA',
        textDisabled: '#DEDEDE'
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.home-img-exclude-bg-elements img:not(.bg-elements)': {
          width:'100px',
          zIndex:10
        },
      });
    }),
  ],
}

