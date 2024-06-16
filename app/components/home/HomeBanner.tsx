import Image from 'next/image';

import Carousel from '@/app/components/common/carousel/Carousel';
import styles from '@/app/styles/components/HomeBanner.module.scss';
import BANNER_IMG_SIZE from '@/app/constants/style/homeBanner';

function HomeBanner() {
  const pcWidth = BANNER_IMG_SIZE.desktop.width;
  const pcHeight = BANNER_IMG_SIZE.desktop.height;

  return (
    <Carousel className={styles.carousel}>
      <Image src="/images/home_banner_2.jpg" width={pcWidth} height={pcHeight} alt="123" />
      <Image src="/images/home_banner_3.jpg" width={pcWidth} height={pcHeight} alt="123" />
    </Carousel>
  );
}

export default HomeBanner;
