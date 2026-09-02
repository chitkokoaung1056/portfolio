import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1024px]"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
        <div className="absolute inset-0 rounded-2xl backdrop-blur-[16px] backdrop-saturate-150" />
        <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.09)" }} />
        
        <div className="relative px-6">
          <div className="flex justify-between items-center h-14">
            <a href="#home" className="flex items-center">
              <span className="px-3 py-1.5 rounded-lg text-sm font-bold bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] text-white shadow-lg shadow-[#3b82f6]/20 hover:shadow-[#3b82f6]/40 hover:scale-105 transition-all duration-300">
                CKKA
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeHash === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm transition-colors duration-200 group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white hover:bg-white/[0.04]"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-2 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
          <div className="absolute inset-0 rounded-2xl backdrop-blur-[16px] backdrop-saturate-150" />
          <div className="absolute inset-0 rounded-2xl border" style={{ borderColor: "rgba(255,255,255,0.09)" }} />
          
          <div className="relative px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeHash === item.href;
              return (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  href={item.href}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "text-white bg-white/[0.04]" : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}