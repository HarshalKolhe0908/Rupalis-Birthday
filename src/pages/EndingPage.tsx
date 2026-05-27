import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { config } from '../config'

interface EndingPageProps {
  onReplay: () => void
}

export default function EndingPage({ onReplay }: EndingPageProps) {
  useEffect(() => {
    // Trigger confetti on entry
    const timer = setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 90,
        spread: 120,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ec4899', '#f43f5e', '#a855f7', '#06b6d4'],
        gravity: 0.8,
        ticks: 300,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Soft glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating glow particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-300/50 rounded-full blur-sm"
          animate={{
            y: [100, -500],
            x: Math.sin((i * Math.PI) / 10) * 200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
          }}
        />
      ))}

      {/* Content */}
      <motion.div className="relative z-10 max-w-2xl">
        {/* Emoji decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <motion.span
            className="text-6xl inline-block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </motion.div>

        {/* Main text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold font-display mb-6"
        >
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            {config.endingPage.mainText}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl text-purple-200/80 mb-12 leading-relaxed"
        >
          {config.endingPage.subText}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-12"
        />

        {/* Closing message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-purple-200/70 italic mb-12"
        >
          Thank you for letting me celebrate with you 💜
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          {/* Replay button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReplay}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all"
          >
            Experience Again 🎂
          </motion.button>

          {/* Secondary action */}
          <motion.p className="text-purple-300/60 text-sm mt-4">
            Made with 💝 and a whole lot of care
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Additional floating emojis */}
      <motion.div className="absolute inset-0 pointer-events-none flex items-center justify-around">
        {['🎉', '✨', '🌟', '💫'].map((emoji, i) => (
          <motion.div
            key={i}
            className="text-4xl"
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
