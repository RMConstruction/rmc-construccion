
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle, Cuboid } from "lucide-react";

const Renders3D = () => {
  useEffect(() => {
    document.title = 'Renders 3D | Donopoly';
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
                <BreadcrumbLink>Renders 3D</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Renders 3D</h1>
          <p className="paragraph max-w-3xl">
            Visualizaciones tridimensionales realistas para ver su proyecto antes de construirlo.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">¿Qué es un render 3D y su importancia?</h2>
              <p className="mb-6">
                Un render 3D es una representación gráfica tridimensional fotorrealista generada por computadora que permite visualizar un proyecto antes de su construcción. Estos modelos digitales permiten experimentar espacios, texturas, iluminación y ambiente de forma inmersiva y realista.
              </p>
              <p className="mb-6">
                En Donopoly, utilizamos tecnología de vanguardia para crear renders 3D de alta calidad que le permiten visualizar cada detalle de su proyecto, facilitando la toma de decisiones y garantizando que el resultado final cumpla con sus expectativas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Visualización Inmersiva</h3>
                    <p className="text-muted-foreground">Experimente su proyecto como si ya estuviera construido.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Toma de Decisiones</h3>
                    <p className="text-muted-foreground">Evalúe alternativas de diseño, materiales y acabados de forma visual.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Comunicación Efectiva</h3>
                    <p className="text-muted-foreground">Comparta su visión con inversionistas, colaboradores o familiares.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contacto" className="btn-primary">Solicitar Cotización</a>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=2574&auto=format&fit=crop" 
                alt="Render 3D de interiores" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Beneficios de los Renders 3D</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Cuboid className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Presentación Profesional</h3>
              <p className="text-center text-muted-foreground">
                Imágenes de alta calidad que transmiten profesionalismo y atención al detalle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Cuboid className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Precisión en Detalles</h3>
              <p className="text-center text-muted-foreground">
                Visualización precisa de texturas, materiales, iluminación y acabados.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <Cuboid className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Vista Previa Realista</h3>
              <p className="text-center text-muted-foreground">
                Experimente cómo se verá su proyecto finalizado antes de comenzar la construcción.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Galería de Renders 3D</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop" 
                alt="Render 3D exterior de vivienda" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="font-medium">Render exterior residencial</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=2670&auto=format&fit=crop" 
                alt="Render 3D de sala de estar" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="font-medium">Diseño de interiores sala de estar</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
                alt="Render 3D de cocina moderna" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="font-medium">Cocina moderna con isla</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1574643156929-51fa098b0394?q=80&w=2670&auto=format&fit=crop" 
                alt="Render 3D de edificio corporativo" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="font-medium">Edificio corporativo</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop" 
                alt="Render 3D de baño" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="font-medium">Diseño de baño contemporáneo</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2670&auto=format&fit=crop" 
                alt="Render 3D de área común" 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <p className="font-medium">Área común en desarrollo residencial</p>
              </div>
            </div>
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

export default Renders3D;
