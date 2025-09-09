import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section
      className="w-full min-h-[40vh] flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-700 to-fuchsia-700 px-4 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Let’s create a measurable<br />impact on your business.
      </motion.h2>
      <motion.button
        className="mt-2 px-8 py-4 bg-white text-black text-xl font-bold rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      >
        Design A Quote
      </motion.button>
    </section>
  );
}
