"use client";

import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  UtensilsCrossed, 
  ChefHat, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- KOMPONEN IKON TIKTOK (KUSTOM) ---
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// --- KOMPONEN IKON WHATSAPP (KUSTOM) ---
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

// --- VARIANT ANIMASI FRAMER MOTION UNTUK CATERING ---
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.3, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 }, 
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function HubungiKami() {
  return (
    // OPTIMASI: py-20 mobile, py-24 desktop
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 md:p-3.5 bg-amber-100 rounded-2xl text-amber-600 mb-5 md:mb-6 shadow-sm">
            <Send size={24} className="md:w-7 md:h-7" />
          </div>
          <br />
          {/* OPTIMASI: Label konsisten text-[11px] md:text-sm */}
          <span className="inline-block text-amber-600 font-bold tracking-wider uppercase text-[11px] md:text-sm mb-2 md:mb-3">
            Hubungi Kami
          </span>
          {/* OPTIMASI: Judul konsisten text-4xl mobile, tracking-tight, whitespace-nowrap */}
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-[1.2] md:leading-tight tracking-tight">
            <span className="whitespace-nowrap">Tetap Terhubung &</span>{" "}
            <span className="text-amber-500 whitespace-nowrap">Pesan Sekarang.</span>
          </h2>
        </div>

        {/* --- 3 CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          
          {/* CARD 1: FOLLOW US */}
          <div className="bg-[#FFFBEB] rounded-[1.5rem] md:rounded-3xl p-6 lg:p-5 xl:p-8 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3.5 md:gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-blue-50 text-blue-500 rounded-2xl shadow-sm">
                <MessageCircle size={24} className="md:w-6 md:h-6" />
              </div>
              {/* OPTIMASI: text-xl mobile, text-2xl desktop */}
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900">Follow Us</h3>
            </div>
            
            <div className="flex flex-col gap-3.5 md:gap-4 flex-grow">
              
              {/* WhatsApp */}
              <a href="https://wa.me/6289664031115" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-3.5 md:p-4 lg:p-3 xl:p-4 rounded-2xl border-2 border-white bg-white hover:border-green-500 hover:bg-green-50 transition-all group overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 md:gap-4 w-full min-w-0">
                  <div className="p-2 md:p-2.5 bg-green-100 text-green-600 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                    <WhatsAppIcon size={20} className="md:w-5 md:h-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5 truncate">WhatsApp</p>
                    {/* OPTIMASI: Normalisasi ke text-[14px] md:text-[15px]. Diberi truncate agar titik-titik jika kepanjangan di layar laptop */}
                    <p className="font-bold text-[14px] md:text-[15px] text-neutral-800 group-hover:text-green-600 transition-colors truncate">+62 896 6403 1115</p>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-3.5 md:p-4 lg:p-3 xl:p-4 rounded-2xl border-2 border-white bg-white hover:border-pink-500 hover:bg-pink-50 transition-all group overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 md:gap-4 w-full min-w-0">
                  <div className="p-2 md:p-2.5 bg-pink-100 text-pink-500 rounded-full group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
                    <Instagram size={20} className="md:w-5 md:h-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5 truncate">Instagram</p>
                    <p className="font-bold text-[14px] md:text-[15px] text-neutral-800 group-hover:text-pink-500 transition-colors truncate">@empalgentongmaskhans</p>
                  </div>
                </div>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-3.5 md:p-4 lg:p-3 xl:p-4 rounded-2xl border-2 border-white bg-white hover:border-neutral-900 hover:bg-neutral-50 transition-all group overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 md:gap-4 w-full min-w-0">
                  <div className="p-2 md:p-2.5 bg-neutral-100 text-neutral-900 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors shrink-0">
                    <TikTokIcon size={20} className="md:w-5 md:h-5" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] md:text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5 truncate">TikTok</p>
                    <p className="font-bold text-[14px] md:text-[15px] text-neutral-800 group-hover:text-neutral-900 transition-colors truncate">@empalgentongmaskhans</p>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* CARD 2: ORDER ONLINE */}
          <div className="bg-[#FFFBEB] rounded-[1.5rem] md:rounded-3xl p-6 lg:p-5 xl:p-8 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-3.5 md:gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-amber-50 text-amber-500 rounded-2xl shadow-sm">
                <ShoppingBag size={24} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900">Order Online</h3>
            </div>

            <div className="flex flex-col gap-3.5 md:gap-4 flex-grow">
              {/* GoFood */}
              <div className="flex items-center w-full p-3.5 md:p-4 lg:p-3 xl:p-4 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 md:gap-4 w-full min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full overflow-hidden border border-neutral-100 flex items-center justify-center bg-white shadow-sm p-1">
                    <img src="/assets/gofood.png" alt="GoFood" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="font-bold text-[14px] md:text-[15px] text-neutral-800 block mb-0.5 truncate">GoFood</span>
                    {/* OPTIMASI: Truncate mencegah teks melebihi kotak */}
                    <span className="text-[12px] md:text-[13px] font-medium text-neutral-500 leading-tight block truncate">
                      Cari: <span className="text-red-600 font-bold">Empal Gentong Rosliana</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* GrabFood */}
              <div className="flex items-center w-full p-3.5 md:p-4 lg:p-3 xl:p-4 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 md:gap-4 w-full min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full overflow-hidden border border-neutral-100 flex items-center justify-center bg-white shadow-sm p-1">
                    <img src="/assets/grabfood.png" alt="GrabFood" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="font-bold text-[14px] md:text-[15px] text-neutral-800 block mb-0.5 truncate">GrabFood</span>
                    <span className="text-[12px] md:text-[13px] font-medium text-neutral-500 leading-tight block truncate">
                      Cari: <span className="text-green-700 font-bold">Empal Gentong Rosliana</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-6 text-center bg-amber-50/50 p-2.5 md:p-3 rounded-xl border border-amber-100/50">
              <p className="text-[12px] md:text-[13px] font-semibold text-amber-700">
                📱 Buka aplikasinya & cari nama kedai kami!
              </p>
            </div>
          </div>

          {/* CARD 3: CATERING & SPESIAL */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[1.5rem] md:rounded-3xl p-6 lg:p-5 xl:p-8 shadow-2xl shadow-amber-500/20 flex flex-col relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 ring-1 ring-amber-500/20">
            
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
              <UtensilsCrossed size={120} className="text-amber-200" />
            </div>

            <div className="relative z-10 flex items-center gap-3.5 md:gap-4 mb-6 md:mb-8">
              <div className="p-2.5 md:p-3 bg-amber-500 text-neutral-900 rounded-2xl shadow-lg shadow-amber-500/30">
                <ChefHat size={24} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Catering & Spesial</h3>
            </div>

            <motion.ul 
              className="relative z-10 space-y-3.5 md:space-y-4 mb-8 flex-grow"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                "Minimal pemesanan 20 porsi",
                "Harga spesial untuk jumlah banyak",
                "Gratis pengiriman area Slipi",
                "Konsultasi menu gratis",
                "Packaging rapi & higienis"
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start gap-2.5 md:gap-3" variants={itemVariants}>
                  <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5 md:w-5 md:h-5" />
                  {/* OPTIMASI: Text-[14px] md:text-[15px] */}
                  <span className="text-neutral-300 text-[14px] md:text-[15px] leading-relaxed font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <a 
              href="https://wa.me/6289664031115" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold py-3.5 md:py-4 rounded-2xl transition-colors shadow-lg shadow-amber-500/20 active:scale-95 mt-auto text-[14px] md:text-base"
            >
              <WhatsAppIcon size={18} className="md:w-5 md:h-5" />
              Hubungi via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}