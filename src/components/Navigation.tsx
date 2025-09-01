import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

const Navigation = () => {  
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  // Close sidebar on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);
  
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
    <>
      {/* Desktop nav */}
      <motion.nav 
        className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-card backdrop-blur-md border border-border rounded-full px-6 py-3 w-[90vw] max-w-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ul className="flex gap-6 items-center justify-center w-full">
          {navItems.map((item) => (
            <li key={item.href} className="w-full md:w-auto">
              <button
                onClick={() => scrollToSection(item.href)}
                className={`
                  w-full md:w-auto px-4 py-2 rounded-full transition-all duration-300 font-medium
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

      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-6 right-6 z-[100] p-2 rounded-full bg-gradient-card border border-border shadow-lg"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-6 h-6 relative">
          <span className="absolute block w-6 h-0.5 bg-neon-cyan rounded transition-all top-1"></span>
          <span className="absolute block w-6 h-0.5 bg-neon-cyan rounded transition-all top-3"></span>
          <span className="absolute block w-6 h-0.5 bg-neon-cyan rounded transition-all top-5"></span>
        </span>
      </button>

      {/* Mobile sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm" style={{ transition: 'background 0.3s' }}>
          <nav
            ref={sidebarRef}
            className="fixed top-0 left-0 h-full w-64 bg-gradient-card border-r border-border shadow-lg p-8 flex flex-col gap-6"
          >
            <button
              className="self-end mb-8 p-2 rounded-full hover:bg-muted focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="block w-6 h-6 relative">
                <span className="absolute block w-6 h-0.5 bg-neon-cyan rounded rotate-45 top-3"></span>
                <span className="absolute block w-6 h-0.5 bg-neon-cyan rounded -rotate-45 top-3"></span>
              </span>
            </button>
            <ul className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setMenuOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 rounded-full transition-all duration-300 font-medium text-left
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
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;