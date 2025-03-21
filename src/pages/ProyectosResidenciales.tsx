
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  location: string;
  year: string;
}

const ProyectosResidenciales = () => {
  useEffect(() => {
    document.title = 'Proyectos Residenciales | Donopoly';
  }, []);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Renovación Casa Moderna',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
      description: 'Renovación completa de una casa de familia con un diseño moderno y funcional, incluyendo nueva cocina, baños y espacios abiertos.',
      location: 'Ciudad Central',
      year: '2023'
    },
    {
      id: 2,
      title: 'Ampliación Villa Suburbana',
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2274&auto=format&fit=crop',
      description: 'Ampliación de una villa suburbana que incluye una nueva ala con dormitorios adicionales y un espacio de entretenimiento.',
      location: 'Valle Verde',
      year: '2022'
    },
    {
      id: 3,
      title: 'Renovación Casa Histórica',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
      description: 'Restauración y modernización de una casa histórica conservando sus elementos arquitectónicos originales mientras se actualizan sus sistemas.',
      location: 'Barrio Antiguo',
      year: '2023'
    },
    {
      id: 4,
      title: 'Loft Urbano',
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop',
      description: 'Transformación de un antiguo espacio industrial en un loft moderno con acabados de alto nivel y diseño de espacios abiertos.',
      location: 'Distrito Central',
      year: '2021'
    },
    {
      id: 5,
      title: 'Casa Minimalista',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop',
      description: 'Construcción de una casa minimalista con líneas limpias, grandes ventanales y una integración perfecta con el entorno natural.',
      location: 'Costa Norte',
      year: '2022'
    },
    {
      id: 6,
      title: 'Renovación Apartamento',
      imageUrl: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2574&auto=format&fit=crop',
      description: 'Remodelación completa de un apartamento creando espacios más funcionales y modernos con un uso eficiente del espacio disponible.',
      location: 'Torre Central',
      year: '2023'
    },
  ]);

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
                <BreadcrumbLink href="/#portfolio">Proyectos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Proyectos Residenciales</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="heading-lg mb-4">Proyectos Residenciales</h1>
          <p className="paragraph max-w-3xl">
            Descubra nuestra colección de proyectos residenciales, desde renovaciones completas hasta ampliaciones y nuevas construcciones.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-[250px] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a href="#" className="text-primary font-medium hover:underline">Ver detalles →</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-bold mb-6">¿Tiene un proyecto en mente?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Confíe en nuestra experiencia para convertir su visión en realidad. Nuestro equipo de expertos está listo para ayudarle con su próximo proyecto residencial.
          </p>
          <a href="/#contact" className="btn-primary">Contáctenos hoy</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProyectosResidenciales;
