'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function BrandMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-cream to-warm-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-dusty-rose/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-sage/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="text-dusty-rose text-sm font-medium tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Unsere Philosophie
            </motion.span>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
              Wissenschaft
              <br />
              <span className="text-dusty-rose">trifft Natur</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Bei LUMIÈRE glauben wir, dass wahre Schönheit von innen kommt und durch 
                die richtige Pflege zum Strahlen gebracht wird. Unsere Mission ist es, 
                hochwertige, wissenschaftlich fundierte Hautpflegeprodukte zu entwickeln.
              </p>
              <p>
                Jedes Produkt wird mit sorgfältig ausgewählten, natürlichen Inhaltsstoffen 
                hergestellt und vereint traditionelle Weisheit mit modernster Forschung.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { number: "98%", label: "Natürliche Inhaltsstoffe" },
                  { number: "0%", label: "Schädliche Chemikalien" },
                  { number: "100%", label: "Tierversuchsfrei" },
                  { number: "5★", label: "Kundenbewertung" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <p className="text-3xl font-light text-gray-900 mb-1">{stat.number}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.button
              className="mt-10 group flex items-center gap-3 text-gray-900 text-lg font-medium tracking-wide"
              whileHover={{ x: 5 }}
            >
              <span className="border-b border-gray-900 pb-1 group-hover:border-dusty-rose transition-colors duration-300">
                Mehr über uns
              </span>
              <ArrowRight className="w-5 h-5 group-hover:text-dusty-rose transition-colors duration-300" />
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/products/image8.jpg"
                  alt="Luxury Skincare"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating Product Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="text-center">
                  <p className="text-4xl font-light text-dusty-rose mb-1">25+</p>
                  <p className="text-sm text-gray-600">Jahre Erfahrung</p>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-dusty-rose/20 to-soft-pink/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}