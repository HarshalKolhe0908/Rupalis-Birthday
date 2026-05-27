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
      className="w-screen h-screen bg-gradient-to-br from-orange-50/50 via-pink-50/50 to-purple-50/30 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Soft glowing background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
          animate={{
            x: Math.sin((i * Math.PI) / 6) * 80,
            y: Math.cos((i * Math.PI) / 6) * 80,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            left: '50%',
            top: '50%',
          }}
        />
      ))}

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 max-w-md w-full"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl font-display font-bold text-gray-800 text-center mb-8"
        >
          {title}
        </motion.h2>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-10 shadow-2xl"
        >
          {/* Decorative corner */}
          <motion.div
            className="absolute -top-6 -right-6 text-4xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>

          {/* Note content - word by word reveal */}
          <motion.p className="text-lg text-gray-700 leading-relaxed font-light text-center">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.7 + index * 0.04,
                  duration: 0.3,
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.7 + words.length * 0.04 + 0.3,
              duration: 0.8,
            }}
            className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent my-6"
          />

          {/* Signature */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7 + words.length * 0.04 + 0.6,
              duration: 0.6,
            }}
            className="font-caveat text-2xl text-pink-600 text-center"
          >
            {signature}
          </motion.p>
        </motion.div>

        {/* Gentle reminder */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7 + words.length * 0.04 + 1,
            duration: 0.6,
          }}
          className="text-center text-gray-600 italic text-sm mt-10"
        >
          No pressure, no expectations. Just genuine care. 💝
        </motion.p>
      </motion.div>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.7 + words.length * 0.04 + 1.3,
          duration: 0.6,
        }}
        onClick={onComplete}
        className="absolute bottom-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
      >
        Continue 💕
      </motion.button>
    </motion.div>
  )
}
