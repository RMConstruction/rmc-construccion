import { cn } from "@/lib/utils";
import { X, ChevronDown, Menu } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const NavMobileMenu = ({ 
  isOpen, 
  scrolled, 
  pathname, 
  toggleMenu, 
  closeMenu,
  mobileServicesOpen,
  toggleMobileServices
}: {
  isOpen: boolean;
  scrolled: boolean;
  pathname: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  mobileServicesOpen: boolean;
  toggleMobileServices: () => void;
}) => (
  <>
    <button
      className={cn(
        "lg:hidden relative z-[60]",
        isOpen
          ? "text-foreground"
          : pathname === "/"
          ? scrolled
            ? "text-foreground"
            : "text-white"
          : "text-foreground"
      )}
      onClick={toggleMenu}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </button>

    <div
      className={cn(
        "lg:hidden fixed inset-0 bg-white z-50 pt-20 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col items-center space-y-4 p-6">
        <a
          href="/"
          className="text-foreground text-lg font-medium hover:text-primary transition-colors"
          onClick={closeMenu}
        >
          Home
        </a>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="services" className="border-none">
            <AccordionTrigger 
              className="py-2 text-lg font-medium text-center justify-center hover:text-primary"
              onClick={toggleMobileServices}
            >
              <div className="flex items-center">
                Services
                {/* <ChevronDown className={cn(
                  "ml-1 h-5 w-5 transition-transform",
                  mobileServicesOpen && "rotate-180"
                )} /> */}
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <div className="mt-2 w-full">
                <Accordion type="single" collapsible className="w-full py-2 bg-primary/20 rounded-lg">
                  <ul className="space-y-1 text-center">
                    <li>
                      <a 
                        href="/services/design-studio" 
                        className="py-1 text-lg font-medium hover:text-primary"
                        onClick={closeMenu}
                      >
                        Design Studio
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/services/building-permits" 
                        className="py-1 text-lg font-medium hover:text-primary"
                        onClick={closeMenu}
                      >
                        Building Permits
                      </a>
                    </li>
                  </ul>
                  <AccordionItem value="construccion" className="border-none">
                    <AccordionTrigger className="py-2 text-lg font-medium text-center justify-center">
                      Construction
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <a
                          href="/services/construction-zone"
                          className="px-4 py-1 text-lg text-center text-muted-foreground hover:text-primary"
                          onClick={closeMenu}
                        >
                          Construction Zone
                        </a>
                        <a
                          href="/services/project-management"
                          className="px-4 py-1 text-lg text-center text-muted-foreground hover:text-primary"
                          onClick={closeMenu}
                        >
                          Project Management
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>    
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <a
          href="/about-us"
          className="text-foreground text-lg font-medium hover:text-primary transition-colors"
          onClick={closeMenu}
        >
          About Us
        </a>

        <a
          href="/contact"
          className="btn-primary w-full text-center mt-4"
          onClick={closeMenu}
        >
          Contact Us
        </a>
      </div>
    </div>
  </>
);