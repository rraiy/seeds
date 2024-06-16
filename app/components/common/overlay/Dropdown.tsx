import { iNavItem } from '@/app/interface/constants/header';

interface Props {
  open: boolean;
  // label: string;
  content?: iNavItem[];
}

const Dropdown = ({ open = false, content }: Props) => {
  if (!open || !content) return null;
  return (
    <ul id="test" className="absolute w-[152px] rounded-xl z-20 top-10 bg-secondary/90 p-5">
      {content.map((item) => (
        <li key={item.label} className="py-4 hover:text-primary/80">
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
