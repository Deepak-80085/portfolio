
import { motion } from 'framer-motion';

interface HoverImageProps {
  src: string;
  alt: string;
  className?: string;
}

const HoverImage = ({ src, alt, className = '' }: HoverImageProps) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        initial={{ scale: 1, filter: 'brightness(1)' }}
        whileHover={{ 
          scale: 1.1, 
          filter: 'brightness(1.1)',
          transition: { duration: 0.3, ease: 'easeInOut' }
        }}
      />
    </div>
  );
};

export default HoverImage;
