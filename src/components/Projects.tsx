
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Internship",
      purpose: "Python scripts for SNMP‑based IoT monitoring during an internship.",
      features: ["SNMP polling", "Log parsing", "Alert generation"],
      tech: ["Python 3", "pysnmp", "os", "argparse"],
      githubLink: "#"
    },
    {
      title: "Python Projects",
      purpose: "Collection of personal CLI tools and exercises.",
      features: [
        "File Organizer: Automatically sorts files into categorized folders",
        "Interactive Quiz: Console quiz engine with random questions and scoring"
      ],
      tech: ["Python 3", "shutil", "I/O operations"],
      githubLink: "#"
    },
    {
      title: "HTML Projects",
      purpose: "Front‑end demos in HTML/CSS/JS.",
      features: [
        "Cosmic Explorer: Interactive solar‑system tour with planet animations",
        "Dino Game: Chrome‑style offline dinosaur runner with dynamic obstacles"
      ],
      tech: ["HTML5", "CSS3", "Flexbox", "Vanilla JS"],
      githubLink: "#"
    },
    {
      title: "Christ University Projects",
      purpose: "Academic code for Data Structures, OS, DBMS, and Java labs.",
      features: [
        "C/C++ implementations of algorithms (sorting, trees, graphs)",
        "Java exercises and Python scripts from coursework"
      ],
      tech: ["C++ (63%)", "C (19%)", "Java (15%)", "Python"],
      githubLink: "#"
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
      githubLink: "#"
    },
    {
      title: "Django Projects",
      purpose: "Web applications demonstrating Django capabilities.",
      features: [
        "Basic calculator with input form and result display",
        "REST-Framework to-do API with complete CRUD operations",
        "CI/CD integration with GitHub Actions"
      ],
      tech: ["Django 5.1.4", "Django REST Framework", "asgiref", "sqlparse"],
      githubLink: "#"
    },
    {
      title: "Sportshunt Platform",
      purpose: "Mission: Connect all sports users and simplify facility bookings.",
      features: [
        "Venue Hub: Book courts, host tournaments, and shop equipment",
        "Community features linking athletes, coaches, and fans"
      ],
      tech: ["Full-stack web development", "Booking system", "Social features"],
      link: "https://sportshunt.in"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-[#2A2F3C] border-none text-white hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          🔗
                        </a>
                      )}
                    </div>
                    <CardDescription className="text-white/70">
                      {project.purpose}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-[#8B5CF6]">Features</h4>
                        <ul className="list-disc pl-5 space-y-1 text-white/70">
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-[#8B5CF6]">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 rounded-md bg-[#1A1F2C] text-white/70 text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
