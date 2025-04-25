import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ConstructionHero } from './ConstructionHero';
import { ConstructionServices } from './ConstructionServices';
import { ConstructionCards } from './ConstructionCards';
import { ConstructionCTA } from './ConstructionCTA';

const Construccion = () => {
  useEffect(() => {
    document.title = 'Construction Zone | RM Construction & Design Studio Inc.';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      <ConstructionHero />
      <ConstructionServices />
      <ConstructionCards />
      <ConstructionCTA />
      <Footer />
    </div>
  );
};

export default Construccion;