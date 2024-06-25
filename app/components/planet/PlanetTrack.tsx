'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import HoverPlanet from '@/app/components/planet/HoverPlanet';
import LESSONS_INFO from '@/app/constants/content/home/exploreLesson';
import styles from '@/app/styles/components/planet/PlanetTrack.module.scss';

const PlanetTrack = () => {
  return (
    <div className={styles.container}>
      <Image
        className={twMerge(`${styles.track} tablet:w-[664px]`)}
        src="/images/universe/planet_track.png"
        width={956}
        height={704}
        alt="universe"
      />
      {LESSONS_INFO.map((lesson) => {
        const { popup, planet } = lesson;
        const { className, src, width, height, alt } = planet;

        return (
          <HoverPlanet
            key={popup.name}
            className={className}
            src={src}
            width={width}
            height={height}
            alt={alt}
            popupContent={popup}
          />
        );
      })}
    </div>
  );
};

export default PlanetTrack;
