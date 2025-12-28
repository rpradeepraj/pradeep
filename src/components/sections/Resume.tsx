import React from 'react';
import Section from '../ui/Section';
import { education, experience } from '../../data/experience';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const ResumeItem = ({ item, icon: Icon }: { item: any; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
    <div className="flex items-start gap-4">
        <div className="mt-1 text-blue-600 bg-blue-50 p-3 rounded-xl">
             <Icon size={24} />
        </div>
        <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
            {item.date}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{item.degree || item.position}</h3>
            <span className="text-gray-500 font-medium block mb-4">{item.institution || item.company}</span>
            <p className="text-gray-600 leading-relaxed text-sm">
            {item.description}
            </p>
        </div>
    </div>
  </motion.div>
);

const Resume: React.FC = () => {
  return (
    <Section id="resume" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My academic qualifications and professional journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
             <FaGraduationCap className="text-blue-600" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((item) => (
              <ResumeItem key={item.id} item={item} icon={FaGraduationCap} />
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FaBriefcase className="text-blue-600" /> Experience
          </h3>
          <div className="space-y-6">
            {experience.map((item) => (
              <ResumeItem key={item.id} item={item} icon={FaBriefcase} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 bg-blue-50/50 p-8 rounded-3xl">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                Awards & Achievements
            </h3>
            <div className="space-y-4">
               {/* Imported dynamically or passed as props if strict separation, but here importing directly for simplicity */}
               <AwardsList />
            </div>
          </div>
           <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                Professional Memberships
            </h3>
            <div className="space-y-4">
               <MembershipsList />
            </div>
          </div>
      </div>
    </Section>
  );
};

import { awards, memberships } from '../../data/achievements';

const AwardsList = () => (
    <>
        {awards.map((award, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                <div className="text-yellow-500 mt-1"><award.icon size={20} /></div>
                <div>
                    <h4 className="font-bold text-gray-900">{award.title}</h4>
                    <p className="text-sm text-gray-600">{award.description}</p>
                </div>
            </div>
        ))}
    </>
);

const MembershipsList = () => (
    <>
        {memberships.map((item, idx) => (
             <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                <div className="text-blue-500"><item.icon size={20} /></div>
                <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    {item.role && <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>}
                </div>
            </div>
        ))}
    </>
);

export default Resume;
