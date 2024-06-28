'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Button from '@/app/components/common/Button';
import Dropdown from '@/app/components/common/overlay/Dropdown';
import HEADER_ITEMS from '@/app/constants/content/header';
import MobileNav from '@/app/components/header/MobileNav';

import styles from '@/app/styles/components/header/Header.module.scss';

const Header = () => {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleMobileDrawer = () => {
    setOpenDrawer((pre) => !pre);
  };

  return (
    <nav className={styles.container}>
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image className={styles.logo} src="/images/logo.png" width={180} height={48} alt="喜茲體能 Logo" />
      </Link>

      <button
        type="button"
        className="hidden tablet:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-secondary focus:outline-none focus:ring-2"
        onClick={handleMobileDrawer}
      >
        {openDrawer ? (
          <FaTimes className="h-6 w-6 text-primary bg-white" />
        ) : (
          <FaBars className="h-6 w-6 text-primary" />
        )}
      </button>

      <div className="tablet:hidden">
        <ul className="flex font-medium [&>*]:mx-5">
          {HEADER_ITEMS.map((item) => {
            const { label, children } = item;
            return (
              <li
                key={label}
                className="relative block py-2 rounded cursor-pointer hover:font-bold"
                onMouseEnter={() => setOpenLabel(label)}
                onMouseLeave={() => setOpenLabel(null)}
              >
                {item.href ? <Link href={item.href}>{label}</Link> : <span>{label}</span>}
                {children && <Dropdown open={openLabel === label} content={children} />}
              </li>
            );
          })}
          <Button text="聯絡我們" />
        </ul>
      </div>

      {openDrawer && <MobileNav />}
    </nav>
  );
};

export default Header;
