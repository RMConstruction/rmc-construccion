import { useRef, useEffect } from 'react';
import { Calendar, Award, Users } from "lucide-react";

const Trajectory = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Trajectory</h2>
        </div>

        <div className="bg-secondary/10 p-6 rounded-xl flex flex-col space-y-4 md:flex-row text-center shadow-lg divide-y md:divide-y-0 md:divide-x md:divide-gray-300">
          {/* Bloque 1 */}
          <div className="flex-1 px-4 flex flex-col items-center justify-center pt-0 md:pt-0            transition-all duration-300 transform hover:-translate-y-2">
            <Calendar className="h-7 w-7 text-primary mb-1" />
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-md text-muted-foreground">Years of Experience</p>
          </div>

          {/* Bloque 2 */}
          <div className="flex-1 px-4 flex flex-col items-center justify-center pt-4 md:pt-0            transition-all duration-300 transform hover:-translate-y-2">
            <Award className="h-7 w-7 text-primary mb-1" />
            <h3 className="text-3xl font-bold">56+</h3>
            <p className="text-md text-muted-foreground">Projects Completed</p>
          </div>

          {/* Bloque 3 */}
          <div className="flex-1 px-4 flex flex-col items-center justify-center pt-4 md:pt-0            transition-all duration-300 transform hover:-translate-y-2">
            <Users className="h-7 w-7 text-primary mb-1" />
            <h3 className="text-3xl font-bold">56+</h3>
            <p className="text-md text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trajectory;