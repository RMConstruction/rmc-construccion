import { useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react";
import imgHero from "../../public/assets/img/heroimg.jpeg";

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
        backgroundImage: `url(${imgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative container-custom h-full flex flex-col justify-center"
      >
        <div className="max-w-3xl md:mt-60 lg:mt-16 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm py-1.5 px-4 rounded-full inline-flex items-center gap-2 mb-6 font-medium">
            <span className="bg-white w-2 h-2 rounded-full"></span>
            Excellence in Construction and Design
          </div>
          <h1 className="heading-lg text-white mb-8 leading-tight lg:heading-xl">
            We transform <span className="text-primary">Ideas</span> into
            <br />
            <span className="text-primary">Exceptional Spaces</span>
          </h1>
          <p className="text-white/90 text-xl mb-10 max-w-2xl font-light">
            Specialists in building design, construction, and project management
            with over 10+ years of experience creating inspiring and enduring spaces.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#services"
              className="btn-primary flex items-center gap-2 group"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
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
