import clsx from 'clsx';

import ABOUT from '@/app/constants/content/home/about';
import ExploreLessons from '@/app/components/home/ExploreLessons';
import FadeInSection from './components/common/FadeInSection';
import HomeBanner from '@/app/components/home/HomeBanner';
import MONTHLY_CLASS from '@/app/constants/content/home/monthlyClass';
import TextWithCards from '@/app/components/common/TextWithCards';
import TextImageSection from '@/app/components/common/TextImageSection';

import styles from '@/app/styles/pages/home.module.scss';

// TODO: [&>img:not(:.bg-elements)]:z-10 not working with tw config plugin!

export default function Home() {
  return (
    <div
      className={clsx(
        styles.container,
        'relative bg-img-no-repeat bg-home [&>*]:mb-40 last:mb-0 desktop:w-screen desktop:[&>*]:mb-20 tablet:[&>*]:mb-16 mobile:bg-home-mobile',
      )}
    >
      <div className="fill-container w-screen min-h-[800px] mt-[-120px] mobile:mt-[-80px] mobile:min-h-[50vh]">
        <HomeBanner />
      </div>

      <FadeInSection>
        <ExploreLessons />
      </FadeInSection>

      <FadeInSection>
        <TextImageSection
          className="flex items-center justify-between desktop:flex-col"
          title={MONTHLY_CLASS.title}
          text={MONTHLY_CLASS.text}
          imgSrc={MONTHLY_CLASS.imgSrc}
          imgAlt={MONTHLY_CLASS.imgAlt}
          titleClass={styles.title}
        />
      </FadeInSection>

      <FadeInSection>
        <TextWithCards title={ABOUT.title} text={ABOUT.text} titleClass={styles.title} />
      </FadeInSection>
    </div>
  );
}
