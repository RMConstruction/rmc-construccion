
// import React, { useState, useEffect } from 'react';
// import { cn } from "@/lib/utils";
// import { Menu, X, ChevronDown, LogOut } from "lucide-react";
// import { 
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import Logo from "../../public/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         scrolled || isOpen ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
//       )}
//     >
//       <div className="container-custom flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <img className="w-8 h-8" src={Logo} alt="" />
//           <a
//             href="/"
//             className={cn(
//               "font-display text-2xl font-bold transition-all duration-300",
//               scrolled || isOpen ? "text-primary" : "text-white"
//             )}
//             aria-label="Donopoly Remodeling"
//           >
//             Arquitectura
//           </a>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-2">
//           <NavigationMenu>
//             <NavigationMenuList className="space-x-1">
//               <NavigationMenuItem>
//                 <NavigationMenuLink
//                   href="/"
//                   className={cn(
//                     "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
//                     scrolled ? "text-foreground" : "text-white"
//                   )}
//                 >
//                   Inicio
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger
//                   className={cn(
//                     "px-3 py-2 hover:bg-white/30 hover:text-white rounded-md text-sm font-medium transition-colors",
//                     scrolled
//                       ? "text-foreground hover:text-foreground"
//                       : "text-white",
//                     "bg-transparent hover:bg-white/30 data-[state=open]:bg-bg-white/30"
//                   )}
//                 >
//                   Servicios
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid gap-1 p-4 w-[200px]">
//                     <li>
//                       <NavigationMenuLink
//                         href="/servicios/residencial"
//                         className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
//                       >
//                         <div className="text-sm font-medium">
//                           Remodelación Residencial
//                         </div>
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink
//                         href="/servicios/comercial"
//                         className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
//                       >
//                         <div className="text-sm font-medium">
//                           Construcción Comercial
//                         </div>
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink
//                         href="/#services"
//                         className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
//                       >
//                         <div className="text-sm font-medium">
//                           Todos los Servicios
//                         </div>
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger
//                   className={cn(
//                     "px-3 py-2 hover:bg-white/30 hover:text-white rounded-md text-sm font-medium transition-colors",
//                     scrolled
//                       ? "text-foreground hover:text-foreground"
//                       : "text-white",
//                     "bg-transparent hover:bg-white/30 data-[state=open]:bg-white/30"
//                   )}
//                 >
//                   Proyectos
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid gap-1 p-4 w-[200px]">
//                     <li>
//                       <NavigationMenuLink
//                         href="/proyectos/residenciales"
//                         className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
//                       >
//                         <div className="text-sm font-medium">Residenciales</div>
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink
//                         href="/proyectos/comerciales"
//                         className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
//                       >
//                         <div className="text-sm font-medium">Comerciales</div>
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink
//                         href="/#portfolio"
//                         className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
//                       >
//                         <div className="text-sm font-medium">
//                           Todos los Proyectos
//                         </div>
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink
//                   href="/sobre-nosotros"
//                   className={cn(
//                     "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
//                     scrolled ? "text-foreground" : "text-white"
//                   )}
//                 >
//                   Sobre Nosotros
//                 </NavigationMenuLink>
//               </NavigationMenuItem>

//               {/* <NavigationMenuItem>
//                 <NavigationMenuLink
//                   href="/#testimonials"
//                   className={cn(
//                     "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
//                     scrolled ? "text-foreground" : "text-white"
//                   )}
//                 >
//                   Testimonios
//                 </NavigationMenuLink>
//               </NavigationMenuItem> */}
//             </NavigationMenuList>
//           </NavigationMenu>

//           <a
//             href="/#contact"
//             className={cn(
//               "btn-primary ml-2",
//               !scrolled && "bg-white text-primary hover:bg-white/90"
//             )}
//           >
//             Contáctanos
//           </a>
//         </div>

//         {/* Mobile Menu Button - Now with higher z-index to stay above the menu */}
//         <button
//           className={cn(
//             "md:hidden relative z-[60]",
//             isOpen
//               ? "text-foreground"
//               : scrolled
//               ? "text-foreground"
//               : "text-white"
//           )}
//           onClick={toggleMenu}
//           aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation - Solid background */}
//       <div
//         className={cn(
//           "md:hidden fixed inset-0 bg-white z-50 pt-20 transform transition-transform duration-300 ease-in-out",
//           isOpen ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         <div className="flex flex-col items-center space-y-6 p-6">
//           <a
//             href="/"
//             className="text-foreground text-lg font-medium hover:text-primary transition-colors"
//             onClick={closeMenu}
//           >
//             Inicio
//           </a>

