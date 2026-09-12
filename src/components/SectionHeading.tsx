import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
}

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  children
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={alignClasses[align]}
    >
      <h2 className="text-display-md font-serif text-charcoal mb-4">{title}</h2>
      {subtitle && (
        <p className="text-body-lg text-charcoal/70 mb-6 max-w-2xl">{subtitle}</p>
      )}
      {children}
    </motion.div>
  )
}

export default SectionHeading
