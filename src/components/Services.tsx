import React, { useRef, useEffect } from 'react';
import { ArrowRight, Building, FileText, ClipboardCheck } from "lucide-react";
import project1 from "../../public/assets/img/construction-zone.jpeg";
import project2 from "../../public/assets/img/architectural-design.jpeg";
import project3 from "../../public/assets/img/building-permission.jpg";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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

  const services: Service[] = [
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Construction Zone',
      description: '',
      link: '/services/construction-zone',
      imageUrl: project1
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Design Studio',
      description: '',
      link: '/services/design-studio',
      imageUrl: project2
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: 'Building Permits',
      description: '',
      link: '/services/building-permits',
      imageUrl: project3
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-secondary opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-1 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-medium">{service.title}</h3>
                    {/* <p className="text-white/80 text-sm">{service.description}</p> */}
                    <a 
                      href={service.link} 
                      className="flex items-center text-white font-medium mt-2 rounded-md group-hover:text-white/80"
                    >
                      See more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full flex items-center justify-center">
                  {service.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;