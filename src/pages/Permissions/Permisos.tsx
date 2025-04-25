import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { PermissionsHero } from './PermissionsHero';
import { PermitsSection } from './PermitsSection';
import { NotarySection } from './NotarySection';
// import { ServicesGrid } from './ServicesGrid';
import { GuaranteeBanner } from './GuaranteeBanner';

const Permisos = () => {
  useEffect(() => {
    document.title = 'Permissions | RM Construction & Design Studio Inc.';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      <PermissionsHero />
      <PermitsSection />
      <NotarySection />
      
      <section className="pb-12">
        <div className="container-custom">
          {/* <h2 className="text-2xl font-display font-bold text-center mb-12">
            Our Services Include:
          </h2> */}
          
          {/* <ServicesGrid /> */}
          <GuaranteeBanner />
          
          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Permisos;