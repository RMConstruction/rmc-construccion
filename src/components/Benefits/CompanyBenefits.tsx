import { useIntersectionObserver } from './useIntersectionObserver';
import { BenefitCard } from './BenefitCard';
import { benefits, benefitsIntro } from './benefits-data';

const CompanyBenefits = () => {
  const sectionRef = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-secondary/30 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">
            {benefitsIntro.title}
          </h2>
          <p className="paragraph whitespace-pre-line">
            {benefitsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;