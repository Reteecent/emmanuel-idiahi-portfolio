import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";  
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-cyber text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border-border p-8">
              <h3 className="font-cyber text-2xl font-semibold mb-6 text-neon-cyan">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-neon-cyan transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-neon-cyan transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-neon-cyan transition-colors duration-300 min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-cyber hover:shadow-glow-cyan transition-all duration-300 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-gradient-card border-border p-8">
              <h3 className="font-cyber text-2xl font-semibold mb-6 text-neon-purple">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-neon-cyan" />
                  <span className="text-muted-foreground">emmanuel.idiahi@example.com</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-neon-purple">📍</span>
                  <span className="text-muted-foreground">Benin City, Nigeria</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-card border-border p-8">
              <h3 className="font-cyber text-xl font-semibold mb-6 text-accent">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </Card>

            <div className="bg-gradient-card p-6 rounded-lg border border-border">
              <p className="text-neon-cyan font-semibold mb-2">Open to Opportunities</p>
              <p className="text-muted-foreground text-sm">
                Currently seeking internship and entry-level positions in frontend development projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;