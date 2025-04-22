
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Work Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline dot */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-portfolio-primary after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-right sm:min-w-[5.5rem] flex items-center justify-center text-xs font-semibold uppercase text-white bg-slate-700 h-6 mb-3 sm:mb-0 px-3 rounded-full">Aug 2024</time>
                <div className="text-xl font-bold text-portfolio-primary">Frontend Developer</div>
              </div>
              <div className="text-slate-500 mb-2 text-lg">Sportshunt</div>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Developing responsive web interfaces using HTML, CSS, JavaScript, and React Vite</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Working with backend Django REST APIs for full-stack feature implementation</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Implementing booking system UI flows and community features for sports platform</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Building and optimizing UI components for improved user experience</span>
                </motion.li>
              </ul>
            </div>
            
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline dot */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-portfolio-primary after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-right sm:min-w-[5.5rem] flex items-center justify-center text-xs font-semibold uppercase text-white bg-slate-700 h-6 mb-3 sm:mb-0 px-3 rounded-full">May 2024</time>
                <div className="text-xl font-bold text-portfolio-primary">Network & Linux Intern</div>
              </div>
              <div className="text-slate-500 mb-2 text-lg">Alpha IoT</div>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Developed automated Python scripts for LibreNMS, increasing network monitoring efficiency by 45% and reducing manual configuration time</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Implemented Linux system administration best practices, optimizing server performance and security protocols</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Conducted in-depth analysis of SNMP logs, identifying and resolving critical network bottlenecks</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="text-portfolio-primary mr-2">•</span>
                  <span>Successfully resolved Python version conflicts in production environments, ensuring seamless integration of monitoring tools</span>
                </motion.li>
              </ul>
            </div>
            
            {/* Placeholder for future experience */}
            <div className="relative pl-8 sm:pl-32 py-6 opacity-50 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-gray-400 after:border-2 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute sm:left-0 sm:ml-2 sm:text-right sm:min-w-[5.5rem] flex items-center justify-center text-xs font-semibold uppercase text-white bg-slate-400 h-6 mb-3 sm:mb-0 px-3 rounded-full">Future</time>
                <div className="text-xl font-bold text-gray-400">Your next opportunity</div>
              </div>
              <div className="text-slate-400 mb-2 text-lg">Future Company</div>
              <div className="text-slate-400">Open to new opportunities in software development, AI/ML, and computer vision.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
