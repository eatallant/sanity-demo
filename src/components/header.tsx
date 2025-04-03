import React from 'react';
import Link from 'next/link';
import { Nav } from './nav';
import { Icons } from './icons';
import { MobileNav } from './mobile-nav';
import { HEADERNAV_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import { type HEADERNAV_QUERYResult } from '@/sanity/types';

export async function Header() {
  const { data }: { data: HEADERNAV_QUERYResult } = await sanityFetch({
    query: HEADERNAV_QUERY
  });

  return (
    <header className="fixed top-0 z-50 flex items-center w-full h-12 bg-white border-b">
      <Link
        href="/"
        className="flex mx-2 md:mx-8 transition-transform duration-200 hover:scale-105"
      >
        <Icons.bracketsAngle />
      </Link>
      <Nav sanityData={data} className="hidden md:flex" />
      <MobileNav className="pr-2 ml-auto md:hidden" />
    </header>
  );
}
