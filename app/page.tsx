import Image from 'next/image';

import HomeBanner from '@/app/components/HomeBanner';
import PlanetTrack from '@/app/components/common/planet/PlanetTrack';
import styles from '@/app/styles/pages/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HomeBanner />
      </main>
      <Image className={styles.rocket} src="/image/icon_img/rocket.png" width={60} height={106} alt="class rocket" />
      <h2 className={styles.title}>探索課程</h2>
      <PlanetTrack />
    </div>
  );
}
