import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionTitle, Card } from '../../components/UI'
import { config } from '../../config'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const { photos } = config.story.gallery
  const currentPhoto = photos[selectedIndex]

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-2xl mx-auto w-full">
        <SectionTitle className="mb-16">
          {config.story.gallery.title}
        </SectionTitle>

        {/* Main Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative">
            {/* Photo Frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <Card
                  variant="glass"
                  className="overflow-hidden cursor-pointer group"
                  onClick={() => setExpandedId(currentPhoto.id)}
                >
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <motion.img
                      src={currentPhoto.src}
                      alt={currentPhoto.caption}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Polaroid Effect Bottom */}
                  <div className="mt-4 pl-4 pb-4 pr-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-center text-gray-700 italic font-light"
                    >
                      {currentPhoto.caption}
                    </motion.p>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-pink-500 hover:bg-white/40 transition-all"
            >
              <MdChevronLeft size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-pink-500 hover:bg-white/40 transition-all"
            >
              <MdChevronRight size={24} />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {photos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 w-8'
                    : 'bg-gray-300/50 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Photo Thumbnails Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 mt-12"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer rounded-lg overflow-hidden aspect-square"
            >
              <motion.img
                src={photo.src}
                alt={photo.caption}
                className={`w-full h-full object-cover transition-all ${
                  index === selectedIndex ? 'ring-2 ring-pink-500' : ''
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expanded Photo Modal */}
      <AnimatePresence>
        {expandedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedId(null)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={photos.find((p) => p.id === expandedId)?.src}
              alt=""
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
