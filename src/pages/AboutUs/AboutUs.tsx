import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { AboutUsHero } from './AboutUsHero';
import { HistorySection } from './HistorySection';
import { ValuesSection } from './ValuesSection';
import { CtaSection } from './CtaSection';

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />
      <AboutUsHero />
      <HistorySection />
      <ValuesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default AboutUs;