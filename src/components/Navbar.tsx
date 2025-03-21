
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a 
          href="/" 
          className="font-display text-2xl font-bold text-primary transition-all duration-300"
          aria-label="Donopoly Remodeling"
        >
          Donopoly
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink 
                        href="/servicios/residencial"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Remodelación Residencial</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="/servicios/comercial"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Construcción Comercial</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="/#services"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Todos los Servicios</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink 
                        href="/proyectos/residenciales"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Residenciales</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="/proyectos/comerciales"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Comerciales</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="/#portfolio"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Todos los Proyectos</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/sobre-nosotros"
                  className={navigationMenuTriggerStyle()}
                >
                  Sobre Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/#testimonials"
                  className={navigationMenuTriggerStyle()}
                >
                  Testimonios
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <a 
            href="/#contact" 
            className="btn-primary"
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-6 p-6">
          <a
            href="/"
            className="text-foreground text-xl font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Inicio
          </a>
          
          <div className="w-full">
            <div 
              className="flex justify-between items-center w-full py-2 border-b border-gray-100"
              onClick={() => {
                const el = document.getElementById('servicios-mobile');
                if (el) el.classList.toggle('hidden');
              }}
            >
              <span className="text-foreground text-xl font-medium">Servicios</span>
              <ChevronDown size={20} />
            </div>
            <div id="servicios-mobile" className="hidden pl-4 py-2 space-y-3">
              <a
                href="/servicios/residencial"
                className="block text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Remodelación Residencial
              </a>
              <a
                href="/servicios/comercial"
                className="block text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Construcción Comercial
              </a>
              <a
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Todos los Servicios
              </a>
            </div>
          </div>
          
          <div className="w-full">
            <div 
              className="flex justify-between items-center w-full py-2 border-b border-gray-100"
              onClick={() => {
                const el = document.getElementById('proyectos-mobile');
                if (el) el.classList.toggle('hidden');
              }}
            >
              <span className="text-foreground text-xl font-medium">Proyectos</span>
              <ChevronDown size={20} />
            </div>
            <div id="proyectos-mobile" className="hidden pl-4 py-2 space-y-3">
              <a
                href="/proyectos/residenciales"
                className="block text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Residenciales
              </a>
              <a
                href="/proyectos/comerciales"
                className="block text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Comerciales
              </a>
              <a
                href="/#portfolio"
                className="block text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Todos los Proyectos
              </a>
            </div>
          </div>
          
          <a
            href="/sobre-nosotros"
            className="text-foreground text-xl font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Sobre Nosotros
          </a>
          
          <a
            href="/#testimonials"
            className="text-foreground text-xl font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Testimonios
          </a>
          
          <a 
            href="/#contact" 
            className="btn-primary w-full text-center mt-4"
            onClick={closeMenu}
          >
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
