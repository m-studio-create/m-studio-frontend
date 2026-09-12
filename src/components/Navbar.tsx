import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar: FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-soft-beige"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-maroon rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">M</span>
          </div>
          <span className="font-serif font-bold text-charcoal hidden sm:block">M STUDIO</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-charcoal hover:text-maroon transition-colors font-medium text-sm">
            Home
          </Link>
          <Link to="/courses" className="text-charcoal hover:text-maroon transition-colors font-medium text-sm">
            Courses
          </Link>
          <Link to="/services" className="text-charcoal hover:text-maroon transition-colors font-medium text-sm">
            Services
          </Link>
          <Link to="/about" className="text-charcoal hover:text-maroon transition-colors font-medium text-sm">
            About
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-maroon text-white rounded-lg font-semibold text-sm hover:bg-burgundy transition-colors"
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
