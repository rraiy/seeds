import Image from 'next/image';

import { EXPLORE_INFO } from '@/app/constants/content/home/exploreLesson';
import PlanetTrack from '@/app/components/planet/PlanetTrack';
import styles from '@/app/styles/pages/home.module.scss';

const ExploreLessons = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-48">
      <Image className={styles.rocket} src="/images/icon_img/rocket.png" width={60} height={106} alt="class rocket" />
      <h2 className={styles.title}>{EXPLORE_INFO.title}</h2>
      <PlanetTrack />
    </div>
  );
};

export default ExploreLessons;
