import React, { useRef, useEffect } from 'react';

const Contact = () => {
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-secondary/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Contáctenos</h2>
          <p className="paragraph">
            Estamos listos para hacer realidad su proyecto. Contáctenos hoy mismo para discutir sus necesidades y cómo podemos ayudarle.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 w-full rounded-md border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Su nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 w-full rounded-md border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Su correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 p-3 w-full rounded-md border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Escriba su mensaje aquí..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
