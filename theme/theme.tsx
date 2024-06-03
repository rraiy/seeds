// chakra theme define

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Noto Serif TC',sans-serif`,
    body: `'Noto Serif TC',sans-serif`,
  },
  brand: {
    primary: 'gray',
    secondary: '#2B2828',
  },
});

export default theme;
