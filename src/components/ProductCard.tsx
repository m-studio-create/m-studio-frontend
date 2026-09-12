import { FC } from 'react'
import { motion } from 'framer-motion'
import { Product } from '../types'
import Button from './Button'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-40 overflow-hidden bg-gray-200">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-maroon mb-2">{product.category}</p>
        <h3 className="text-heading-md font-serif text-charcoal mb-2">{product.title}</h3>
        <p className="text-body-sm text-charcoal/60 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-heading-sm font-serif text-maroon">₹{product.price.toLocaleString()}</span>
          <Button variant="primary" size="sm">Buy Now</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
