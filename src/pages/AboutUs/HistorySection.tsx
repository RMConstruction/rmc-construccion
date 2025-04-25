import { historyContent } from "./about-data";

export const HistorySection = () => (
  <section className="py-16">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold font-display mb-6">
            {historyContent.title}
          </h2>
          <p className="mb-4">
          At RM Construction & Design Studio Inc., we are more than just designers and builders—we are collaborators in crafting spaces that elevate the way people live and work. As a proud family -owned business, <strong>my father and I</strong> built our reputation on quality, creativity, and a personalized approach that puts each client’s vision at the forefront of everything we do.
          </p>
          {historyContent.paragraphs.map((paragraph, index) => (
            <p key={index} className={index < historyContent.paragraphs.length - 1 ? "mb-4" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={historyContent.image}
            alt="Equipo de RM Construction trabajando"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);