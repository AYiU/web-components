import Link from "next/link";
import React, { Fragment, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import type { IMenuItem } from "../types";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

type LinkOrNotProps = {
  href: string | undefined;
  children: ReactNode;
  className?: string;
};

function LinkOrNot({ href, children, className }: LinkOrNotProps) {
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

type MenuItemProps = {
  item: IMenuItem;
};

export function MenuItem({ item }: MenuItemProps) {
  if (item.children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            {item.children.map((child, key) => (
              <ListItem
                href={child.url}
                title={child.title}
                // biome-ignore lint/suspicious/noArrayIndexKey: *
                key={key}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuLink asChild>
      <LinkOrNot
        href={item.url}
        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
      >
        {item.title}
      </LinkOrNot>
    </NavigationMenuLink>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          // biome-ignore lint/style/noNonNullAssertion: *
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

type SiteHeaderProps = {
  siteName: string;
  menu: IMenuItem[];
  right?: ReactNode;
};

export function SiteHeader({ siteName, menu, right }: SiteHeaderProps) {
  return (
    <header className="flex w-full shrink-0 items-center px-4 md:px-6 py-4 min-h-[68px] border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6 " />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetHeader>
          <SheetTitle>&nbsp;</SheetTitle>
        </SheetHeader>
        <SheetContent side="left">
          <Link href="/" prefetch={false}>
            {siteName}
            <span className="sr-only">{siteName}</span>
          </Link>

          <div className="grid gap-2 py-6 overflow-y-auto">
            {menu.map((item, key) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: *
              <Fragment key={key}>
                <SheetClose asChild>
                  <LinkOrNot
                    href={item.url}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {item.title}
                  </LinkOrNot>
                </SheetClose>
                {item.children?.map((child, subkey) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: *
                  <SheetClose asChild key={subkey} className="pl-4">
                    <Link
                      // biome-ignore lint/style/noNonNullAssertion: *
                      href={child.url!}
                      className="flex w-50 items-center"
                      prefetch={false}
                    >
                      {child.title}
                    </Link>
                  </SheetClose>
                ))}
              </Fragment>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="text-lg mr-6 hidden lg:flex" prefetch={false}>
        {siteName}
        <span className="sr-only">{siteName}</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {menu.map((item, key) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: *
            <MenuItem key={key} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex gap-2">{right}</div>
    </header>
  );
}

type MenuIconProps = {
  className?: string;
};

function MenuIcon(props: MenuIconProps) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: *
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
