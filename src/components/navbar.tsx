import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Badge } from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import IMG from "../../public/nike.ico";

import { siteConfig } from "@/config/site";
import { FaCartShopping } from "react-icons/fa6";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

export const Navbar = () => {
  const pathName = window.location.pathname 

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img alt="LOGO" src={IMG} width={40} className="filter dark:invert"/>
            <p className="font-bold text-inherit">NIKE</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                isDisabled={item.label == 'Sale' || item.label == 'News' ? true : false}
                className={clsx(
                  linkStyles({ color: pathName == `${item.href}` ? "primary" : "foreground"  }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color={"foreground"}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link href="/cart">
            <Badge content=""  color="warning" variant="solid">
              <FaCartShopping size={20} className="text-default-500" />
            </Badge>
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.twitter}>
          <TwitterIcon className="text-default-500" />
        </Link>
        <Link href="/cart">
          <Badge content=""  color="warning" variant="solid">
            <FaCartShopping size={20} className="text-default-500" />
          </Badge>
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                isDisabled={
                  item.label == 'Sale' || item.label == 'News' || item.label == 'Jordan' || item.label == 'Discounts'
                }
                color={pathName == `${item.href}` ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>

            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
