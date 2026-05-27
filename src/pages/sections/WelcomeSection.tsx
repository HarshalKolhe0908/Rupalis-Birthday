import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../../components/UI'
import { config } from '../../config'

export default function WelcomeSection() {
  const text = config.story.welcome.description.split(' ')

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            type: 'spring',
          }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-7xl">🎁</span>
        </motion.div>

        <SectionTitle className="mb-8">
          {config.story.welcome.title}
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            {text.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card variant="glass" className="p-8 border-pink-200/50">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">💫</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">💫</span>
            </div>
            <p className="text-gray-700 italic">
              Scroll down to explore a special journey.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
