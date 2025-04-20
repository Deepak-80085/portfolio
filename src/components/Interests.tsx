import { motion } from 'framer-motion';

const interestsData = [
  {
    emoji: "💻",
    title: "Hackathons",
    description: "Participating in coding competitions to solve real-world problems and learn new technologies."
  },
  {
    emoji: "🌐",
    title: "OS/Network Deep-Dives",
    description: "Exploring the inner workings of operating systems and network protocols."
  },
  {
    emoji: "🍳",
    title: "Cooking",
    description: "Experimenting with different cuisines and techniques in the kitchen."
  },
  {
    emoji: "🎵",
    title: "Music",
    description: "Appreciating various genres and understanding the mathematics behind music."
  },
  {
    emoji: "🌳",
    title: "Cubbon Park Walks",
    description: "Enjoying nature while taking reflective walks in Bangalore's iconic Cubbon Park."
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Interests & Hobbies</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {interestsData.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-semibold mb-2 text-portfolio-dark">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-gray-600 italic">
                "Beyond coding and mathematics, I believe in maintaining a balanced life. 
                These interests help me stay creative, grounded, and continuously inspired."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
