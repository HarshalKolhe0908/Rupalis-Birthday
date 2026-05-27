import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroPage from './pages/IntroPage'
import StoryPage from './pages/StoryPage'
import FinaleePage from './pages/FinaleePage'
import { config } from './config'

type PageType = 'intro' | 'story' | 'finale'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('intro')
  const [musicEnabled, setMusicEnabled] = useState(false)

  // Prevent scrolling on body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    }
  }, [])

  // Handle music toggle
  useEffect(() => {
    if (musicEnabled && config.musicUrl) {
      // Create audio element if needed
      const audio = new Audio(config.musicUrl)
      audio.loop = true
      audio.play().catch(() => {
        // Browser may block autoplay
        console.log('Audio autoplay blocked')
      })
    }
  }, [musicEnabled])

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 'intro' && (
          <IntroPage
            key="intro"
            onBegin={() => setCurrentPage('story')}
            musicEnabled={musicEnabled}
            onMusicToggle={() => setMusicEnabled(!musicEnabled)}
          />
        )}
        {currentPage === 'story' && (
          <StoryPage
            key="story"
            onComplete={() => setCurrentPage('finale')}
            musicEnabled={musicEnabled}
            onMusicToggle={() => setMusicEnabled(!musicEnabled)}
          />
        )}
        {currentPage === 'finale' && (
          <FinaleePage
            key="finale"
            onReplay={() => setCurrentPage('intro')}
            musicEnabled={musicEnabled}
            onMusicToggle={() => setMusicEnabled(!musicEnabled)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
