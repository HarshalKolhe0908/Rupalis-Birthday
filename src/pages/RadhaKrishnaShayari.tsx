import { motion } from 'framer-motion'
import { config } from '../config'

interface RadhaKrishnaShayariProps {
  onComplete: () => void
}

export default function RadhaKrishnaShayari({ onComplete }: RadhaKrishnaShayariProps) {
  const { shayariLines } = config.radhaKrishnaShayari
  const radhaKrishnaImage = new URL('../assets/RadhaKrishna.png', import.meta.url).href

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
        transition={{ duration: 2.2 }}
      >
        <img
          src={radhaKrishnaImage}
          alt="Radha Krishna"
          className="w-full h-full object-cover"
        />
        {/* Divine overlay with purple/indigo hue */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-indigo-900/60 to-black/80" />
        {/* Soft glow effect */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Floating divine particles - enhanced with peacock feather colors */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full blur-sm"
          animate={{
            y: [0, -350 - Math.random() * 200],
            x: Math.sin((i * Math.PI) / 10) * 180,
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['rgba(168, 85, 247, 0.6)', 'rgba(236, 72, 153, 0.5)', 'rgba(59, 130, 246, 0.5)'][i % 3],
          }}
        />
      ))}

      {/* Subtle peacock feather accents */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`feather-${i}`}
          className="absolute text-4xl opacity-20"
          animate={{
            y: [0, -200],
            rotate: [0, 360],
            opacity: [0.15, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 1.2,
          }}
          style={{
            left: `${(i * 100) / 8}%`,
            top: '70%',
          }}
        >
          🪶
        </motion.div>
      ))}

      {/* Content */}
      <motion.div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Decorative spiritual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.9, type: 'spring' }}
          className="mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-6xl"
          >
            🪘
          </motion.div>
        </motion.div>

        {/* Shayari text - line by line with typewriter + fade */}
        <motion.div
          className="max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {shayariLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9 + index * 0.5,
                duration: 0.9,
                ease: 'easeOut',
              }}
              className="relative"
            >
              {/* Glow background for each line */}
              <motion.div
                className="absolute -inset-4 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{
                  delay: 0.9 + index * 0.5 + 0.3,
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
                }}
              />

              <p className="font-playfair text-xl sm:text-3xl md:text-4xl font-bold relative z-10 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-relaxed">
                {line}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            delay: 0.9 + shayariLines.length * 0.5 + 0.4,
            duration: 1,
          }}
          className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full my-8 sm:my-12"
        />

        {/* Continue button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.9 + shayariLines.length * 0.5 + 0.7,
            duration: 0.6,
            type: 'spring',
          }}
          onClick={onComplete}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all z-20 text-base sm:text-lg mt-8"
        >
          Continue 💜
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
