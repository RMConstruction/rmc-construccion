import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
// import Footer from '@/components/Footer/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CheckCircle } from "lucide-react";
import Renders3D from './Renders3D';
import img from '../../public/assets/img/2D-plans.jpg';
import { Clock } from "lucide-react";

const Planos2D = () => {
  useEffect(() => {
    document.title = "2D Plans | RM Construction & Design Studio Inc.";
  }, []);

  return (
    <div className="min-h-screen w-full overflow-visible">
      <Navbar />

      <div className="pt-28 md:pt-24 pb-12 bg-secondary/50">
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
                <BreadcrumbLink>Design Studio</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="heading-lg mb-4">Design Studio</h1>
          <p className="paragraph max-w-3xl">
            Detailed, technical design of two-dimensional plans for a clear and precise visualization of  your project.
          </p>
        </div>
      </div>

      <section className="pt-16 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                2D Design & Planning
              </h2>
              <p className="mb-6">
              We deliver precise 2D plans that lay the groundwork for your project, ensuring seamless planning,
              permitting, and execution. Our expertly crafted floor plans are tailored to your specific needs, while our
              interior and exterior designs create spaces that balance aesthetics, functionality, and harmony with their
              surroundings.
              </p>
              <div className="space-y-4 mb-8 bg-primary/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">
                  Our Services Include:
                </h3>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      2D Floor Plan Design
                    </h3>
                    <p className="text-muted-foreground">
                      Accurate, code-compliant layouts optimized for efficiency and approval.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Interior Design
                    </h3>
                    <p className="text-muted-foreground">
                      Thoughtfully designed spaces that enhance both functionality and aesthetics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">Exterior Design</h3>
                    <p className="text-muted-foreground">
                      Strategic design solutions that elevate curb appeal and integrate seamlessly with
                      the environment.
                    </p>
                  </div>
                </div>
                <p className='flex gap-2 items-center text-primary'><Clock className="h-4 w-4" />Estimated time: 4-7 weeks</p>
              </div>

              

              {/* <a href="/contacto" className="btn-primary">
                Request a Quote
              </a> */}
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt="Ejemplo de plano 2D"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Renders3D />
    </div>
  );
};

export default Planos2D;
