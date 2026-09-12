import { FC } from 'react'
import { motion } from 'framer-motion'
import { Service } from '../types'

interface ServiceCardProps {
  service: Service
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-heading-md font-serif text-charcoal mb-2">{service.title}</h3>
      <p className="text-body-sm text-charcoal/60 mb-6">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-charcoal">
            <span className="text-maroon font-bold">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard
