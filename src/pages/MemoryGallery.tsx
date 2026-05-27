import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'

interface MemoryGalleryProps {
  onComplete: () => void
}

export default function MemoryGallery({ onComplete }: MemoryGalleryProps) {
  const { photos, autoScroll, autoScrollInterval } = config.memoryGallery
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, autoScrollInterval)
    return () => clearInterval(timer)
  }, [photos.length, autoScroll, autoScrollInterval])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const currentPhoto = photos[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-b from-black via-slate-900 to-black flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Ambient glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-display font-bold text-white mb-12 z-10 text-center"
      >
        {config.memoryGallery.title}
      </motion.h2>

      {/* Gallery Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-md z-10"
      >
        {/* Main Photo Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glass card wrapper */}
            <motion.div
              className="relative rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02, shadow: 'shadow-pink-500/50' }}
              onClick={() => setExpanded(currentPhoto.id)}
            >
              {/* Image */}
              <motion.img
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                className="w-full aspect-[3/4] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Glow overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
              />

              {/* Caption */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-light">{currentPhoto.caption}</p>
              </motion.div>
            </motion.div>

            {/* Photo counter */}
            <div className="absolute -bottom-8 left-0 right-0 text-center text-white/60 text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          ←
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          →
        </motion.button>
      </motion.div>

      {/* Progress dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-2 justify-center mt-16 z-10"
      >
        {photos.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 w-8'
                : 'bg-white/30 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={onComplete}
        className="absolute bottom-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all z-10"
      >
        Continue ✨
      </motion.button>

      {/* Expanded photo modal */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={photos.find((p) => p.id === expanded)?.src}
              alt=""
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
