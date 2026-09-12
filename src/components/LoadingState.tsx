import { FC } from 'react'
import { motion } from 'framer-motion'

const LoadingState: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cream">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-soft-beige border-t-maroon rounded-full"
      />
    </div>
  )
}

export default LoadingState
