import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CinematicIntro from './pages/CinematicIntro'
import MemoryGallery from './pages/MemoryGallery'
import RadhaKrishnaShayari from './pages/RadhaKrishnaShayari'
import ShortNote from './pages/ShortNote'
import GiftSection from './pages/GiftSection'
import MoonSketch from './pages/MoonSketch'
import EndingPage from './pages/EndingPage'
import MusicPlayer from './components/MusicPlayer'

type PageType = 'intro' | 'gallery' | 'shayari' | 'note' | 'gift' | 'moon' | 'ending'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('intro')
  const [musicEnabled, setMusicEnabled] = useState(false)

  const pages: PageType[] = ['intro', 'gallery', 'shayari', 'note', 'gift', 'moon', 'ending']
  const currentIndex = pages.indexOf(currentPage)

  const goToNextPage = () => {
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1])
    }
  }

  const replay = () => {
    setCurrentPage('intro')
  }

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      {/* Music Player */}
      <MusicPlayer 
        enabled={musicEnabled} 
        onChange={setMusicEnabled}
      />

      {/* Pages */}
      <AnimatePresence mode="wait">
        {currentPage === 'intro' && (
          <CinematicIntro
            key="intro"
            onBegin={goToNextPage}
          />
        )}
        {currentPage === 'gallery' && (
          <MemoryGallery
            key="gallery"
            onComplete={goToNextPage}
          />
        )}
        {currentPage === 'shayari' && (
          <RadhaKrishnaShayari
            key="shayari"
            onComplete={goToNextPage}
          />
        )}
        {currentPage === 'note' && (
          <ShortNote
            key="note"
            onComplete={goToNextPage}
          />
        )}
        {currentPage === 'gift' && (
          <GiftSection
            key="gift"
            onComplete={goToNextPage}
          />
        )}
        {currentPage === 'moon' && (
          <MoonSketch
            key="moon"
            onComplete={goToNextPage}
          />
        )}
        {currentPage === 'ending' && (
          <EndingPage
            key="ending"
            onReplay={replay}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
