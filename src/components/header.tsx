import React from "react";
import Link from "next/link";
import { Nav } from "./nav";
import { Icons } from "./icons";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className='fixed top-0 z-50 flex items-center w-full h-12 bg-white border-b'>
      <Link
        href='/'
        className='flex mx-2 md:mx-8 transition-transform duration-200 hover:scale-105'
      >
        <Icons.bracketsAngle />
      </Link>
      <Nav className='hidden md:flex' />
      <MobileNav className='pr-2 ml-auto md:hidden' />
    </header>
  );
}
