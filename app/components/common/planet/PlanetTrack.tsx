import Image from 'next/image';

import styles from '@/app/styles/components/planet/PlanetTrack.module.scss';

const PlanetTrack = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.test} src="/image/universe/planet_track.png" width={956} height={704} alt="universe" />
      <Image className={styles.green} src="/image/universe/green_planet.png" width={88} height={88} alt="universe" />
      <Image
        className={styles.orange}
        src="/image/universe/orange_planet.png"
        width={144}
        height={144}
        alt="universe"
      />
      <Image
        className={styles.yellow}
        src="/image/universe/yellow_planet.png"
        width={164}
        height={156}
        alt="universe"
      />
      <Image className={styles.blue} src="/image/universe/blue_planet.png" width={188} height={108} alt="universe" />
      <Image className={styles.red} src="/image/universe/red_planet.png" width={88} height={88} alt="universe" />
    </div>
  );
};

export default PlanetTrack;
