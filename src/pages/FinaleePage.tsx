import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FloatingParticles, GlowingOrbs } from '../components/FloatingParticles'
import { MusicToggle } from '../components/TopBar'
import { Button } from '../components/UI'
import { triggerFireworks, triggerConfettiExplosion } from '../utils/confetti'
import { config } from '../config'

interface FinalePageProps {
  onReplay: () => void
  musicEnabled: boolean
  onMusicToggle: (enabled: boolean) => void
}

export default function FinaleePage({ onReplay, musicEnabled, onMusicToggle }: FinalePageProps) {
  useEffect(() => {
    // Trigger confetti on page load
    const timer = setTimeout(() => {
      triggerFireworks()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const mainText = config.finale.mainMessage.split('')
  const subText = config.finale.subMessage.split('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col items-center justify-center relative"
    >
      {/* Background Effects */}
      <GlowingOrbs />
      <FloatingParticles count={30} />

      {/* Music Toggle */}
      <MusicToggle enabled={musicEnabled} onChange={onMusicToggle} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-2xl mx-auto">
        {/* Animated Cake Emoji */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mb-8"
        >
          <span className="text-8xl block">🎂</span>
        </motion.div>

        {/* Main Message - Letter by Letter */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {mainText.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                type: 'spring',
              }}
              className={
                letter === ' '
                  ? ''
                  : 'inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent'
              }
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub Message */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-light max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: mainText.length * 0.05 + 0.4 }}
        >
          {subText.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.02,
                delay: mainText.length * 0.05 + 0.4 + index * 0.02,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Closing Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: mainText.length * 0.05 + subText.length * 0.02 + 0.6,
            duration: 0.6,
          }}
          className="text-lg text-gray-600 mb-12 italic"
        >
          {config.finale.closingMessage}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: mainText.length * 0.05 + subText.length * 0.02 + 0.8,
            duration: 0.5,
            type: 'spring',
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={() => triggerConfettiExplosion()}
            variant="secondary"
            size="lg"
            className="shadow-2xl shadow-purple-400/40"
          >
            More Confetti! 🎉
          </Button>

          <Button
            onClick={onReplay}
            variant="outline"
            size="lg"
          >
            Watch Again ↻
          </Button>
        </motion.div>

        {/* Floating Emojis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: mainText.length * 0.05 + subText.length * 0.02 + 1.2,
            duration: 0.8,
          }}
          className="flex gap-6 mt-16"
        >
          {['💖', '🌟', '🎊', '✨', '💝'].map((emoji, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="text-4xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Heart Rain Effect - Subtle background animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-50px',
            }}
            animate={{
              top: '100vh',
              rotate: [0, 360],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          >
            💕
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
