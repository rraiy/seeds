'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import BANNER_IMG from '@/app/constants/content/home/banner';
import Carousel from '@/app/components/common/carousel/Carousel';

function HomeBanner() {
  const [imagesLoaded, setImagesLoaded] = useState(Array(BANNER_IMG.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (imagesLoaded.every(Boolean) && !allImagesLoaded) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div>
      {allImagesLoaded ? (
        <Carousel className="mobile:min-h-[100%] mobile:mt-[20px]">
          {BANNER_IMG.map((img, index) => (
            <Image
              key={img}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto object-cover mobile:h-[50vh] mobile:object-contain"
              src={img}
              alt="喜茲體能"
              onLoad={() => handleImageLoad(index)}
            />
          ))}
        </Carousel>
      ) : (
        <div>
          {BANNER_IMG.map((img, index) => (
            <Image
              key={img}
              width="0"
              height="0"
              sizes="100vw"
              // className="hidden"
              src={img}
              alt="Loading"
              onLoad={() => handleImageLoad(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeBanner;
