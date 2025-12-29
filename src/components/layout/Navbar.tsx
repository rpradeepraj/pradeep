import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiDownload, HiSun, HiMoon } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  // { name: 'Apps', href: '#apps' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  // { name: 'About', href: '#about' },
  { name: 'GitHub', href: '#github' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-gh-bg/95 backdrop-blur-md border-gh-border py-3' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gh-card border border-gh-border rounded-lg flex items-center justify-center group-hover:border-gh-blue transition-colors">
            <VscCode className="text-gh-blue text-xl" />
          </div>
          <span className="font-semibold text-lg text-gh-text group-hover:text-gh-blue transition-colors">
            pradeep<span className="text-gh-purple">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gh-text-muted hover:text-gh-text transition-colors rounded-md hover:bg-gh-card group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gh-blue group-hover:w-[calc(100%-16px)] transition-all duration-300 rounded-full" />
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 text-gh-text-muted hover:text-gh-text transition-colors rounded-md hover:bg-gh-card"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <HiSun className="text-xl text-gh-yellow" />
              ) : (
                <HiMoon className="text-xl text-gh-purple" />
              )}
            </motion.div>
          </button>

          {/* GitHub Icon */}
          <a
            href="https://github.com/rpradeepraj"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-gh-text-muted hover:text-gh-text transition-colors rounded-md hover:bg-gh-card"
          >
            <FaGithub className="text-xl" />
          </a>

          {/* CV Download Button */}
          <a
            href="/Resume.pdf"
            download
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gh-green to-gh-blue text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-gh-green/20 hover:shadow-gh-green/30"
          >
            <HiDownload className="text-lg" />
            CV
          </a>
        </div>

        {/* Mobile Right Section */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gh-text-muted hover:text-gh-text transition-colors rounded-lg border border-gh-border hover:bg-gh-card"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <HiSun className="text-xl text-gh-yellow" />
            ) : (
              <HiMoon className="text-xl text-gh-purple" />
            )}
          </button>

          {/* Menu Toggle */}
          <button
            className="text-xl text-gh-text-muted hover:text-gh-text focus:outline-none border border-gh-border p-2 rounded-lg hover:bg-gh-card transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gh-card border-b border-gh-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gh-text-muted hover:text-gh-text px-4 py-2 rounded-md hover:bg-gh-bg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/rpradeepraj"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-base font-medium text-gh-text-muted hover:text-gh-text px-4 py-2 rounded-md hover:bg-gh-bg transition-colors"
              >
                <FaGithub /> GitHub Profile
              </a>
              {/* CV Download Button - Mobile */}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-base font-medium text-white px-4 py-3 mt-2 rounded-lg bg-gradient-to-r from-gh-green to-gh-blue transition-colors"
              >
                <HiDownload /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
