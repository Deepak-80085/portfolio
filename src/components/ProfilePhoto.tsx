
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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
    >
      <div className="rounded-full border-[3px] border-white shadow-xl overflow-hidden">
        <Avatar className="w-32 h-32 md:w-40 md:h-40">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AvatarImage
              src={images[currentImageIndex]}
              alt="Profile photo"
              className="object-cover"
            />
          </motion.div>
          <AvatarFallback className="bg-portfolio-primary text-white text-2xl">
            DK
          </AvatarFallback>
        </Avatar>
      </div>
      
      {/* Decorative ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-portfolio-primary/20"
        style={{ transform: 'scale(1.1)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default ProfilePhoto;
