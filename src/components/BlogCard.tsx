import { FC } from 'react'
import { motion } from 'framer-motion'
import { BlogPost } from '../types'

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-maroon bg-maroon/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-charcoal/50">{post.readTime}</span>
        </div>

        <h3 className="text-heading-sm font-serif text-charcoal mb-2 group-hover:text-maroon transition-colors">
          {post.title}
        </h3>
        <p className="text-body-sm text-charcoal/60 mb-4">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-charcoal/50">{post.date}</span>
          <motion.a
            href="#"
            className="text-maroon font-semibold text-sm"
            whileHover={{ x: 5 }}
          >
            Read More →
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard
