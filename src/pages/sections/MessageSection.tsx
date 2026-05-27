import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../../components/UI'
import { config } from '../../config'

export default function MessageSection() {
  const { message } = config.story
  const messageWords = message.text.split(' ')

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-2xl mx-auto w-full">
        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            type: 'spring',
          }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <span className="text-6xl">💝</span>
        </motion.div>

        <SectionTitle className="mb-12">
          {message.title}
        </SectionTitle>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card variant="glass" className="p-10 border-pink-200/50">
            <p className="text-lg text-gray-800 leading-relaxed font-light text-center">
              {messageWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </Card>
        </motion.div>

        {/* Decorative Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 italic mb-4">No pressure, no expectations.</p>
          <p className="text-gray-600 italic">Just genuine wishes for you. 🌟</p>
        </motion.div>

        {/* Flourish Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          {['✨', '💫', '⭐'].map((emoji, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
