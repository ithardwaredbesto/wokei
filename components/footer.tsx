"use client"

import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  "Menu": ["WOKEI Original", "Spicy WOKEI", "WOKEI Burger", "Paket Keluarga", "Promo Spesial"],
  "Perusahaan": ["Tentang Kami", "Karir", "Franchise", "CSR & Komunitas", "Press Room"],
  "Dukungan": ["FAQ", "Kebijakan Privasi", "Syarat & Ketentuan", "Hubungi Support", "Layanan Catering"],
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* CTA Banner */}
      <div className="bg-[#cf00ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-white text-2xl md:text-3xl uppercase tracking-wide">
              Siap Rasakan Cita Rasa WOKEI?
            </h3>
            <p className="text-white/75 mt-1 text-sm">
              Pesan sekarang atau kunjungi cabang terdekat kami hari ini.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-[#cf00ff] font-bold px-6 py-3 rounded-full uppercase tracking-wide text-sm hover:bg-[#FCD34D] hover:text-[#1A1A1A] transition-colors">
              Pesan Sekarang
            </button>
            <button className="border-2 border-white text-white font-bold px-6 py-3 rounded-full uppercase tracking-wide text-sm hover:bg-white hover:text-[#cf00ff] transition-colors">
              Temukan Cabang
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#cf00ff] rounded-full flex items-center justify-center font-display font-bold text-white text-sm">
                WK
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-lg tracking-wider uppercase">
                  WOKEI
                </span>
                <span className="text-[#FCD34D] text-[10px] font-medium tracking-widest uppercase -mt-1">
                  Chicken &amp; More
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              WOKEI menghadirkan pengalaman makan ayam goreng yang tak terlupakan — crispy, juicy,
              dan penuh cita rasa. Halal, segar, dan selalu konsisten.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#cf00ff] shrink-0" />
                <span>Jl. Taman Pahlawan Purwakarta, Jl. Taman Pahlawan, Nagri Kaler, Purwakarta, Purwakarta Regency, West Java 41119</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#cf00ff] shrink-0" />
                <span>081225740436</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#cf00ff] shrink-0" />
                <span>wokeichicken@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest">
                {title}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-white/50 hover:text-[#FCD34D] text-sm transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} WOKEI Chicken and More. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">Kebijakan Privasi</button>
            <button className="hover:text-white transition-colors">Syarat &amp; Ketentuan</button>
            <button className="hover:text-white transition-colors">Cookie</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
