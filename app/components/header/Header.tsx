'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTransition, animated } from '@react-spring/web';

import { GlobalContext } from '@/app/contexts/GlobalContext';

import Button from '@/app/components/common/Button';
import Dropdown from '@/app/components/common/overlay/Dropdown';
import HEADER_ITEMS from '@/app/constants/content/header';
import MobileNav from '@/app/components/header/MobileNav';

import styles from '@/app/styles/components/header/Header.module.scss';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const pathname = usePathname();
  const { isMobile } = useContext(GlobalContext);

  const handleMobileDrawer = () => {
    setOpenDrawer((pre) => !pre);
  };

  const handleClose = () => {
    setOpenLabel(null);
    setOpenDrawer(false);
  };

  const transitions = useTransition(openDrawer, {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    enter: { transform: 'translateY(0%)', opacity: 1 },
    leave: { transform: 'translateY(-100%)', opacity: 0 },
    config: { tension: 220, friction: 20 },
  });

  return (
    <nav className={twMerge(styles.container, (pathname !== '/' || isMobile) && 'bg-black')}>
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
        <ul className="flex font-medium [&>*]:mx-5 text-white">
          {HEADER_ITEMS.map((item) => {
            const { label, children } = item;
            return (
              <li
                key={label}
                className="relative block py-2 rounded cursor-pointer hover:font-bold hover:text-gray-300"
                onMouseEnter={() => setOpenLabel(label)}
                onMouseLeave={() => setOpenLabel(null)}
              >
                {item.href ? (
                  <Link href={item.href} onClick={handleClose}>
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
                {children && <Dropdown open={openLabel === label} content={children} handleClose={handleClose} />}
              </li>
            );
          })}
          <Link href="https://lin.ee/S49cXRP">
            <Button text="聯絡我們" />
          </Link>
        </ul>
      </div>

      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="w-[calc(100%-40px)] absolute top-[100px] right-4 rounded-md bg-white p-4"
            >
              <MobileNav handleClose={handleClose} />
            </animated.div>
          ),
      )}
    </nav>
  );
};

export default Header;
