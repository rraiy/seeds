import Image from 'next/image';

import PlanetTrack from '@/app/components/planet/PlanetTrack';
import styles from '@/app/styles/pages/home.module.scss';

const ExploreLessons = () => {
  return (
    <div className={styles['explore-lesson-container']}>
      <Image className={styles.rocket} src="/image/icon_img/rocket.png" width={60} height={106} alt="class rocket" />
      <h2 className={styles.title}>探索課程</h2>
      <PlanetTrack />
    </div>
  );
};

export default ExploreLessons;
