import { iNavItem } from '@/app/interface/constants/header';

const HEADER_ITEMS: Array<iNavItem> = [
  {
    label: '探索課程',
    href: '/lessons',
    children: [
      {
        label: '課程總覽',
        href: '/lessons',
      },
      {
        label: '激勵課程',
        href: '/muscle',
      },
    ],
  },
  {
    label: '查看場館',
    href: '/',
  },
  {
    label: '收費方案',
    href: '#',
  },
  {
    label: '教練介紹',
    href: '#',
  },
];

export default HEADER_ITEMS;
