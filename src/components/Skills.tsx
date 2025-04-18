
import { motion } from 'framer-motion';

const programmingSkills = [
  { name: "Python", level: 90 },
  { name: "C", level: 75 },
  { name: "Java", level: 70 },
  { name: "JavaScript", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Django", level: 85 },
  { name: "React", level: 75 },
  { name: "Tailwind", level: 80 },
];

const toolsAndConcepts = [
  { name: "Android Studio", level: 65 },
  { name: "Git", level: 85 },
  { name: "Auth0", level: 70 },
  { name: "FlutterFlow", level: 65 },
  { name: "LibreNMS", level: 75 },
  { name: "IoT", level: 80 },
  { name: "Computer Vision", level: 75 },
  { name: "AI/ML", level: 70 },
  { name: "Data Structures & Algorithms", level: 85 },
  { name: "Networking", level: 70 },
  { name: "Linux", level: 75 },
];

const SkillBar = ({ skill, delay }: { skill: { name: string, level: number }, delay: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-portfolio-dark font-medium">✓ {skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-portfolio-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Skills Matrix</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Programming & Frameworks</h3>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                {programmingSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Tools & Concepts</h3>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                {toolsAndConcepts.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Skill categories - alternative visualization */}
          <motion.div 
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-portfolio-accent1 rounded-lg p-4 text-center">
              <h4 className="font-semibold mb-2">Programming</h4>
              <p className="text-sm text-gray-600">Python, Java, C, JavaScript</p>
            </div>
            
            <div className="bg-portfolio-accent2 rounded-lg p-4 text-center">
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-sm text-gray-600">Django, React, HTML/CSS</p>
            </div>
            
            <div className="bg-portfolio-accent3 rounded-lg p-4 text-center">
              <h4 className="font-semibold mb-2">Data & AI</h4>
              <p className="text-sm text-gray-600">ML, Computer Vision, SQL</p>
            </div>
            
            <div className="bg-portfolio-accent4 rounded-lg p-4 text-center">
              <h4 className="font-semibold mb-2">Systems</h4>
              <p className="text-sm text-gray-600">Linux, Networking, IoT</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
