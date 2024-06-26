import type { Metadata } from 'next';

import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';

import GlobalProvider from '@/app/contexts/GlobalContext';

import '@/app/styles/customClass.css';
import '@/app/styles/globals.css';

const metaDataBasic = {
  title: '喜茲體能 - 適合所有人的肌力品牌',
  description: '適合所有人的肌力體能訓練品牌',
};

export const metadata: Metadata = {
  ...metaDataBasic,
  keywords: ['重訓', '體能', '健身', '越野跑'],
  // metadataBase: new URL("https://acme.com'"),
  openGraph: {
    ...metaDataBasic,
    type: 'website',
    url: '',
    images: [],
  },
  twitter: {
    ...metaDataBasic,
    // card: "summary_large_image",
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="w-full overflow-x-hidden min-h-[880px]">
        <GlobalProvider>
          <Header />
          <div className="max-w-screen-lg mt-[100px] mb-[80px] tablet:mt-[80px] mobile:w-screen">{children}</div>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
