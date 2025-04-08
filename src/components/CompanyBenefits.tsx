
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from "lucide-react";

const CompanyBenefits = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: "Tailored Solutions & Seamless Execution",
      description: "Every project is unique, and so is our approach. We craft custom designs that align with your style, goals, and budget—ensuring a streamlined experience from concept to completion."
    },
    {
      title: "Transparency & Client-Focused Service",
      description: "Clear communication and meticulous attention to detail define our process. We keep you informed at every stage, ensuring a smooth, stress-free experience with no surprises."
    },
    {
      title: "Sustainable & High-Quality Craftsmanship",
      description: "We prioritize smart, eco-conscious design practices and top-tier materials, delivering durable, energy-efficient, and visually stunning results.."
    },
    {
      title: "Partner with RM Construction & Design Studio Inc.",
      description: "Experience the difference of working with a team that values your vision and delivers with expertise, precision, and integrity."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-secondary/30 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">
            Benefits of Working with Us
          </h2>
          <p className="paragraph">
          Why Choose RM Construction & Design Studio Inc.? <br />
          Expertise. Innovation. Quality You Can Trust. <br /><br />
          At RM Construction & Design Studio Inc., we go beyond design—we bring your vision to life through
          thoughtful planning, precision, and a strong commitment to excellence. Here’s why clients choose us:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex items-start gap-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
