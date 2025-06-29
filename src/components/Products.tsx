'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ShoppingBag, Heart, MousePointer, Info } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Vitamin C Serum",
    category: "Serum",
    price: "€89",
    description: "Antioxidatives Serum für strahlende Haut",
    color: "from-soft-pink/10 to-cream/10",
    image: "/images/products/image9.jpeg",
    bestseller: true,
    backText: "Unser meistverkauftes Serum mit 20% stabilem Vitamin C. Entwickelt in deutschen Laboren für maximale Wirksamkeit gegen Pigmentflecken und fahle Haut.",
    backColor: "bg-gradient-to-br from-dusty-rose to-soft-pink"
  },
  {
    id: 2,
    name: "Hyaluronic Moisturizer", 
    category: "Feuchtigkeitspflege",
    price: "€65",
    description: "Intensive Feuchtigkeit für 24h",
    color: "from-beige/10 to-sand/10",
    image: "/images/products/image10.jpg",
    bestseller: false,
    backText: "3-fach Hyaluronsäure-Komplex dringt tief in die Hautschichten ein. Klinisch bewiesen: 72 Stunden Feuchtigkeit für pralle, gesunde Haut.",
    backColor: "bg-gradient-to-br from-beige to-sand"
  },
  {
    id: 3,
    name: "Gentle Cleanser",
    category: "Reinigung", 
    price: "€45",
    description: "Sanfte Reinigung für alle Hauttypen",
    color: "from-sage/10 to-beige/10",
    image: "/images/products/image11.jpg",
    bestseller: false,
    backText: "pH-neutraler Reinigungsschaum mit Aloe Vera und Kamille. Entfernt sanft Make-up und Unreinheiten ohne die Haut auszutrocknen.",
    backColor: "bg-gradient-to-br from-sage to-beige"
  },
  {
    id: 4,
    name: "Radiance Face Oil",
    category: "Gesichtsöl",
    price: "€95",
    description: "Luxuriöses Öl für intensive Pflege",
    color: "from-dusty-rose/10 to-soft-pink/10",
    image: "/images/products/image5.jpg",
    bestseller: true,
    backText: "Kostbares Rosehip-Öl kombiniert mit Argan und Squalan. Der goldene Tropfen für strahlende Haut über Nacht.",
    backColor: "bg-gradient-to-br from-dusty-rose to-soft-pink"
  },
  {
    id: 5,
    name: "Youth Renewal Cream",
    category: "Anti-Aging",
    price: "€120",
    description: "Premium Anti-Aging Formel",
    color: "from-cream/10 to-warm-white/10",
    image: "/images/products/image7.jpg",
    bestseller: false,
    backText: "Revolutionäre Peptid-Technologie mit verkapseltem Retinol. Sichtbare Faltenreduktion nach 4 Wochen bestätigt.",
    backColor: "bg-gradient-to-br from-gray-100 to-cream"
  },
  {
    id: 6,
    name: "Brightening Mask",
    category: "Maske",
    price: "€55",
    description: "Aufhellende Gesichtsmaske",
    color: "from-sage/10 to-cream/10",
    image: "/images/products/image8.jpg",
    bestseller: false,
    backText: "Kaolin-Tonerde mit Vitamin C und Niacinamide. 10 Minuten für einen ebenmäßigen, strahlenden Teint.",
    backColor: "bg-gradient-to-br from-sage to-cream"
  }
]

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCardClick = (productId: number) => {
    setFlippedCards(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="py-32 bg-warm-white relative overflow-hidden">
      {/* Mouse Tooltip */}
      {hoveredCard && !flippedCards.includes(hoveredCard) && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <MousePointer className="w-4 h-4" />
            <span className="text-sm font-medium">Klick für Details</span>
          </div>
        </motion.div>
      )}

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
            Premium Hautpflege
          </motion.span>
          
          <h2 className="font-display text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Unsere Kollektion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Entdecke unsere sorgfältig kuratierten Produkte für jeden Hauttyp
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative">
                {/* Flip Container - Only for Image */}
                <div 
                  className="perspective-1000 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(product.id)}
                >
                  <motion.div
                    className="relative w-full transform-style-preserve-3d transition-transform duration-700 aspect-[3/4]"
                    animate={{ rotateY: flippedCards.includes(product.id) ? 180 : 0 }}
                  >
                    {/* Front Side - Product Image */}
                    <div className="absolute w-full h-full backface-hidden">
                      <div className={`w-full h-full relative rounded-xl overflow-hidden bg-gradient-to-br ${product.color} group-hover:shadow-xl transition-all duration-500`}>
                        <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        
                        {/* Click Indicator */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg">
                            <MousePointer className="w-8 h-8 text-gray-900" />
                          </div>
                        </motion.div>
                        
                        {/* Bestseller Badge */}
                        {product.bestseller && (
                          <motion.div
                            className="absolute top-4 left-4 bg-dusty-rose text-white px-3 py-1 rounded-full text-xs font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            BESTSELLER
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Back Side - Product Info on Image */}
                    <div 
                      className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <div className={`w-full h-full ${product.backColor} p-8 flex flex-col justify-center items-center text-center`}>
                        <Info className="w-12 h-12 text-white/80 mb-4" />
                        <p className="text-white text-lg font-light leading-relaxed">
                          {product.backText}
                        </p>
                        <motion.button
                          className="mt-6 text-white/90 text-sm underline underline-offset-4 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(product.id);
                          }}
                        >
                          Zurück zum Produkt
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Static Product Info - Does not flip */}
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-gray-500 tracking-wide uppercase font-medium">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-dusty-rose transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-2xl font-light text-gray-900">
                      {product.price}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-dusty-rose/60 text-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.button 
                      className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-dusty-rose transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      In den Warenkorb
                    </motion.button>
                    <motion.button
                      className="p-3 border border-gray-300 rounded-lg hover:border-dusty-rose hover:text-dusty-rose transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button 
            className="bg-gray-900 text-white px-12 py-4 text-lg font-medium tracking-wide hover:bg-dusty-rose transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ALLE PRODUKTE ANSEHEN
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}