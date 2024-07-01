import { iNavItem } from '@/app/interface/constants/header';

const HEADER_ITEMS: Array<iNavItem> = [
  {
    label: '探索課程',
    href: '/all-lessons',
    children: [
      {
        label: '課程總覽',
        href: '/all-lessons',
      },
      {
        label: '肌力與體能',
        href: '/all-lessons/fitness-and-strength',
      },
    ],
  },
  {
    label: '查看場館',
    href: '/location',
  },
  {
    label: '收費方案',
    href: '#',
  },
  {
    label: '教練介紹',
    href: '/coach',
  },
];

export default HEADER_ITEMS;
