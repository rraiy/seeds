import PlanetInfo, { tExploreInfo } from '@/app/interface/constants/exploreLessons';
import styles from '@/app/styles/components/planet/PlanetTrack.module.scss';

export const EXPLORE_INFO: tExploreInfo = {
  title: '探索課程',
};

const LESSONS_INFO: PlanetInfo[] = [
  {
    popup: {
      name: 'mock',
      description: 'mock',
      subItem: ['mock'],
      link: '/',
    },
    planet: {
      className: styles.green,
      src: '/image/universe/green_planet.png',
      width: 88,
      height: 88,
      alt: 'green',
      link: '/',
    },
  },
  {
    popup: {
      name: '肌力與體能',
      description: '肌力與體能的描述',
      subItem: ['積體1', '積體2', '積體3'],
      link: '/',
    },
    planet: {
      className: styles.orange,
      src: '/image/universe/orange_planet.png',
      width: 144,
      height: 144,
      alt: 'universe',
      link: '/',
    },
  },
  {
    popup: {
      name: '跑步課程',
      description: '跑步課程的描述',
      subItem: ['跑步1', '跑步2', '跑步3'],
      link: '/',
    },
    planet: {
      className: styles.yellow,
      src: '/image/universe/yellow_planet.png',
      width: 164,
      height: 156,
      alt: 'universe',
      link: '/',
    },
  },
  {
    popup: {
      name: 'mock',
      description: 'mock',
      subItem: ['mock'],
      link: '/',
    },
    planet: {
      className: styles.blue,
      src: '/image/universe/blue_planet.png',
      width: 188,
      height: 108,
      alt: 'universe',
      link: '/',
    },
  },
  {
    popup: {
      name: '我ㄉ世界',
      description: '啊囉哈啊囉哈啊囉哈啊囉哈啊囉哈',
      subItem: ['連鎖', '咖啡', '透明杯子'],
      link: '/',
    },
    planet: {
      className: styles.red,
      src: '/image/universe/red_planet.png',
      width: 88,
      height: 88,
      alt: 'universe',
      link: '/',
    },
  },
];

export default LESSONS_INFO;
