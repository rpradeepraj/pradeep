import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../../data/experience';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { VscHistory } from 'react-icons/vsc';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-gh-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-gh-cyan/5 rounded-full blur-[100px]" />
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
          <VscHistory className="text-gh-orange" />
            <span className="text-sm text-gh-text-muted">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-4">
            Experience & Education
          </h2>
          <p className="text-gh-text-muted max-w-2xl mx-auto">
            My professional journey building innovative solutions across industries
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gh-green/20 rounded-lg flex items-center justify-center">
                <FaBriefcase className="text-gh-green" />
              </div>
              <h3 className="text-xl font-semibold text-gh-text">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gh-green via-gh-blue to-gh-purple opacity-30" />

              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-14 pb-8 last:pb-0"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gh-card border-2 border-gh-green rounded-full flex items-center justify-center shadow-lg shadow-gh-green/20">
                    <FaBriefcase className="text-gh-green text-sm" />
                  </div>

                  {/* Content card */}
                  <div className="group bg-gh-card border border-gh-border rounded-xl p-6 hover:border-gh-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-gh-green/5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gh-text group-hover:text-gh-green transition-colors">
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gh-text-muted mt-1">
                          <FaBuilding className="text-gh-text-subtle" />
                          {exp.company}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gh-bg border border-gh-border-muted rounded-full text-xs text-gh-text-muted">
                        <FaCalendarAlt className="text-gh-text-subtle" />
                        {exp.date}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gh-text-muted text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gh-purple/20 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-gh-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gh-text">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gh-purple/30" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-14 pb-8 last:pb-0"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1 w-10 h-10 bg-gh-card border-2 border-gh-purple rounded-full flex items-center justify-center shadow-lg shadow-gh-purple/20">
                    <FaGraduationCap className="text-gh-purple text-sm" />
                  </div>

                  {/* Content card */}
                  <div className="group bg-gh-card border border-gh-border rounded-xl p-6 hover:border-gh-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gh-purple/5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gh-text group-hover:text-gh-purple transition-colors">
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gh-text-muted mt-1">
                          <FaBuilding className="text-gh-text-subtle" />
                          {edu.institution}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gh-bg border border-gh-border-muted rounded-full text-xs text-gh-text-muted">
                        <FaCalendarAlt className="text-gh-text-subtle" />
                        {edu.date}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gh-text-muted text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
