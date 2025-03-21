
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle } from "lucide-react";

const Construccion = () => {
  useEffect(() => {
    document.title = 'Área de Construcción | Donopoly';
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
                  <Home className="h-4 w-4 mr-1" />
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/servicios">Servicios</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Área de Construcción</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Área de Construcción</h1>
          <p className="paragraph max-w-3xl">
            Servicios profesionales de construcción para proyectos residenciales y comerciales con los más altos estándares de calidad.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Servicios de Construcción</h2>
              <p className="mb-6">
                En Donopoly ofrecemos servicios completos de construcción, incluyendo obras civiles, remodelaciones, ampliaciones y más. Nuestro equipo de profesionales altamente calificados asegura que cada proyecto se complete con precisión y atención al detalle.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Obras Civiles</h3>
                    <p className="text-muted-foreground">Construcción de estructuras, cimentaciones y elementos de concreto armado.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Remodelaciones</h3>
                    <p className="text-muted-foreground">Transformación y actualización de espacios existentes para mejorar su funcionalidad y estética.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Ampliaciones</h3>
                    <p className="text-muted-foreground">Expansión de espacios existentes manteniendo la coherencia arquitectónica del conjunto.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contacto" className="btn-primary">Solicitar Cotización</a>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2670&auto=format&fit=crop" 
                alt="Servicios de construcción" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Materiales y Técnicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Materiales Premium</h3>
              <p className="text-muted-foreground mb-4">
                Utilizamos solo materiales de la más alta calidad para garantizar durabilidad y un acabado excepcional.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Concreto de alta resistencia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Acero estructural certificado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Acabados de primera calidad</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Técnicas Innovadoras</h3>
              <p className="text-muted-foreground mb-4">
                Implementamos métodos constructivos modernos para optimizar tiempos y mejorar resultados.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Sistemas modulares</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Construcción sostenible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Optimización de procesos</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro enfoque en la calidad y cumplimiento normativo ofrece numerosas ventajas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cumplimiento de normativas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Eficiencia energética</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Durabilidad a largo plazo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Galería de Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-160${item}585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop`} 
                  alt={`Proyecto de construcción ${item}`} 
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/contacto" className="btn-primary">Solicitar Cotización</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Construccion;
