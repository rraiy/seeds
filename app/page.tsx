import clsx from 'clsx';
import Image from 'next/image';

import ABOUT from '@/app/constants/content/home/about';
// import bgElementUrl from '@/app/constants/content/home/bgElements';
// import isMobileDevice from '@/app/utils/checkIsMobile';
import ExploreLessons from '@/app/components/home/ExploreLessons';
// import HomeBanner from '@/app/components/home/HomeBanner';
import MONTHLY_CLASS from '@/app/constants/content/home/monthlyClass';
import TextWithCards from '@/app/components/common/TextWithCards';
import TextImageSection from '@/app/components/common/TextImageSection';

import styles from '@/app/styles/pages/home.module.scss';

// TODO: [&>img:not(:.bg-elements)]:z-10 not working and tw config plugin!

export default function Home() {
  // const isMobile = isMobileDevice();

  return (
    <div className={clsx(styles.container, 'relative [&>*]:mb-60 desktop:w-screen tablet:mb-6')}>
      <main className="fill-container">
        {/* <HomeBanner /> */}
        <Image src="/images/home_banner_2.jpg" width={2560} height={840} alt="喜茲體能" />
      </main>
      <ExploreLessons />

      <TextImageSection
        className="flex items-center justify-between desktop:flex-col"
        title={MONTHLY_CLASS.title}
        text={MONTHLY_CLASS.text}
        imgSrc={MONTHLY_CLASS.imgSrc}
        imgAlt={MONTHLY_CLASS.imgAlt}
        titleClass={styles.title}
      />
      <TextWithCards title={ABOUT.title} text={ABOUT.text} titleClass={styles.title} />
      {/* {bgElementUrl.urls.map((ele) => {
        const { url, width, height, position } = ele;
        const rate = isMobile ? 0.5 : 1;
        return (
          <Image
            className={`bg-elements fill-container z-0 absolute ${position}`}
            key={url}
            src={url}
            alt={bgElementUrl.alt}
            width={width * rate}
            height={height * rate}
          />
        );
      })} */}
    </div>
  );
}
