// components/ScrollFadeInSection.js
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollFadeInSection = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeInSection;
