import clsx from 'clsx';

import ExploreLessons from '@/app/components/home/ExploreLessons';
import HomeBanner from '@/app/components/home/HomeBanner';
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
        title="最新課表"
        text="課表統一為當月的一號更新。"
        imgSrc="/image/month.jpg"
        imgAlt="五月喜茲體能課表"
        titleClass={styles.title}
      />
      <TextWithCards />
    </div>
  );
}
