
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Service {
  icon: string;
  title: string;
  description: string;
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
      icon: '🏠',
      title: 'Remodelación Residencial',
      description: 'Transformamos su hogar con renovaciones personalizadas de cocinas, baños, pisos y más.',
    },
    {
      icon: '🏢',
      title: 'Construcción Comercial',
      description: 'Servicios completos de construcción y remodelación para espacios comerciales.',
    },
    {
      icon: '🛠️',
      title: 'Renovación Integral',
      description: 'Renovación de espacios completos, desde el diseño inicial hasta los toques finales.',
    },
    {
      icon: '🏗️',
      title: 'Adiciones y Ampliaciones',
      description: 'Amplíe su espacio actual con adiciones perfectamente integradas con su estructura existente.',
    },
    {
      icon: '🚿',
      title: 'Renovación de Baños',
      description: 'Diseño personalizado y renovación de baños con los mejores materiales y acabados.',
    },
    {
      icon: '🍳',
      title: 'Remodelación de Cocinas',
      description: 'Transforme su cocina en un espacio funcional y moderno que se adapte a su estilo de vida.',
    },
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
            Ofrecemos una amplia gama de servicios de construcción y remodelación para transformar su espacio en algo extraordinario. Cada proyecto es único y recibe nuestra dedicación total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl group",
                "transform hover:translate-y-[-5px]"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
