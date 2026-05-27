import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, Card } from '../../components/UI'
import { config } from '../../config'

export default function AdmireSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const { qualities } = config.story.admire

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        <SectionTitle className="mb-16">
          {config.story.admire.title}
        </SectionTitle>

        {/* Qualities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {qualities.map((quality) => (
            <motion.div
              key={quality.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setExpandedId(expandedId === quality.id ? null : quality.id)}
              className="cursor-pointer"
            >
              <Card
                variant="gradient"
                className={`h-full transition-all duration-300 ${
                  expandedId === quality.id
                    ? 'ring-2 ring-pink-400 shadow-2xl shadow-pink-400/50'
                    : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    animate={{ scale: expandedId === quality.id ? 1.3 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl flex-shrink-0"
                  >
                    {quality.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {quality.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: expandedId === quality.id ? 1 : 0.7 }}
                      animate={{ opacity: expandedId === quality.id ? 1 : 0.7 }}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {quality.description}
                    </motion.p>
                  </div>
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedId === quality.id ? 1 : 0,
                    height: expandedId === quality.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-pink-200/30 overflow-hidden"
                >
                  <p className="text-sm text-gray-600 italic">
                    This is what makes you truly special. ✨
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="glass" className="text-center p-10">
            <p className="text-lg text-gray-700 leading-relaxed">
              These are just a few of the countless reasons why you deserve to be celebrated not just today, but every single day.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
