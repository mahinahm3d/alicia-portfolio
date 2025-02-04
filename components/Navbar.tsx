'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function Navbar() {
  return (
    <motion.nav
      className="absolute top-6 flex space-x-8 text-lg uppercase text-gray-700"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Link href="#about" className="hover:text-red-400 hover:scale-105 transition duration-300">
        About
      </Link>
      <Link href="#content" className="hover:text-red-400 hover:scale-105 transition duration-300">
        Content
      </Link>
      <Link href="#contact" className="hover:text-red-400 hover:scale-105 transition duration-300">
        Contact
      </Link>
    </motion.nav>
  )
}

