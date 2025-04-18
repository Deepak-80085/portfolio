
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
      y: 100,
      rotationX: 20,
      transformPerspective: 2000,
      transformOrigin: "center bottom"
    });

    gsap.to(content, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      delay: delay,
      ease: 'power4.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className={`relative ${className}`} style={{ perspective: '2000px' }}>
      <div ref={contentRef} className="transform-gpu">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
