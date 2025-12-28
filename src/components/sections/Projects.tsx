import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { VscRepo, VscCircleFilled } from 'react-icons/vsc';

type FilterType = 'all' | 'web' | 'mobile';

const tabs: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Apps' },
  { key: 'mobile', label: 'Mobile Apps' },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="bg-gh-card border border-gh-border rounded-xl p-6 hover:border-gh-blue/50 transition-all group h-full flex flex-col"
  >
    {/* Header */}
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <VscRepo className="text-gh-text-muted text-lg" />
        <h3 className="font-semibold text-gh-blue group-hover:underline cursor-pointer">
          {project.title}
        </h3>
      </div>
      <span className="text-xs px-2 py-0.5 border border-gh-border rounded-full text-gh-text-muted capitalize">
        {project.type}
      </span>
    </div>

    {/* Client */}
    <p className="text-xs text-gh-text-subtle mb-2">
      {project.client}
    </p>

    {/* Description */}
    <p className="text-sm text-gh-text-muted mb-4 leading-relaxed flex-grow line-clamp-3">
      {project.description}
    </p>

    {/* Tools/Topics */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tools.slice(0, 4).map((tool) => (
        <span 
          key={tool}
          className="text-xs px-2 py-1 bg-gh-blue/10 text-gh-blue rounded-full hover:bg-gh-blue/20 transition-colors"
        >
          {tool}
        </span>
      ))}
      {project.tools.length > 4 && (
        <span className="text-xs px-2 py-1 text-gh-text-subtle">
          +{project.tools.length - 4} more
        </span>
      )}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gh-border-muted">
      <div className="flex items-center gap-4 text-xs text-gh-text-subtle">
        <span className="flex items-center gap-1">
          <VscCircleFilled style={{ color: project.languageColor }} className="text-sm" />
          {project.primaryLanguage}
        </span>
        {project.stars && (
          <span className="flex items-center gap-1">
            <FaStar className="text-gh-yellow" />
            {project.stars}
          </span>
        )}
      </div>
      <span className="text-xs text-gh-text-subtle">
        {project.duration}
      </span>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-gh-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-4">
            Project Experience
          </h2>
          <p className="text-gh-text-muted max-w-2xl mx-auto">
            Delivering robust software solutions for government and private sectors
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-gh-card border border-gh-border rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all relative ${
                  activeFilter === tab.key
                    ? 'text-gh-text bg-gh-bg'
                    : 'text-gh-text-muted hover:text-gh-text'
                }`}
              >
                {tab.label}
                {activeFilter === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gh-bg rounded-md -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a 
            href="https://github.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gh-blue hover:underline text-sm"
          >
            View all projects on GitHub
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
