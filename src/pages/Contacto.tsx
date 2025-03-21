
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Contacto = () => {
  useEffect(() => {
    document.title = 'Contacto | Donopoly';
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
                <BreadcrumbLink>Contacto</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Contacto</h1>
          <p className="paragraph max-w-3xl">
            Estamos aquí para responder a sus preguntas y ayudarle a comenzar su próximo proyecto.
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Contacto;
