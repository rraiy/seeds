import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  imgSrc: string;
  imgAlt: string;
  className: string;
  titleClass?: string;
  text?: string;
}

const TextImageSection = ({ className, title, titleClass, text, imgSrc, imgAlt }: Props) => {
  return (
    <section className={className}>
      <div className="flex flex-col items-center justify-center desktop:mb-8">
        <h2 className={twMerge(titleClass, 'desktop:mb-4')}>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="flex">
        <Image className="z-10" width={800} height={800} src={imgSrc} alt={imgAlt} />
      </div>
    </section>
  );
};

export default TextImageSection;
