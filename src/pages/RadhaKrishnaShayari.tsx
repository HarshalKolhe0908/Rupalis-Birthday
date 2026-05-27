import { motion } from 'framer-motion'
import { config } from '../config'

interface RadhaKrishnaShayariProps {
  onComplete: () => void
}

export default function RadhaKrishnaShayari({ onComplete }: RadhaKrishnaShayariProps) {
  const { shayariLines } = config.radhaKrishnaShayari

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen relative overflow-hidden"
    >
      {/* Background image with spiritual aesthetic */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src={config.radhaKrishnaShayari.backgroundImage}
          alt="Radha Krishna"
          className="w-full h-full object-cover"
        />
        {/* Divine overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-indigo-900/50 to-black/80" />
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-radial-gradient"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Floating divine particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-300/40 rounded-full blur-sm"
          animate={{
            y: [0, -300 - Math.random() * 200],
            x: Math.sin((i * Math.PI) / 8) * 150,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl"
          >
            🪘
          </motion.div>
        </motion.div>

        {/* Shayari text */}
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {shayariLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + index * 0.4,
                duration: 0.8,
              }}
              className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Mood text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8 + shayariLines.length * 0.4 + 0.3,
            duration: 0.8,
          }}
          className="text-purple-200/70 italic mt-12 text-sm"
        >
          {config.radhaKrishnaShayari.mood}
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.8 + shayariLines.length * 0.4 + 0.6,
            duration: 0.8,
          }}
          className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full my-12"
        />

        {/* Continue button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8 + shayariLines.length * 0.4 + 0.9,
            duration: 0.6,
          }}
          onClick={onComplete}
          className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          Continue 💜
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
