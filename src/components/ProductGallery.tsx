'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ProductGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  const products = [
    { id: 1, src: '/images/products/image7.jpg', name: 'Youth Renewal' },
    { id: 2, src: '/images/products/image8.jpg', name: 'Brightening Mask' },
    { id: 3, src: '/images/products/image9.jpeg', name: 'Vitamin C Serum' },
    { id: 4, src: '/images/products/image10.jpg', name: 'Moisturizer' },
    { id: 5, src: '/images/products/image11.jpg', name: 'Gentle Cleanser' },
    { id: 6, src: '/images/products/image5.jpg', name: 'Face Oil' }
  ]

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-warm-white via-cream to-sand overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(169, 188, 172, 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Product Name on Hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  initial={false}
                >
                  <p className="text-sm font-medium tracking-wide uppercase">{product.name}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Content */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          style={{ scale, opacity }}
        >
          <motion.h2 
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Die Kunst der
            <br />
            <span className="text-dusty-rose">natürlichen Schönheit</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Jedes Produkt wird mit Liebe zum Detail und den reinsten 
            Inhaltsstoffen hergestellt, um deine natürliche Schönheit 
            zum Strahlen zu bringen.
          </motion.p>

          <motion.button
            className="bg-gray-900 text-white px-8 py-4 text-lg font-medium tracking-wide hover:bg-dusty-rose transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            KOLLEKTION ENTDECKEN
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-1 h-1 bg-dusty-rose/40 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-sage/40 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  )
}