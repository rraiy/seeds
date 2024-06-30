import Link from 'next/link';

import { iNavItem } from '@/app/interface/constants/header';

interface Props {
  open: boolean;
  // label: string;
  content?: iNavItem[];
  handleClose?: () => void;
}

const Dropdown = ({ open = false, content, handleClose }: Props) => {
  if (!open || !content) return null;
  return (
    <ul id="test" className="absolute w-[152px] rounded-xl z-20 top-10 bg-secondary/90 p-5">
      {content.map((item) => (
        <li key={item.label} className="py-4 hover:text-primary/80" onClick={handleClose}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
