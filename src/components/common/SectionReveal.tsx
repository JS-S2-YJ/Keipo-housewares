'use client';

import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  immediate?: boolean;
}

export const SectionReveal = ({ children, className, delay = 0, style, immediate = false }: SectionRevealProps) => {
  const common = {
    initial: { opacity: 0, y: 30 },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
    className,
    style,
  };

  if (immediate) {
    return (
      <motion.div {...common} animate={{ opacity: 1, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...common}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
};
