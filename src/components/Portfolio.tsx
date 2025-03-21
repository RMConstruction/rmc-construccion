
import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Renovación Residencial Moderna',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
      description: 'Renovación completa con diseño moderno y funcional.'
    },
    {
      id: 2,
      title: 'Cocina de Lujo',
      category: 'kitchen',
      imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2670&auto=format&fit=crop',
      description: 'Remodelación de cocina con acabados de primera calidad.'
    },
    {
      id: 3,
      title: 'Baño Contemporáneo',
      category: 'bathroom',
      imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop',
      description: 'Diseño elegante con materiales de alta gama.'
    },
    {
      id: 4,
      title: 'Oficina Comercial',
      category: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
      description: 'Espacio de trabajo moderno y funcional.'
    },
    {
      id: 5,
      title: 'Ampliación Residencial',
      category: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2274&auto=format&fit=crop',
      description: 'Ampliación que integra perfectamente el estilo existente.'
    },
    {
      id: 6,
      title: 'Remodelación de Terraza',
      category: 'exterior',
      imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop',
      description: 'Transformación de espacio exterior para mayor disfrute.'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'residential', label: 'Residencial' },
    { id: 'commercial', label: 'Comercial' },
    { id: 'kitchen', label: 'Cocinas' },
    { id: 'bathroom', label: 'Baños' },
    { id: 'exterior', label: 'Exteriores' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="section-padding bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Nuestros Proyectos</h2>
          <p className="paragraph">
            Explore nuestra galería de proyectos completados para ver ejemplos de nuestro trabajo excepcional y la calidad que ofrecemos en cada proyecto.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "bg-secondary hover:bg-primary/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-primary/90 text-white text-xs py-1 px-2 rounded-full uppercase font-medium">
                  {categories.find(c => c.id === project.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
