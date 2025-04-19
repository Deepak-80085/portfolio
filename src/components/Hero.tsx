
import { motion } from 'framer-motion';
import ProfilePhoto from './ProfilePhoto';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-[1200px] w-full mx-auto text-center space-y-16">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-portfolio-dark tracking-tight">
            Welcome to my corner of the internet!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a Computer Science & Mathematics student with a passion for Python, Django, React, IoT, and AI/ML. This site showcases my journey in turning complex problems into elegant solutions.
          </p>
        </motion.div>

        <ProfilePhoto />
      </div>
    </section>
  );
};

export default Hero;
