/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: '450px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
  plugins: [],
}

