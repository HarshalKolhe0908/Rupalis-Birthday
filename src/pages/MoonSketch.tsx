import { motion } from 'framer-motion'

interface MoonSketchProps {
  onComplete: () => void
}

export default function MoonSketch({ onComplete }: MoonSketchProps) {
  const caption = 'But somehow, you make it beautiful 💫'
  const moonSketchImage = new URL('../assets/MoonSketch.png', import.meta.url).href

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-black relative overflow-hidden"
    >
      {/* Deep space dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      {/* Subtle stars background */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Soft glow particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-1 h-1 bg-purple-300/40 rounded-full blur-sm"
          animate={{
            y: [0, -200],
            x: Math.sin((i * Math.PI) / 8) * 100,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.25,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Moon sketch image with elegant reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative mb-12"
        >
          {/* Soft glow behind image */}
          <motion.div
            className="absolute -inset-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Image with premium styling */}
          <motion.img
            src={moonSketchImage}
            alt="Moon Sketch"
            className="w-56 h-56 sm:w-80 sm:h-80 object-contain relative z-10 drop-shadow-2xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Caption text - elegant and minimal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-2xl text-white/90 font-light text-center max-w-md leading-relaxed px-4"
        >
          {caption}
        </motion.p>

        {/* Subtle divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent my-8 sm:my-10"
        />

        {/* Continue button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, type: 'spring' }}
          onClick={onComplete}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all mt-4 sm:mt-6 text-base sm:text-lg"
        >
          Continue 💫
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
