'use client'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md px-8 py-12 rounded-3xl shadow-xl border border-gray-200">

        <motion.h1
          className="text-4xl font-extrabold text-center text-[#810446] mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Get in Touch
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          Have a question, suggestion, or just want to say hi? We'd love to hear from you!
        </motion.p>

        <motion.form
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          onSubmit={(e) => {
            e.preventDefault()
            alert("Message sent! (This is a demo form)")
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#810446] font-medium mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border text-[#810446] border-[#810446] focus:outline-none focus:ring-1 focus:ring-[#810446]"
              />
            </div>
            <div>
              <label className="block text-[#810446] font-medium mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border text-[#810446] border-[#810446] focus:outline-none focus:ring-1 focus:ring-[#810446]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#810446] font-medium mb-2">Subject</label>
            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border text-[#810446] border-[#810446] focus:outline-none focus:ring-1 focus:ring-[#810446]"
            />
          </div>

          <div>
            <label className="block text-[#810446] font-medium mb-2">Message</label>
            <textarea
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-xl border text-[#810446] border-[#810446] focus:outline-none focus:ring-1 focus:ring-[#810446]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#810446] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#650036] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  )
}
