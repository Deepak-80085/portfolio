
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useState, useEffect } from 'react';

const images = [
  "/lovable-uploads/b0931370-7e89-4f10-bc9f-f2eca4a9b372.png",
  "/lovable-uploads/666407de-5157-471c-8edb-f7f228b05a17.png",
  "/lovable-uploads/031321d2-a4dd-49ff-8bf8-eeaa440ab788.png",
  "/lovable-uploads/113b4417-c595-4401-852b-3a523573701e.png"
];

const ProfilePhoto = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-48 md:h-64">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute top-0 left-1/2"
          initial={{ opacity: 0, x: '-50%', rotate: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: `calc(-50% + ${(index - currentImageIndex) * 60}px)`,
            rotate: (index - currentImageIndex) * -5,
            scale: index === currentImageIndex ? 1 : 0.9,
            zIndex: images.length - Math.abs(index - currentImageIndex)
          }}
          transition={{ duration: 0.5 }}
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
