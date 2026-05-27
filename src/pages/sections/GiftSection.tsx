import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../../components/UI'
import { config } from '../../config'

export default function GiftSection() {
  const { gift } = config.story
  const [isRevealed, setIsRevealed] = useState(false)

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
          {gift.title}
        </SectionTitle>

        {/* Gift Box / Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative aspect-square mx-auto max-w-md">
            {/* Gift Box 3D Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsRevealed(!isRevealed)}
              className="w-full h-full cursor-pointer perspective"
            >
              <motion.div
                animate={{
                  rotateY: isRevealed ? 180 : 0,
                  rotateX: isRevealed ? 20 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{ perspective: '1000px' }}
                className="w-full h-full"
              >
                {!isRevealed ? (
                  <Card
                    variant="gradient"
                    className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <span className="text-8xl">🎀</span>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 text-center text-gray-700 font-semibold"
                    >
                      {gift.description}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 text-center text-sm text-gray-600"
                    >
                      Tap to reveal
                    </motion.p>
                  </Card>
                ) : (
                  <Card
                    variant="glass"
                    className="w-full h-full flex flex-col items-center justify-center border-pink-200/50"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        type: 'spring',
                      }}
                    >
                      <div className="rounded-2xl overflow-hidden aspect-square w-48 h-48 mb-6">
                        <motion.img
                          src={gift.image}
                          alt="Gift"
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                        />
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-center text-gray-700 italic"
                    >
                      {gift.note}
                    </motion.p>
                  </Card>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Message Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            This little something is a symbol of my thoughtfulness towards you.
          </p>
          <p className="text-sm text-gray-600 italic">
            No grand gesture needed. Just a token of care. 💫
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
