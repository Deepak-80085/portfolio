
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="relative"
      >
        {/* Main avatar */}
        <Avatar className="w-64 h-64 md:w-96 md:h-96 border-4 border-white shadow-2xl">
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
          <AvatarFallback className="bg-portfolio-primary text-white text-4xl">
            DK
          </AvatarFallback>
        </Avatar>

        {/* Decorative elements */}
        <motion.div
          className="absolute -z-10 w-full h-full rounded-full bg-portfolio-primary/20"
          style={{ top: '20px', left: '20px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        
        <motion.div
          className="absolute -z-20 w-full h-full rounded-full bg-portfolio-primary/10"
          style={{ top: '40px', left: '40px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;
