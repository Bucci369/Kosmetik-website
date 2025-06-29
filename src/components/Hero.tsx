'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-white to-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            LUMIÈRE
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Natürliche Schönheit durch wissenschaftlich fundierte Hautpflege. 
            Entdecke deine strahlende Haut.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gray-900 text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              KOLLEKTION ENTDECKEN
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-4 text-lg font-medium tracking-wide hover:border-gray-900 transition-all duration-300 hover:scale-105">
              ÜBER UNS
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
        >
          <span className="text-sm font-light mb-2 tracking-widest uppercase">Scrollen</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-dusty-rose rounded-full opacity-40"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1 h-1 bg-sage rounded-full opacity-60"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  )
}