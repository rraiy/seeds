'use client';

import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  appendDots: (dots: ReactElement) => (
    <div>
      <ul className="mb-16">{dots} </ul>
    </div>
  ),
  customPaging: () => <span className="absolute text-xl text-white opacity-50">&#9679;</span>,
  dotsClass: clsx('slick-dots'),
};

interface Props {
  size?: 'full' | 'large' | 'medium';
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Carousel = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        'relative w-full h-full',
        // size === 'full' && 'w-full',
        // size === 'large' && 'w-[1200px]',
        // size === 'medium' && 'w-[600px]',
        // 'mobile:w-screen',
      )}
    >
      <Slider className={className} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
