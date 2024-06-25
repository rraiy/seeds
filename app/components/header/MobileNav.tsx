// import Drawer from '@/app/components/common/overlay/Drawer';

import Link from 'next/link';

import HEADER_ITEMS from '@/app/constants/content/header';

const MobileNav = () => {
  return (
    <div className="w-[calc(100%-40px)] absolute top-[100px] right-4 rounded-md bg-white p-4">
      <ul className="flex-col font-medium [&>*]:mx-5">
        {HEADER_ITEMS.map((item) => {
          const { label, children } = item;
          return (
            <li key={label} className="mobile_nav_li">
              {item.href ? <Link href={item.href}>{label}</Link> : <>{label}</>}
              {children && (
                <ul className="px-4 text-base	">
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
