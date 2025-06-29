'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }

  const socialLinks = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Mail, href: "#", label: "Email" }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(169, 188, 172, 0.1) 0%, transparent 50%)`,
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <h3 className="font-display text-4xl font-light mb-6 text-dusty-rose">LUMIÈRE</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Entdecke deine natürliche Schönheit mit unseren wissenschaftlich fundierten Premium-Hautpflegeprodukten.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-dusty-rose/20 hover:border hover:border-dusty-rose transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <h4 className="text-lg font-medium mb-6">Produkte</h4>
              <ul className="space-y-3 text-gray-400">
                {['Alle Produkte', 'Seren', 'Feuchtigkeitscremes', 'Reinigung', 'Masken', 'Sets & Bundles'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="hover:text-dusty-rose transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <h4 className="text-lg font-medium mb-6">Unternehmen</h4>
              <ul className="space-y-3 text-gray-400">
                {['Über uns', 'Unsere Philosophie', 'Nachhaltigkeit', 'Karriere', 'Presse', 'Partnerschaften'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="hover:text-dusty-rose transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Contact */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <h4 className="text-lg font-medium mb-6">Bleib verbunden</h4>
              
              {/* Newsletter */}
              <p className="text-gray-400 mb-4">
                Erhalte 10% Rabatt auf deine erste Bestellung
              </p>
              <form className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Deine E-Mail"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-dusty-rose transition-colors"
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-dusty-rose rounded-md flex items-center justify-center hover:bg-dusty-rose/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={16} />
                  </motion.button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-dusty-rose" />
                  <span>+49 (0) 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-dusty-rose" />
                  <span>Berlin, Deutschland</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 LUMIÈRE. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-dusty-rose transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-dusty-rose transition-colors">AGB</a>
              <a href="#" className="hover:text-dusty-rose transition-colors">Impressum</a>
              <a href="#" className="hover:text-dusty-rose transition-colors">Cookie-Einstellungen</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-dusty-rose/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </footer>
  )
}