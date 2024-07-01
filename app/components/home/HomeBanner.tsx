import Image from 'next/image';

import BANNER_IMG from '@/app/constants/content/home/banner';
import Carousel from '@/app/components/common/carousel/Carousel';

function HomeBanner() {
  return (
    <Carousel className="[&_img]:object-cover mobile:min-h-[100%]">
      {BANNER_IMG.map((img: string) => (
        <Image
          key={img}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto object-cover mobile:h-[60vh]"
          src={img}
          alt="喜茲體能"
        />
      ))}
    </Carousel>
  );
}

export default HomeBanner;
