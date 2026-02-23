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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-2xl text-amber-600 mb-6">
            <Send size={28} />
          </div>
          <br />
          <span className="inline-block text-amber-600 font-bold tracking-wider uppercase text-sm mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Tetap Terhubung & <span className="text-amber-500">Pesan Sekarang.</span>
          </h2>
        </div>

        {/* --- 3 CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CARD 1: FOLLOW US */}
          <div className="bg-[#FFFBEB] rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Follow Us</h3>
            </div>
            
            <div className="flex flex-col gap-4 flex-grow">
              
              {/* WhatsApp */}
              <a href="https://wa.me/6289664031115" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-white bg-white hover:border-green-500 hover:bg-green-50 transition-all group overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                  <div className="p-2.5 bg-green-100 text-green-600 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="font-bold text-sm sm:text-base text-neutral-800 group-hover:text-green-600 transition-colors truncate">+62 896 6403 1115</p>
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-white bg-white hover:border-pink-500 hover:bg-pink-50 transition-all group overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                  <div className="p-2.5 bg-pink-100 text-pink-500 rounded-full group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">Instagram</p>
                    <p className="font-bold text-sm sm:text-base text-neutral-800 group-hover:text-pink-500 transition-colors truncate">@empalgentongmaskhans</p>
                  </div>
                </div>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-white bg-white hover:border-neutral-900 hover:bg-neutral-50 transition-all group overflow-hidden">
                <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                  <div className="p-2.5 bg-neutral-100 text-neutral-900 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors shrink-0">
                    <TikTokIcon size={20} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">TikTok</p>
                    <p className="font-bold text-sm sm:text-base text-neutral-800 group-hover:text-neutral-900 transition-colors truncate">@empalgentongmaskhans</p>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* CARD 2: ORDER ONLINE */}
          <div className="bg-[#FFFBEB] rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-50 text-amber-500 rounded-2xl">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Order Online</h3>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              {/* GoFood */}
              <div className="flex items-center w-full p-4 rounded-2xl border border-neutral-200 bg-white">
                <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-neutral-100 flex items-center justify-center bg-white shadow-sm p-1">
                    <img src="/assets/gofood.png" alt="GoFood" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="font-bold text-neutral-800 block mb-0.5">GoFood</span>
                    <span className="text-xs sm:text-[13px] font-medium text-neutral-500 leading-tight block truncate">
                      Cari: <span className="text-red-600 font-bold">Empal Gentong Rosliana</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* GrabFood */}
              <div className="flex items-center w-full p-4 rounded-2xl border border-neutral-200 bg-white">
                <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-neutral-100 flex items-center justify-center bg-white shadow-sm p-1">
                    <img src="/assets/grabfood.png" alt="GrabFood" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <span className="font-bold text-neutral-800 block mb-0.5">GrabFood</span>
                    <span className="text-xs sm:text-[13px] font-medium text-neutral-500 leading-tight block truncate">
                      Cari: <span className="text-green-700 font-bold">Empal Gentong Rosliana</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
              <p className="text-sm font-semibold text-amber-700">
                📱 Buka aplikasinya & cari nama kedai kami!
              </p>
            </div>
          </div>

          {/* CARD 3: CATERING & SPESIAL */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl shadow-amber-500/20 flex flex-col relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 ring-1 ring-amber-500/20">
            
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
              <UtensilsCrossed size={120} className="text-amber-200" />
            </div>

            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-500 text-neutral-900 rounded-2xl shadow-lg shadow-amber-500/30">
                <ChefHat size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Catering & Spesial</h3>
            </div>

            <motion.ul 
              className="relative z-10 space-y-4 mb-8 flex-grow"
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
                <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}>
                  <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm leading-relaxed font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <a 
              href="https://wa.me/6289664031115" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-amber-500/20 active:scale-95 mt-auto text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              Hubungi via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}