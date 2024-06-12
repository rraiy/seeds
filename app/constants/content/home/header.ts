import { iNavItem } from '@/app/interface/constants/header';

const HEADER_ITEMS: Array<iNavItem> = [
  {
    label: '探索課程',
    children: [
      {
        label: '課程總覽',
        href: '#',
      },
      {
        label: '激勵課程',
        href: '#',
      },
    ],
  },
  {
    label: '關於喜茲',
    href: '#',
  },
];

export default HEADER_ITEMS;
