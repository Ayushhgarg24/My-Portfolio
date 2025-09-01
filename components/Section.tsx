import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isVisible to true if intersecting, false otherwise
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 40% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 ${className} ${isVisible ? 'is-visible' : ''}`}
      data-section-name={id}
    >
      <div className="container mx-auto">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-primary text-center scroll-animate animate-fade-in-up`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;