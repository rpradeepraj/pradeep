import React from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';
import { FaCode } from 'react-icons/fa';
import { VscSymbolMethod } from 'react-icons/vsc';

const Skills: React.FC = () => {
  // Calculate total for percentage bar
  const totalLevel = skills.reduce((acc, skill) => acc + skill.level, 0);

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-gh-pink/5 rounded-full blur-[100px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gh-card border border-gh-border rounded-full mb-4">
            <VscSymbolMethod className="text-gh-purple" />
            <span className="text-sm text-gh-text-muted">Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gh-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gh-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to build high-quality applications
          </p>
        </motion.div>

        {/* GitHub Language Bar Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gh-card border border-gh-border rounded-xl p-6 mb-12 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-gh-text mb-4 flex items-center gap-2">
            <FaCode className="text-gh-blue" />
            Language Distribution
          </h3>
          
          {/* Stacked bar */}
          <div className="h-4 rounded-full overflow-hidden flex mb-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${(skill.level / totalLevel) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                style={{ backgroundColor: skill.color }}
                className="h-full first:rounded-l-full last:rounded-r-full"
                title={`${skill.name}: ${skill.level}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 text-sm">
                <span 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
                <span className="text-gh-text-muted">
                  {skill.name}
                </span>
                <span className="text-gh-text-subtle">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * catIndex }}
              className="bg-gh-card border border-gh-border rounded-xl p-6 hover:border-gh-border transition-colors"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
              </div>
              <h4 className="font-semibold text-gh-text mb-3">{category.name}</h4>
              <div className="space-y-2">
                {category.skills.map((skillName) => {
                  const skill = skills.find(s => s.name === skillName);
                  return (
                    <div key={skillName} className="flex items-center justify-between">
                      <span className="text-sm text-gh-text-muted">{skillName}</span>
                      {skill && (
                        <div className="w-16 h-1.5 bg-gh-border-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
