
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Calendar, Award, Users } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Donopoly | Construcción y Remodelación de Calidad';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      
      {/* Trayectoria Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Nuestra Trayectoria</h2>
            <p className="paragraph">
              En Donopoly nos enorgullece nuestra larga trayectoria de excelencia y servicio excepcional. Estos números reflejan nuestro compromiso con la calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/20 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-lg font-medium">Años de Experiencia</p>
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-lg font-medium">Proyectos Culminados</p>
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">400+</h3>
              <p className="text-lg font-medium">Clientes Satisfechos</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/sobre-nosotros" className="btn-primary">Conozca más sobre nosotros</a>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
