import { permitServices } from "./permissions-data";
import img from "../../../public/assets/img/buildingPermis-notaryServices.jpg";

export const PermitsSection = () => (
  <section className="py-16">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-display font-bold mb-6">
            Building Permits & Notary Services
          </h2>
          <p className="mb-6">
            Navigating the permit process can be complex, but we simplify it for you. Our team  provides expert
            guidance and coordination to ensure your project aligns with local regulations and building codes. We
            handle the preparation, submission, and ongoing communication with relevant authorities, preventing
            delays and moving your project forward efficiently.
          </p>
          
          <div className="space-y-4 mb-8 bg-primary/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Our Services Include:</h3>
            {permitServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <service.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/contact" className="btn-primary">
            Request a Quote
          </a>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img}
            alt="Documentos legales y permisos"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);