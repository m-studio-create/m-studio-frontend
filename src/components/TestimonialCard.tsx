import { FC } from 'react'
import { motion } from 'framer-motion'
import { Testimonial } from '../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-heading-sm font-serif text-charcoal">{testimonial.name}</h4>
          <p className="text-sm text-charcoal/60">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < Math.floor(testimonial.rating) ? 'text-yellow-500' : 'text-gray-300'}
          >
            ★
          </span>
        ))}
      </div>

      <p className="text-body-sm text-charcoal/70 italic">"{testimonial.content}"</p>
    </motion.div>
  )
}

export default TestimonialCard