//           <div className="w-full">
//             <div
//               className="flex justify-center items-center w-full py-2 relative"
//               onClick={() => {
//                 const el = document.getElementById("servicios-mobile");
//                 if (el) el.classList.toggle("hidden");
//               }}
//             >
//               <span className="text-foreground text-lg font-medium">
//                 Servicios
//               </span>
//               <ChevronDown size={20} className="absolute right-0" />
//             </div>
//             <div
//               id="servicios-mobile"
//               className="hidden py-2 space-y-3 bg-primary/10 rounded-lg"
//             >
//               <a
//                 href="/servicios/residencial"
//                 className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
//                 onClick={closeMenu}
//               >
//                 Remodelación Residencial
//               </a>
//               <a
//                 href="/servicios/comercial"
//                 className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
//                 onClick={closeMenu}
//               >
//                 Construcción Comercial
//               </a>
//               <a
//                 href="/#services"
//                 className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
//                 onClick={closeMenu}
//               >
//                 Todos los Servicios
//               </a>
//             </div>
//           </div>

//           <div className="w-full">
//             <div
//               className="flex justify-center items-center w-full py-2 relative"
//               onClick={() => {
//                 const el = document.getElementById("proyectos-mobile");
//                 if (el) el.classList.toggle("hidden");
//               }}
//             >
//               <span className="text-foreground text-lg font-medium">
//                 Proyectos
//               </span>
//               <ChevronDown size={20} className="absolute right-0" />
//             </div>
//             <div
//               id="proyectos-mobile"
//               className="hidden py-2 space-y-3 bg-primary/10 rounded-lg"
//             >
//               <a
//                 href="/proyectos/residenciales"
//                 className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
//                 onClick={closeMenu}
//               >
//                 Residenciales
//               </a>
//               <a
//                 href="/proyectos/comerciales"
//                 className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
//                 onClick={closeMenu}
//               >
//                 Comerciales
//               </a>
//               <a
//                 href="/#portfolio"
//                 className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
//                 onClick={closeMenu}
//               >
//                 Todos los Proyectos
//               </a>
//             </div>
//           </div>

//           <a
//             href="/sobre-nosotros"
//             className="text-foreground text-lg font-medium hover:text-primary transition-colors"
//             onClick={closeMenu}
//           >
//             Sobre Nosotros
//           </a>

//           {/* <a
//             href="/#testimonials"
//             className="text-foreground text-xl font-medium hover:text-primary transition-colors"
//             onClick={closeMenu}
//           >
//             Testimonios
//           </a> */}

//           <a
//             href="/#contact"
//             className="btn-primary w-full text-center mt-4"
//             onClick={closeMenu}
//           >
//             Contáctanos
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




















import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation
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
import Logo from "../../public/logo.png";

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
          <img className="w-8 h-8" src={Logo} alt="" />
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
            Arquitectura
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
                  Inicio
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
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink
                        href="/servicios/residencial"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          Remodelación Residencial
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/servicios/comercial"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          Construcción Comercial
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/#services"
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          Todos los Servicios
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
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
                    "bg-transparent hover:bg-white/30 data-[state=open]:bg-white/30"
                  )}
                >
                  Proyectos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-4 w-[200px]">
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
                        <div className="text-sm font-medium">
                          Todos los Proyectos
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

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
                  Sobre Nosotros
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
            Contáctanos
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
            Inicio
          </a>

          <div className="w-full">
            <div
              className="flex justify-center items-center w-full py-2 relative"
              onClick={() => {
                const el = document.getElementById("servicios-mobile");
                if (el) el.classList.toggle("hidden");
              }}
            >
              <span className="text-foreground text-lg font-medium">
                Servicios
              </span>
              <ChevronDown size={20} className="absolute right-0" />
            </div>
            <div
              id="servicios-mobile"
              className="hidden py-2 space-y-3 bg-primary/10 rounded-lg"
            >
              <a
                href="/servicios/residencial"
                className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Remodelación Residencial
              </a>
              <a
                href="/servicios/comercial"
                className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Construcción Comercial
              </a>
              <a
                href="/#services"
                className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Todos los Servicios
              </a>
            </div>
          </div>

          <div className="w-full">
            <div
              className="flex justify-center items-center w-full py-2 relative"
              onClick={() => {
                const el = document.getElementById("proyectos-mobile");
                if (el) el.classList.toggle("hidden");
              }}
            >
              <span className="text-foreground text-lg font-medium">
                Proyectos
              </span>
              <ChevronDown size={20} className="absolute right-0" />
            </div>
            <div
              id="proyectos-mobile"
              className="hidden py-2 space-y-3 bg-primary/10 rounded-lg"
            >
              <a
                href="/proyectos/residenciales"
                className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Residenciales
              </a>
              <a
                href="/proyectos/comerciales"
                className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Comerciales
              </a>
              <a
                href="/#portfolio"
                className="block text-center text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={closeMenu}
              >
                Todos los Proyectos
              </a>
            </div>
          </div>

          <a
            href="/sobre-nosotros"
            className="text-foreground text-lg font-medium hover:text-primary transition-colors"
            onClick={closeMenu}
          >
            Sobre Nosotros
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