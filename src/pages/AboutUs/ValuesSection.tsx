import { valuesContent } from "./about-data";
import imgAbout from "../../../public/assets/img/about-us.jpeg";

export const ValuesSection = () => (
  <section className="py-16 bg-secondary/50">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
          <img
            src={imgAbout}
            alt="Equipo de RM Construction"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold font-display mb-6">
            Our Values & Commitments
          </h2>

          <div className="space-y-6">
            {valuesContent.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <value.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl mb-1">{value.title}</h3>
                  {value.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);