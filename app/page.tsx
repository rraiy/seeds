import clsx from 'clsx';

import ABOUT from '@/app/constants/content/home/about';
import ExploreLessons from '@/app/components/home/ExploreLessons';
import HomeBanner from '@/app/components/home/HomeBanner';
import MONTHLY_CLASS from '@/app/constants/content/home/monthlyClass';
import TextWithCards from '@/app/components/common/TextWithCards';
import TextImageSection from '@/app/components/common/TextImageSection';

import styles from '@/app/styles/pages/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={clsx(styles.main, 'fill-container')}>
        <HomeBanner />
      </main>
      <ExploreLessons />
      <TextImageSection
        title={MONTHLY_CLASS.title}
        text={MONTHLY_CLASS.text}
        imgSrc={MONTHLY_CLASS.imgSrc}
        imgAlt={MONTHLY_CLASS.imgAlt}
        titleClass={styles.title}
      />
      <TextWithCards title={ABOUT.title} text={ABOUT.text} titleClass={styles.title} />
    </div>
  );
}
