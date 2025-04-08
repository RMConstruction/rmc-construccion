import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "../../public/assets/Logo PNG/Logo_dorado.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Obtén la ruta actual

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Solo agregar el listener de scroll si estamos en la página de inicio
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Dependencia: location.pathname

  // Función para alternar la visibilidad de los submenús
  const toggleSubmenu = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (el.classList.contains("opacity-0")) {
        el.classList.remove("opacity-0", "max-h-0");
        el.classList.add("opacity-100", "max-h-[500px]");
      } else {
        el.classList.remove("opacity-100", "max-h-[500px]");
        el.classList.add("opacity-0", "max-h-0");
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // Aplica el cambio de color solo si estamos en la página de inicio y se ha hecho scroll
        location.pathname === "/"
          ? scrolled || isOpen
            ? "bg-white shadow-sm py-3"
            : "bg-transparent py-5"
          : "bg-white shadow-sm py-3"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img className="w-16 h-16" src={Logo} alt="logo" />
          <a
            href="/"
            className={cn(
              "font-display text-2xl font-bold transition-all duration-300",
              // Aplica el cambio de color solo si estamos en la página de inicio y se ha hecho scroll
              location.pathname === "/"
                ? scrolled || isOpen
                  ? "text-primary"
                  : "text-white"
                : "text-primary"
            )}
            aria-label="Donopoly Remodeling"
          >
            {/* RM Construction & Design Studio Inc */}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground"
                        : "text-white"
                      : "text-foreground"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 hover:text-white rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground hover:text-foreground"
                        : "text-white"
                      : "text-foreground hover:text-foreground",
                    "bg-transparent hover:bg-white/30 data-[state=open]:bg-bg-white/30"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink
                        href="/servicios/residencial"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          Residential Remodeling
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/servicios/comercial"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          Commercial Construction
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/#services"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          All Services
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 hover:text-white rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground hover:text-foreground"
                        : "text-white"
                      : "text-foreground hover:text-foreground",
                    "bg-transparent hover:bg-white/30 data-[state=open]:bg-white/30"
                  )}
                >
                  Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink
                        href="/proyectos/residenciales"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Residential</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/proyectos/comerciales"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Commercials</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/#portfolio"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          All Projects
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/sobre-nosotros"
                  className={cn(
                    "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? scrolled
                        ? "text-foreground"
                        : "text-white"
                      : "text-foreground"
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="/#contact"
            className={cn(
              "btn-primary ml-2",
              location.pathname === "/"
                ? !scrolled && "bg-white text-primary hover:bg-white/90"
                : "btn-primary"
            )}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button - Now with higher z-index to stay above the menu */}
        <button
          className={cn(
            "md:hidden relative z-[60]",
            isOpen
              ? "text-foreground"
              : location.pathname === "/"
              ? scrolled
                ? "text-foreground"
                : "text-white"
              : "text-foreground"
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Solid background */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-50 pt-20 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          <a
            href="/"
            className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Home
          </a>

          {/* Submenú de Servicios */}
          <div className="w-full">
            <div
              className="flex justify-center items-center w-full py-2 relative cursor-pointer"
              onClick={() => toggleSubmenu("servicios-mobile")}
            >
              <span className="text-foreground text-lg font-medium">
                Services
              </span>
              <ChevronDown size={20} className="absolute right-0" />
            </div>
            <div
              id="servicios-mobile"
              className="overflow-hidden transition-all duration-300 ease-in-out opacity-0 max-h-0"
            >
              <div className="py-2 space-y-3 bg-primary/10 rounded-lg">
                <a
                  href="/servicios/residencial"
                  className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={closeMenu}
                >
                  Residential Remodeling
                </a>
                <a
                  href="/servicios/comercial"
                  className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={closeMenu}
                >
                  Commercial Construction
                </a>
                <a
                  href="/#services"
                  className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={closeMenu}
                >
                  All Services
                </a>
              </div>
            </div>
          </div>

          {/* Submenú de Proyectos */}
          <div className="w-full">
            <div
              className="flex justify-center items-center w-full py-2 relative cursor-pointer"
              onClick={() => toggleSubmenu("proyectos-mobile")}
            >
              <span className="text-foreground text-lg font-medium">
                Projects
              </span>
              <ChevronDown size={20} className="absolute right-0" />
            </div>
            <div
              id="proyectos-mobile"
              className="overflow-hidden transition-all duration-300 ease-in-out opacity-0 max-h-0"
            >
              <div className="py-2 space-y-3 bg-primary/10 rounded-lg">
                <a
                  href="/proyectos/residenciales"
                  className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={closeMenu}
                >
                  Residential
                </a>
                <a
                  href="/proyectos/comerciales"
                  className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={closeMenu}
                >
                  Commercials
                </a>
                <a
                  href="/#portfolio"
                  className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                  onClick={closeMenu}
                >
                  All Projects
                </a>
              </div>
            </div>
          </div>

          <a
            href="/sobre-nosotros"
            className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            About Us
          </a>

          <a
            href="/#contact"
            className="btn-primary w-full text-center mt-4"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;