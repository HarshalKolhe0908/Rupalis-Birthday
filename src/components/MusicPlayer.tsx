import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

interface MusicPlayerProps {
  enabled: boolean
  onChange: (enabled: boolean) => void
}

export default function MusicPlayer({ enabled, onChange }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [volume, setVolume] = useState(0.6)
  const [isPlaying, setIsPlaying] = useState(enabled)
  const [userInteracted, setUserInteracted] = useState(false)

  // Initialize audio and handle user interaction
  useEffect(() => {
    const handleUserInteraction = async () => {
      setUserInteracted(true)
      
      if (audioRef.current) {
        try {
          // Remove muted and play
          audioRef.current.muted = false
          await audioRef.current.play()
        } catch (err) {
          console.log('Play failed:', err)
        }
      }
    }

    // Add listener once
    window.addEventListener('click', handleUserInteraction)
    window.addEventListener('touchstart', handleUserInteraction)

    return () => {
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [])

  // Handle play/pause when isPlaying or enabled changes (only after user interaction)
  useEffect(() => {
    if (!audioRef.current) return

    if (!userInteracted) {
      // Before user interaction, keep audio muted and attempt to load
      audioRef.current.muted = true
      return
    }

    if (enabled && isPlaying) {
      audioRef.current.muted = false
      audioRef.current.play().catch((err) => {
        console.log('Failed to play:', err)
      })
    } else {
      audioRef.current.pause()
    }
  }, [enabled, isPlaying, userInteracted])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const handleToggleMusic = () => {
    if (!enabled) {
      onChange(true)
      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={config.music.url}
        loop
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
          }
        }}
      />

      {/* Music Player Button - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggleMusic}
          className={`p-4 rounded-full backdrop-blur-lg border-2 transition-all ${
            enabled
              ? 'bg-white/20 border-white/40 shadow-lg shadow-pink-500/20'
              : 'bg-white/10 border-white/20 shadow-lg'
          }`}
        >
          <motion.span
            className="text-2xl block"
            animate={{ rotate: isPlaying ? [0, 5, -5, 0] : 0 }}
            transition={{ duration: 0.6, repeat: isPlaying ? Infinity : 0 }}
          >
            {enabled ? (isPlaying ? '🎵' : '🔇') : '🔕'}
          </motion.span>
        </motion.button>

        {/* Volume control */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={enabled ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-16 right-0 p-4 rounded-2xl backdrop-blur-lg border border-white/30 ${
            enabled ? 'bg-white/15' : 'pointer-events-none'
          }`}
        >
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={(e) => setVolume(e.currentTarget.value as any / 100)}
            disabled={!enabled}
            className="w-24 h-1 bg-white/30 rounded-full appearance-none cursor-pointer accent-pink-500"
          />
          <p className="text-xs text-white/60 mt-2 text-center">{Math.round(volume * 100)}%</p>
        </motion.div>
      </motion.div>
    </>
  )
}
