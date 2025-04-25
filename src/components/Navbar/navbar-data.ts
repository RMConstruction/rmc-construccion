export const navItems = {
    main: [
      { href: "/", text: "Home" },
      { 
        text: "Services",
        subItems: [
          { href: "/servicios/planos-2d", text: "Design Studi" },
          { href: "/servicios/permisos", text: "Building Permits" },
          { 
            text: "Construction",
            isAccordion: true,
            subItems: [
              { href: "/servicios/construccion", text: "Construction Zone" },
              { href: "/servicios/project-manager", text: "Project Management" }
            ]
          }
        ]
      },
      { href: "/about-us", text: "About Us" },
      { href: "/contacto", text: "Contact Us", isButton: true }
    ]
  };