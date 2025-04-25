import { CheckCircle } from "lucide-react";
import { services } from "./construction-data";

export const ConstructionCards = () => (
  <section className="py-16 bg-secondary/30">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[services.additions, services.remodels, services.specialized].map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);