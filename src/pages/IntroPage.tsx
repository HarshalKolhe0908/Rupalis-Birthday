import { motion } from 'framer-motion'
import { FloatingParticles, GlowingOrbs } from '../components/FloatingParticles'
import { MusicToggle } from '../components/TopBar'
import { Button } from '../components/UI'
import { config } from '../config'

interface IntroPageProps {
  onBegin: () => void
  musicEnabled: boolean
  onMusicToggle: (enabled: boolean) => void
}

export default function IntroPage({ onBegin, musicEnabled, onMusicToggle }: IntroPageProps) {


  // Animate text letter by letter
  const text = `Happy Birthday ${config.name}! 🎂`
  const letters = text.split('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

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
      <FloatingParticles 
        count={25} 
        emojis={['✨', '💫', '⭐', '🎉', '💕', '🎂']} 
      />

      {/* Music Toggle */}
      <MusicToggle enabled={musicEnabled} onChange={onMusicToggle} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Animated Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
          className="mb-8"
        >
          <span className="text-8xl block animate-bounce">🎂</span>
        </motion.div>

        {/* Main Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={
                  letter === ' '
                    ? ''
                    : 'inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent'
                }
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: text.length * 0.05 + 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-12 font-light max-w-md"
        >
          I created something special just for you.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: text.length * 0.05 + 0.6, 
            duration: 0.5,
            type: 'spring',
          }}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Button
              onClick={onBegin}
              variant="primary"
              size="lg"
              className="shadow-2xl shadow-pink-400/40"
            >
              Tap to Begin ✨
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex gap-4 mt-8"
        >
          {['💝', '🎉', '💫'].map((emoji, index) => (
            <motion.span
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="text-3xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 text-center text-sm text-gray-500"
      >
        <p>Scroll or swipe to experience ↓</p>
      </motion.div>
    </motion.div>
  )
}
