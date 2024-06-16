'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Tooltip from '@/app/components/common/overlay/Tooltip';
import LessonTooltipContent from '@/app/components/planet/LessonTooltipContent';
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
  return (
    <Tooltip
      className={clsx(className, 'hover:z-10')}
      content={<LessonTooltipContent content={popupContent} btnText="了解更多" />}
    >
      {popupContent.link ? (
        <Link href={popupContent.link}>
          <Image src={src} width={width} height={height} alt={alt} />
        </Link>
      ) : (
        <Image src={src} width={width} height={height} alt={alt} />
      )}
    </Tooltip>
  );
};

export default HoverPlanet;
