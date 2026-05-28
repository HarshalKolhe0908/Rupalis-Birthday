import { motion } from 'framer-motion'
import { config } from '../config'

interface ShortNoteProps {
  onComplete: () => void
}

export default function ShortNote({ onComplete }: ShortNoteProps) {
  const { title, content, signature } = config.shortNote
  const words = content.split(' ')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-rose-50/40 flex flex-col items-center justify-center px-6 py-10 sm:py-20 relative overflow-hidden"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2"/%3E%3C/filter%3E%3Crect width="100" height="100" fill="rgba(139,69,19,0.1)" filter="url(%23noise)"/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat'
      }} />

      {/* Soft glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.12) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating ambient particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
          animate={{
            x: Math.sin((i * Math.PI) / 8) * 100,
            y: [0, 150, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.25,
          }}
          style={{
            left: '50%',
            top: '50%',
          }}
        />
      ))}

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="relative z-10 max-w-md w-full"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -top-8 right-4 text-4xl"
        >
          ✨
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-2xl sm:text-4xl font-display font-bold text-amber-900 text-center mb-6 sm:mb-10"
        >
          {title}
        </motion.h2>

        {/* Paper-like card with folded effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.6, duration: 0.9, type: 'spring', stiffness: 60 }}
          className="backdrop-blur-sm bg-gradient-to-b from-yellow-50/90 via-amber-50/85 to-orange-50/80 border-2 border-amber-200/60 rounded-lg p-6 sm:p-10 shadow-2xl relative"
          style={{
            boxShadow: `
              0 20px 40px rgba(217, 119, 6, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 -1px 0 rgba(0, 0, 0, 0.05)
            `,
          }}
        >
          {/* Corner fold effect */}
          <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-bl from-orange-200/40 to-transparent rounded-bl-lg" />

          {/* Decorative corner elements */}
          <motion.div
            className="absolute top-4 left-4 text-xs text-amber-300/40"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ✦
          </motion.div>

          {/* Note content - word by word reveal with typewriter effect */}
          <motion.div className="text-center">
            <p className="text-base sm:text-lg text-amber-900 leading-relaxed font-light">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.035,
                    duration: 0.3,
                  }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Divider line with elegant styling */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.8 + words.length * 0.035 + 0.3,
              duration: 1,
              ease: 'easeInOut',
            }}
            className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent my-4 sm:my-6"
          />

          {/* Signature with handwritten style */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8 + words.length * 0.035 + 0.6,
              duration: 0.7,
            }}
            className="font-caveat text-2xl sm:text-3xl text-orange-500 text-center"
          >
            {signature}
          </motion.p>

          {/* Decorative corner element */}
          <motion.div
            className="absolute bottom-3 right-3 text-xs text-amber-300/40"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            ✦
          </motion.div>
        </motion.div>

        {/* Gentle reminder text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8 + words.length * 0.035 + 1,
            duration: 0.7,
          }}
          className="text-center text-amber-700/70 italic text-xs sm:text-sm mt-6 sm:mt-8 font-light px-4"
        >
          No pressure. No expectations. Just genuine care. 💝
        </motion.p>
      </motion.div>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.8 + words.length * 0.035 + 1.3,
          duration: 0.6,
        }}
        onClick={onComplete}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all z-20 text-base sm:text-lg"
      >
        Continue 💕
      </motion.button>
    </motion.div>
  )
}
