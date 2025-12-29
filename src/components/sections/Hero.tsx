import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../../data/personal';
import { FaMapMarkerAlt, FaGlobe, FaCode, FaCalendarAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '6+', color: 'text-gh-green' },
    { label: 'Projects Delivered', value: '30+', color: 'text-gh-blue' },
    { label: 'Technologies', value: '15+', color: 'text-gh-purple' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.3)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
        
        {/* Gradient orbs */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gh-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-gh-purple/5 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gh-green/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Card */}
          <div className="bg-gh-card border border-gh-border rounded-xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gh-green/30 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gh-purple/30 rounded-br-xl" />

            {/* Header with avatar profile and info */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              {/* Avatar */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gh-bg/50 overflow-hidden shadow-xl">
                    <img 
                      src="/profile.jpg" 
                      alt={personalDetails.name}
                      className="w-full h-full object-cover"
                    />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-gh-green rounded-full border-4 border-gh-card shadow-sm" />
              </motion.div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left pt-2">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gh-text mb-3"
                >
                  {personalDetails.name}
                </motion.h1>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl md:text-2xl text-gh-text-muted mb-6 flex items-center justify-center md:justify-start gap-3"
                >
                  <FaCode className="text-gh-blue" />
                  {personalDetails.role}
                </motion.h2>

                {/* Bio */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-gh-text-muted leading-relaxed text-lg max-w-2xl mx-auto md:mx-0 mb-6"
                >
                  {personalDetails.about}
                </motion.p>

                {/* Meta info */}
                {/* <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gh-text-muted mb-8"
                > */}
                  {/* <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gh-text-subtle" />
                    {personalDetails.address}
                  </span> */}
                  {/* <span className="flex items-center gap-2">
                    <FaGlobe className="text-gh-blue" />
                    <a href={personalDetails.website} className="hover:text-gh-blue transition-colors">
                      {personalDetails.website.replace(/^https?:\/\//, '')}
                    </a>
                  </span> */}
                  {/* <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gh-text-subtle" />
                    5+ years in tech
                  </span> */}
                {/* </motion.div> */}

                 {/* Stats - Unified */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-wrap justify-center md:justify-start gap-8 border-t border-gh-border-muted/50 pt-6"
                >
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center md:text-left">
                        <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gh-text-subtle">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                </motion.div>
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#github" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gh-green hover:bg-gh-green-bright text-white font-medium rounded-lg transition-colors"
              >
                <FaCode />
               GitHub Overview
              </a>
              {/* <a 
                href="#github" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gh-card border border-gh-border hover:border-gh-text-subtle text-gh-text font-medium rounded-lg transition-colors"
              >
                <VscGithubAlt />
                GitHub Overview
              </a> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-gh-border rounded-full flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-gh-blue rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
