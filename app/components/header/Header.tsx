'use client';

import Image from 'next/Image';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import Button from '@/app/components/common/Button';
// import Drawer from '@/app/components/common/overlay/Drawer';
import Dropdown from '@/app/components/common/overlay/Dropdown';
import HEADER_ITEMS from '@/app/constants/content/header';

const Header = () => {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  // const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <nav className="max-w-screen-xl w-full h-24 z-10 flex justify-center items-center bg-white/5">
      <div className="w-full flex justify-between items-center mx-auto p-4 md:">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/image/logo.png" width={180} height={48} alt="喜茲體能 Logo" />
        </Link>

        <div className="md:hidden">
          <ul className="flex font-medium [&>*]:mx-5">
            {HEADER_ITEMS.map((item) => {
              const { label, children } = item;
              return (
                <li
                  key={label}
                  className="relative block py-2 rounded cursor-pointer hover:font-bold md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500"
                  onMouseEnter={() => setOpenLabel(label)}
                  onMouseLeave={() => setOpenLabel(null)}
                >
                  {label}
                  {children && <Dropdown open={openLabel === label} content={children} />}
                </li>
              );
            })}
            <Button text="聯絡我們" />
          </ul>
        </div>

        <button
          type="button"
          className="hidden md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          // onClick={() => setOpenDrawer(true)}
        >
          <FaBars className="h-8 w-8 text-blue-500" />
        </button>
        {/* {openDrawer && <Drawer content />} */}
      </div>
    </nav>
  );
};

export default Header;
