import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ProfilePhoto from './ProfilePhoto';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white to-portfolio-accent4/30">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-dark">
              <span className="text-portfolio-primary">Hello, I'm Deepak</span> Kumaran M
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Computer Science & Mathematics Student
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate about Python, Django, React, IoT, AI/ML, and computer vision. Turning complex problems into elegant solutions through code and mathematics.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-primary"
              >
                View Projects
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-secondary"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
