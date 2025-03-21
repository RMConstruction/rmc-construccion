
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle } from "lucide-react";

const ServicioResidencial = () => {
  useEffect(() => {
    document.title = 'Remodelación Residencial | Donopoly';
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
                <BreadcrumbLink href="/#services">Servicios</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Remodelación Residencial</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Remodelación Residencial</h1>
          <p className="paragraph max-w-3xl">
            Transformamos su hogar con renovaciones personalizadas que mejoran su funcionalidad y valor.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Transforme su espacio de vida</h2>
              <p className="mb-6 text-lg">
                Nuestro servicio de remodelación residencial está diseñado para transformar completamente su hogar según sus preferencias y necesidades específicas. Nos especializamos en renovaciones completas que abarcan desde la planificación inicial hasta los toques finales.
              </p>
              <p className="mb-6">
                Trabajamos estrechamente con usted en cada etapa del proceso, asegurándonos de que su visión se materialice con la más alta calidad de artesanía y materiales.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-2">Nuestros servicios incluyen:</h3>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Remodelación completa de interiores</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Renovación de pisos y acabados</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Actualización de sistemas eléctricos y de plomería</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>Renovaciones estructurales</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
                alt="Renovación residencial moderna" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Nuestro Proceso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Consulta y Diseño</h3>
              <p>Comenzamos con una consulta detallada para entender sus necesidades y preferencias. Nuestro equipo de diseño crea un plan personalizado para su proyecto.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Planificación y Presupuesto</h3>
              <p>Desarrollamos un plan detallado y un presupuesto transparente. Seleccionamos materiales de alta calidad que se ajusten a su visión y presupuesto.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Ejecución y Entrega</h3>
              <p>Nuestro equipo de profesionales ejecuta el proyecto con precisión y atención al detalle. Le mantenemos informado durante todo el proceso hasta la entrega final.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">¿Listo para transformar su hogar?</h2>
            <p className="mb-8">
              Contáctenos hoy mismo para programar una consulta gratuita y comenzar su proyecto de remodelación residencial.
            </p>
            <a href="/#contact" className="btn-primary">Contactar Ahora</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicioResidencial;
