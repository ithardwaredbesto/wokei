"use client"

import { MapPin, Clock, Phone } from "lucide-react"

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=WOKEI+Chicken+%26+More+Jl.+Taman+Pahlawan+Purwakarta+Nagri+Kaler+Purwakarta+West+Java+41119"

// Koordinat WOKEI Chicken & More Purwakarta
const EMBED_LAT = -6.5404036
const EMBED_LNG = 107.4429211
const PLACE_ID = "0x2e690f644c2cbb4b:0x995e0c39ef0c7b76"

const locations = [
  {
    city: "PURWAKARTA",
    address:
      "Jl. Taman Pahlawan Purwakarta, Jl. Taman Pahlawan, Nagri Kaler, Purwakarta, Purwakarta Regency, West Java 41119",
    hours: "24 Hours",
    phone: "081225740436",
    tag: "Outlet",
    mapsUrl: GOOGLE_MAPS_URL,
  },
]

export default function LocationsSection() {
  // URL embed Google Maps tanpa API key — menggunakan parameter q (query)
  const embedUrl = `https://maps.google.com/maps?q=${EMBED_LAT},${EMBED_LNG}&z=16&output=embed`

  return (
    <section id="locations" className="bg-[#1A1A1A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#cf00ff]/20 text-[#cf00ff] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Temukan Kami
          </span>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide text-balance">
            Lokasi <span className="text-[#FCD34D]">WOKEI</span> Kami
          </h2>
          <p className="text-white/55 mt-4 max-w-md mx-auto leading-relaxed">
            Kunjungi outlet WOKEI Chicken &amp; More dan nikmati cita rasa ayam yang lezat dan segar setiap hari.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="flex justify-center">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#cf00ff]/50 hover:bg-white/8 transition-all duration-300 group flex flex-col gap-5 w-full max-w-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#cf00ff]/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#cf00ff]/40 transition-colors">
                    <MapPin size={18} className="text-[#cf00ff]" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide">
                    {loc.city}
                  </h3>
                </div>
                {loc.tag && (
                  <span
                    className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                      loc.tag === "Pusat"
                        ? "bg-[#FCD34D] text-[#1A1A1A]"
                        : "bg-[#cf00ff] text-white"
                    }`}
                  >
                    {loc.tag}
                  </span>
                )}
              </div>

              <p className="text-white/55 text-sm leading-relaxed">{loc.address}</p>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-white/55">
                  <Clock size={14} className="text-[#FCD34D] shrink-0" />
                  <span>{loc.hours} WIB</span>
                </div>
                <div className="flex items-center gap-2 text-white/55">
                  <Phone size={14} className="text-[#FCD34D] shrink-0" />
                  <span>{loc.phone}</span>
                </div>
              </div>

              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start bg-[#cf00ff] hover:bg-[#b000db] text-white font-semibold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 px-5 py-2.5 rounded-full"
              >
                <MapPin size={14} />
                Buka Google Maps
              </a>
            </div>
          ))}
        </div>

        {/* Embedded Google Maps — menggunakan iframe, bukan <img> */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 h-64 lg:h-96">
          <iframe
            title="Peta lokasi WOKEI Chicken & More Purwakarta"
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
