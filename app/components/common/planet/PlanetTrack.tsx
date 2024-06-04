import Image from 'next/image';

import styles from '@/app/styles/pages/home.module.scss';

const PlanetTrack = () => {
  return (
    <div>
      <Image className={styles.rocket} src="/image/planet_track.png" width={956} height={704} alt="class rocket" />
    </div>
  );
};

export default PlanetTrack;
