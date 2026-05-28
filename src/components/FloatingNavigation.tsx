import { motion } from 'framer-motion'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

interface FloatingNavigationProps {
  currentIndex: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
  onDotClick: (index: number) => void
}

export default function FloatingNavigation({
  currentIndex,
  totalPages,
  onPrevious,
  onNext,
  onDotClick,
}: FloatingNavigationProps) {
  return (
    <>
      {/* Right side floating navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
        {/* Previous button */}
        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className={`relative p-3 rounded-full backdrop-blur-lg border transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 cursor-pointer'
          }`}
          whileHover={currentIndex > 0 ? { scale: 1.1, y: -5 } : {}}
          whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
        >
          <FaChevronUp className="text-white text-lg" />
          {/* Glow effect */}
          {currentIndex > 0 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>

        {/* Page indicator dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3 px-2"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onDotClick(index)}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? 'w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg shadow-pink-500/50'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onNext}
          disabled={currentIndex === totalPages - 1}
          className={`relative p-3 rounded-full backdrop-blur-lg border transition-all ${
            currentIndex === totalPages - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'bg-white/10 hover:bg-white/20 border-white/30 hover:border-white/50 cursor-pointer'
          }`}
          whileHover={currentIndex < totalPages - 1 ? { scale: 1.1, y: 5 } : {}}
          whileTap={currentIndex < totalPages - 1 ? { scale: 0.95 } : {}}
        >
          <FaChevronDown className="text-white text-lg" />
          {/* Glow effect */}
          {currentIndex < totalPages - 1 && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
      </div>

      {/* Page progress indicator - bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-center"
      >
        <div className="text-xs text-white/60 font-light">
          {currentIndex + 1} / {totalPages}
        </div>
      </motion.div>
    </>
  )
}
