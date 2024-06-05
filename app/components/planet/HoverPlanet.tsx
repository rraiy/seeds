'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverAnchor,
  PopoverBody,
  PopoverFooter,
  Image,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

import styles from '@/app/styles/components/planet/HoverPlanet.module.scss';
import { PopupContent } from '@/app/interface/constants/exploreLessons';

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  popupContent: PopupContent;
  className?: string;
}

const HoverPlanet = ({ className, src, width, height, alt, popupContent }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowPopup = () => setIsOpen(true);
  const handleHidePopup = () => setIsOpen(false);

  return (
    <Popover isOpen={isOpen} closeOnBlur={false} returnFocusOnClose={false} trigger="hover">
      <Link href="/">
        <PopoverAnchor>
          <Image
            className={className}
            src={src}
            width={width}
            height={height}
            alt={alt}
            onMouseEnter={handleShowPopup}
            onMouseLeave={handleHidePopup}
          />
        </PopoverAnchor>
      </Link>
      <PopoverContent>
        <PopoverHeader pt={4} pb={4} fontWeight="bold" fontSize="larger">
          {popupContent.name}
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          <ul className={styles['popup-body']}>
            {popupContent.subItem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PopoverBody>
        <PopoverFooter display="flex" alignItems="center">
          <InfoOutlineIcon className={styles['info-icon']} />
          點擊星球了解更多
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default HoverPlanet;
