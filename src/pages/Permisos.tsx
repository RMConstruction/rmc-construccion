
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ClipboardCheck, FileText, Clock, Shield } from "lucide-react";

const Permisos = () => {
  useEffect(() => {
    document.title = 'Permisos | Donopoly';
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
                <BreadcrumbLink>Permisos</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Permisos y Notarización</h1>
          <p className="paragraph max-w-3xl">
            Gestión completa de permisos, licencias y trámites legales para que su proyecto cumpla con todas las normativas y regulaciones.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Importancia de la notarización en construcción y diseño</h2>
              <p className="mb-6">
                La notarización y los permisos son aspectos fundamentales en cualquier proyecto de construcción o diseño. Garantizan que todos los procesos cumplan con las normativas locales y nacionales, evitando problemas legales, multas o la paralización de obras.
              </p>
              <p className="mb-6">
                En Donopoly, nos encargamos de gestionar todos los trámites legales necesarios para su proyecto, desde la obtención de licencias de construcción hasta la notarización de documentos importantes, asegurando un proceso fluido y sin contratiempos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Cumplimiento Legal</h3>
                    <p className="text-muted-foreground">Garantizamos que su proyecto cumpla con todas las normativas y regulaciones vigentes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Ahorro de Tiempo</h3>
                    <p className="text-muted-foreground">Nos encargamos de los trámites para que usted pueda enfocarse en otros aspectos de su proyecto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Tranquilidad</h3>
                    <p className="text-muted-foreground">Evite riesgos legales y multas con nuestro servicio profesional de gestión de permisos.</p>
                  </div>
                </div>
              </div>
              
              <a href="/contacto" className="btn-primary">Solicitar Cotización</a>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop" 
                alt="Documentos legales y permisos" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Tipos de Documentos que se Pueden Notarizar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Permisos de Construcción</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Licencias de obra nueva</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Permisos de remodelación</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Licencias de ampliación</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Permisos de demolición</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Documentos Contractuales</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Contratos de obra</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Acuerdos con contratistas</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Contratos de servicios</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Finiquitos y entregas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Documentos Técnicos</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Planos arquitectónicos</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Estudios de suelo</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Manifiestos de impacto ambiental</span>
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                  <span>Certificaciones y dictámenes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold text-center mb-12">Proceso de Notarización y Tiempos de Entrega</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Evaluación Inicial</h3>
                <p className="text-muted-foreground mb-4">
                  Analizamos su proyecto para determinar todos los permisos y documentos notariales necesarios.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Tiempo estimado: 1-2 días</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Preparación de Documentación</h3>
                <p className="text-muted-foreground mb-4">
                  Recopilamos y preparamos todos los documentos requeridos para los trámites.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Tiempo estimado: 3-5 días</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Gestión con Autoridades</h3>
                <p className="text-muted-foreground mb-4">
                  Presentamos la documentación ante las entidades correspondientes y realizamos seguimiento.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Tiempo estimado: 10-30 días (según trámite)</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Entrega y Verificación</h3>
                <p className="text-muted-foreground mb-4">
                  Le entregamos todos los permisos y documentos notarizados, verificando que todo esté en orden.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Tiempo estimado: 1-2 días</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-primary/10 rounded-lg">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantía de Servicio</h3>
                  <p>
                    En Donopoly nos comprometemos a gestionar todos sus permisos y documentos notariales con la mayor eficiencia y profesionalismo. Nuestro equipo especializado se encarga de todos los detalles para que usted pueda enfocarse en su proyecto sin preocupaciones legales.
                  </p>
                </div>
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

export default Permisos;
