'use client';

import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Carousel from '@/app/components/common/carousel/Carousel';
import getCenter from '@/app/utils/getCenter';
import { GlobalContext } from '@/app/contexts/GlobalContext';

interface Props {
  count: number;
  imgs: string[];
  hasCenter?: boolean; // Get the images array center to be focus
  className?: string;
}

// const mock = [
//   '/images/lessons/detail/lesson-fitness-1.jpg',
//   '/images/lessons/detail/lesson-fitness-1.jpg',
//   '/images/lessons/detail/lesson-fitness-1.jpg',
//   '/images/lessons/detail/lesson-fitness-1.jpg',
//   '/images/lessons/detail/lesson-fitness-1.jpg',
//   '/images/lessons/detail/lesson-fitness-1.jpg',
// ];

const ImgSlide = ({ count, imgs, hasCenter = false, className }: Props) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { isMobile } = useContext(GlobalContext);

  const containerRef = useRef<HTMLDivElement>(null);

  const imageNodes = imgs.map((item, idx) => {
    return (
      <div key={idx} className="min-w-[618px] flex justify-center items-center tablet:min-w-[84%]">
        <Image width="0" height="0" sizes="100vw" className="w-full h-auto object-cover" src={item} alt="喜茲體能" />
      </div>
    );
  });

  useEffect(() => {
    if (containerRef.current && hasCenter) {
      const centerItemIdx = getCenter(count);
      const scrollContainer = containerRef.current;
      const centerItem = scrollContainer.children[centerItemIdx] as HTMLDivElement;
      console.log('run1');
      // 計算方式
      // 容器寬度/2 得容器中心點
      // 圖片與中心點的差值 加上圖片/2的值 得左移距離(滾動距離)

      if (centerItem) {
        console.log('run2');
        const containerCenter = scrollContainer.offsetWidth / 2;
        const imageWidth = 618;
        const centerImgOffset = imageWidth * centerItemIdx + imageWidth / 2;
        const scrollPosition = centerImgOffset - containerCenter;

        scrollContainer.scrollLeft = scrollPosition;
        setIsReady(true);
        console.log('scrollPosition', scrollPosition);
      }
    } else {
      setIsReady(true);
    }
  }, [hasCenter]);

  return (
    <div
      className={twMerge(
        'w-[1200px] min-h-[472px] flex justify-center relative desktop:w-[768px] tablet:w-[90%] border-4 border-red ',
        className,
      )}
    >
      {!isMobile && (
        <>
          <div className="left-light-halo" />
          <div className="right-light-halo" />
          <div className={`${isReady ? 'visible' : 'invisible'} w-full flex overflow-x-scroll`} ref={containerRef}>
            {imageNodes}
          </div>
        </>
      )}
      {isMobile && <Carousel>{imageNodes}</Carousel>}
    </div>
  );
};

export default ImgSlide;
