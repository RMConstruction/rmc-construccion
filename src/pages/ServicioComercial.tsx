
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle } from "lucide-react";

const ServicioComercial = () => {
  useEffect(() => {
    document.title = 'Construcción Comercial | Donopoly';
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
                  {/* <Home className="h-4 w-4 mr-1" /> */}
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#services">Servicios</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Construcción Comercial</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Construcción Comercial</h1>
          <p className="paragraph max-w-3xl">
            Servicios completos de construcción y remodelación para espacios comerciales que impulsan su negocio.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Espacio comercial moderno" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-display font-bold mb-6">Soluciones comerciales a medida</h2>
              <p className="mb-6 text-lg">
                Ofrecemos servicios integrales de construcción y remodelación comercial diseñados para crear espacios de trabajo eficientes, atractivos y funcionales que reflejen la identidad de su marca.
              </p>
              <p className="mb-6">
                Comprendemos que cada negocio tiene requisitos únicos, por lo que desarrollamos soluciones personalizadas que optimizan el espacio, mejoran la productividad y causan una impresión duradera en sus clientes.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-2">Nuestros servicios incluyen:</h3>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Construcción de oficinas y espacios de trabajo</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Remodelación de locales comerciales</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Diseño y construcción de restaurantes</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Instalaciones especializadas para comercios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Por qué elegirnos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">⏱️</div>
              <h3 className="text-xl font-semibold mb-3">Eficiencia</h3>
              <p>Completamos proyectos a tiempo y dentro del presupuesto para minimizar interrupciones en su negocio.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Calidad</h3>
              <p>Utilizamos materiales de primera calidad y técnicas avanzadas para garantizar resultados duraderos.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Experiencia</h3>
              <p>Nuestro equipo cuenta con amplia experiencia en proyectos comerciales de diversos tamaños y complejidades.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-primary">📋</div>
              <h3 className="text-xl font-semibold mb-3">Cumplimiento</h3>
              <p>Garantizamos que todos los proyectos cumplan con los códigos y regulaciones de construcción actuales.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Impulse su negocio con un espacio optimizado</h2>
            <p className="mb-8">
              Contáctenos hoy mismo para discutir cómo podemos ayudarle a crear el espacio comercial perfecto para su negocio.
            </p>
            <a href="/#contact" className="btn-primary">Solicitar Presupuesto</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicioComercial;
