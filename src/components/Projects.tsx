
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import neontechImg from '@/assets/neontech.png';
import unrulyImg from '@/assets/unruly.png';
import scribeaiImg from '@/assets/scribeai.png';

const projects = [
  {
    title: "NeonTech Startup Landing Page",
    description: "A futuristic, minimalist startup landing page built with React and Tailwind CSS. Featuring a sleek dark theme, glowing neon accents, smooth animations, and a clean layout to showcase your products or services. Perfect for startups, SaaS, and tech companies looking for a modern web presence.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Reteecent/neontech",
    live: "https://theneontech.netlify.app/",
  image: neontechImg,
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Unruly Landing Page",
    description: "A bold and creative landing page template featuring innovative design elements and seamless user experience optimization.",
    tech: ["HTML", "CSS Animations", "Responsive Design"],
    github: "https://github.com/Reteecent/unruly-landing-page-template",
    live: "https://unruly-landing-page.netlify.app/",
  image: unrulyImg,
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    title: "Scribe AI",
    description: "A modern, responsive AI-powered chat application built with vanilla JavaScript that provides intelligent conversations with document export capabilities.",
    tech: ["React", "AI Integration", "Node.js"],
    github: "https://github.com/Reteecent/scribe-ai",
    live: "https://the-scribe-ai.netlify.app/",
  image: scribeaiImg,
    gradient: "from-neon-blue to-neon-purple"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cyber text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in frontend development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card border-border hover:border-neon-cyan transition-all duration-300 h-full group">
                <div className="p-6 h-full flex flex-col">
                  {/* Project screenshot image */}
                  <img
                    src={project.image}
                    alt={project.title + ' screenshot'}
                    className="w-full h-32 object-cover rounded-lg mb-6 opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                  
                  <h3 className="font-cyber text-xl font-semibold mb-3 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;