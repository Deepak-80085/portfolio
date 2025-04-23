import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ScrollArea } from "./ui/scroll-area";
import { Briefcase, Code, Globe, GraduationCap, Database, Layout } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  purpose: string;
  features: string[];
  tech: string[];
  githubLink?: string;
  link?: string;
  icon: React.ElementType;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  purpose,
  features,
  tech,
  githubLink,
  link,
  icon: Icon,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-[300px] flex-none"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`h-[400px] rounded-xl transition-all duration-500 ease-in-out overflow-hidden
          ${isHovered ? 'bg-[#D3E4FD]' : 'bg-white/5'}
          hover:bg-[#D3E4FD] group`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-full ${color} transition-colors duration-500`}>
              <Icon 
                size={24} 
                className={`${isHovered ? 'text-black' : 'text-white'} group-hover:text-black transition-colors duration-500`} 
              />
            </div>
            <div className="flex-1">
              <h3 className={`text-xl font-semibold mb-2 ${isHovered ? 'text-black' : 'text-white'} group-hover:text-black transition-colors duration-500`}>
                {title}
              </h3>
              <p className={`text-sm ${isHovered ? 'text-black/70' : 'text-white/70'} group-hover:text-black/70 transition-colors duration-500`}>
                {purpose}
              </p>
            </div>
          </div>
          
          <motion.div 
            className="flex-grow overflow-hidden"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isHovered && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-black/90">Features</h4>
                  <ul className="list-disc pl-5 space-y-1 text-black/70 text-sm">
                    {features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-black/90">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 rounded-md bg-black/10 text-black/70 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Internship",
      purpose: "Python scripts for SNMP‑based IoT monitoring during an internship.",
      features: ["SNMP polling", "Log parsing", "Alert generation"],
      tech: ["Python 3", "pysnmp", "os", "argparse"],
      githubLink: "https://github.com/Deepak-80085",
      icon: Briefcase,
      color: "bg-blue-100"
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
      icon: Code,
      color: "bg-green-100"
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
      icon: Globe,
      color: "bg-yellow-100"
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
      icon: GraduationCap,
      color: "bg-pink-100"
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
      icon: Database,
      color: "bg-purple-100"
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
      icon: Layout,
      color: "bg-orange-100"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
          
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
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
