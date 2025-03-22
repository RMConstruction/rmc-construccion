
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from "lucide-react";

const CompanyBenefits = () => {
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

  const benefits = [
    {
      title: "Precisión y Calidad",
      description: "Aplicamos los más altos estándares en cada proyecto, garantizando resultados excepcionales."
    },
    {
      title: "Optimización de Tiempos",
      description: "Nuestros procesos eficientes aseguran el cumplimiento de plazos y la entrega puntual de proyectos."
    },
    {
      title: "Cumplimiento Normativo",
      description: "Nos encargamos de todos los permisos y regulaciones necesarios para su tranquilidad."
    },
    {
      title: "Equipo Profesional",
      description: "Contamos con expertos en cada área para ofrecer soluciones integrales y especializadas."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-secondary/30 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">
            Beneficios de Trabajar con Nosotros
          </h2>
          <p className="paragraph">
            En Arquitectura nos distinguimos por ofrecer un servicio de
            excelencia, enfocado en la satisfacción del cliente y la calidad del
            resultado final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex items-start gap-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
