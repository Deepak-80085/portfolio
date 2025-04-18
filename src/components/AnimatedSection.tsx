
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    gsap.set(content, {
      opacity: 0,
      y: 50,
      rotationX: 15,
      transformPerspective: 1000,
    });

    gsap.to(content, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      delay: delay,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className={`relative ${className}`} style={{ perspective: '1000px' }}>
      <div ref={contentRef} className="transform-gpu">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
