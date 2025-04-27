
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="bg-portfolio-accent4/20 rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-portfolio-primary mb-4">Professional Summary</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Blending simple mathematical foundations with practical software engineering expertise across Python, Django, React, and Android platforms. 
              Specializing in IoT implementations, computer vision algorithms, and network monitoring systems, tackling complex challenges with innovative approaches. 
              Driven by a passion for continuous learning and applying theoretical concepts to develop robust, scalable solutions that address real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
