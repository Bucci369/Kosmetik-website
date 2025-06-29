'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function NatalieSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -75])

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen bg-gray-900 overflow-hidden py-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-grid-pattern bg-repeat" 
             style={{
               backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>

      {/* Scattered Images with reduced opacity and stronger overlay */}
      <motion.div
        className="absolute top-20 left-16 w-56 h-72 rounded-lg overflow-hidden shadow-xl opacity-30"
        style={{ y: y1 }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={imageVariants}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05, rotate: 2, opacity: 0.4, transition: { duration: 0.3 } }}
      >
        <Image 
          src="/images/Frau mit Hintergrund/frau_mit_hintergrund2.jpg"
          alt="Natural Beauty"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/50"></div>
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 w-48 h-64 rounded-lg overflow-hidden shadow-xl opacity-25"
        style={{ y: y2 }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={imageVariants}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05, rotate: -2, opacity: 0.35, transition: { duration: 0.3 } }}
      >
        <Image 
          src="/images/Frau mit Hintergrund/frau_mit_hintergrund1.jpg"
          alt="Elegant Style"
          fill
          className="object-cover grayscale-[40%]"
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 w-64 h-44 rounded-lg overflow-hidden shadow-xl opacity-20"
        style={{ y: y3 }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={imageVariants}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05, rotate: 1, opacity: 0.3, transition: { duration: 0.3 } }}
      >
        <Image 
          src="/images/Frau mit Hintergrund/kamele.jpg"
          alt="Desert Beauty"
          fill
          className="object-cover saturate-50"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-24 w-44 h-56 rounded-lg overflow-hidden shadow-xl opacity-25"
        style={{ y: y4 }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={imageVariants}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05, rotate: -1, opacity: 0.35, transition: { duration: 0.3 } }}
      >
        <Image 
          src="/images/Frau mit Hintergrund/Frau_mit_hintergrund3.jpg"
          alt="Timeless Beauty"
          fill
          className="object-cover sepia-[20%]"
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </motion.div>

      {/* Central Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center text-white max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            BEAUTY DIRECTOR
            <br />
            <span className="text-dusty-rose">AND SKINCARE EXPERT</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-400">
              BASED IN GERMANY
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            Entdecke die Geheimnisse natürlicher Schönheit durch unsere 
            wissenschaftlich fundierten Hautpflegelösungen.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button 
              className="border border-white/50 text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              UNSERE PHILOSOPHIE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-1 h-1 bg-dusty-rose rounded-full opacity-40"
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-8 w-1 h-1 bg-soft-pink rounded-full opacity-30"
        animate={{ 
          scale: [1, 3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  )
}