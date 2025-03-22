
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight, Building, Briefcase, FileText, Cuboid, ClipboardCheck } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services: Service[] = [
    {
      icon: <Building className="h-10 w-10" />,
      title: 'Área de Construcción',
      description: 'Servicios completos de construcción para proyectos residenciales y comerciales.',
      link: '/servicios/construccion',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1931'
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: 'Project Manager (PM)',
      description: 'Gestión profesional de proyectos para optimizar tiempos, costos y resultados.',
      link: '/servicios/project-manager',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1470'
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Planos 2D',
      description: 'Diseño detallado y técnico de planos para una visualización clara de su proyecto.',
      link: '/servicios/planos-2d',
      imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1470'
    },
    {
      icon: <Cuboid className="h-10 w-10" />,
      title: 'Renders 3D',
      description: 'Visualizaciones tridimensionales realistas para ver su proyecto antes de construirlo.',
      link: '/servicios/renders-3d',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c3ac?auto=format&fit=crop&q=80&w=1470'
    },
    {
      icon: <ClipboardCheck className="h-10 w-10" />,
      title: 'Permisos',
      description: 'Gestión completa de permisos, licencias y cumplimiento normativo para su proyecto.',
      link: '/servicios/permisos',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1470'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-secondary opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Nuestros Servicios</h2>
          <p className="paragraph">
            Ofrecemos una amplia gama de servicios de construcción y diseño para transformar su espacio en algo extraordinario. Cada proyecto es único y recibe nuestra dedicación total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-lg shadow-md transition-all duration-500 hover:shadow-xl group overflow-hidden",
                "transform hover:translate-y-[-5px]"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <a 
                  href={service.link} 
                  className="flex items-center text-primary font-medium group-hover:text-primary/80"
                >
                  Ver más
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
