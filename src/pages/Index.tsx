import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CompanyBenefits from '@/components/Benefits/CompanyBenefits';
import Trajectory from '@/components/Trajectory';
// import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import imgOurCompany from '../../public/assets/img/our company.jpeg';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'RM Construction & Design Studio Inc';
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
              Introduction to Our Company
              </h2>
              <p className="paragraph mb-6">
              At RM Construction & Design Studio Inc., we transform visions into reality through
              innovative design, expert project planning, and precision execution. Specializing in new construction,
              custom-built concepts, home additions, Accessory Dwelling Units (ADUs), and remodels, we craft high-
              quality, tailored solutions that reflect your unique vision."
              </p>
              <p className="paragraph">
              "With a commitment to excellence, we combine cutting-edge design, strict code compliance, and
              seamless project management to ensure results that are not only visually stunning but also structurally
              sound and built to last. From concept to completion, we manage every detail with professionalism and
              efficiency—bringing your dream space to life, on time and within budget.
              </p>
              <div className="mt-8">
                <a href="/about-us" className="btn-primary">
                Know more about us
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={imgOurCompany}
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
      {/* <Portfolio /> */}

      {/* Contacto */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
