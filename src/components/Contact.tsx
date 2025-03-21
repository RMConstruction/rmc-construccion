
import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
        variant: "default",
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Teléfono',
      details: '+52 55 1234 5678',
      link: 'tel:+525512345678'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      details: 'info@donopoly.com',
      link: 'mailto:info@donopoly.com'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Dirección',
      details: 'Av. Principal 123, Ciudad de México',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={20} />,
      title: 'Horario',
      details: 'Lun-Vie: 9am-6pm | Sáb: 10am-2pm',
      link: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Contáctanos</h2>
          <p className="paragraph">
            Estamos listos para ayudarle con su próximo proyecto. Contáctenos hoy para una consulta gratuita y comencemos a hacer realidad su visión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:order-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="bg-secondary rounded-xl p-8 shadow-lg">
              <h3 className="heading-md mb-6">Envíanos un mensaje</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "flex items-center justify-center gap-2 w-full py-3 rounded-md font-medium transition-all duration-300",
                    isSubmitting
                      ? "bg-primary/80 text-white cursor-not-allowed"
                      : "bg-primary text-white hover:shadow-lg hover:translate-y-[-2px]"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:order-1">
            <h3 className="heading-md mb-6">Información de Contacto</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 group p-4 rounded-lg hover:bg-secondary transition-all duration-300"
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden h-[300px] shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661096364826!2d-99.16869672554611!3d19.427023841925364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2sus!4v1684897358213!5m2!1ses-419!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de nuestra oficina"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
