
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle, LayoutPanelLeft } from "lucide-react";

const Planos2D = () => {
  useEffect(() => {
    document.title = 'Planos 2D | Donopoly';
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
                <BreadcrumbLink>Planos 2D</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Planos 2D</h1>
          <p className="paragraph max-w-3xl">
            Diseño detallado y técnico de planos bidimensionales para una visualización clara y precisa de su proyecto.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Explicación de los planos 2D</h2>
              <p className="mb-6">
                Los planos 2D son representaciones técnicas bidimensionales que muestran la distribución de espacios, dimensiones, conexiones y detalles técnicos de un proyecto. Son esenciales para la fase de planificación y construcción.
              </p>
              <p className="mb-6">
                En Donopoly, desarrollamos planos 2D detallados y precisos que sirven como guía fundamental para la ejecución de su proyecto, garantizando claridad en la distribución y especificaciones técnicas necesarias.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Plantas Arquitectónicas</h3>
                    <p className="text-muted-foreground">Visualización completa de la distribución de espacios y dimensiones.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Planos Estructurales</h3>
                    <p className="text-muted-foreground">Detalles técnicos de cimentación, columnas, vigas y otros elementos estructurales.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Instalaciones</h3>
                    <p className="text-muted-foreground">Planos de instalaciones eléctricas, hidráulicas, sanitarias y especiales.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contacto" className="btn-primary">Solicitar Cotización</a>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
                alt="Ejemplo de plano 2D" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Uso de Software Avanzado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <LayoutPanelLeft className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AutoCAD</h3>
              <p className="text-muted-foreground">
                Utilizamos AutoCAD para crear planos detallados y precisos con los más altos estándares técnicos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <LayoutPanelLeft className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Revit</h3>
              <p className="text-muted-foreground">
                Implementamos Revit para modelado de información de construcción (BIM) y planos integrados.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <LayoutPanelLeft className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ArchiCAD</h3>
              <p className="text-muted-foreground">
                Empleamos ArchiCAD para un diseño arquitectónico avanzado con alta precisión técnica.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Ejemplos de Planos 2D</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-150338776${item}?q=80&w=2670&auto=format&fit=crop`} 
                  alt={`Ejemplo de plano 2D ${item}`} 
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

export default Planos2D;
