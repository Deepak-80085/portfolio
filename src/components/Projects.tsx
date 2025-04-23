
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Card } from './ui/card';
import { FaGithub } from 'react-icons/fa';
import { ScrollArea } from "./ui/scroll-area";
import { Briefcase, Code, Globe, GraduationCap, Database, Layout } from 'lucide-react';

// Define the ProjectCardProps interface to make the TypeScript checker happy
interface ProjectCardProps {
  isActive: boolean;
  onClick: () => void;
  title: string;
  purpose: string;
  features: string[];
  tech: string[];
  githubLink?: string;
  link?: string;
  icon: React.ElementType; // This is required according to the error
}

// ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({
  isActive,
  onClick,
  title,
  purpose,
  features,
  tech,
  githubLink,
  link,
  icon: Icon, // Destructure the icon prop and rename to Icon for JSX usage
}) => {
  return (
    <motion.div
      className="flex-none w-[300px]"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" } 
      }}
    >
      <Card 
        className={`h-[400px] ${isActive ? 'bg-[#D3E4FD] text-black' : 'bg-[#2A2F3C] text-white'} border-none hover:bg-[#D3E4FD] hover:text-black transition-all duration-500 ease-in-out group cursor-pointer`}
        onClick={onClick}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <Icon 
                size={24} 
                className={`${isActive ? 'text-black' : 'text-white/70'} group-hover:text-black transition-colors duration-500`} 
              />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isActive ? 'text-black' : 'text-white/70'} group-hover:text-black transition-colors duration-500`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={24} />
              </a>
            )}
            {link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isActive ? 'text-black' : 'text-white/70'} group-hover:text-black transition-colors duration-500`}
                onClick={(e) => e.stopPropagation()}
              >
                🔗
              </a>
            )}
          </div>
          
          <p className={`${isActive ? 'text-black/70' : 'text-white/70'} group-hover:text-black/70 mb-4 transition-colors duration-500`}>
            {purpose}
          </p>
          
          <div className="flex-grow overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold mb-2 ${isActive ? 'text-black' : 'text-[#8B5CF6]'} group-hover:text-black transition-colors duration-500`}>Features</h4>
                <ul className={`list-disc pl-5 space-y-1 ${isActive ? 'text-black/70' : 'text-white/70'} group-hover:text-black/70 transition-colors duration-500`}>
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${isActive ? 'text-black' : 'text-[#8B5CF6]'} group-hover:text-black transition-colors duration-500`}>Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-1 rounded-md ${isActive ? 'bg-black/10' : 'bg-[#1A1F2C]'} ${isActive ? 'text-black/70' : 'text-white/70'} group-hover:bg-black/10 group-hover:text-black/70 text-sm transition-colors duration-500`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  
  const projects = [
    {
      title: "Internship",
      purpose: "Python scripts for SNMP‑based IoT monitoring during an internship.",
      features: ["SNMP polling", "Log parsing", "Alert generation"],
      tech: ["Python 3", "pysnmp", "os", "argparse"],
      githubLink: "https://github.com/Deepak-80085",
      icon: Briefcase
    },
    {
      title: "Python & Django Projects",
      purpose: "Collection of Python tools and Django web applications.",
      features: [
        "File Organizer: Sorts files into categorized folders",
        "Interactive Quiz: Console quiz with scoring system",
        "Django Calculator: Web app with form handling",
        "REST-Framework To-Do API: Complete CRUD operations"
      ],
      tech: ["Python 3", "Django 5.1.4", "Django REST Framework", "shutil"],
      githubLink: "https://github.com/Deepak-80085",
      icon: Code
    },
    {
      title: "HTML Projects",
      purpose: "Front‑end demos in HTML/CSS/JS.",
      features: [
        "Cosmic Explorer: Interactive solar‑system tour with planet animations",
        "Dino Game: Chrome‑style offline dinosaur runner with dynamic obstacles"
      ],
      tech: ["HTML5", "CSS3", "Flexbox", "Vanilla JS"],
      githubLink: "https://github.com/Deepak-80085",
      icon: Globe
    },
    {
      title: "Christ University Projects",
      purpose: "Academic code for Data Structures, OS, DBMS, and Java labs.",
      features: [
        "C/C++ implementations of algorithms (sorting, trees, graphs)",
        "Java exercises and Python scripts from coursework"
      ],
      tech: ["C++ (63%)", "C (19%)", "Java (15%)", "Python"],
      githubLink: "https://github.com/Deepak-80085",
      icon: GraduationCap
    },
    {
      title: "C Programming Projects",
      purpose: "Core C programming examples and small systems.",
      features: [
        "Grade Management System: CLI to record and compute student grades",
        "Personal Finance Tracker: Expense/income ledger",
        "Mandelbrot Generator: Fractal renderer"
      ],
      tech: ["C (97.5%)", "Makefiles"],
      githubLink: "https://github.com/Deepak-80085",
      icon: Database
    },
    {
      title: "Sportshunt Platform",
      purpose: "Mission: Connect all sports users and simplify facility bookings.",
      features: [
        "Venue Hub: Book courts, host tournaments, and shop equipment",
        "Community features linking athletes, coaches, and fans"
      ],
      tech: ["Full-stack web development", "Booking system", "Social features"],
      link: "https://sportshunt.in",
      icon: Layout
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
          
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4 pb-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  isActive={activeProjectIndex === index}
                  onClick={() => setActiveProjectIndex(index)}
                  {...project}
                />
              ))}
            </div>
          </ScrollArea>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
