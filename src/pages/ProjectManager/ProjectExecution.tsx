import { CheckCircle } from "lucide-react";
import { executionCards } from "./project-data";

export const ProjectExecution = () => (
  <section className="py-16 bg-secondary/30">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {executionCards.map((card, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-muted-foreground mb-4">{card.description}</p>
            <ul className="space-y-2">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-36">
        <a href="/contact" className="btn-primary">
          Request a Quote
        </a>
      </div>
    </div>
  </section>
);