'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md px-8 py-12 rounded-3xl shadow-xl border border-gray-200">

        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Welcome to
          <span className="text-[#810446] font-bold ml-2 block sm:inline">
            E-Store<b className="text-black">.</b>
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          At <span className="font-semibold text-[#810446]">E-Store</span>, we believe shopping should be simple, enjoyable, and affordable.
          Our mission is to bring you the best products at the best prices — all in one place.
        </motion.p>

        {[
          {
            title: 'Who We Are',
            content: `We're a passionate team of designers, developers, and dreamers working to create a seamless online shopping experience.
            What started as a small idea has grown into a full-fledged platform for everyday essentials and trending items.`,
          },
          {
            title: 'What We Offer',
            content: [
              '✅ A wide range of quality products',
              '🚚 Fast and reliable delivery',
              '💳 Secure payments',
              '📞 Friendly customer support',
              '🔄 Hassle-free returns',
            ],
            list: true,
          },
          {
            title: 'Our Promise',
            content: `We’re committed to your satisfaction. Whether you’re shopping for the latest gadgets or everyday products,
            you can count on us for quality, transparency, and care.`,
          },
          {
            title: 'Why Choose Us?',
            content: [
              'Curated collections just for you',
              'Mobile-friendly and responsive experience',
              'Trustworthy customer reviews',
              'Regular discounts and seasonal offers',
            ],
            list: true,
          },
          {
            title: 'Let’s Stay Connected',
            content: `We’d love to hear from you! Feel free to reach out, follow us on social media, or drop by our support center.`,
          },
        ].map((section, index) => (
          <motion.section
            key={section.title}
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 2}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{section.title}</h2>
            {section.list ? (
              <ul className="list-disc text-gray-700 text-lg pl-6 space-y-2">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-lg">{section.content}</p>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  )
}
