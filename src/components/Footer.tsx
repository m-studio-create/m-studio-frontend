import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-charcoal text-cream py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-heading-sm font-serif mb-4">M STUDIO</h4>
            <p className="text-body-sm text-cream/70 mb-4">
              Practical Digital Skills, Creative Services & Online Business Training
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/70 hover:text-cream transition-colors">Twitter</a>
              <a href="#" className="text-cream/70 hover:text-cream transition-colors">Instagram</a>
              <a href="#" className="text-cream/70 hover:text-cream transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h5 className="text-heading-sm font-serif mb-4">Courses</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">All Courses</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Design</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Development</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Business</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-heading-sm font-serif mb-4">Services</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Design</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Development</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Consulting</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Training</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-heading-sm font-serif mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Terms of Service</Link></li>
              <li><Link to="#" className="text-cream/70 hover:text-cream transition-colors text-body-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-body-sm text-cream/60">
            © {currentYear} M Studio Academy. All rights reserved. Made with ❤️ by Maniha
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-cream/60 hover:text-cream transition-colors text-body-sm">Privacy</a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors text-body-sm">Terms</a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors text-body-sm">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
