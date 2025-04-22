
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  purpose: string;
  features: string[];
  tech: string[];
  githubLink?: string;
  link?: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ProjectCard = ({
  title,
  purpose,
  features,
  tech,
  githubLink,
  link,
  icon,
  isActive,
  onClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onClick={onClick}
      className="h-full cursor-pointer"
    >
      <Card 
        className={cn(
          "h-full transition-all duration-500 ease-in-out border-none",
          isActive 
            ? "bg-teal-500 text-white shadow-lg" 
            : "bg-[#2A2F3C] text-white/80 hover:bg-teal-500/20"
        )}
      >
        <CardHeader className="relative">
          <div className="flex justify-between items-start">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500",
              isActive ? "bg-white text-teal-500" : "bg-teal-500/10 text-white"
            )}>
              {icon}
            </div>
            <div className="flex gap-2">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-colors duration-500",
                    isActive ? "text-white/90 hover:text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  <FaGithub size={24} />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-colors duration-500",
                    isActive ? "text-white/90 hover:text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  🔗
                </a>
              )}
            </div>
          </div>
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <CardDescription className={cn(
            "transition-colors duration-500",
            isActive ? "text-white/90" : "text-white/70"
          )}>
            {purpose}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className={cn(
                "font-semibold mb-2 transition-colors duration-500",
                isActive ? "text-white" : "text-[#8B5CF6]"
              )}>
                Features
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx} className="text-white/70">{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={cn(
                "font-semibold mb-2 transition-colors duration-500",
                isActive ? "text-white" : "text-[#8B5CF6]"
              )}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "px-2 py-1 rounded-md text-sm transition-colors duration-500",
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-[#1A1F2C] text-white/70"
                    )}
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
  );
};

export default ProjectCard;
