import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CinematicIntro from './pages/CinematicIntro'
import MemoryGallery from './pages/MemoryGallery'
import RadhaKrishnaShayari from './pages/RadhaKrishnaShayari'
import ShortNote from './pages/ShortNote'
import GiftSection from './pages/GiftSection'
import MoonSketch from './pages/MoonSketch'
import Wishesh from './pages/Wishesh'
import EndingPage from './pages/EndingPage'
import MusicPlayer from './components/MusicPlayer'
import FloatingNavigation from './components/FloatingNavigation'

type PageType = 'intro' | 'gallery' | 'note' | 'gift' | 'moon' | 'wishesh' | 'shayari' | 'ending'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('intro')
  const [musicEnabled, setMusicEnabled] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const pages: PageType[] = ['intro', 'gallery', 'note', 'gift', 'moon', 'wishesh', 'shayari', 'ending']
  const currentIndex = pages.indexOf(currentPage)

  const goToNextPage = () => {
    if (currentIndex < pages.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage(pages[currentIndex + 1])
      setTimeout(() => setIsTransitioning(false), 600)
    }
  }

  const goToPreviousPage = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage(pages[currentIndex - 1])
      setTimeout(() => setIsTransitioning(false), 600)
    }
  }

  const goToPage = (index: number) => {
    if (index >= 0 && index < pages.length && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage(pages[index])
      setTimeout(() => setIsTransitioning(false), 600)
    }
  }

  const replay = () => {
    setIsTransitioning(true)
    setCurrentPage('intro')
    setTimeout(() => setIsTransitioning(false), 600)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        goToNextPage()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPreviousPage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, isTransitioning])

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      {/* Music Player */}
      <MusicPlayer 
        enabled={musicEnabled} 
        onChange={setMusicEnabled}
      />

      {/* Floating Navigation */}
      <FloatingNavigation
        currentIndex={currentIndex}
        totalPages={pages.length}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
        onDotClick={goToPage}
      />

      {/* Pages with cinematic transitions */}
      <AnimatePresence mode="wait">
        {currentPage === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-screen h-screen"
          >
            <CinematicIntro onBegin={goToNextPage} />
          </motion.div>
        )}
        {currentPage === 'gallery' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-screen h-screen"
          >
            <MemoryGallery onComplete={goToNextPage} />
          </motion.div>
        )}
        {currentPage === 'shayari' && (
          <motion.div
            key="shayari"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-screen h-screen"
          >
            <RadhaKrishnaShayari onComplete={goToNextPage} />
          </motion.div>
        )}
        {currentPage === 'note' && (
          <motion.div
            key="note"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-screen h-screen"
          >
            <ShortNote onComplete={goToNextPage} />
          </motion.div>
        )}
        {currentPage === 'gift' && (
          <motion.div
            key="gift"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-screen h-screen"
            style={{ perspective: '1000px' }}
          >
            <GiftSection onComplete={goToNextPage} />
          </motion.div>
        )}
        {currentPage === 'moon' && (
          <motion.div
            key="moon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-screen h-screen"
          >
            <MoonSketch onComplete={goToNextPage} />
          </motion.div>
        )}        {currentPage === 'wishesh' && (
          <motion.div
            key="wishesh"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-screen h-screen"
          >
            <Wishesh onComplete={goToNextPage} />
          </motion.div>
        )}        {currentPage === 'ending' && (
          <motion.div
            key="ending"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-screen h-screen"
          >
            <EndingPage onReplay={replay} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
