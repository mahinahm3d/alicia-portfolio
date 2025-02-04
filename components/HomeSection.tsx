'use client'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export function HomeSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="font-playfair text-5xl md:text-7xl hover:scale-105 transition-all duration-200">
          welcome to my
        </h1>
        <h2 className="font-great-vibes text-6xl md:text-8xl relative inline-block hover:scale-105 transition-all duration-200 text-red-500">
          portfoli<span className="relative text-red-500">
            o
            <span className="absolute text-lg md:text-xl -right-5 top-1 md:top-2 text-black">2023</span>
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base">( DESIGNER )</p>
      </motion.div>

      <motion.div
        className="flex justify-between w-full px-8 mt-12 text-xs md:text-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-left space-y-4">
          <p className="hover:text-red-500 transition-all duration-200">
            DESIGN<br />PORTFOLIO
          </p>
          <p className="hover:text-red-500 transition-all duration-200">
            ALICIA SUCIADI<br />aliciasuciadi@email.com
          </p>
        </div>
        <div className="text-right space-y-4">
          <p className="hover:text-red-500 transition-all duration-200">
            UNIVERSITY.NET<br />/ALICIA
          </p>
        </div>
      </motion.div>
    </section>
  )
}

