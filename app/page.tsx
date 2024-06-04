import ExploreLessons from '@/app/components/home/ExploreLessons';
import HomeBanner from '@/app/components/home/HomeBanner';
import styles from '@/app/styles/pages/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HomeBanner />
      </main>
      <ExploreLessons />
    </div>
  );
}
