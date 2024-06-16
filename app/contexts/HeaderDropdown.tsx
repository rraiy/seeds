import { createContext } from 'react';

interface Ctx {
  content: any;
}

export const HeaderDropdownCtx = createContext<Ctx>({ content: 'ss' });
