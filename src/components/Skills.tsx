import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = [
  {
    name: "React",
    icon: "⚛️",
    description: "Modern component-based UI development",
    color: "text-neon-cyan"
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first styling for rapid UI development",
    color: "text-neon-blue"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "Dynamic programming for interactive experiences",
    color: "text-neon-purple"
  },
  {
    name: "Git",
    icon: "📚",
    description: "Version control and collaborative development",
    color: "text-accent"
  },
  {
    name: "Node.js",
    icon: "🚀",
    description: "Backend development and API integration",
    color: "text-neon-pink"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cyber text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-card border-border hover:border-neon-cyan transition-all duration-300 p-6 h-full group cursor-pointer">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">
                    {skill.icon}
                  </div>
                  
                  <h3 className={`font-cyber text-xl font-semibold mb-3 ${skill.color} group-hover:text-neon-cyan transition-colors duration-300`}>
                    {skill.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
          
          {/* Add Node.js as 6th item in a centered position for odd grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="lg:col-start-2"
          >
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;