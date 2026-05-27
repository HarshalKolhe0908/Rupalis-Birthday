import { motion } from 'framer-motion'
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

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12 text-gray-900"
        >
          {message.title}
        </motion.h2>

        {/* Letter/Page Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ perspective: '1000px' }}
          className="relative"
        >
          {/* Paper Shadow Effect */}
          <motion.div
            animate={{ boxShadow: ['0 10px 40px rgba(236, 72, 153, 0.1)', '0 20px 60px rgba(236, 72, 153, 0.2)', '0 10px 40px rgba(236, 72, 153, 0.1)'] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl bg-white/50"
          />

          {/* Main Letter Card */}
          <div className="relative bg-gradient-to-br from-orange-50/80 via-pink-50/60 to-yellow-50/40 backdrop-blur-md rounded-3xl p-10 md:p-14 border-2 border-white/70 shadow-2xl">
            {/* Decorative corner elements */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-4xl"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
              className="absolute -bottom-4 -left-4 text-4xl"
            >
              💫
            </motion.div>

            {/* Handwritten style message */}
            <div className="relative z-10">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-caveat text-2xl text-pink-600 mb-6"
              >
                A special note for you...
              </motion.p>

              {/* Main Message - Handwritten style */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-caveat text-3xl md:text-4xl text-gray-800 leading-relaxed mb-8 text-center"
              >
                {messageWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + index * 0.03,
                    }}
                    viewport={{ once: true }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              {/* Signature line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="w-32 h-1 bg-gradient-to-r from-pink-400 to-transparent mx-auto my-8"
              />

              {/* Closing */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="font-caveat text-2xl text-pink-600 text-center mb-4"
              >
                With love & care ❤️
              </motion.p>

              {/* Signature name */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="font-caveat text-xl text-gray-700 text-center italic"
              >
                — Someone who cares
              </motion.p>
            </div>

            {/* Paper texture overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noise)" /%3E%3C/svg%3E")',
            }} />
          </div>
        </motion.div>

        {/* Subtle reminder below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex gap-4 justify-center flex-col items-center"
        >
          <p className="text-gray-600 italic text-sm">No pressure, no expectations.</p>
          <div className="flex gap-3">
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            >
              💫
            </motion.span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            >
              ⭐
            </motion.span>
          </div>
          <p className="text-gray-600 italic text-sm">Just genuine wishes for you. 🌟</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
