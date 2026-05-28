import { useState } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

interface GiftSectionProps {
  onComplete: () => void
}

export default function GiftSection({ onComplete }: GiftSectionProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const { title, description, note } = config.giftSection
  const giftImage = new URL('../assets/Gift.jpg', import.meta.url).href
  
  const handleReveal = () => {
    setIsRevealed(!isRevealed)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-b from-black via-purple-900/30 to-black flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-20 relative overflow-hidden"
    >
      {/* Luxury glow background */}
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

      {/* Sparkle particles - luxury effect */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full blur-px"
          animate={{
            y: [0, -300],
            x: Math.sin((i * Math.PI) / 15) * 200,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.08,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Title with glow - Hide when revealed */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isRevealed ? 0 : 1, y: isRevealed ? -20 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-2 sm:mb-3 z-10 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      {/* Subtitle - Hide when revealed */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isRevealed ? 0 : 1, y: isRevealed ? -10 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm sm:text-base text-white/70 text-center mb-4 sm:mb-8 z-10 max-w-md font-light"
      >
        {description}
      </motion.p>

      {/* Gift Container - Expand when revealed */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 50 }}
        className={`relative z-10 w-full transition-all duration-500 ${isRevealed ? 'flex-1 max-w-4xl' : 'max-w-lg'}`}
      >
        {/* Luxury glow aura */}
        <motion.div
          className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Main gift reveal container */}
        <motion.div
          onClick={handleReveal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{
              rotateY: isRevealed ? 180 : 0,
            }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            className="w-full"
          >
            {!isRevealed ? (
              /* Luxury Gift Box */
              <motion.div
                className="relative rounded-3xl bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-200 shadow-2xl flex flex-col items-center justify-center aspect-square overflow-hidden border-4 border-amber-300/60"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  boxShadow: `
                    0 30px 60px rgba(217, 119, 6, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.5),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                  `,
                }}
              >
                {/* Luxury ribbon - vertical */}
                <motion.div 
                  className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-red-600 via-rose-500 to-red-600 -translate-x-1/2 shadow-xl"
                  animate={{ scaleY: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Luxury ribbon - horizontal */}
                <motion.div 
                  className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 -translate-y-1/2 shadow-xl"
                  animate={{ scaleX: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                />

                {/* Premium bow */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, type: 'spring' }}
                  className="relative z-10"
                >
                  <span className="text-6xl drop-shadow-lg">🎀</span>
                </motion.div>

                {/* Shiny overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Corner sparkles */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={`corner-${i}`}
                    className="absolute text-2xl"
                    animate={{
                      x: Math.cos((i * Math.PI) / 2) * 60,
                      y: Math.sin((i * Math.PI) / 2) * 60,
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
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

                {/* Tap to open hint - Enhanced */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], y: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-5xl"
                  >
                    👆
                  </motion.div>
                  <p className="text-lg font-bold text-gray-800 drop-shadow-md">
                    Tap to Open
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              /* Revealed Gift Content */
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 180 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900/50 to-black shadow-2xl flex flex-col items-center justify-center overflow-hidden border-2 border-purple-500/40 w-full h-full min-h-96"
                style={{
                  boxShadow: `
                    0 30px 60px rgba(168, 85, 247, 0.25),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                {/* Gift image with glow - Full display */}
                <motion.div 
                  className="relative flex items-center justify-center h-full w-full rounded-xl overflow-hidden shadow-2xl"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img
                    src={giftImage}
                    alt="Gift"
                    className="w-full h-full object-cover"
                  />
                  {/* Luxury shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Decorative sparkle glow around content */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Burst sparkles around gift */}
        {isRevealed && Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`burst-${i}`}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            animate={{
              x: Math.cos((i * Math.PI * 2) / 12) * 180,
              y: Math.sin((i * Math.PI * 2) / 12) * 180,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </motion.div>

      {/* Heartfelt message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="text-center text-white/60 italic font-light mt-8 sm:mt-12 z-10 max-w-md text-xs sm:text-sm px-4"
      >
        Something special just for you — because you deserve the best 💎
      </motion.p>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6, type: 'spring' }}
        onClick={onComplete}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all z-20 text-base sm:text-lg"
      >
        Continue 🎉
      </motion.button>
    </motion.div>
  )
}
