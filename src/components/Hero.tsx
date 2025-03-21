
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const translateY = scrollPosition * 0.3;
      
      textRef.current.style.opacity = opacity.toString();
      textRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2670&auto=format&fit=crop')` 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div 
        ref={textRef}
        className="relative container-custom h-full flex flex-col justify-center"
      >
        <div className="max-w-3xl animate-fade-in-up">
          <div className="bg-primary/90 text-white text-sm py-1.5 px-3 rounded-full inline-block mb-5 font-medium">
            Construcción y Remodelación de Calidad
          </div>
          <h1 className="heading-xl text-white mb-6">
            Transformamos tus espacios en 
            <span className="text-primary"> obras maestras</span>
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Especialistas en remodelación residencial y comercial con más de 15 años de experiencia. Convertimos su visión en realidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="btn-primary flex items-center gap-2 group"
            >
              Nuestros Servicios
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#portfolio" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-fade-in"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
