'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  appendDots: (dots: ReactElement) => (
    <div>
      <ul className="max-w-[300px] mb-16 mobile:mb-28 mobile:max-w-full">{dots} </ul>
    </div>
  ),
  customPaging: () => <div className="w-[24px] h-[2px] bg-white opacity-50" />,
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
