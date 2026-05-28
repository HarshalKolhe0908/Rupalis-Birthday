import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'

interface MemoryGalleryProps {
  onComplete: () => void
}

export default function MemoryGallery({ onComplete }: MemoryGalleryProps) {
  // Import assets using Vite's new URL syntax
  const gallery1 = new URL('../assets/MemoryGallery1.png', import.meta.url).href
  const gallery2 = new URL('../assets/MemoryGallery2.png', import.meta.url).href
  const gallery3 = new URL('../assets/MemoryGallery3.png', import.meta.url).href

  // Map config photos to imported assets
  const photosWithAssets = [
    { ...config.memoryGallery.photos[0], src: gallery1 },
    { ...config.memoryGallery.photos[1], src: gallery2 },
    { ...config.memoryGallery.photos[2], src: gallery3 },
  ]
  
  const { autoScroll, autoScrollInterval } = config.memoryGallery
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(autoScroll)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Check if mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photosWithAssets.length)
    }, autoScrollInterval)
    return () => clearInterval(timer)
  }, [photosWithAssets.length, autoScroll, autoScrollInterval, isAutoPlay])

  const handlePrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + photosWithAssets.length) % photosWithAssets.length)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % photosWithAssets.length)
  }

  const handleTouchStart = () => setIsAutoPlay(false)
  const handleTouchEnd = () => setTimeout(() => setIsAutoPlay(true), 2000)

  const currentPhoto = photosWithAssets[currentIndex]
  const nextIndex = (currentIndex + 1) % photosWithAssets.length
  const prevIndex = (currentIndex - 1 + photosWithAssets.length) % photosWithAssets.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-screen h-screen bg-gradient-to-b from-black via-slate-900 to-black flex flex-col items-center justify-center px-4 py-10 sm:py-20 relative overflow-hidden"
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
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl sm:text-4xl font-display font-bold text-white mb-8 sm:mb-12 z-10 text-center"
      >
        {config.memoryGallery.title}
      </motion.h2>

      {/* Gallery Container with carousel effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-lg z-10 px-4 sm:px-0 mb-24 sm:mb-0"
      >
        {/* Previous photo hint (left side) - Hidden on mobile */}
        {!isMobile && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 0.4, x: -80, scale: 0.75 }}
              exit={{ opacity: 0, x: -50, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute -left-24 top-1/2 -translate-y-1/2 w-32 h-40 rounded-2xl overflow-hidden hidden md:block"
            >
              <img
                src={photosWithAssets[prevIndex].src}
                alt=""
                className="w-full h-full object-cover blur-sm"
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Main Photo Card with parallax */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: '1000px' }}
          >
            {/* Glass card wrapper with premium styling */}
            <motion.div
              className="relative rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)' }}
              onHoverStart={() => setIsAutoPlay(false)}
              onHoverEnd={() => setTimeout(() => setIsAutoPlay(true), 1500)}
            >
              {/* Image with zoom effect */}
              <motion.img
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                className="w-full aspect-[3/4] object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />

              {/* Premium glow overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Blur reveal effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.6 }}
              />

              {/* Caption with elegant styling */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-white text-sm font-light leading-relaxed">
                  {currentPhoto.caption}
                </p>
              </motion.div>

              {/* Click to expand hint */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-white/60 text-xs font-light">
                  Tap to expand
                </div>
              </motion.div>
            </motion.div>

            {/* Photo counter with elegant styling */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-white/60 text-sm mt-6 font-light"
            >
              {currentIndex + 1} of {photosWithAssets.length}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Next photo hint (right side) - Hidden on mobile */}
        {!isMobile && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 0.4, x: 80, scale: 0.75 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute -right-24 top-1/2 -translate-y-1/2 w-32 h-40 rounded-2xl overflow-hidden hidden md:block"
            >
              <img
                src={photosWithAssets[nextIndex].src}
                alt=""
                className="w-full h-full object-cover blur-sm"
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Navigation buttons - Hidden on mobile, positioned outside on desktop */}
        <motion.button
          whileHover={{ scale: 1.15, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all sm:-translate-x-20 -translate-x-12 hidden sm:flex"
        >
          <span className="text-lg sm:text-xl">←</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all sm:translate-x-20 translate-x-12 hidden sm:flex"
        >
          <span className="text-lg sm:text-xl">→</span>
        </motion.button>

        {/* Mobile navigation dots below image */}
        {isMobile && (
          <motion.div className="flex gap-3 justify-center mt-4 sm:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-all"
            >
              ← Prev
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-all"
            >
              Next →
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Progress indicator - animated dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-2 justify-center mt-6 sm:mt-12 z-10"
      >
        {photosWithAssets.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setIsAutoPlay(false)
              setCurrentIndex(index)
              setTimeout(() => setIsAutoPlay(true), 2000)
            }}
            animate={{
              width: index === currentIndex ? 32 : 8,
              backgroundColor: index === currentIndex
                ? 'rgb(236, 72, 153)'
                : 'rgba(255, 255, 255, 0.3)',
            }}
            whileHover={{ scale: 1.2 }}
            className="h-2 rounded-full transition-all"
          />
        ))}
      </motion.div>

      {/* Autoplay indicator */}
      {isAutoPlay && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="text-white/40 text-xs mt-3 sm:mt-6 z-10 font-light"
        >
          Auto-scrolling... Touch to pause
        </motion.p>
      )}

      {/* Continue button - Better positioned for mobile */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={onComplete}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all z-20 text-base sm:text-lg"
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={photosWithAssets.find((p) => p.id === expanded)?.src}
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
