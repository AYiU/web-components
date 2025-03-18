import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { IMenuItem } from "../types";

type LinkOrNotProps = {
  url?: string;
  children: React.ReactNode;
  className?: string;
};

function LinkOrNot({ url, children, className }: LinkOrNotProps) {
  return url ? (
    <Link href={url} className={className}>
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
    return <>With Children</>;
  } else {
    return (
      <NavigationMenuLink asChild>
        <LinkOrNot
          url={item.url}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md hover:bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          {item.title}
        </LinkOrNot>
      </NavigationMenuLink>
    );
  }
}
type SiteHeaderProps = {
  siteName: string;
  menu: IMenuItem[];
};

export function SiteHeader({ siteName, menu }: SiteHeaderProps) {
  return (
    <header className="flex w-full shrink-0 items-center px-4 md:px-6 py-4 bg-gray-100">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetHeader>
          <SheetTitle>&nbsp;</SheetTitle>
        </SheetHeader>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            {siteName}
            <span className="sr-only">{siteName}</span>
          </Link>
          <div className="grid gap-2 py-6">
            {menu.map((item, key) => (
              <Link
                key={key}
                href={item.url!}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="text-lg mr-6 hidden lg:flex" prefetch={false}>
        {siteName}
        <span className="sr-only">{siteName}</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {menu.map((item, key) => (
            <MenuItem key={key} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex gap-2">&nbsp;</div>
    </header>
  );
}

type MenuIconProps = {
  className?: string;
};

function MenuIcon(props: MenuIconProps) {
  return (
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
