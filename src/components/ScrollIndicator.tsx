import { motion } from 'framer-motion'

export const ScrollIndicator: React.FC<{ text?: string }> = ({ text = "Scroll to explore ↓" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <motion.p
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center text-sm font-semibold text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text"
      >
        {text}
      </motion.p>

      {/* Animated Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-pink-500"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </motion.svg>
      </motion.div>

      {/* Pulsing Circle Background */}
      <motion.div
        className="absolute -z-10 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-400/20 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}
