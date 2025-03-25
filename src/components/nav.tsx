"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Icons } from "./icons";

const components: { title: string; href: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
  },
  {
    title: "Hover Card",
    href: "#",
  },
  {
    title: "Progress",
    href: "#",
  },
  {
    title: "Scroll-area",
    href: "#",
  },
  {
    title: "Tabs",
    href: "#",
  },
  {
    title: "Tooltip",
    href: "#",
  },
];

interface NavProps {
  className: string;
}

export function Nav({ className }: NavProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavCard />
        <NavSubMenu />
        <NavLink />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const NavLink = () => {
  return (
    <NavigationMenuItem>
      <Link href='/docs' legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const NavSubMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='grid w-[300px] gap-3 p-4 md:grid-cols-2 lg:w-[400px] '>
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            ></ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const NavCard = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
          <li className='row-span-3'>
            <NavigationMenuLink asChild>
              <a
                className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md hover:bg-gray-200'
                href='/'
              >
                <Icons.rocket height={50} width={50} />
                <div className='mb-2 mt-4 text-lg font-medium'>Web Design</div>
                <p className='text-sm leading-tight text-muted-foreground'>
                  Beautifully designed components that you can copy and paste
                  into your apps. Accessible. Customizable. Open Source.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href='#' title='Introduction'>
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href='#' title='Installation'>
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href='#' title='Typography'>
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
