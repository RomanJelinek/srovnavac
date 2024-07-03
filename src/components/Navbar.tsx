"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { categories } from "@/constants/categories";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-12">
      <div className="flex gap-6 items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link href="/" passHref>
          <span className="flex flex-col items-center justify-center">
            <Image
              src="/img/praha.png"
              width={64}
              height={64}
              alt="Co dělat v Praze"
            />
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col flex-wrap font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {categories.map((link) => (
              <li key={link.url}>
                <Link href={`/${link.url}`} passHref>
                  <span
                    className={`align-left block py-3 px-4 rounded md:p-0 ${
                      pathname === link.url
                        ? "text-blue-700 md:text-blue-700 dark:text-blue-500"
                        : "text-black md:text-black dark:text-white"
                    }`}
                    aria-current={pathname === link.url ? "page" : undefined}
                  >
                    {link.type}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
