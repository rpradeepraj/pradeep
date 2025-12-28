import React from 'react';
import { personalDetails, socialLinks } from '../../data/personal';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gh-bg border-t border-gh-border">
      <div className="container mx-auto px-6 py-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-gh-border-muted">
          {/* Logo and tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gh-card border border-gh-border rounded-lg flex items-center justify-center">
              <VscCode className="text-gh-blue text-lg" />
            </div>
            <div>
              <span className="font-semibold text-gh-text">
                pradeep<span className="text-gh-purple">.dev</span>
              </span>
              <p className="text-gh-text-subtle text-xs">Building great experiences</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={socialLinks.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gh-text-muted hover:text-gh-blue hover:bg-gh-card rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="p-2 text-gh-text-muted hover:text-gh-text hover:bg-gh-card rounded-lg transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href={`mailto:${personalDetails.email}`}
              className="p-2 text-gh-text-muted hover:text-gh-green hover:bg-gh-card rounded-lg transition-all"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-sm text-gh-text-subtle">
            © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </p>
          <p className="text-sm text-gh-text-subtle flex items-center gap-1">
            Made with <FaHeart className="text-gh-pink text-xs" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
