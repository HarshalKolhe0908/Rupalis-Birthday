import { motion } from 'framer-motion'
import { config } from '../config'

interface MoonSketchProps {
  onComplete: () => void
}

export default function MoonSketch({ onComplete }: MoonSketchProps) {
  const { sketchImage, shayariLines } = config.moonSketch

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-black relative overflow-hidden"
    >
      {/* Starry background */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          animate={{
            opacity: [0.2, 1, 0.2],
            y: [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Moon glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
        animate={{
          boxShadow: [
            '0 0 40px rgba(147, 112, 219, 0.3)',
            '0 0 60px rgba(147, 112, 219, 0.5)',
            '0 0 40px rgba(147, 112, 219, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-b from-yellow-100 to-yellow-200 shadow-2xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      {/* Content container */}
      <motion.div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Sketch portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-12 relative"
        >
          {/* Glow effect around portrait */}
          <motion.div
            className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Portrait */}
          <motion.img
            src={sketchImage}
            alt="Portrait"
            className="relative w-48 h-48 object-cover rounded-full border-4 border-purple-300/50 shadow-2xl"
            whileHover={{ scale: 1.05 }}
          />

          {/* Floating particles around portrait */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              animate={{
                x: Math.cos((i * Math.PI) / 2) * 80,
                y: Math.sin((i * Math.PI) / 2) * 80 + 50,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-12px',
                marginTop: '-12px',
              }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>

        {/* Shayari lines */}
        <motion.div className="max-w-2xl space-y-6 mb-12">
          {shayariLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2 + index * 0.5,
                duration: 0.8,
              }}
              className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Ambient glow particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute w-2 h-2 bg-purple-400/40 rounded-full blur-sm"
            animate={{
              x: Math.sin((i * Math.PI) / 4) * 120,
              y: Math.cos((i * Math.PI) / 4) * 120,
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}

        {/* Continue button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.2 + shayariLines.length * 0.5 + 0.5,
            duration: 0.6,
          }}
          onClick={onComplete}
          className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all mt-8"
        >
          One Last Moment... 💫
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
