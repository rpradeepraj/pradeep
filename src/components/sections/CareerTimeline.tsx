import React from 'react';
import Section from '../ui/Section';
import { experience, education } from '../../data/experience';
import { motion } from 'framer-motion';
import { FaFlagCheckered, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const TimelineItem = ({ item, index, isLast, icon: Icon }: any) => {
    return (
        <div className="relative flex gap-6 md:gap-10">
             {/* Timeline Line */}
            <div className="flex flex-col items-center">
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-full border-2 border-neon-cyan bg-gaming-card flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                >
                    <Icon className="text-neon-cyan text-xl" />
                </motion.div>
                {!isLast && (
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-1 bg-gradient-to-b from-neon-cyan to-neon-pink flex-grow my-2 opacity-50" 
                    />
                )}
            </div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex-1 pb-12"
            >
                <div className="bg-gaming-card/80 border border-white/5 p-6 rounded-2xl relative group hover:border-neon-pink/50 transition-colors">
                     {/* Decorative connector */}
                     <div className="absolute top-6 -left-[41px] w-10 h-[2px] bg-neon-cyan opacity-50 hidden md:block"></div>
                     
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-neon-pink transition-colors">
                            {item.position || item.degree}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs font-bold uppercase tracking-wider rounded border border-neon-cyan/20">
                            {item.date}
                        </span>
                     </div>
                     
                     <h4 className="text-lg text-gray-400 mb-4 font-medium flex items-center gap-2">
                        @ {item.company || item.institution}
                     </h4>

                     <p className="text-gray-400 leading-relaxed text-sm">
                         {item.description}
                     </p>
                </div>
            </motion.div>
        </div>
    );
}

const CareerTimeline: React.FC = () => {
    // Combine experience and education, sort by date if needed, but for now just stacking them
    // Or keep them separate sections in the timeline
    
  return (
    <Section id="resume" className="relative">
      <div className="text-center mb-20">
        <span className="text-neon-pink font-display text-sm tracking-widest uppercase mb-2 block">Story Mode</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
           Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">Journey</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4">
         {/* Experience Section */}
         <div className="mb-8">
            <h3 className="text-2xl text-white font-display mb-8 flex items-center gap-3">
                <FaBriefcase className="text-neon-pink" /> Missions
            </h3>
            {experience.map((item, index) => (
                <TimelineItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    isLast={false} 
                    icon={FaBriefcase} 
                />
            ))}
         </div>

         {/* Education Section connected to the end */}
         <div>
            <h3 className="text-2xl text-white font-display mb-8 flex items-center gap-3 pt-8">
                <FaGraduationCap className="text-neon-cyan" /> Training
            </h3>
            {education.map((item, index) => (
                <TimelineItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    isLast={index === education.length - 1} 
                    icon={FaGraduationCap} 
                />
            ))}
         </div>
         
         <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center gap-2 text-neon-green opacity-80 animate-pulse">
                <FaFlagCheckered size={24} />
                <span className="text-xs uppercase tracking-widest font-bold">Checkpoint Reached</span>
            </div>
         </div>

      </div>
    </Section>
  );
};

export default CareerTimeline;
