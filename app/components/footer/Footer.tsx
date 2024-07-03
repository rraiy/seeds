import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare, FaLine } from 'react-icons/fa';

import FOOTER_INFO from '@/app/constants/content/footer';

const Footer = () => {
  return (
    <footer className="max-w-screen-xl w-full flex justify-center bg-primary">
      <div className="w-max-[1440px] w-5/6 mx-auto max-w-screen-xl p-4 py-20 tablet:w-screen mobile:p-8">
        <div className="flex justify-between mobile:flex-col">
          <div className="mb-6 mobile:mb-10">
            <Link href="/">
              <Image className="me-3" src="/images/footer-logo.png" width={180} height={48} alt="喜茲體能" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-20 tablet:gap-10 mobile:grid-cols-1">
            {FOOTER_INFO.map((item) => {
              return (
                <div key={item.label}>
                  <h2 className="mb-6 font-semibold text-white  text-l">{item.label}</h2>
                  <ul className="text-buttonStroke  font-medium">
                    {item.children &&
                      item.children.map((subItem) => (
                        <li key={subItem.label} className="py-2 mobile:pl-4">
                          <Link href={subItem.href} className="hover:underline text-white text-sm">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              );
            })}
            <div className="flex-col">
              <p className="mb-6 font-semibold text-white text-l">聯絡我們</p>
              <div className="flex">
                <Link
                  href="https://www.facebook.com/seedstraininghq"
                  className="text-buttonStroke hover:text-white dark:hover:text-white"
                >
                  <FaFacebookSquare className="h-8 w-8" />
                  <span className="sr-only">Facebook page</span>
                </Link>

                <Link
                  href="https://www.instagram.com/seedstraininghq/"
                  className="text-buttonStroke hover:text-white dark:hover:text-white ms-5"
                >
                  <FaInstagramSquare className="h-8 w-8" />
                  <span className="sr-only">Instagram page</span>
                </Link>
                <Link
                  href="https://lin.ee/S49cXRP"
                  className="text-buttonStroke hover:text-white dark:hover:text-white ms-5"
                >
                  <FaLine className="h-8 w-8" />
                  <span className="sr-only">Line</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-color-buttonStroke sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-buttonStroke sm:text-center ">
            © 2024{' '}
            <Link href="/" className="hover:underline">
              Seeds Training{' '}
            </Link>
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
