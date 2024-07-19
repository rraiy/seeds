import PlanetInfo, { tExploreInfo } from '@/app/interface/constants/exploreLessons';
import styles from '@/app/styles/components/planet/PlanetTrack.module.scss';

export const EXPLORE_INFO: tExploreInfo = {
  title: '探索課程',
};

const LESSONS_INFO: PlanetInfo[] = [
  // {
  //   popup: {
  //     name: 'mock',
  //     description: 'mock',
  //     subItem: ['mock'],
  //     link: '/',
  //   },
  //   planet: {
  //     className: styles.green,
  //     src: '/images/universe/green_planet.png',
  //     width: 88,
  //     height: 88,
  //     alt: 'green',
  //     link: '/',
  //   },
  // },
  {
    popup: {
      name: '越野跑訓練',
      description: '肌力與體能的描述',
      subItem: ['SkyHunter 越野跑訓練營', '士林越野官方訓練營', '越野跑肌力研習 6HR'],
      link: '/all-lessons',
    },
    planet: {
      className: styles.orange,
      src: '/images/universe/orange_planet.png',
      width: 120,
      height: 120,
      alt: 'universe',
      link: '/all-lessons',
    },
  },
  {
    popup: {
      name: '肌力與體能訓練',
      description: '跑步課程的描述',
      subItem: ['私人教練課', '團體課', '私人/企業包班', '回到肌礎研習 8HR'],
      link: '/all-lessons',
    },
    planet: {
      className: styles.yellow,
      src: '/images/universe/yellow_planet.png',
      width: 164,
      height: 156,
      alt: 'universe',
      link: '/all-lessons',
    },
  },
  {
    popup: {
      name: '其他課程',
      description: 'mock',
      subItem: ['101登高賽訓練營 ft.周青', '強韌力：解剖肌動學力量復原課程'],
      link: '/all-lessons',
    },
    planet: {
      className: styles.blue,
      src: '/images/universe/blue_planet.png',
      width: 188,
      height: 108,
      alt: 'universe',
      link: '/all-lessons',
    },
  },
  // {
  //   popup: {
  //     name: '我ㄉ世界',
  //     description: '啊囉哈啊囉哈啊囉哈啊囉哈啊囉哈',
  //     subItem: ['連鎖', '咖啡', '透明杯子'],
  //     link: '/',
  //   },
  //   planet: {
  //     className: styles.red,
  //     src: '/images/universe/red_planet.png',
  //     width: 88,
  //     height: 88,
  //     alt: 'universe',
  //     link: '/',
  //   },
  // },
];

export default LESSONS_INFO;
