'use client';

import Image from 'next/image';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
import { useState } from 'react';

import styles from '@/app/styles/components/planet/PlanetTrack.module.scss';

const PlanetTrack = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const handleShowPopup = () => {
    if (!openPopup) setOpenPopup(true);
    console.log(1);
  };

  const handleHidePopup = () => {
    if (openPopup) setOpenPopup(false);
  };

  return (
    <div className={styles.container}>
      <Popover isOpen={openPopup} closeOnBlur={false} returnFocusOnClose={false}>
        <Image className={styles.test} src="/image/universe/planet_track.png" width={956} height={704} alt="universe" />
        <Image className={styles.green} src="/image/universe/green_planet.png" width={88} height={88} alt="universe" />
        <Image
          className={styles.orange}
          src="/image/universe/orange_planet.png"
          width={144}
          height={144}
          alt="universe"
          onMouseEnter={() => handleShowPopup()}
          onMouseLeave={() => handleHidePopup()}
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
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PlanetTrack;
