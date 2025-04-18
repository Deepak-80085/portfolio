import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
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
    <section id="projects" className="py-20 bg-portfolio-secondary">
      <div className="section-container">
        <AnimatedSection delay={0.2}>
          <h2 className="section-title text-center text-portfolio-light mb-8">My Projects</h2>
          <p className="text-center text-portfolio-light/80 max-w-2xl mx-auto mb-16">
            Here are some of my recent projects that showcase my skills and passion for technology.
            Each project represents a unique challenge and learning opportunity.
          </p>

          {/* Project cards for mobile view */}
          <div className="md:hidden space-y-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.2 * index}>
                <div
                  className="rounded-xl shadow-lg overflow-hidden bg-portfolio-dark hover:shadow-2xl transition-all duration-500 transform-gpu hover:scale-105"
                >
                  <div className="h-48 relative">
                    <project.ImageComponent />
                  </div>
                  <div className="p-6 bg-portfolio-secondary/95 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2 text-portfolio-light">{project.title}</h3>
                    <p className="text-portfolio-light/80 mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-portfolio-tertiary mr-2">•</span>
                          <span className="text-portfolio-light/70 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Project showcase for desktop view */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.id} delay={0.1 * index}>
                  <button
                    className={`w-full cursor-pointer rounded-lg p-4 transition-all duration-300 transform-gpu hover:scale-105 ${
                      activeProject === index
                        ? 'bg-portfolio-tertiary text-portfolio-light scale-105 shadow-lg'
                        : 'bg-portfolio-dark text-portfolio-light hover:bg-portfolio-accent1'
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <h3 className="text-center font-medium">
                      {project.title.split(' - ')[0]}
                    </h3>
                  </button>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <div
                className="rounded-xl shadow-2xl overflow-hidden bg-portfolio-dark transform-gpu hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="grid md:grid-cols-2">
                  <div className="h-72 relative">
                    {(() => {
                      const ProjectImage = projects[activeProject].ImageComponent;
                      return <ProjectImage />;
                    })()}
                  </div>
                  <div className="p-8 bg-portfolio-secondary/95 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-3 text-portfolio-light">{projects[activeProject].title}</h3>
                    <p className="text-portfolio-light/80 mb-6">{projects[activeProject].description}</p>
                    <ul className="space-y-3">
                      {projects[activeProject].bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-portfolio-tertiary mr-2 text-xl">•</span>
                          <span className="text-portfolio-light/70">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
