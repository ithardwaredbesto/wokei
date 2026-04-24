"use client"

import { useState } from "react"
import { Flame, Star } from "lucide-react"

const categories = ["Semua", "Chicken", "Burger", "Wrap", "Sides", "Dessert", "Minuman", "Paket"]

const menuItems = [
  
  {
    id: 1,
    name: "Dada Ori",
    desc: "Ayam goreng crispy dengan bumbu rahasia WOKEI, tekstur renyah luar dan juicy dalam.",
    price: "Rp 14.000",
    category: "Chicken",
    spicy: false,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/bTf6NDQFWoYsAQTMLA27f-zKCqOMRsOzCO46BamNF312My7ulin3.png",
  },
  {
    id: 2,
    name: "Dada Spicy ",
    desc: "Varian pedas level 2 dengan saus sambal khas, cocok buat pecinta pedas.",
    price: "Rp 16.000",
    category: "Chicken",
    spicy: true,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/GTUy0RlZ1rqXrfuHtX7OC-n9AfcjyOW0TFH8ee1O8uEOlQ8yTede.png",
  },
  {
    id: 3,
    name: "Chicken Strips",
    desc: "Potongan dada ayam crispy memanjang, tekstur renyah sempurna dengan bumbu spesial.",
    price: "Rp 32.000",
    category: "Chicken",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/2QWuUCXMLc5rNyTjKpb08-lsbR1t4xW8Rj1DduzYhItWteFYgSIY.png",
  },
  {
    id: 4,
    name: "Chicken Kroket",
    desc: "Kroket ayam crispy berlapis tepung roti, lembut di dalam dan gurih di luar.",
    price: "Rp 22.000",
    category: "Chicken",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/FUDvX0Z6eoddSeWibbyqJ-E2TInXjNBt8qSVFGyfeVyBvcRP5Npu.png",
  },

  {
    id: 23,
    name: "Paha Bawah Spicy",
    desc: "Paha bawah ayam goreng crispy bumbu pedas merah membara, renyah luar juicy dalam.",
    price: "Rp 12.000",
    category: "Chicken",
    spicy: true,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/k9w0AlrkTscyYVJW5HW6F-xPQHfDpHXFqP0Dw0pucyJpaHUqbA5X.png",
  },
  {
    id: 24,
    name: "Paha Bawah Ori",
    desc: "Paha bawah ayam goreng crispy golden original dengan bumbu rahasia WOKEI yang gurih.",
    price: "Rp 10.000",
    category: "Chicken",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/XUFkQtDLKtRohLg8BO7LC-TQ9G1TJxah1jRanreX7k2mOwkkMbZX.png",
  },
  {
    id: 25,
    name: "Sayap Ori",
    desc: "Sayap ayam goreng crispy golden original, renyah sempurna dan gurih di setiap gigitan.",
    price: "Rp 10.000",
    category: "Chicken",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/YY5wY9tl1kW1FVtGNH18C-zQtKBul7PRyZQaVm790FCFVBVGuwtN.png",
  },
  {
    id: 26,
    name: "Sayap Spicy",
    desc: "Sayap ayam goreng crispy dengan balutan bumbu pedas merah khas WOKEI yang bikin nagih.",
    price: "Rp 12.000",
    category: "Chicken",
    spicy: true,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/9YhkeC7u1tCk8vGIZXW14-JO1jGf4PMru5Q3XfnQIHof4wUJS8BH.png",
  },

 
  {
    id: 5,
    name: "Cheese Burger",
    desc: "Beef patty juicy dengan keju cheddar leleh, selada, tomat, dan saus spesial WOKEI.",
    price: "Rp 21.000",
    category: "Burger",
    spicy: false,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Ji1sKJKEpE1hWp4wNyHTl-8rNsOPerAFQmvDSkwJi7nYn23VbLnp.png",
  },
  {
    id: 6,
    name: "Beef Burger",
    desc: "Burger klasik dengan beef patty, selada segar, tomat, dan saus mayo khas WOKEI.",
    price: "Rp 19.000",
    category: "Burger",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/rPHplttV0JLuq14IyU6tC-LRK4c7k5NLtfzUKucreBKsSctP0nwk.png",
  },

  
  {
    id: 7,
    name: "Chicken Wrap",
    desc: "Tortilla lembut berisi ayam crispy, selada segar, tomat, dan saus creamy WOKEI.",
    price: "Rp 15.000",
    category: "Wrap",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/WKm6pDX1AtsSUeTao1DA1-d6IVL7hMz4SWJBX2lU6tFgqacfbMIs.png",
  },

  
  {
    id: 8,
    name: "Curly Fries",
    desc: "Kentang goreng keriting dengan bumbu paprika asap, renyah dan gurih.",
    price: "Rp 10.000",
    category: "Sides",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/IDLs9C0D2LThtpl5jah8s-S3mQ0wcmtLkEhY9QwaRQ3FZV0SdpI5.png",
  },
  {
    id: 9,
    name: "Cheese Fries",
    desc: "Kentang goreng crispy disiram saus keju leleh hangat yang creamy dan gurih.",
    price: "Rp 14.000",
    category: "Sides",
    spicy: false,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/Twl5F8fCAyfI6lXTFb2JE-98DB6D7WmjIr0m6KKrFX6YRpDqvuKM.png",
  },
  {
    id: 10,
    name: "Saus Sambal",
    desc: "Saus sambal pedas segar khas WOKEI, cocok jadi pendamping semua menu.",
    price: "Rp 3.000",
    category: "Sides",
    spicy: true,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/kSMpPajWJmQBpiKFkEdRA-ppatss34HvpjOrjOi9wXfp5yc5HBJN.png",
  },
  {
    id: 11,
    name: "Saus BBQ",
    desc: "Saus BBQ smoky manis dengan sentuhan rempah pilihan, sempurna untuk cocolan ayam.",
    price: "Rp 3.000",
    category: "Sides",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/R0gAg6nu0myEORSHX77mQ-BqxhhWGrt47hBW6T5vTR0upVX351OD.jpg",
  },

  
  {
    id: 12,
    name: "Ice Cone Vanilla",
    desc: "Es krim soft serve vanilla lembut dalam cone wafer renyah, manis dan menyegarkan.",
    price: "Rp 5.000",
    category: "Dessert",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/bxOLuhKnRIE1ZVJztXBDB-q3q5LjjGLJlp4H0eNh7LikNSiP4gST.png",
  },
  {
    id: 13,
    name: "Ice Cream Sundae",
    desc: "Soft serve creamy dengan topping saus stroberi manis asam yang menggoda selera.",
    price: "Rp 10.000",
    category: "Dessert",
    spicy: false,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/NIEBnet4DSv7RNBXeiSCe-RgT5VMx6WD1604JsaVoMEEx8DURBSK.png",
  },
  {
    id: 14,
    name: "Moodster Ice Cream",
    desc: "Es krim matcha premium dengan cita rasa teh hijau autentik, segar dan tidak terlalu manis.",
    price: "Rp 15.000",
    category: "Dessert",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/WiJESX6kbcmuegqOFOlf0-uD5jGav9qlwp39PTNdf7cfMwlPLJhi.png",
  },

  
  {
    id: 15,
    name: "mango tea",
    desc: "Teh manis dingin segar dalam cup besar berlogo WOKEI, cocok untuk segala suasana.",
    price: "Rp 8.000",
    category: "Minuman",
    spicy: false,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/BisIJUDfjWEa9iSzLyecy-kFn1zJ651r3Zr0CGUk5hubMkkmFZlY.png",
  },
  {
    id: 16,
    name: "Es Lemon Tea",
    desc: "Teh lemon dingin segar dengan rasa asam manis yang menyegarkan, minuman favorit pelanggan.",
    price: "Rp 10.000",
    category: "Minuman",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/93ZEVuHcDIKA3h4IC4l9q-VtklfH4WzEjrYOrwsU91j84ShCw15z.png",
  },
  {
    id: 22,
    name: "Sarsaparila",
    desc: "Kopi hitam dingin dengan es batu dalam cup besar WOKEI. Segar, bold, dan bikin semangat.",
    price: "Rp 8.000",
    category: "Minuman",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/D5uVdJgMlqkoihflYn4tU-u0xZPIgLRRA5GhC6YeBTqTaS6BwISo.png",
  },

  
  {
    id: 17,
    name: "Paket Komplit",
    desc: "1 ayam crispy + nasi + es teh WOKEI. Paket lengkap untuk makan siang yang memuaskan!",
    price: "Rp 25.000",
    category: "Paket",
    spicy: false,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/nX21ql18FEEjuxskKcQQ0-mSMR0AGTQd6uyoXAu9GVZBvkdXFyYq.png",
  },
  {
    id: 18,
    name: "Paket Original",
    desc: "1 ayam goreng crispy golden original + nasi pulen. Simpel, enak, mengenyangkan.",
    price: "Rp 18.000",
    category: "Paket",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/1iKgSMXjshrsPyFlvpbx1-zgIz64dHp1ZfT6etvrwyQN8Co3y1on.png",
  },
  {
    id: 19,
    name: "Paket Original Spesial",
    desc: "1 ayam crispy original pilihan + nasi hangat. Cocok untuk makan sendirian yang nikmat.",
    price: "Rp 20.000",
    category: "Paket",
    spicy: false,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/cARP03y7ofBUBVniq4E09-htwOTyYdjn6XtxLmVHC5ZOPD5EHz06.png",
  },
  {
    id: 20,
    name: "Paket Spicy",
    desc: "1 ayam pedas merah membara + nasi pulen. Tantangan rasa pedas yang bikin ketagihan!",
    price: "Rp 20.000",
    category: "Paket",
    spicy: true,
    bestSeller: false,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/tFBEpyGAy1Gsuw68QVPnW-UL73ElPDFMHJBqXfHYETP4aagJYbxl.png",
  },
  {
    id: 21,
    name: "Paket Double Spicy",
    desc: "2 ayam spicy super pedas + nasi. Untuk kamu yang doyan tantangan rasa pedas level tinggi!",
    price: "Rp 35.000",
    category: "Paket",
    spicy: true,
    bestSeller: true,
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/0oaCpHOTAbWskIh7yQ6J6-V85DSSauHx97gVkTx1P85QnUrL9B4N.png",
  },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filtered =
    activeCategory === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="bg-[#FFF8F0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#cf00ff]/10 text-[#cf00ff] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Menu Kami
          </span>
          <h2 className="font-display text-[#1A1A1A] text-4xl md:text-5xl font-bold uppercase tracking-wide text-balance">
            Pilihan Rasa yang <span className="text-[#cf00ff]">Menggoda</span>
          </h2>
          <p className="text-[#1A1A1A]/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Setiap hidangan dibuat dari bahan segar pilihan, dimasak dengan teknik khusus untuk
            menghasilkan cita rasa yang konsisten dan memanjakan selera.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#cf00ff] text-white shadow-lg shadow-[#cf00ff]/30"
                  : "bg-white text-[#1A1A1A]/70 hover:bg-[#cf00ff]/10 hover:text-[#cf00ff] border border-[#1A1A1A]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col"
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {item.bestSeller && (
                    <span className="bg-[#FCD34D] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star size={10} className="fill-[#1A1A1A]" />
                      Best Seller
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-[#cf00ff] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Flame size={10} />
                      Pedas
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-display font-bold text-[#1A1A1A] text-base uppercase tracking-wide mb-1">
                  {item.name}
                </h3>
                <p className="text-[#1A1A1A]/55 text-sm leading-relaxed flex-1">{item.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-[#cf00ff] text-lg">{item.price}</span>
                  <button className="bg-[#cf00ff] hover:bg-[#b000db] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
