import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
}

const ImageReveal: FC<ImageRevealProps> = ({ src, alt, className = '' }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    />
  )
}

export default ImageReveal
