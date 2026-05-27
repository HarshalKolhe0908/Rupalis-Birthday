import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

interface FloatingParticlesProps {
  count?: number
  emojis?: string[]
  className?: string
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 20,
  emojis = ['✨', '💕', '🎉', '💫', '⭐', '🎂'],
  className = '',
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 30,
      opacity: 0.3 + Math.random() * 0.4,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }))
  }, [count, emojis])

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{ 
            left: `${particle.left}%`,
            top: '-50px',
            opacity: particle.opacity,
            scale: 0.5,
          }}
          animate={{
            top: '100vh',
            opacity: 0,
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span 
            className="text-2xl select-none"
            style={{ fontSize: `${particle.size}px` }}
          >
            {particle.emoji}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

// Alternative version with fixed shapes
export const FloatingShapes: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 12 + Math.random() * 8,
      color: ['bg-pink-400', 'bg-purple-400', 'bg-yellow-300', 'bg-blue-300'][
        Math.floor(Math.random() * 4)
      ],
      size: Math.random() * 8 + 4,
    }))
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: 0.3,
          }}
          initial={{
            left: `${shape.left}%`,
            top: '-20px',
          }}
          animate={{
            top: '100vh',
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Glowing orbs for atmosphere
export const GlowingOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-pink-400 opacity-10 blur-3xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-400 opacity-10 blur-3xl"
        style={{ bottom: '10%', right: '5%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-300 opacity-10 blur-3xl"
        style={{ top: '50%', right: '10%' }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  )
}
