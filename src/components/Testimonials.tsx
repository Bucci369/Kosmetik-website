'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    role: "Beauty Enthusiast",
    content: "Das Vitamin C Serum hat meine Haut komplett transformiert. Nach nur 2 Wochen sehe ich einen deutlichen Unterschied - meine Haut strahlt förmlich!",
    rating: 5,
    image: "/images/testimonials/sophie.jpg"
  },
  {
    id: 2,
    name: "Elena K.",
    role: "Skincare Expertin",
    content: "Endlich eine Marke, die hält was sie verspricht. Die Hyaluronic Moisturizer ist perfekt für meine empfindliche Haut und spendet den ganzen Tag Feuchtigkeit.",
    rating: 5,
    image: "/images/testimonials/elena.jpg"
  },
  {
    id: 3,
    name: "Maria L.",
    role: "Lifestyle Bloggerin",
    content: "LUMIÈRE vereint Luxus mit Wirksamkeit. Die Produkte fühlen sich nicht nur premium an, sondern zeigen auch echte Resultate.",
    rating: 5,
    image: "/images/testimonials/maria.jpg"
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-sand to-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={itemVariants}
        >
          <motion.span
            className="text-dusty-rose text-sm font-medium tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Kundenmeinungen
          </motion.span>
          
          <h2 className="font-display text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tausende zufriedene Kunden vertrauen auf LUMIÈRE
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-dusty-rose/20 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + (index * 0.1) + (i * 0.05) }}
                    >
                      <Star className="w-4 h-4 fill-dusty-rose text-dusty-rose" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  {testimonial.content}
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose to-soft-pink rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-medium text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2,847", label: "Bewertungen" },
              { value: "4.9/5", label: "Durchschnitt" },
              { value: "98%", label: "Empfehlen uns" },
              { value: "10K+", label: "Zufriedene Kunden" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-4">Ausgezeichnet von</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {["Vogue", "Elle", "Harper's Bazaar", "Cosmopolitan"].map((brand, index) => (
              <motion.div
                key={brand}
                className="text-gray-400 font-light text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}