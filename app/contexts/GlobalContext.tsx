'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';

export const GlobalContext = createContext<{ isMobile: boolean }>({
  isMobile: false,
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      if (typeof window !== 'undefined') {
        const userAgent = navigator.userAgent;
        const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];

        return mobileKeywords.some((keyword) => userAgent.match(new RegExp(keyword, 'i')));
      }
      return false;
    };
    setIsMobile(checkMobileDevice());
  }, []);

  return <GlobalContext.Provider value={{ isMobile }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
