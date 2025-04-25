import { CheckCircle } from "lucide-react";
import { planningFeatures } from "./project-data";
import img from "../../../public/assets/img/project-manager.jpeg";

export const ProjectPlanning = () => (
  <section className="py-16">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-display font-bold mb-6">
            Project Planning & Coordination
          </h2>
          <p className="mb-6">
            Every successful project begins with a structured plan. We define scope, align objectives, and establish a
            clear schedule to drive efficient execution. With proactive coordination and resource optimization, we
            ensure every phase stays on track.
          </p>

          <div className="space-y-4 mb-8 bg-primary/20 p-4 rounded-lg">
            {planningFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold">{feature}</h3>
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
            alt="Project Manager supervisando obra"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);