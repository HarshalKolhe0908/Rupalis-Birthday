import { motion } from 'framer-motion'

interface WisheshProps {
  onComplete: () => void
}

export default function Wishesh({ onComplete }: WisheshProps) {
  const wisheshImage = new URL('../assets/Wishes.png', import.meta.url).href

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-black relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Content */}
      <motion.div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Wishesh image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          <motion.img
            src={wisheshImage}
            alt="Wishesh"
            className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
        onClick={onComplete}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-base sm:text-lg"
      >
        Continue 💫
      </motion.button>
    </motion.div>
  )
}
