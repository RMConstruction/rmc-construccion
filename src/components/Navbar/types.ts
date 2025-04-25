import { ReactNode } from "react";

export type NavItem = {
  href: string;
  text: string;
  subItems?: NavItem[];
  isButton?: boolean;
};

export type NavbarState = {
  isOpen: boolean;
  scrolled: boolean;
  mobileServicesOpen: boolean;
  location: { pathname: string };
};