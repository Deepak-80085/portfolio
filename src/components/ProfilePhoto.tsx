
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  "/lovable-uploads/b0931370-7e89-4f10-bc9f-f2eca4a9b372.png",
  "/lovable-uploads/666407de-5157-471c-8edb-f7f228b05a17.png",
  "/lovable-uploads/031321d2-a4dd-49ff-8bf8-eeaa440ab788.png",
  "/lovable-uploads/113b4417-c595-4401-852b-3a523573701e.png"
];

const ProfilePhoto = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-48 md:h-64">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute top-0 left-1/2 cursor-pointer"
          initial={{ 
            opacity: 1, 
            x: `calc(-50% + ${index * 60}px)`, 
            rotate: index * -5,
            scale: 0.9,
            zIndex: images.length - Math.abs(index)
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 0,
            zIndex: 10,
            transition: { duration: 0.2 }
          }}
          animate={{
            scale: hoveredIndex === null ? 0.9 : (hoveredIndex === index ? 1.1 : 0.8),
            rotate: hoveredIndex === null ? index * -5 : (hoveredIndex === index ? 0 : index * -8),
            x: `calc(-50% + ${index * 60}px)`,
            y: hoveredIndex === index ? -20 : 0
          }}
          transition={{ duration: 0.3 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl bg-white p-1">
            <img
              src={image}
              alt={`Profile photo ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfilePhoto;
