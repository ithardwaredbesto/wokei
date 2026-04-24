"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="bg-[#1A1A1A] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#cf00ff]/20 text-[#cf00ff] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Hubungi Kami
          </span>
          <h2 className="font-display text-white text-4xl md:text-5xl font-bold uppercase tracking-wide text-balance">
            Ada Pertanyaan atau <span className="text-[#FCD34D]">Kerjasama?</span>
          </h2>
          {/* <p className="text-white/55 mt-4 max-w-lg mx-auto leading-relaxed">
            Tim kami siap membantu Anda. Baik untuk reservasi, franchise, keluhan, maupun
            pertanyaan seputar WOKEI — jangan ragu menghubungi kami.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                icon: <Phone size={20} className="text-[#cf00ff]" />,
                label: "Telepon",
                value: "081225740436",
                sub: "Senin – Minggu, 09.00 – 21.00",
              },
              {
                icon: <Mail size={20} className="text-[#cf00ff]" />,
                label: "Email",
                value: "wokeichicken@gmail.com",
                sub: "Balasan dalam 1×24 jam",
              },
              // {
              //   icon: <MapPin size={20} className="text-[#cf00ff]" />,
              //   label: "Kantor Pusat",
              //   value: "Jl. Basuki Rahmat No. 45",
              //   sub: "Surabaya, Jawa Timur 60271",
              // },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#cf00ff]/15 rounded-full flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                  <p className="text-white/45 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium mb-3">
                Ikuti Kami
              </p>
              <div className="flex gap-3">
                {["IG", "FB", "TT", "YT"].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 bg-white/10 hover:bg-[#cf00ff] rounded-full text-white text-xs font-bold transition-colors"
                    aria-label={s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-display text-white font-bold text-2xl uppercase">
                  Pesan Terkirim!
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                  Terima kasih! Tim kami akan segera menghubungi Anda dalam 1×24 jam kerja.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 bg-[#cf00ff] hover:bg-[#b000db] text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-display text-white font-bold text-xl uppercase tracking-wide mb-1">
                  Kirim Pesan
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs uppercase tracking-widest" htmlFor="name">
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama kamu"
                      className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#cf00ff] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs uppercase tracking-widest" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@kamu.com"
                      className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#cf00ff] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs uppercase tracking-widest" htmlFor="subject">
                    Keperluan
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#cf00ff] transition-colors"
                  >
                    <option value="" className="bg-[#1A1A1A]">-- Pilih Keperluan --</option>
                    <option value="franchise" className="bg-[#1A1A1A]">Franchise / Kemitraan</option>
                    <option value="reservation" className="bg-[#1A1A1A]">Reservasi / Catering</option>
                    <option value="complaint" className="bg-[#1A1A1A]">Keluhan / Saran</option>
                    <option value="media" className="bg-[#1A1A1A]">Media / Press</option>
                    <option value="other" className="bg-[#1A1A1A]">Lainnya</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs uppercase tracking-widest" htmlFor="message">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#cf00ff] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#cf00ff] hover:bg-[#b000db] text-white font-bold px-6 py-4 rounded-xl uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#cf00ff]/30"
                >
                  <Send size={16} />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
