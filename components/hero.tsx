"use client"

import { ChevronDown, Star, Clock } from "lucide-react"

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #cf00ff 0px, #cf00ff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(-45deg, #cf00ff 0px, #cf00ff 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-2 bg-[#cf00ff]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#cf00ff]/20 border border-[#cf00ff]/40 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 bg-[#cf00ff] rounded-full animate-pulse" />
              <span className="text-[#FCD34D] text-xs font-semibold uppercase tracking-widest">
                Now Open — Best Chicken in Town
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] uppercase tracking-wide text-balance">
              Crispy.{" "}
              <span className="text-[#cf00ff]">Juicy.</span>
              <br />
              <span className="text-[#FCD34D]">Bold.</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              WOKEI Chicken and More hadirkan cita rasa ayam goreng crispy yang tak tertandingi —
              bumbu rahasia, digoreng sempurna, siap dinikmati kapan saja.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-[#FCD34D] fill-[#FCD34D]" />
                <span className="text-white font-semibold">5.0</span>
                <span className="text-white/50 text-sm">Rating</span>
              </div>
              <div className="w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#FCD34D]" />
                <span className="text-white font-semibold">15 Mnt</span>
                <span className="text-white/50 text-sm">Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#menu")}
                className="bg-[#cf00ff] hover:bg-[#b000db] text-white font-bold px-8 py-4 rounded-full uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#cf00ff]/40"
              >
                Lihat Menu
              </button>
              <button
                onClick={() => handleScroll("#about")}
                className="border-2 border-white/30 hover:border-[#FCD34D] text-white hover:text-[#FCD34D] font-bold px-8 py-4 rounded-full uppercase tracking-wider transition-all duration-200"
              >
                Tentang Kami
              </button>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-[#cf00ff]/25 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-sm lg:max-w-md">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/7iuMsWMD1OgTrbSrPdSAP-jbiMkmdmV9dl5YVI6ZZDXvsBSH0K0p.png"
                alt="Paket ayam goreng crispy WOKEI dengan nasi, kotak kemasan ungu bertuliskan harga 10K dan 13K"
                className="w-full rounded-3xl object-cover drop-shadow-2xl"
              />

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#FCD34D] text-[#1A1A1A] rounded-2xl px-4 py-3 shadow-xl font-display font-bold text-sm uppercase tracking-wide text-center">
                <div className="text-2xl font-bold">NEW</div>
                <div className="text-xs">Spicy Wokei</div>
              </div>

              {/* Floating price tag */}
              <div className="absolute -bottom-4 -left-4 bg-[#cf00ff] text-white rounded-2xl px-4 py-3 shadow-xl shadow-[#cf00ff]/40">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/80">Mulai dari</div>
                <div className="text-2xl font-bold leading-none">10K</div>
                <div className="text-xs text-white/80">Ayam + Nasi</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#menu")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
