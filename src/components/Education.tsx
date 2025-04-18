
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    institution: "Christ University",
    degree: "B.Sc. Computer Science & Mathematics",
    period: "2023 - 2026",
    info: "Currently pursuing dual specialization with focus on computational mathematics and software engineering."
  },
  {
    id: 2,
    institution: "Christ Junior College",
    degree: "PCMB (Physics, Chemistry, Mathematics, Biology)",
    period: "2021 - 2023",
    info: "Completed pre-university education with science concentration and foundation in STEM subjects."
  },
  {
    id: 3,
    institution: "Christ School",
    degree: "High School",
    period: "2011 - 2021", 
    info: "Completed primary and secondary education with excellence in mathematics and science."
  }
];

const certificationData = [
  {
    id: 1,
    course: "NPTEL Product & Brand Management",
    issuer: "NPTEL",
    date: "2023",
    status: "Completed"
  },
  {
    id: 2,
    course: "DBMS with MySQL",
    issuer: "Udemy",
    date: "2024",
    status: "In Progress"
  },
  {
    id: 3,
    course: "Mathematical Modeling & Control Theory",
    issuer: "Self-study",
    date: "2023",
    status: "Completed"
  },
  {
    id: 4,
    course: "Auth0 Integration (Django + FlutterFlow)",
    issuer: "Auth0 Documentation",
    date: "2024",
    status: "Completed"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Education</h3>
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-portfolio-primary rounded-full flex items-center justify-center text-white">
                      {item.id}
                    </div>
                    <h4 className="text-xl font-semibold text-portfolio-dark">{item.institution}</h4>
                    <p className="text-gray-600 font-medium">{item.degree}</p>
                    <div className="flex justify-between items-center mt-2 mb-3">
                      <span className="text-portfolio-secondary">{item.period}</span>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        item.id === 1 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.id === 1 ? 'Current' : 'Completed'}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{item.info}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Certifications & Courses</h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="divide-y divide-gray-100">
                  {certificationData.map((cert, index) => (
                    <motion.li 
                      key={cert.id} 
                      className="py-4 first:pt-0 last:pb-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-lg font-medium text-portfolio-dark">{cert.course}</h4>
                          <p className="text-gray-500">{cert.issuer}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-500">{cert.date}</span>
                          <span className={`block mt-1 px-2 py-1 rounded-full text-xs ${
                            cert.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {cert.status}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Additional education info */}
              <motion.div 
                className="mt-8 bg-portfolio-accent4/30 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold text-portfolio-primary mb-3">Continuous Learning</h4>
                <p className="text-gray-600">
                  I'm constantly expanding my knowledge through online courses, documentation, and academic papers. 
                  Currently exploring advanced topics in AI/ML and computer vision while strengthening my mathematical foundations.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
