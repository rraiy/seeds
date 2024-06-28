'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/app/components/common/Button';
import LESSONS_INFO from '@/app/constants/content/home/exploreLesson';
import PlanetTrack from '@/app/components/planet/PlanetTrack';
import { EXPLORE_INFO } from '@/app/constants/content/home/exploreLesson';
import { GlobalContext } from '@/app/contexts/GlobalContext';

import styles from '@/app/styles/pages/home.module.scss';

const ExploreLessons = () => {
  const { isMobile } = useContext(GlobalContext);
  console.log(isMobile);

  return (
    <div
      className={twMerge(
        `flex flex-col justify-center items-center tablet:relative tablet:overflow-x-hidden tablet:pt-4 ${isMobile ? 'fill-container' : ''}`,
      )}
    >
      <Image className={styles.rocket} src="/images/icon_img/rocket.png" width={60} height={106} alt="class rocket" />
      <h2 className={styles.title}>{EXPLORE_INFO.title}</h2>
      <PlanetTrack />
      {isMobile && (
        <div className="hidden tablet:flex flex-col absolute top-[240px] ">
          {LESSONS_INFO.map((lesson) => {
            const { popup } = lesson;
            return (
              <Link className="py-2 w-[220px]" key={popup.name} href={popup.link}>
                <Button text={popup.name} widthLarge />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExploreLessons;
