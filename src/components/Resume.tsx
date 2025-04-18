
import { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-portfolio-primary text-white py-2 px-6 rounded-md hover:bg-portfolio-tertiary transition-colors duration-300"
      >
        View Resume
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-portfolio-dark">Deepak Kumaran M - Resume</h3>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-portfolio-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-portfolio-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-8 font-sans">
              {/* Resume Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-portfolio-dark">DEEPAK KUMARAN M</h1>
                <p className="text-gray-600">Bangalore, India • deepak@example.com</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a href="#" className="text-portfolio-primary hover:text-portfolio-tertiary">LinkedIn</a>
                  <a href="#" className="text-portfolio-primary hover:text-portfolio-tertiary">GitHub</a>
                </div>
              </div>
              
              {/* Professional Summary */}
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">PROFESSIONAL SUMMARY</h2>
                <p className="text-gray-700">
                  Blending rigorous mathematical foundations with practical software engineering expertise across Python, Django, React, and Android platforms. 
                  Specializing in IoT implementations, computer vision algorithms, and network monitoring systems, tackling complex challenges with innovative approaches. 
                  Driven by a passion for continuous learning and applying theoretical concepts to develop robust, scalable solutions that address real-world problems.
                </p>
              </div>
              
              {/* Education */}
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">EDUCATION</h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold">Christ University</h3>
                      <span>2023 - 2026</span>
                    </div>
                    <p>B.Sc. Computer Science & Mathematics</p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold">Christ Junior College</h3>
                      <span>2021 - 2023</span>
                    </div>
                    <p>PCMB (Physics, Chemistry, Mathematics, Biology)</p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold">Christ School</h3>
                      <span>2011 - 2021</span>
                    </div>
                    <p>High School</p>
                  </div>
                </div>
              </div>
              
              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">EXPERIENCE</h2>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">Network & Linux Intern</h3>
                    <span>May 2024</span>
                  </div>
                  <p className="italic mb-2">Alpha IoT, Bangalore</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Developed automated Python scripts for LibreNMS, increasing network monitoring efficiency by 45% and reducing manual configuration time</li>
                    <li>Implemented Linux system administration best practices, optimizing server performance and security protocols</li>
                    <li>Conducted in-depth analysis of SNMP logs, identifying and resolving critical network bottlenecks</li>
                    <li>Successfully resolved Python version conflicts in production environments, ensuring seamless integration of monitoring tools</li>
                  </ul>
                </div>
              </div>
              
              {/* Projects */}
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">PROJECTS</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold">🎨 MewMaw - Lead Developer</h3>
                    <ul className="list-disc pl-5">
                      <li>Tech Stack: Python, Django, OpenAI API, React, TailwindCSS</li>
                      <li>Implemented end-to-end story generation pipeline and image creation workflow</li>
                      <li>Achieved 30% faster story generation through prompt engineering and caching techniques</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">💰 ExpenseEase - Full Stack Developer</h3>
                    <ul className="list-disc pl-5">
                      <li>Tech Stack: React Native, Firebase, Node.js, Express, MongoDB</li>
                      <li>Built real-time expense calculation and debt simplification algorithm</li>
                      <li>Implemented secure payment integration with multiple providers reducing settlement time by 40%</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">🔤 Kannada OCR - Computer Vision Specialist</h3>
                    <ul className="list-disc pl-5">
                      <li>Tech Stack: Python, TensorFlow, OpenCV, PyTorch, Flask</li>
                      <li>Developed custom CNN architecture for Kannada character recognition</li>
                      <li>Achieved 92% recognition accuracy on handwritten characters through data augmentation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">SKILLS</h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <h3 className="font-bold">Programming & Frameworks</h3>
                    <ul className="list-disc pl-5">
                      <li>Python, C, Java, JavaScript, SQL</li>
                      <li>Django, React, Tailwind</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold">Tools & Concepts</h3>
                    <ul className="list-disc pl-5">
                      <li>Android Studio, Git, Auth0, FlutterFlow, LibreNMS</li>
                      <li>IoT, Computer Vision, AI/ML, Data Structures & Algorithms</li>
                      <li>Networking, Linux</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="mb-6">
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">CERTIFICATIONS</h2>
                <ul className="list-disc pl-5">
                  <li>NPTEL Product & Brand Management (2023)</li>
                  <li>DBMS with MySQL (In Progress)</li>
                  <li>Mathematical Modeling & Control Theory (Self-study, 2023)</li>
                  <li>Auth0 Integration (Django + FlutterFlow, 2024)</li>
                </ul>
              </div>
              
              {/* Interests */}
              <div>
                <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3 text-portfolio-primary">INTERESTS & HOBBIES</h2>
                <ul className="list-disc pl-5 grid grid-cols-2">
                  <li>AI Storytelling</li>
                  <li>Group Theory Research</li>
                  <li>Hackathons</li>
                  <li>OS/Network Deep-Dives</li>
                  <li>Cooking</li>
                  <li>Music</li>
                  <li>Cubbon Park Walks</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Resume;
