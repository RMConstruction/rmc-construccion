import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Contacto = () => {
  useEffect(() => {
    document.title = 'Contacto | RM Construction & Design Studio Inc.';
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />

      <div className="pt-20 md:pt-24 pb-12 bg-secondary/50">
        <div className="container-custom">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="heading-lg mb-4">Contact</h1>
          <p className="paragraph max-w-3xl">
            We're here to answer your questions and help you get started on your next project.
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Contacto;
