import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {  
  const [activeSection, setActiveSection] = useState("");
  
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-card backdrop-blur-md border border-border rounded-full px-6 py-3"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <button
              onClick={() => scrollToSection(item.href)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 font-medium
                ${activeSection === item.href.substring(1) 
                  ? "bg-neon-cyan text-background shadow-glow-cyan" 
                  : "text-muted-foreground hover:text-neon-cyan"
                }
              `}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;