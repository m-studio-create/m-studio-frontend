import { FC } from 'react'
import { motion } from 'framer-motion'
import { Course } from '../types'
import Button from './Button'

interface CourseCardProps {
  course: Course
  onClick?: () => void
}

const CourseCard: FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-3 right-3 bg-maroon text-white px-3 py-1 rounded-full text-xs font-semibold">
          {course.level}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-maroon font-semibold mb-2">{course.category}</p>
        <h3 className="text-heading-sm font-serif text-charcoal mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-body-sm text-charcoal/60 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-semibold text-charcoal">{course.rating}</span>
            <span className="text-xs text-charcoal/50">({course.students})</span>
          </div>
          <span className="text-xs text-charcoal/60">{course.duration}</span>
        </div>

        <div className="border-t border-soft-beige pt-4 flex items-center justify-between">
          <span className="text-heading-sm font-serif text-maroon">₹{course.price.toLocaleString()}</span>
          <Button variant="primary" size="sm" className="text-sm">
            Enroll
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default CourseCard
