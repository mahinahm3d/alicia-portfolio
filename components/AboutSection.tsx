'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <div className="text-left border-b border-gray-400 pb-4">
            <h1 className="text-2xl uppercase font-playfair">Introduction</h1>
          </div>
          <div className="flex items-center mt-8">
            <Image
              src="/assets/Kratz.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="rounded-full border-2 border-gray-300"
            />
            <div className="ml-8">
              <h2 className="text-xl font-bold font-playfair text-red-500">Alicia Suciadi</h2>
              <p className="text-sm mt-2">Jakarta, Indonesia</p>
              <p className="text-sm">September 24th, 2001</p>
              <p className="text-sm">aliciasuciadi@email.com</p>
              <p className="text-sm">@aliciasuciadi</p>
            </div>
          </div>
          <p className="mt-8 text-justify leading-relaxed">
            I am currently a 3rd-year university student majoring in Visual Communication Design at Multimedia Nusantara University. I deeply admire the importance of design in communicating messages and aspire to explore more in the field of design, especially branding.
          </p>
          <p className="mt-4 text-justify leading-relaxed">
            I am keen on constantly developing my skills, becoming a proficient designer, and looking forward to working towards creating innovative branding solutions.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <div className="text-left border-b border-gray-400 pb-4">
            <h1 className="text-2xl uppercase font-playfair">Skills</h1>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold font-playfair">Hard Skills</h3>
              <ul className="mt-4 space-y-2">
                <li>Typography & Color</li>
                <li>Icons & Illustrations</li>
                <li>Brand Guidelines</li>
                <li>Presentation Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold font-playfair">Soft Skills</h3>
              <ul className="mt-4 space-y-2">
                <li>Communication</li>
                <li>Critical Thinking</li>
                <li>Team Working</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-left border-b border-gray-400 pb-4">
              <h1 className="text-2xl uppercase font-playfair">Education</h1>
            </div>
            <ul className="mt-8 space-y-4">
              <li>
                <h3 className="text-lg font-bold text-red-500">Multimedia Nusantara University</h3>
                <p className="text-sm">Bachelor's Degree in Visual Communication Design</p>
                <p className="text-sm">Now</p>
              </li>
              <li>
                <h3 className="text-lg font-bold text-red-500">Don Bosco 2 High School</h3>
                <p className="text-sm">Science program</p>
                <p className="text-sm">2019</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

