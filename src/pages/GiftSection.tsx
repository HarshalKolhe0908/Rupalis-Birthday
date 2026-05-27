import { useState } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

interface GiftSectionProps {
  onComplete: () => void
}

export default function GiftSection({ onComplete }: GiftSectionProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const { title, description, giftImage, note } = config.giftSection

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-b from-amber-50 via-orange-50/70 to-pink-50 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Luxury glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl font-display font-bold text-gray-800 text-center mb-6 z-10"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg text-gray-600 text-center mb-12 z-10 max-w-md"
      >
        {description}
      </motion.p>

      {/* Gift Box / Reveal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
        className="relative z-10 max-w-xs"
      >
        <motion.div
          onClick={() => setIsRevealed(!isRevealed)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{
              rotateY: isRevealed ? 180 : 0,
            }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square"
          >
            {!isRevealed ? (
              /* Gift Box */
              <motion.div
                className="w-full h-full rounded-3xl bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-300 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden border-4 border-amber-400/50"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {/* Shiny overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Ribbon */}
                <motion.div className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 -translate-y-1/2" />
                <motion.div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-red-500 via-pink-500 to-red-500 -translate-x-1/2" />

                {/* Bow */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10"
                >
                  <span className="text-5xl">🎀</span>
                </motion.div>

                {/* Sparkles */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    animate={{
                      x: Math.cos((i * Math.PI) / 2) * 40,
                      y: Math.sin((i * Math.PI) / 2) * 40 + 20,
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-10px',
                      marginTop: '-10px',
                    }}
                  >
                    ✨
                  </motion.div>
                ))}

                {/* Tap text */}
                <motion.p
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 text-sm text-gray-700 font-semibold"
                >
                  Tap to open
                </motion.p>
              </motion.div>
            ) : (
              /* Revealed Gift */
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900 via-gray-900 to-black shadow-2xl p-6 flex flex-col items-center justify-center border border-amber-400/30"
              >
                {/* Gift image */}
                <motion.div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={giftImage}
                    alt="Gift"
                    className="w-32 h-32 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Gift name or detail */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-amber-200 font-light text-sm"
                >
                  {note}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Reminder text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center text-gray-600 italic text-sm mt-16 z-10 max-w-md"
      >
        No grand gesture needed. Just a token of thoughtfulness. 💝
      </motion.p>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={onComplete}
        className="absolute bottom-8 px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all z-10"
      >
        Continue ✨
      </motion.button>
    </motion.div>
  )
}
