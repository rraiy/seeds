import Image from "next/image";

import styles from "@/styles/components/HomeBanner.module.scss";

import bannerImg from "./home_banner.jpg";

const HomeBanner = () => {
  const a = 1;

  return (
    <div className={styles.image}>
      <Image src={bannerImg} width={1440} height={800} />
    </div>
  );
};

export default HomeBanner;
