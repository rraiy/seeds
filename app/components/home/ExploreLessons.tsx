import Image from 'next/image';

import { EXPLORE_INFO } from '@/app/constants/content/home/exploreLesson';
import PlanetTrack from '@/app/components/planet/PlanetTrack';
import styles from '@/app/styles/pages/home.module.scss';

const ExploreLessons = () => {
  return (
    <div className={styles['explore-lesson-container']}>
      <Image className={styles.rocket} src="/image/icon_img/rocket.png" width={60} height={106} alt="class rocket" />
      <h2 className={styles.title}>{EXPLORE_INFO.title}</h2>
      <PlanetTrack />
    </div>
  );
};

export default ExploreLessons;
