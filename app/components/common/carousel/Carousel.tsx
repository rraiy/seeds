"use client";

import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "@/app/styles/components/common/carousel/Carousel.module.scss";
import { ReactElement, useState } from "react";

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
      <ul className={styles["dot-container"]}>{dots} </ul>
    </div>
  ),
  customPaging: (currentIdx: number) => (
    <span className={clsx(styles.dot)}>&#9679;</span>
  ),
  dotsClass: clsx("slick-dots", styles.dots),
};

interface Props {
  children: Array<React.ReactElement>;
  className: string;
}

const Carousel = ({ children, className }: Props) => {
  const dotsArr = Array.from({ length: children.length }, (_, i) => i);

  return (
    <div className={styles.container}>
      <Slider className={className} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
