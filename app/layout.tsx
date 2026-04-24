import type { Metadata } from 'next'
import { Poppins, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const _oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'WOKEI Chicken and More - Fast Food Restaurant',
  description: 'WOKEI Chicken and More — Crispy, juicy, and bold flavors served fast. Explore our menu, find our locations, and taste the WOKEI difference.',
  generator: 'Blackbox AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${_poppins.variable} ${_oswald.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
