
import { motion } from 'framer-motion';
import ProfilePhoto from './ProfilePhoto';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <ProfilePhoto />
        
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-dark tracking-tight">
            Hey, I'm <span className="text-portfolio-primary">Deepak!</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark tracking-tight">
            Welcome to my corner of the internet!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm a Computer Science & Mathematics student with a passion for Python, Django, React, IoT, and AI/ML. This site showcases my journey in turning complex problems into elegant solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
