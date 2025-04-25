import { CheckCircle } from "lucide-react";
import img from "../../public/assets/img/3D-renders.png";
import Footer from '@/components/Footer/Footer';

const Renders3D = () => {
  return (
    <div className="w-full overflow-visible">
      {/* <div className="pt-12 md:pt-12 pb-12 bg-secondary/50">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">3D Renders</h1>
          <p className="paragraph max-w-3xl">
            Realistic 3D visualizations to see your project before it's built.
          </p>
        </div>
      </div> */}

      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt="Render 3D de interiores"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">
                3D Visualization & Rendering
              </h2>
              <p className="mb-6">
                Experience your project before it’s built with cutting-edge 3D modeling and high-quality renderings. Our
                immersive visuals allow you to explore every detail, refine design elements, and make informed
                decisions with confidence.
              </p>

              <div className="space-y-4 mb-8 bg-primary/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">
                  Our Services Include:
                </h3>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      3D Plan Design
                    </h3>
                    <p className="text-muted-foreground">
                      Interactive, high-resolution visuals for enhanced planning and project development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Realistic Visualization
                    </h3>
                    <p className="text-muted-foreground">
                      Photorealistic renderings that bring your ideas to life with precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Custom Renderings
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored previews designed to match your unique style and space.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/contact" className="btn-primary">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Renders3D;
