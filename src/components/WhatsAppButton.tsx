import { FC, useState } from 'react'
import { motion } from 'framer-motion'

const WhatsAppButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="https://wa.me/+919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <span className="text-2xl">💬</span>
      </motion.div>
      <motion.span
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? -10 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-charcoal text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap font-semibold"
      >
        Chat with us!
      </motion.span>
    </motion.a>
  )
}

export default WhatsAppButton
