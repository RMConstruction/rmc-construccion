import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLogo } from "./NavLogo";
import { NavDesktopMenu } from "./NavDesktopMenu";
import { NavMobileMenu } from "./NavMobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        location.pathname === "/"
          ? scrolled || isOpen
            ? "bg-white shadow-sm py-3"
            : "bg-transparent py-5"
          : "bg-white shadow-sm py-3"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <NavLogo scrolled={scrolled} isOpen={isOpen} pathname={location.pathname} />
        <NavDesktopMenu scrolled={scrolled} pathname={location.pathname} closeMenu={closeMenu} />
        <NavMobileMenu 
          isOpen={isOpen}
          scrolled={scrolled}
          pathname={location.pathname}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          mobileServicesOpen={mobileServicesOpen}
          toggleMobileServices={toggleMobileServices}
        />
      </div>
    </nav>
  );
};

export default Navbar;