"use client"

import { CheckCircle, Award, Users } from "lucide-react"

const values = [
  {
    icon: <CheckCircle size={20} className="text-[#cf00ff]" />,
    title: "Bahan Segar Setiap Hari",
    desc: "Kami hanya menggunakan ayam segar lokal pilihan yang datang setiap pagi, tanpa bahan pengawet.",
  },
  {
    icon: <CheckCircle size={20} className="text-[#cf00ff]" />,
    title: "Resep Rahasia WOKEI",
    desc: "Bumbu rempah asli Indonesia yang diolah dengan teknik modern menghasilkan cita rasa unik dan khas.",
  },
  {
    icon: <CheckCircle size={20} className="text-[#cf00ff]" />,
    title: "Standar Kebersihan Tinggi",
    desc: "Dapur kami memenuhi standar HACCP dan diaudit secara rutin untuk menjaga kualitas dan kebersihan.",
  },
  {
    icon: <CheckCircle size={20} className="text-[#cf00ff]" />,
    title: "Pelayanan Cepat & Ramah",
    desc: "Semua staf WOKEI dilatih untuk memberikan pengalaman makan yang menyenangkan dan berkesan.",
  },
]

const stats = [
  { icon: <Award size={28} className="text-[#FCD34D]" />, value: "2026", label: "Berdiri Sejak" },
  { icon: <Users size={28} className="text-[#FCD34D]" />, value: "50K+", label: "Pelanggan Setia" },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#1A1A1A] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center gap-2 w-56"
            >
              {stat.icon}
              <span className="font-display font-bold text-white text-3xl">{stat.value}</span>
              <span className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#cf00ff]/20 rounded-full blur-2xl" />
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/jzF6aj9Hy50jlkdM7byWn-2oTS5TmBXVcEd9JolgdZz0CSHqJxJX.webp"
                alt="Eksterior restoran WOKEI Chicken and More dengan bangunan modern fasad kaca A-frame dan signage kuning di Purwakarta"
                className="w-full object-cover aspect-[7/8]"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 bg-[#1A1A1A]/80 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3">
                <p className="text-[#FCD34D] text-xs font-bold uppercase tracking-widest mb-0.5">
                  Outlet Resmi
                </p>
                <p className="text-white font-semibold text-sm">Purwakarta, West Java</p>
              </div>
            </div>
            {/* Halal stamp */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-[#cf00ff] rounded-full w-32 h-32 flex flex-col items-center justify-center text-white text-center shadow-2xl">
              <span className="font-display font-bold text-2xl leading-none">100%</span>
              <span className="text-xs font-semibold uppercase tracking-wider mt-1">Halal</span>
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block bg-[#cf00ff]/20 text-[#cf00ff] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                Tentang WOKEI
              </span>
              <h2 className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide leading-tight text-balance">
                Lebih dari Sekedar{" "}
                <span className="text-[#FCD34D]">Makanan Cepat Saji</span>
              </h2>
              <p className="text-white/65 mt-5 leading-relaxed">
                WOKEI Chicken and More lahir dari passion terhadap cita rasa ayam goreng yang
                sesungguhnya. Hadir perdana di Purwakarta, kami percaya bahwa fast food tidak
                harus mengorbankan kualitas dan rasa.
              </p>
              <p className="text-white/65 mt-3 leading-relaxed">
                Dengan kombinasi bumbu rempah tradisional dan teknik pengolahan modern, setiap
                gigitan WOKEI menghadirkan pengalaman rasa yang autentik, bold, dan selalu
                konsisten di seluruh cabang kami.
              </p>
            </div>

            {/* Values List */}
            <ul className="flex flex-col gap-4">
              {values.map((val, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-0.5 shrink-0">{val.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-0.5">
                      {val.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="bg-[#cf00ff] hover:bg-[#b000db] text-white font-bold px-6 py-3 rounded-full uppercase tracking-wide text-sm transition-all hover:scale-105 active:scale-95"
              >
                Hubungi Kami
              </a>
              <a
                href="#locations"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#locations")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="border-2 border-white/30 hover:border-[#FCD34D] text-white hover:text-[#FCD34D] font-bold px-6 py-3 rounded-full uppercase tracking-wide text-sm transition-all"
              >
                Temukan Cabang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
