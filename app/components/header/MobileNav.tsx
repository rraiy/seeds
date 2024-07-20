import Link from 'next/link';

import HEADER_ITEMS from '@/app/constants/content/header';

interface Props {
  handleClose?: () => void;
}

const MobileNav = ({ handleClose }: Props) => {
  return (
    <div>
      <ul className="flex-col font-medium [&>*]:mx-5 ">
        {HEADER_ITEMS.map((item) => {
          const { label, children } = item;
          return (
            <li key={label} className="mobile_nav_li" onClick={() => handleClose}>
              {item.href ? <Link href={item.href}>{label}</Link> : <>{label}</>}
              {children && (
                <ul className="px-4 text-base" onClick={handleClose}>
                  {children.map((sub) => (
                    <li key={sub.label} className="pt-4">
                      {sub.href && <Link href={sub.href}>{sub.label}</Link>}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
        <li className="mobile_nav_li">聯絡我們</li>
      </ul>
    </div>
  );
};

export default MobileNav;
