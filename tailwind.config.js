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
        button:'#2b2828e6',
        buttonHover:'rgba(43, 40, 40, 0.8)',
        buttonDisabled:'#918989',
        buttonStroke: '#AAAAAA',
        textDisabled: '#DEDEDE'
      },
      dropShadow: {
        'planetLight':'2mm 2mm 2mm rgb(249, 233, 86, 0.8)'
      },
      backgroundImage: {
        'home': "url('/images/home-bg-pc.jpg')",
        'home-mobile': "url('/images/home-bg-mobile.jpg')",
      }
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

