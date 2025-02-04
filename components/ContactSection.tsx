'use client'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-gray-100 p-8">
      <motion.div
        className="flex justify-between items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="text-left">
          <h1 className="font-playfair text-5xl md:text-7xl">
            CON<span className="text-red-500">-</span><br />TACTS
          </h1>
          <p className="text-gray-400 text-xl mt-4 font-playfair">45.</p>
        </div>
        <div className="text-right">
          <p className="font-playfair text-md md:text-lg">
            DESIGN JOURNEY <FontAwesomeIcon icon={faSquare} className="text-red-500" />
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-between items-center mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div>
          <p className="text-xl font-bold font-playfair">EMAIL:</p>
          <p className="text-xl font-playfair">
            <a href="mailto:aliciasuciadi@email.com" className="text-black no-underline hover:text-red-500 transition-all duration-200">
              aliciasuciadi@email.com
            </a>
          </p>
          <p className="text-xl font-bold mt-8 font-playfair">PHONE:</p>
          <p className="text-xl font-playfair">
            <a href="tel:+622112345678" className="text-black no-underline hover:text-red-500 transition-all duration-200">
              +622112345678
            </a>
          </p>
        </div>

        <div className="text-right">
          <p className="font-playfair text-2xl font-bold hover:scale-105 transition-all duration-200">
            <FontAwesomeIcon icon={faSquare} className="text-red-500" /> THANK YOU
          </p>
        </div>
      </motion.div>

      <motion.footer
        className="flex justify-between items-end mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-gray-400 text-xl font-playfair">45.</p>
        <p className="text-gray-400 text-xl font-playfair">46.</p>
      </motion.footer>
    </section>
  )
}

