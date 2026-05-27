import { motion } from 'framer-motion'
import { config } from '../config'

interface CinematicIntroProps {
  onBegin: () => void
}

export default function CinematicIntro({ onBegin }: CinematicIntroProps) {
  const name = config.name
  const mainText = `Happy Birthday ${name}! 🎂`
  const letters = mainText.split('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen relative overflow-hidden"
    >
      {/* Background Image with Cinematic Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <img
          src={config.cinematicIntro.backgroundImage}
          alt="Birthday celebration"
          className="w-full h-full object-cover"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-pink-500/0 via-transparent to-black/80"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
          animate={{
            x: Math.sin((i * Math.PI) / 10) * 100,
            y: [Math.random() * 100, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <motion.div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Main Animated Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold font-display">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.04,
                  type: 'spring',
                  stiffness: 100,
                }}
                className={`inline-block ${
                  letter === ' '
                    ? ''
                    : 'bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 bg-clip-text text-transparent'
                }`}
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
          transition={{
            delay: 0.8 + letters.length * 0.04 + 0.3,
            duration: 0.8,
          }}
          className="text-lg md:text-xl text-white/80 mb-16 font-light max-w-md"
        >
          {config.cinematicIntro.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8 + letters.length * 0.04 + 0.6,
            duration: 0.6,
            type: 'spring',
          }}
          onClick={onBegin}
          className="relative px-10 py-4 rounded-full font-semibold text-lg text-white overflow-hidden group"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-lg opacity-0"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text */}
          <span className="relative z-10 block">{config.cinematicIntro.cta}</span>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            whileHover={{
              x: ['-100%', '100%'],
              transition: { duration: 0.6 },
            }}
          />
        </motion.button>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-pink-300"
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
