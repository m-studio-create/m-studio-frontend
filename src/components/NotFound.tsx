import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cream flex items-center justify-center px-6"
    >
      <div className="text-center">
        <motion.h1
          className="text-display-lg font-serif text-maroon mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        <h2 className="text-heading-lg font-serif text-charcoal mb-4">Page Not Found</h2>
        <p className="text-body-lg text-charcoal/60 mb-8 max-w-md">
          Oops! The page you are looking for does not exist. Let us help you get back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-maroon text-white rounded-lg font-semibold hover:bg-burgundy transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  )
}

export default NotFound
