import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={clsx('py-20 lg:py-28 relative overflow-hidden', className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
