import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../../data/personal';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { VscMarkdown } from 'react-icons/vsc';

const highlights = [
  { 
    icon: FaBriefcase, 
    title: 'Current Role',
    value: 'Senior Software Engineer',
    color: 'text-gh-blue'
  },
  { 
    icon: FaRocket, 
    title: 'Specialization',
    value: 'Frontend Development',
    color: 'text-gh-green'
  },
  { 
    icon: FaGraduationCap, 
    title: 'Focus Areas',
    value: 'React, TypeScript, AWS',
    color: 'text-gh-purple'
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-gh-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* README Style Card */}
          <div className="bg-gh-card border border-gh-border rounded-xl overflow-hidden max-w-4xl mx-auto">
            {/* File header */}
            <div className="bg-gh-bg border-b border-gh-border px-4 py-3 flex items-center gap-3">
              <VscMarkdown className="text-gh-blue text-lg" />
              <span className="text-sm font-medium text-gh-text">README.md</span>
              <span className="text-xs text-gh-text-subtle ml-auto">About Me</span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gh-text mb-6 pb-4 border-b border-gh-border-muted">
                # About Me
              </h2>

              {/* Bio */}
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gh-text-muted leading-relaxed text-lg">
                  {personalDetails.about}
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-gh-bg border border-gh-border-muted rounded-lg p-4 hover:border-gh-border transition-colors"
                  >
                    <item.icon className={`${item.color} text-xl mb-2`} />
                    <div className="text-xs text-gh-text-subtle uppercase tracking-wide mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm font-medium text-gh-text">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location & Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gh-text-muted pt-6 border-t border-gh-border-muted">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gh-text-subtle" />
                  {personalDetails.address}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gh-green rounded-full" />
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
