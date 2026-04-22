import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Projetos", href: "/#projects" },
  { name: "Sobre", href: "/#about" },
  { name: "Contato", href: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 h-20 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-black/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-[60px]">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold uppercase tracking-tighter text-white"
        >
          Julio Cesar
        </motion.a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 border-t border-white/10 pt-4">
                <a
                  href="https://github.com/Bugre404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-de-freitas-filho-96b454a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
