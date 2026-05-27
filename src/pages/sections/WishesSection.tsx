import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../../components/UI'
import { config } from '../../config'

interface TypewriterTextProps {
  text: string
  delay?: number
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0 }) => {
  const characters = text.split('')

  return (
    <span>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.02,
            delay: delay + index * 0.02,
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function WishesSection() {
  const { wishes } = config.story.wishes

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
          {config.story.wishes.title}
        </SectionTitle>

        {/* Wishes Cards */}
        <div className="space-y-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="p-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-4 items-start"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="text-2xl flex-shrink-0"
                  >
                    ✨
                  </motion.span>
                  <p className="text-lg text-gray-800 leading-relaxed font-light">
                    <TypewriterText text={wish} delay={0.3 + index * 0.5} />
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.p
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg text-gray-600 italic"
          >
            May every moment bring you joy. 💝
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}
