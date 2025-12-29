import React from 'react';
import { motion } from 'framer-motion';
import { craftedApps } from '../../data/apps';
import { FaPlay, FaCode } from 'react-icons/fa';
import { VscPackage } from 'react-icons/vsc';

const Apps: React.FC = () => {
  return (
    <section id="apps" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gh-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-gh-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gh-card border border-gh-border rounded-full mb-4">
            <VscPackage className="text-gh-green" />
            <span className="text-sm text-gh-text-muted">Work Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text">
            Crafted Apps
          </h2>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {craftedApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              {/* App Icon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative flex-shrink-0"
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                  style={{ backgroundColor: app.color }}
                />
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gh-card border border-gh-border rounded-2xl overflow-hidden flex items-center justify-center">
                  <img 
                    src={app.icon} 
                    alt={app.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to text if image fails
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Fallback icon placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gh-green/20 to-gh-blue/20">
                    <span className="text-2xl font-bold text-gh-green">{app.name.charAt(0)}</span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gh-text mb-2">
                  {app.name}
                </h3>
                <p className="text-gh-text-muted text-sm leading-relaxed mb-4">
                  {app.description}
                </p>
                
                {/* Action buttons */}
                <div className="flex gap-3">
                  {app.demoUrl && (
                    <motion.a
                      href={app.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-gh-card border border-gh-border flex items-center justify-center text-gh-text-muted hover:text-gh-green hover:border-gh-green transition-colors"
                    >
                      <FaPlay className="text-sm ml-0.5" />
                    </motion.a>
                  )}
                  {app.codeUrl && (
                    <motion.a
                      href={app.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-gh-card border border-gh-border flex items-center justify-center text-gh-text-muted hover:text-gh-green hover:border-gh-green transition-colors"
                    >
                      <FaCode className="text-sm" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
