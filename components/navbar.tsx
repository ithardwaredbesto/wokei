"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1A1A1A] shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
            aria-label="WOKEI Chicken and More home"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/pK1ZXMN90pBKDf18riojv-wEVvbSVg1n7v0omGUk1LiIGoKNCF5m.png"
              alt="WOKEI Chicken and More logo"
              className="h-12 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-white text-base lg:text-lg tracking-widest uppercase">
                WOKEI
              </span>
              <span className="text-[#FCD34D] text-[10px] lg:text-xs font-medium tracking-widest uppercase">
                Chicken &amp; More
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[#FCD34D] font-medium text-sm tracking-wide transition-colors duration-200 uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+6281225740436"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              aria-label="Call us"
            >
              <Phone size={14} />
              <span>081225740436</span>
            </a>
            <button
              onClick={() => handleNavClick("#menu")}
              className="bg-[#cf00ff] hover:bg-[#b000db] text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-200 uppercase tracking-wide"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[#FCD34D] font-medium text-sm tracking-wide transition-colors py-3 text-left uppercase border-b border-white/5 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#menu")}
              className="mt-4 bg-[#cf00ff] hover:bg-[#b000db] text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors uppercase tracking-wide"
            >
              Order Now
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
