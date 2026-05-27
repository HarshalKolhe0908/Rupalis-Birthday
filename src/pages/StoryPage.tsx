import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FloatingParticles, GlowingOrbs } from '../components/FloatingParticles'
import { MusicToggle } from '../components/TopBar'
import { Button } from '../components/UI'
import WelcomeSection from './sections/WelcomeSection'
import GallerySection from './sections/GallerySection'
import AdmireSection from './sections/AdmireSection'
import WishesSection from './sections/WishesSection'
import MessageSection from './sections/MessageSection'
import GiftSection from './sections/GiftSection'

interface StoryPageProps {
  onComplete: () => void
  musicEnabled: boolean
  onMusicToggle: (enabled: boolean) => void
}

export default function StoryPage({ onComplete, musicEnabled, onMusicToggle }: StoryPageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrolled = container.scrollTop
      const total = container.scrollHeight - container.clientHeight
      setScrollProgress(total > 0 ? scrolled / total : 0)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-screen h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative"
    >
      {/* Background Effects */}
      <GlowingOrbs />
      <FloatingParticles count={20} />

      {/* Music Toggle */}
      <MusicToggle enabled={musicEnabled} onChange={onMusicToggle} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500 z-40"
        style={{ 
          scaleX: scrollProgress,
          transformOrigin: 'left',
        }}
      />

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="w-full h-full overflow-y-scroll overflow-x-hidden scroll-smooth"
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        <div className="relative z-10">
          {/* Welcome Section */}
          <WelcomeSection />

          {/* Gallery Section */}
          <GallerySection />

          {/* Admire Section */}
          <AdmireSection />

          {/* Wishes Section */}
          <WishesSection />

          {/* Message Section */}
          <MessageSection />

          {/* Gift Section */}
          <GiftSection />

          {/* Finale CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative"
          >
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-900"
              >
                Ready to See the Finale?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-12 max-w-md mx-auto"
              >
                One last surprise awaits you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={onComplete}
                  variant="primary"
                  size="lg"
                  className="shadow-2xl shadow-pink-400/40"
                >
                  Continue to Finale 🎉
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Bottom Padding */}
          <div className="h-20" />
        </div>
      </div>
    </motion.div>
  )
}
