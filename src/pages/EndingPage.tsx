import { useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { config } from '../config'

interface EndingPageProps {
  onReplay: () => void
}

export default function EndingPage({ onReplay }: EndingPageProps) {
  useEffect(() => {
    // Premium multi-burst confetti effect
    const timer = setTimeout(() => {
      // Main burst
      confetti({
        particleCount: 100,
        angle: 90,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ec4899', '#f43f5e', '#a855f7', '#06b6d4', '#fbbf24'],
        gravity: 0.6,
        ticks: 400,
        startVelocity: 45,
      })

      // Left burst
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 45,
          spread: 70,
          origin: { x: 0.2, y: 0.3 },
          colors: ['#a855f7', '#ec4899', '#06b6d4'],
          gravity: 0.7,
          ticks: 350,
          startVelocity: 35,
        })
      }, 150)

      // Right burst
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 135,
          spread: 70,
          origin: { x: 0.8, y: 0.3 },
          colors: ['#ec4899', '#fbbf24', '#a855f7'],
          gravity: 0.7,
          ticks: 350,
          startVelocity: 35,
        })
      }, 300)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6 py-10 sm:py-20 text-center"
    >
      {/* Soft glowing background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating glow particles - soft celebration feel */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-sm"
          animate={{
            y: [100, -600],
            x: Math.sin((i * Math.PI) / 15) * 250,
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.12,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            backgroundColor: ['rgba(236, 72, 153, 0.8)', 'rgba(168, 85, 247, 0.8)', 'rgba(6, 182, 212, 0.8)'][i % 3],
          }}
        />
      ))}

      {/* Content */}
      <motion.div className="relative z-10 max-w-2xl">
        {/* Heart decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 50 }}
          className="mb-8"
        >
          <motion.span
            className="text-7xl inline-block drop-shadow-lg"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ❤️
          </motion.span>
        </motion.div>

        {/* Main text with elegant gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, type: 'spring', stiffness: 60 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-4 sm:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            {config.endingPage.mainText}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-purple-200/85 mb-8 sm:mb-14 leading-relaxed font-light"
        >
          {config.endingPage.subText}
        </motion.p>

        {/* Elegant divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8 sm:mb-12 shadow-lg shadow-purple-500/50"
        />

        {/* Closing message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
          className="text-purple-200/80 italic mb-8 sm:mb-16 font-light text-xs sm:text-base"
        >
          Made with 💝 and heartfelt care
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="flex flex-col gap-4 sm:gap-5 items-center justify-center"
        >
          {/* Replay button */}
          <motion.button
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReplay}
            className="px-10 sm:px-12 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-pink-500/60 transition-all shadow-md"
          >
            {config.endingPage.cta}
          </motion.button>

          {/* Secondary message */}
          <motion.p className="text-purple-300/70 text-xs sm:text-sm mt-2 font-light">
            Made with 💝 and heartfelt care
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Ambient floating emojis */}
      <motion.div className="absolute inset-0 pointer-events-none flex items-center justify-around opacity-40">
        {['🎉', '✨', '🌟', '💫'].map((emoji, i) => (
          <motion.div
            key={i}
            className="text-5xl drop-shadow-lg"
            animate={{
              y: [0, -80, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
