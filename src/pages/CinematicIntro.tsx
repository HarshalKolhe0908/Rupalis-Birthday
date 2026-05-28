import { motion } from 'framer-motion'
import { config } from '../config'

interface CinematicIntroProps {
  onBegin: () => void
}

export default function CinematicIntro({ onBegin }: CinematicIntroProps) {
  const mainText = config.cinematicIntro.title
  const letters = mainText.split('')
  const introImage = new URL('../assets/Intro.png', import.meta.url).href

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen relative overflow-hidden"
    >
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <img
          src={introImage}
          alt="Birthday celebration"
          className="w-full h-full object-cover"
        />
        {/* Cinematic overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-pink-400/60 rounded-full blur-sm"
          animate={{
            x: Math.sin((i * Math.PI) / 10) * 150,
            y: [Math.random() * 100, -150],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.15,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* Main Animated Text with Letter Stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6 + index * 0.05,
                  type: 'spring',
                  stiffness: 80,
                  damping: 12,
                }}
                className={`inline-block ${
                  letter === ' '
                    ? ''
                    : 'bg-gradient-to-r from-pink-300 via-pink-200 to-rose-300 bg-clip-text text-transparent drop-shadow-lg'
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8 + letters.length * 0.05 + 0.4,
            duration: 0.9,
            ease: 'easeOut',
          }}
          className="text-base sm:text-lg md:text-xl text-white/85 mb-10 sm:mb-16 font-light max-w-md leading-relaxed"
        >
          {config.cinematicIntro.subtitle}
        </motion.p>

        {/* CTA Button with Enhanced Animations */}
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.8 + letters.length * 0.05 + 0.8,
            duration: 0.7,
            type: 'spring',
            stiffness: 70,
          }}
          onClick={onBegin}
          whileHover={{ scale: 1.08, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-white overflow-hidden group"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 rounded-full" />

          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-0"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/30 to-white/0"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Text */}
          <span className="relative z-10 block">{config.cinematicIntro.cta}</span>
        </motion.button>

        {/* Scroll hint with pulsing arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <motion.span
            className="text-white/60 text-xs font-light uppercase tracking-widest"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to Begin
          </motion.span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-pink-400"
            strokeWidth="2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
