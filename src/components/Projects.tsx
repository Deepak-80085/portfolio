
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MewMawImage, 
  ExpenseEaseImage, 
  KannadaOCRImage, 
  SportshuntImage, 
  JarvisImage 
} from './ProjectImages';

// Project data
const projects = [
  {
    id: 1,
    title: "🎨 MewMaw - Lead Developer",
    description: "AI-powered storytelling platform generating illustrated children's stories from prompts",
    bullets: [
      "Tech Stack: Python, Django, OpenAI API, React, TailwindCSS",
      "Implemented end-to-end story generation pipeline and image creation workflow",
      "Achieved 30% faster story generation through prompt engineering and caching techniques"
    ],
    ImageComponent: MewMawImage,
    color: "from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    title: "💰 ExpenseEase - Full Stack Developer",
    description: "Group expense tracking and splitting application with intuitive mobile UI",
    bullets: [
      "Tech Stack: React Native, Firebase, Node.js, Express, MongoDB",
      "Built real-time expense calculation and debt simplification algorithm",
      "Implemented secure payment integration with multiple providers reducing settlement time by 40%"
    ],
    ImageComponent: ExpenseEaseImage,
    color: "from-green-50 to-emerald-100"
  },
  {
    id: 3,
    title: "🔤 Kannada OCR - Computer Vision Specialist",
    description: "Optical character recognition system for Kannada script with 90%+ accuracy",
    bullets: [
      "Tech Stack: Python, TensorFlow, OpenCV, PyTorch, Flask",
      "Developed custom CNN architecture for Kannada character recognition",
      "Achieved 92% recognition accuracy on handwritten characters through data augmentation"
    ],
    ImageComponent: KannadaOCRImage,
    color: "from-orange-50 to-amber-100"
  },
  {
    id: 4,
    title: "🏆 Sportshunt - E-commerce Developer",
    description: "Sports equipment e-commerce platform with advanced filtering and recommendations",
    bullets: [
      "Tech Stack: Django, PostgreSQL, React, Redux, Stripe API",
      "Implemented responsive product catalog with real-time inventory management",
      "Developed personalized recommendation engine increasing average order value by 25%"
    ],
    ImageComponent: SportshuntImage,
    color: "from-red-50 to-rose-100"
  },
  {
    id: 5,
    title: "🤖 Jarvis-Style AI Assistant - Lead Architect",
    description: "Voice-activated personal assistant with custom command processing",
    bullets: [
      "Tech Stack: Python, TensorFlow, Google Speech API, NLP libraries",
      "Built modular architecture supporting 20+ custom voice commands and integrations",
      "Implemented context-aware conversation flows with 85% intent recognition accuracy"
    ],
    ImageComponent: JarvisImage,
    color: "from-purple-50 to-violet-100"
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">My Projects</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and passion for technology.
            Each project represents a unique challenge and learning opportunity.
          </p>

          {/* Project cards for mobile view */}
          <div className="md:hidden space-y-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`rounded-xl shadow-md overflow-hidden bg-gradient-to-br ${project.color}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 relative">
                  {/* Project image */}
                  <project.ImageComponent />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-portfolio-primary mr-2">•</span>
                        <span className="text-gray-600 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project showcase for desktop view */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`cursor-pointer rounded-lg p-4 transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-portfolio-primary text-white scale-105 shadow-md'
                      : 'bg-white hover:bg-portfolio-accent4/50'
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-center font-medium">
                    {project.title.split(' - ')[0]}
                  </h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={projects[activeProject].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-xl shadow-lg overflow-hidden bg-gradient-to-br ${projects[activeProject].color}`}
            >
              <div className="grid md:grid-cols-2">
                <div className="h-72 relative">
                  {/* Project image */}
                  {(() => {
                    const ProjectImage = projects[activeProject].ImageComponent;
                    return <ProjectImage />;
                  })()}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-portfolio-dark">{projects[activeProject].title}</h3>
                  <p className="text-gray-700 mb-6">{projects[activeProject].description}</p>
                  <ul className="space-y-3">
                    {projects[activeProject].bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-portfolio-primary mr-2 text-xl">•</span>
                        <span className="text-gray-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
