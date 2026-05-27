import React from 'react'
import { motion } from 'framer-motion'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

interface MusicToggleProps {
  enabled: boolean
  onChange: (enabled: boolean) => void
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ enabled, onChange }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onChange(!enabled)}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-pink-500 hover:bg-white/40 transition-all duration-300"
      aria-label="Toggle music"
    >
      <motion.div
        animate={{ scale: enabled ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      >
        {enabled ? (
          <MdVolumeUp size={24} />
        ) : (
          <MdVolumeOff size={24} />
        )}
      </motion.div>
    </motion.button>
  )
}

interface HamburgerMenuProps {
  isOpen: boolean
  onChange: (isOpen: boolean) => void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onChange }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onChange(!isOpen)}
      className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center flex-col gap-1.5"
      aria-label="Toggle menu"
    >
      <motion.span
        className="w-6 h-0.5 bg-pink-500 rounded"
        animate={{ 
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-pink-500 rounded"
        animate={{ 
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-6 h-0.5 bg-pink-500 rounded"
        animate={{ 
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}
