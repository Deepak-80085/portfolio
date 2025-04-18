
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ perspective: '1000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: 20 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 100, scale: 0.8, rotateX: 20 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        style={{
          opacity,
          y,
          scale,
          rotateX,
        }}
        className="relative transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
