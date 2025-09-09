import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 py-16">
      <div className="max-w-3xl w-full text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "block" }}
          >
            Design
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: "block" }}
          >
            Transform
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ display: "block" }}
          >
            Accelerate
          </motion.span>
        </motion.h1>
        <div className="flex justify-center mb-8">
          <motion.span
            className="block w-24 h-2 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>
        <motion.p
          className="text-2xl md:text-3xl text-black font-normal mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Redefining user experiences through Behavioural Science &amp; AI
        </motion.p>
        <motion.p
          className="text-lg text-gray-500 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          As global leaders in UX UI, technology, and marketing solutions, we
          partner with clients to simplify, strengthen, and transform their
          businesses.
        </motion.p>
      </div>
    </section>
  );
}
