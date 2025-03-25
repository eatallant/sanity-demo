"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContentVertical,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { Icons } from "./icons";

import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

type NavLink = {
  title: string;
  href: string;
};

interface MobileNavProps {
  className: string;
}

const linkList: (NavItem | NavLink)[] = [
  {
    title: "Products",
    links: [
      {
        title: "Web Design",
        href: "/",
      },
      {
        title: "SEO",
        href: "/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "FAQ",
        href: "/",
      },
      {
        title: "Documentation",
        href: "/",
      },
    ],
  },
  {
    title: "Contact",
    href: "/",
  },
];

function isNavItem(item: NavItem | NavLink): item is NavItem {
  return (item as NavItem).links !== undefined;
}

export function MobileNav({ className }: MobileNavProps): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost'>
            <Icons.menu />
          </Button>
        </SheetTrigger>
        <SheetContent className='flex flex-col px-1 whitespace-normal text-wrap'>
          <NavigationMenu
            mobile
            className='items-start whitespace-normal justify-normal text-wrap'
          >
            <NavigationMenuList className='grid gap-3 space-x-0'>
              {linkList.map((item, index) => {
                return isNavItem(item)
                  ? renderNavItem(item, index)
                  : renderNavLink(item, index);
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function renderNavItem(item: NavItem, index: number) {
  return (
    <NavigationMenuItem className='px-0 mx-0' key={index}>
      <NavigationMenuTrigger
        onPointerMove={preventHover}
        onPointerLeave={preventHover}
      >
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContentVertical className='' onPointerLeave={preventHover}>
        <ul className='pl-4'>
          {item.links.map((link, index) => renderNavLink(link, index))}
        </ul>
      </NavigationMenuContentVertical>
    </NavigationMenuItem>
  );
}

function renderNavLink(link: NavLink, index: number) {
  return (
    <NavigationMenuItem key={index}>
      <Link href={link.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "w-auto")}
        >
          <SheetClose className='text-left'>{link.title}</SheetClose>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

const preventHover = (event: any) => {
  const e = event as Event;
  e.preventDefault();
};
