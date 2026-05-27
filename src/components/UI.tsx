import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 relative overflow-hidden'

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-pink-400 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-400/50 active:scale-95',
    secondary:
      'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:shadow-lg hover:shadow-purple-400/50 active:scale-95',
    outline:
      'border-2 border-pink-400 text-pink-400 hover:bg-pink-50 active:bg-pink-100 active:scale-95',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  )
}

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'default' | 'glass' | 'gradient'
  delay?: number
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  variant = 'default',
  delay = 0,
}) => {
  const variantClasses = {
    default: 'bg-white/80 backdrop-blur-sm',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30',
    gradient: 'bg-gradient-to-br from-pink-200/40 to-purple-200/40 backdrop-blur-sm',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      onClick={onClick}
      className={`rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

interface GradientTextProps {
  children: React.ReactNode
  gradient?: string
  className?: string
  animated?: boolean
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'from-pink-500 to-rose-500',
  className = '',
  animated = false,
}) => {
  return (
    <span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className} ${
        animated ? 'animate-pulse' : ''
      }`}
    >
      {children}
    </span>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
  centered?: boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  subtitle,
  className = '',
  centered = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 font-light">{subtitle}</p>
      )}
    </motion.div>
  )
}

interface IconProps {
  icon: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export const Icon: React.FC<IconProps> = ({ icon, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  }

  return <div className={`${sizes[size]} ${className}`}>{icon}</div>
}
