import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src="/assets/nike/images/header-logo.svg"
            alt="Logo"
            width={130}
            height={29}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks?.map((item) => (
            <li key={item?.label} className="">
              <Link
                href={item?.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/assets/nike/icons/hamburger.svg"
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
