
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CompanyBenefits from '@/components/CompanyBenefits';
import Trajectory from '@/components/Trajectory';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Arquitectura';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      <Hero />

      {/* Introducción de la empresa */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4">
                Introducción a Nuestra Empresa
              </h2>
              <p className="paragraph mb-6">
                En Arquitectura, nos especializamos en arquitectura, ingeniería
                y construcción de alta calidad. Con más de 15 años de
                experiencia en el sector, ofrecemos soluciones integrales para
                proyectos residenciales y comerciales.
              </p>
              <p className="paragraph">
                Nuestro enfoque combina innovación técnica, diseño funcional y
                construcción sostenible para crear espacios que superan las
                expectativas de nuestros clientes.
              </p>
              <div className="mt-8">
                <a href="/sobre-nosotros" className="btn-primary">
                  Conozca más sobre nosotros
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2670&auto=format&fit=crop"
                alt="Proyectos destacados"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios de trabajar con nosotros */}
      <CompanyBenefits />

      {/* Nuestra Trayectoria */}
      <Trajectory />

      {/* Nuestros Servicios */}
      <Services />

      {/* Nuestros Proyectos */}
      <Portfolio />

      {/* Contacto */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
