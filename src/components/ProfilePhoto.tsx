
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  "/lovable-uploads/3526b416-3c25-48a8-8db9-efa626f25b07.png",
  "/lovable-uploads/3526b416-3c25-48a8-8db9-efa626f25b07.png",
  "/lovable-uploads/3526b416-3c25-48a8-8db9-efa626f25b07.png",
  "/lovable-uploads/3526b416-3c25-48a8-8db9-efa626f25b07.png"
];

const ProfilePhoto = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-64 md:h-80">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer overflow-hidden rounded-2xl"
          style={{
            left: `${(index * 25)}%`,
            zIndex: hoveredIndex === index ? 10 : images.length - Math.abs(index),
          }}
          initial={{ 
            rotate: (index - 2) * 5,
          }}
          animate={{
            scale: hoveredIndex === index ? 1.1 : 1,
            filter: hoveredIndex === index ? 'brightness(1.1)' : 'brightness(1)',
            rotate: hoveredIndex === null ? (index - 2) * 5 : (hoveredIndex === index ? 0 : (index - 2) * 5),
          }}
          transition={{ 
            duration: 0.3, 
            ease: 'easeInOut'
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <div className="w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-white shadow-xl">
            <img
              src={image}
              alt={`Profile photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfilePhoto;
