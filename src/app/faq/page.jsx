'use client'
import { motion } from 'framer-motion'
import Container from '@/components/Container'

const faqs = [
  {
    question: "What is E-Store?",
    answer: "E-Store is your one-stop shop for high-quality electronics, trendy clothing, and stylish accessories. We offer the best products at affordable prices with top-tier customer service."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is placed, you'll receive an email with tracking details. You can also check the status in your account dashboard under 'My Orders'."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship globally. Shipping fees and delivery times vary depending on your location."
  },
  {
    question: "Can I return or exchange an item?",
    answer: "Absolutely! We have a 7-day return and exchange policy. The item must be unused and in its original packaging."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, wallets, and net banking."
  },
]

const FAQPage = () => {
  return (
    <Container className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-[#810446]">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2">Find answers to common questions about our products and services.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white p-5 rounded-lg shadow border-l-4 border-[#810446]"
          >
            <h3 className="text-lg font-semibold text-[#810446]">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}

export default FAQPage
