
import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Propietario Residencial",
      content: "El equipo de Donopoly transformó nuestra casa por completo. Su atención al detalle y profesionalismo son impresionantes. El proyecto se completó dentro del presupuesto y a tiempo. Estamos encantados con el resultado.",
      rating: 5
    },
    {
      id: 2,
      name: "María González",
      role: "Dueña de Negocio",
      content: "Contratamos a Donopoly para remodelar nuestra oficina y el resultado superó nuestras expectativas. El espacio es ahora moderno, funcional y refleja perfectamente nuestra marca. Recomendaría sus servicios sin dudarlo.",
      rating: 5
    },
    {
      id: 3,
      name: "José Martínez",
      role: "Cliente Residencial",
      content: "La remodelación de nuestra cocina fue una experiencia fantástica gracias al equipo profesional de Donopoly. Su dedicación a la calidad y al servicio al cliente es ejemplar. Definitivamente los volveremos a contratar.",
      rating: 4
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={cn(
          "w-5 h-5",
          index < rating ? "text-primary" : "text-gray-300"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-padding bg-secondary/50 opacity-0 transition-opacity duration-1000 overflow-hidden"
    >
      <div className="container-custom relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-[0.03]"></div>
        
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="paragraph">
            Nuestro compromiso con la excelencia se refleja en la satisfacción de nuestros clientes. Aquí hay algunas palabras de quienes han confiado en nosotros.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-white p-8 md:p-10 rounded-xl shadow-lg transition-all duration-1000",
                activeIndex === index 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10 absolute top-0 left-0 right-0"
              )}
            >
              <div className="flex flex-col items-center">
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                
                <p className="text-lg md:text-xl text-center mb-6 italic text-foreground/90">
                  "{testimonial.content}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-gray-300 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
