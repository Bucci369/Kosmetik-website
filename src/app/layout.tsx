import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'LUMIÈRE - Premium Skincare',
  description: 'Discover our premium skincare collection crafted with natural ingredients for radiant, healthy skin.',
  keywords: 'skincare, beauty, cosmetics, natural, premium, luxury',
  openGraph: {
    title: 'LUMIÈRE - Premium Skincare',
    description: 'Discover our premium skincare collection crafted with natural ingredients for radiant, healthy skin.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}