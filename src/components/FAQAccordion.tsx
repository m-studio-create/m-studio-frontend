import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { FAQ } from '../types'

interface FAQAccordionProps {
  faqs: FAQ[]
}

const FAQAccordion: FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <motion.div
          key={faq.id}
          initial={false}
          className="border border-soft-beige rounded-lg overflow-hidden"
        >
          <motion.button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full px-6 py-4 bg-cream hover:bg-soft-beige transition-colors flex items-center justify-between"
          >
            <h4 className="text-heading-sm font-serif text-charcoal text-left">{faq.question}</h4>
            <motion.span
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-maroon text-xl"
            >
              ▼
            </motion.span>
          </motion.button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openId === faq.id ? 'auto' : 0,
              opacity: openId === faq.id ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-ivory border-t border-soft-beige">
              <p className="text-body-sm text-charcoal/70">{faq.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQAccordion
