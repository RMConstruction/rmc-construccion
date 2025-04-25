import { useIntersectionObserver } from './useIntersectionObserver';
import { ArrowUp } from 'lucide-react';
import { FooterColumn } from './FooterColumn';
import { SocialLink } from './SocialLink';
import { footerData } from './footer-data';

const Footer = () => {
  const footerRef = useIntersectionObserver();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-foreground text-white pt-16 pb-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              className='w-36 pb-6' 
              src={footerData.logo.src} 
              alt={footerData.logo.alt} 
            />
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  name={social.name}
                  label={social.label}
                  url={social.url}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>

          {footerData.columns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
              items={column.items}
              contact={column.contact}
            />
          ))}
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            {footerData.copyright}
          </p>

          <button
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-primary p-3 rounded-full transition-colors duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;