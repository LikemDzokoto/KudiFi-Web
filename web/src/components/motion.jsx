import React from 'react';
import { motion } from 'framer-motion';

// Default animation variants that can be used across components
const defaultAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

// Helper to create motion components with consistent props
const createMotionComponent = (Component, defaultProps = {}) => {
  return React.forwardRef(({ 
    children, 
    initial = defaultProps.initial || { opacity: 0 },
    whileInView = defaultProps.whileInView || { opacity: 1 },
    viewport = defaultProps.viewport || { once: true, amount: 0.3 },
    transition = defaultProps.transition || { duration: 0.5 },
    delay = 0,
    as,
    ...props 
  }, ref) => {
    // For custom HTML element rendering
    const Element = as || Component;
    
    // Adjust transition with delay if provided
    const transitionWithDelay = delay 
      ? { ...transition, delay } 
      : transition;
    
    return (
      <motion.div
        ref={ref}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transitionWithDelay}
        {...props}
      >
        {typeof children === 'function' ? children() : children}
      </motion.div>
    );
  });
};

// Common motion components
export const MotionDiv = createMotionComponent('div');

export const MotionSection = createMotionComponent('section');

export const MotionHeading = ({ as = 'h2', children, ...props }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const MotionParagraph = createMotionComponent('p', {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
});

export const MotionSpan = createMotionComponent('span');

export const MotionUl = createMotionComponent('ul', {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
});

export const MotionLi = createMotionComponent('li', {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { type: 'spring', stiffness: 100 }
});

export const MotionButton = ({ children, whileHover = { scale: 1.05 }, whileTap = { scale: 0.95 }, ...props }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const MotionImg = createMotionComponent('img', {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
});

export const MotionCard = createMotionComponent('div', {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
});

// Animation variants for export
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideIn = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Utility for scroll animations
export const useScrollAnimation = () => {
  return {
    viewport: { once: true, amount: 0.2 },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.6 }
    },
    fadeInUp: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  };
};