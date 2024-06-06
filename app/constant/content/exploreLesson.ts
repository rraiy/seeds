import PlanetInfo from '@/app/interface/constants/exploreLessons';
import styles from '@/app/styles/components/planet/PlanetTrack.module.scss';

const LESSONS_INFO: PlanetInfo[] = [
  {
    popup: {
      name: 'mock',
      description: 'mock',
      subItem: ['mock'],
    },
    planet: {
      className: styles.green,
      src: '/image/universe/green_planet.png',
      width: 88,
      height: 88,
      alt: 'green',
    },
  },
  {
    popup: {
      name: '肌力與體能',
      description: '肌力與體能的描述',
      subItem: ['積體1', '積體2', '積體3'],
    },
    planet: {
      className: styles.orange,
      src: '/image/universe/orange_planet.png',
      width: 144,
      height: 144,
      alt: 'universe',
    },
  },
  {
    popup: {
      name: '跑步課程',
      description: '跑步課程的描述',
      subItem: ['跑步1', '跑步2', '跑步3'],
    },
    planet: {
      className: styles.yellow,
      src: '/image/universe/yellow_planet.png',
      width: 164,
      height: 156,
      alt: 'universe',
    },
  },
  {
    popup: {
      name: 'mock',
      description: 'mock',
      subItem: ['mock'],
    },
    planet: {
      className: styles.blue,
      src: '/image/universe/blue_planet.png',
      width: 188,
      height: 108,
      alt: 'universe',
    },
  },
  {
    popup: {
      name: 'mock',
      description: 'mock',
      subItem: ['mock'],
    },
    planet: {
      className: styles.red,
      src: '/image/universe/red_planet.png',
      width: 88,
      height: 88,
      alt: 'universe',
    },
  },
];

export default LESSONS_INFO;
