export const animations = {
  // Page transitions
  pageEnter: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },

  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },

  slideInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },

  // Container animations
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  },

  // Text animations
  typewriter: (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.05, delay },
  }),

  // Float animation
  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Rotate animation
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  // Pulse animation
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Glow animation
  glow: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(236, 72, 153, 0)',
        '0 0 40px rgba(236, 72, 153, 0.5)',
        '0 0 20px rgba(236, 72, 153, 0)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Shake animation
  shake: {
    animate: {
      x: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.4,
      },
    },
  },

  // Bounce animation
  bounce: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  },
}

export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  spring: [0.34, 1.56, 0.64, 1],
}
