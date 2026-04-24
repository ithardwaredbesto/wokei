"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Pelanggan Setia",
    rating: 5,
    text: "WOKEI tuh beda banget! Ayamnya crispy banget tapi dalemnya tetap juicy. Bumbu rahasianya beneran bikin nagih. Udah langganan hampir 3 tahun!",
    avatar: "RP",
  },
  {
    name: "Dewi Kusuma",
    role: "Food Blogger",
    rating: 5,
    text: "Sebagai food blogger, banyak restoran yang saya review. WOKEI masuk top 3 favorit saya untuk fast food lokal. Konsistensi rasa di semua cabang itu yang paling saya suka.",
    avatar: "DK",
  },
  {
    name: "Budi Santoso",
    role: "Ayah 3 Anak",
    rating: 5,
    text: "Family Pack WOKEI selalu jadi pilihan weekend kami. Harga bersahabat, porsi besar, anak-anak suka banget. Layanan juga cepat dan ramah!",
    avatar: "BS",
  },
  {
    name: "Sari Indah",
    role: "Mahasiswi",
    rating: 5,
    text: "Student Deal WOKEI sangat membantu budget makan saya. Rp 25 ribu udah dapat nasi + ayam yang lezat. Ini lifesaver banget pas tanggal tua haha!",
    avatar: "SI",
  },
  {
    name: "Hendro W.",
    role: "Pengusaha Kuliner",
    rating: 5,
    text: "Dari sisi bisnis, WOKEI punya sistem yang sangat rapi. Kualitas produk konsisten di semua cabang, ini bukti manajemen yang baik. Respect!",
    avatar: "HW",
  },
  {
    name: "Nina Rahayu",
    role: "Karyawan Swasta",
    rating: 5,
    text: "Spicy WOKEI itu juara! Level pedasnya pas banget tidak terlalu overwhelming. Saya hampir tiap minggu kesini bareng teman kantor.",
    avatar: "NR",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FFF8F0] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#cf00ff]/10 text-[#cf00ff] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Testimoni
          </span>
          <h2 className="font-display text-[#1A1A1A] text-4xl md:text-5xl font-bold uppercase tracking-wide text-balance">
            Kata Mereka <span className="text-[#cf00ff]">Tentang WOKEI</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4 border border-[#1A1A1A]/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="text-[#FCD34D] fill-[#FCD34D]" />
                  ))}
                </div>
                <Quote size={20} className="text-[#cf00ff]/20" />
              </div>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed flex-1">{`"${t.text}"`}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#1A1A1A]/5">
                <div className="w-10 h-10 bg-[#cf00ff] rounded-full flex items-center justify-center font-bold text-white text-xs shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-[#1A1A1A]/45 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
