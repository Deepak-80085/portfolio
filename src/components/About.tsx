
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
          
          <div className="bg-portfolio-accent4/20 rounded-xl p-6 md:p-8 shadow-sm mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-portfolio-primary mb-4">Professional Summary</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Blending rigorous mathematical foundations with practical software engineering expertise across Python, Django, React, and Android platforms. 
              Specializing in IoT implementations, computer vision algorithms, and network monitoring systems, tackling complex challenges with innovative approaches. 
              Driven by a passion for continuous learning and applying theoretical concepts to develop robust, scalable solutions that address real-world problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-portfolio-accent1 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">Problem Solver</h3>
              <p className="text-gray-600">
                I approach challenges with mathematical rigor and computational creativity, finding elegant solutions to complex problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-portfolio-accent2 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">Tech Enthusiast</h3>
              <p className="text-gray-600">
                Passionate about emerging technologies from IoT and AI to computer vision and network systems.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 w-12 bg-portfolio-accent3 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">Lifelong Learner</h3>
              <p className="text-gray-600">
                Continuously expanding my knowledge and skills, both in academic environments and through self-directed study.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
