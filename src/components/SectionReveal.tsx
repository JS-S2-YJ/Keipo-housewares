'use client';

import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export const SectionReveal = ({ children, className, delay = 0, style }: SectionRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Apple-like cubic bezier
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
