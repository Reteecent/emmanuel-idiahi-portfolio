import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cyber text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border-border p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  I'm a passionate <span className="text-neon-cyan font-semibold">200-level Production Engineering student</span> at the 
                  University of Benin, currently making my mark as an <span className="text-neon-purple font-semibold">entry-level frontend developer</span> 
                  with big dreams in the tech industry.
                </p>
                
                <p className="text-muted-foreground">
                  My journey in technology is driven by a deep fascination with how code can transform ideas into 
                  interactive digital experiences. I specialize in creating modern, responsive web applications 
                  that not only look stunning but also provide seamless user experiences.
                </p>
                
                <p className="text-muted-foreground">
                  As an <span className="text-accent font-semibold">AI enthusiast</span>, I'm constantly exploring the intersection 
                  of artificial intelligence and web development. I believe that the future of frontend development 
                  lies in AI-powered solutions that can adapt, learn, and provide personalized user experiences.
                </p>
                
                <div className="bg-muted/20 p-6 rounded-lg border border-border mt-8">
                  <p className="text-neon-cyan font-semibold mb-2">My Mission</p>
                  <p className="text-muted-foreground">
                    To bridge the gap between stunning visual design and intelligent functionality, 
                    creating web experiences that are not just beautiful, but truly smart and user-centric.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;