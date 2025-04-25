import { ctaContent } from "./about-data";

export const CtaSection = () => (
  <section className="py-16">
    <div className="container-custom text-center">
      <h2 className="text-2xl font-display font-bold mb-6">
        {ctaContent.title}
      </h2>
      <p className="mb-8 max-w-2xl mx-auto">
        {ctaContent.description}
      </p>
      <a href={ctaContent.link} className="btn-primary">
        {ctaContent.buttonText}
      </a>
    </div>
  </section>
);