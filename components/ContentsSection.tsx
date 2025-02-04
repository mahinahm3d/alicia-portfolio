'use client'
import { motion } from 'framer-motion'

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function ContentsSection() {
  const contentItems = [
    { number: '04.', title: 'Protaras', year: '2011' },
    { number: '12.', title: 'New York', year: '2012' },
    { number: '20.', title: 'Orlando', year: '2013' },
    { number: '28.', title: 'Marmaris', year: '2014' },
    { number: '36.', title: 'California', year: '2015' },
  ]

  return (
    <section id="content" className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl w-full max-w-6xl flex flex-col md:flex-row">
        <motion.div
          className="w-full md:w-1/3 flex items-center justify-center bg-black text-white p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h1 className="font-playfair text-5xl md:text-7xl transform -rotate-90 hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
            Contents
          </h1>
        </motion.div>
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-gray-400 text-lg md:text-xl font-playfair">{item.number}</span>
              <a
                href="https://www.example.com/"
                className="text-2xl md:text-3xl font-bold font-playfair hover:text-red-500 hover:text-lg transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105"
              >
                {item.title}
              </a>
              <span className="text-gray-400 text-lg">–{item.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

