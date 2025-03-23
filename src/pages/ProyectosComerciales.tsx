
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

const ProyectosComerciales = () => {
  useEffect(() => {
    document.title = "Proyectos Comerciales | Arquitectura";
  }, []);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Oficina Corporativa Moderna',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
      description: 'Diseño y construcción de oficinas corporativas con espacios abiertos, salas de reuniones y áreas colaborativas para mejorar la productividad.',
      location: 'Centro Empresarial',
      year: '2023'
    },
    {
      id: 2,
      title: 'Restaurante Contemporáneo',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2274&auto=format&fit=crop',
      description: 'Remodelación completa de local comercial para convertirlo en un restaurante de diseño contemporáneo con áreas de cocina abiertas.',
      location: 'Zona Gastronómica',
      year: '2022'
    },
    {
      id: 3,
      title: 'Boutique de Moda',
      imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2670&auto=format&fit=crop',
      description: 'Diseño y construcción de una boutique de moda con un concepto minimalista y elegante que resalta los productos expuestos.',
      location: 'Centro Comercial Elite',
      year: '2023'
    },
    {
      id: 4,
      title: 'Clínica Dental',
      imageUrl: 'https://images.unsplash.com/photo-1629824232055-88c8be6c18ab?q=80&w=2574&auto=format&fit=crop',
      description: 'Renovación y modernización de una clínica dental con nuevas instalaciones, equipamiento y un diseño que transmite profesionalismo y confort.',
      location: 'Plaza Médica',
      year: '2022'
    },
    {
      id: 5,
      title: 'Hotel Boutique',
      imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop',
      description: 'Transformación de un edificio histórico en un hotel boutique que combina elementos clásicos con comodidades modernas.',
      location: 'Barrio Histórico',
      year: '2021'
    },
    {
      id: 6,
      title: 'Gimnasio Premium',
      imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop',
      description: 'Diseño y construcción de un gimnasio premium con áreas especializadas, vestuarios de lujo y equipamiento de última generación.',
      location: 'Torre Fitness',
      year: '2023'
    },
  ]);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />

      <div className="pt-20 md:pt-24 pb-12 bg-secondary/50">
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
                <BreadcrumbLink href="/#portfolio">Proyectos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Proyectos Comerciales</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="heading-lg mb-4">Proyectos Comerciales</h1>
          <p className="paragraph max-w-3xl">
            Explore nuestra galería de proyectos comerciales donde hemos creado
            espacios funcionales y atractivos para diversos tipos de negocios.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline"
                  >
                    Ver detalles →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-display font-bold mb-6">
            ¿Necesita un espacio comercial a medida?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Nuestro equipo de profesionales está listo para crear el espacio
            comercial perfecto que impulse su negocio y refleje su identidad de
            marca.
          </p>
          <a href="/#contact" className="btn-primary">
            Solicitar Presupuesto
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProyectosComerciales;
