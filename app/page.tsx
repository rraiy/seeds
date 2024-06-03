import Image from "next/image";

import HomeBanner from "@/app/components/HomeBanner";
import styles from "@/app/styles/pages/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBanner />
    </main>
  );
}
