// this file did not work

import { Noto_Serif_TC } from 'next/font/google';

const notoSerifTC = Noto_Serif_TC({
  weight: ['400', '900'],
  variable: '--font-NSTC',
});

export const fonts = {
  notoSerifTC,
};
