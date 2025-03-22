import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Award, CheckCircle, Users, Clock, Calendar, Star } from "lucide-react";

const SobreNosotros = () => {
  useEffect(() => {
    document.title = 'Sobre Nosotros | Donopoly';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      
      <div className="pt-20 pb-12 bg-secondary/50">
        <div className="container-custom">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Sobre Nosotros</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Sobre Nosotros</h1>
          <p className="paragraph max-w-3xl">
            Conozca más sobre Donopoly, nuestra historia, valores y el equipo que hace posible cada uno de nuestros proyectos.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Nuestra Historia</h2>
              <p className="mb-6">
                Fundada en 2005, Donopoly nació con una visión clara: transformar espacios ordinarios en extraordinarios. Lo que comenzó como una pequeña empresa de remodelación residencial se ha convertido en una firma líder en construcción y remodelación con un historial comprobado de excelencia.
              </p>
              <p className="mb-6">
                A lo largo de los años, hemos crecido y evolucionado, expandiendo nuestros servicios para incluir proyectos comerciales y residenciales de gran escala, mientras mantenemos nuestra dedicación a la calidad y la satisfacción del cliente que nos ha caracterizado desde el principio.
              </p>
              <p>
                Hoy, con más de una década de experiencia, seguimos comprometidos con nuestra misión original: crear espacios excepcionales que superen las expectativas de nuestros clientes, combinando artesanía tradicional con técnicas modernas y materiales de la más alta calidad.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2670&auto=format&fit=crop" 
                alt="Equipo de Donopoly trabajando" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Nuestra Trayectoria</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-lg font-medium">Años de Experiencia</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-lg font-medium">Proyectos Culminados</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">400+</h3>
              <p className="text-lg font-medium">Clientes Satisfechos</p>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Nuestra Evolución</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              <div className="relative z-10 mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mx-auto">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">2005: Los inicios</h4>
                  <p>Fundación de Donopoly como una pequeña empresa de remodelación residencial con un equipo de 5 personas.</p>
                </div>
              </div>
              
              <div className="relative z-10 mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mx-auto">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">2010: Expansión</h4>
                  <p>Expansión a proyectos comerciales y crecimiento del equipo a 15 profesionales. Apertura de nuestra primera oficina.</p>
                </div>
              </div>
              
              <div className="relative z-10 mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mx-auto">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">2015: Reconocimiento</h4>
                  <p>Reconocimiento como una de las mejores empresas de construcción de la región. Ampliación de servicios a proyectos de gran escala.</p>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mx-auto">
                    <Clock className="h-4 w-4" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg mb-2">Actualidad: Liderazgo</h4>
                  <p>Posicionados como líderes en el sector, con un equipo de más de 30 profesionales y presencia en múltiples ciudades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" 
                alt="Equipo de Donopoly" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-display font-bold mb-6">Nuestros Valores</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Excelencia</h3>
                    <p>Nos esforzamos por alcanzar la excelencia en cada aspecto de nuestro trabajo, desde la planificación inicial hasta los toques finales.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Integridad</h3>
                    <p>Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo siempre los más altos estándares éticos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Colaboración</h3>
                    <p>Trabajamos de cerca con nuestros clientes y entre nuestro equipo para asegurar que cada proyecto sea un éxito compartido.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Innovación</h3>
                    <p>Constantemente buscamos nuevas técnicas, materiales y soluciones para ofrecer resultados excepcionales y sostenibles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-bold mb-6">Trabajemos Juntos</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            ¿Listo para comenzar su próximo proyecto con un equipo que se preocupa tanto por la calidad como usted? Contáctenos hoy mismo.
          </p>
          <a href="/#contact" className="btn-primary">Contáctenos</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SobreNosotros;
