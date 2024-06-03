import Image from "next/image";

import Carousel from "@/app/components/common/carousel/Carousel";
import styles from "@/app/styles/components/HomeBanner.module.scss";
import { BANNER_IMG_SIZE } from "@/app/constant/style/homeBanner";

import bannerImg from "./home_banner.jpg";
import bannerImg2 from "./home_banner_2.jpg";

const HomeBanner = () => {
  const pcWidth = BANNER_IMG_SIZE.desktop.width;
  const pcHeight = BANNER_IMG_SIZE.desktop.height;

  return (
    <Carousel className={styles.carousel}>
      <Image src={bannerImg} width={pcWidth} height={pcHeight} alt="123" />
      <Image src={bannerImg2} width={pcWidth} height={pcHeight} alt="123" />
    </Carousel>
  );
};

export default HomeBanner;
