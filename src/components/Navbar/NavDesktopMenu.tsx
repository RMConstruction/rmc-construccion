import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const NavDesktopMenu = ({ scrolled, pathname, closeMenu }: {
  scrolled: boolean;
  pathname: string;
  closeMenu: () => void;
}) => (
  <div className="hidden lg:flex items-center space-x-2">
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={cn(
              "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
              pathname === "/"
                ? scrolled
                  ? "text-foreground"
                  : "text-white"
                : "text-foreground"
            )}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "px-3 py-2 hover:bg-white/30 hover:text-white rounded-md text-sm font-medium transition-colors",
              pathname === "/"
                ? scrolled
                  ? "text-foreground hover:text-foreground"
                  : "text-white"
                : "text-foreground hover:text-foreground",
              "bg-transparent hover:bg-white/30 data-[state=open]:bg-white/30"
            )}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 md:w-[250px]">
              <Accordion type="single" collapsible className="w-full">
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="/services/design-studio" 
                      className="py-1 text-sm font-medium hover:text-primary"
                      onClick={closeMenu}
                    >
                      Design Studio
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/services/building-permits" 
                      className="py-1 text-sm font-medium hover:text-primary"
                      onClick={closeMenu}
                    >
                      Building Permits
                    </a>
                  </li>
                </ul>
                <AccordionItem value="construccion" className="border-none">
                  <AccordionTrigger className="py-4 text-sm font-medium hover:text-primary">
                    Construction
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 flex flex-col space-y-2 py-2 bg-primary/20 rounded-lg">
                      <a 
                        href="/services/construction-zone" 
                        className="py-1 text-sm text-muted-foreground hover:text-primary"
                        onClick={closeMenu}
                      >
                        Construction Zone
                      </a>
                      <a 
                        href="/services/project-management" 
                        className="py-1 text-sm text-muted-foreground hover:text-primary"
                        onClick={closeMenu}
                      >
                        Project Management
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About Us */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about-us"
            className={cn(
              "px-3 py-2 hover:bg-white/30 rounded-md text-sm font-medium transition-colors",
              pathname === "/"
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

    {/* Contact Us Button */}
    <a
      href="/contact"
      className={cn(
        "btn-primary ml-2",
        pathname === "/"
          ? !scrolled && "bg-white text-primary hover:bg-white/90"
          : "btn-primary"
      )}
    >
      Contact Us
    </a>
  </div>
);