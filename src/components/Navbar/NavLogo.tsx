import { cn } from "@/lib/utils";
import Logo from "../../../public/assets/Logo SVG/Logo_oficial_favcon (copia).svg";

export const NavLogo = ({ scrolled, isOpen, pathname }: {
  scrolled: boolean;
  isOpen: boolean;
  pathname: string;
}) => (
  <div className="flex items-center space-x-2">
    <img className="mr-1 w-20 h-12" src={Logo} alt="logo" />
    <a
      href="/"
      className={cn(
        "font-display text-lg lg:text-2xl transition-all duration-300",
        pathname === "/"
          ? scrolled || isOpen
            ? "text-primary"
            : "text-white"
          : "text-primary"
      )}
      aria-label="RM Construction & Design Studio Inc."
    >
      <span className="hidden md:inline">RM Construction & Design Studio Inc.</span>
      <span className="md:hidden">RM Construction &<br />Design Studio Inc.</span>
    </a>
  </div>
);