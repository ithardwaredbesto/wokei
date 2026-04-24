"use client"

import { Tag } from "lucide-react"

const promos = [
  {
    title: "Happy Hour",
    subtitle: "Setiap Hari 14.00 – 17.00",
    desc: "Dapatkan diskon 20% untuk semua menu paket selama jam happy hour.",
    badge: "20% OFF",
    color: "bg-[#cf00ff]",
    badgeColor: "bg-[#FCD34D] text-[#1A1A1A]",
    img: "https://placehold.co/480x320?text=Happy+Hour+Promo+Fried+Chicken+Package+Deal+Warm+Yellow+Background",
  },
  {
    title: "Buy 2 Get 1",
    subtitle: "Berlaku Setiap Akhir Pekan",
    desc: "Beli 2 porsi WOKEI Original atau Spicy WOKEI, gratis 1 porsi mana saja!",
    badge: "BUY 2 GET 1",
    color: "bg-[#2D2D2D]",
    badgeColor: "bg-[#cf00ff] text-white",
    img: "https://placehold.co/480x320?text=Buy+Two+Get+One+Free+Promo+Three+Chicken+Pieces+Dark+Background",
  },
  {
    title: "Student Deal",
    subtitle: "Tunjukkan Kartu Pelajar / KTM",
    desc: "Khusus pelajar dan mahasiswa, nikmati harga spesial Rp 25.000 untuk paket nasi + ayam.",
    badge: "Rp 25K",
    color: "bg-[#1a1a1a] border-2 border-[#FCD34D]",
    badgeColor: "bg-[#FCD34D] text-[#1A1A1A]",
    img: "https://placehold.co/480x320?text=Student+Meal+Deal+Affordable+Rice+Chicken+Plate+Campus+Friendly",
  },
]

export default function PromoSection() {
  return (
    <section className="bg-[#FFF8F0] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block bg-[#cf00ff]/10 text-[#cf00ff] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              Promo Spesial
            </span>
            <h2 className="font-display text-[#1A1A1A] text-4xl md:text-5xl font-bold uppercase tracking-wide text-balance">
              Hemat Lebih <span className="text-[#cf00ff]">Banyak</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[#cf00ff] font-semibold text-sm hover:underline shrink-0 uppercase tracking-wide">
            <Tag size={16} />
            Lihat Semua Promo
          </button>
        </div>

        {/* Promo Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo, i) => (
            <div
              key={i}
              className={`${promo.color} rounded-3xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 right-4 ${promo.badgeColor} font-display font-bold text-sm px-3 py-1 rounded-full uppercase tracking-wide shadow`}
                >
                  {promo.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
                  {promo.subtitle}
                </span>
                <h3 className="font-display text-white font-bold text-2xl uppercase tracking-wide">
                  {promo.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed flex-1">{promo.desc}</p>
                <button className="mt-4 self-start border-2 border-white/30 hover:border-white text-white font-bold px-5 py-2 rounded-full text-xs uppercase tracking-wide transition-colors">
                  Klaim Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
