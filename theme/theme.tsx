// chakra theme define

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Noto Serif TC',sans-serif`,
    body: `'Noto Serif TC',sans-serif`,
  },
  colors: {
    brand: {
      500: '#2B2828', // primary
      600: 'rgba(43,40,40,0.5)',
      // secondary: '#ECEBEB',
    },
  },
  components: {
    Button: {
      baseStyle: {},
      sizes: {
        sm: {
          w: '136px',
          height: '48px',
          bg: 'brand',
          color: '#fff',
          fontSize: '20px',
          borderRadius: '60px',
        },
      },
    },
  },
});

export default theme;
