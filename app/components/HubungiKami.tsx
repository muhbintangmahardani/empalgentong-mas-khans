"use client";

import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  ShoppingBag, 
  UtensilsCrossed, 
  ChefHat, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

// Komponen Ikon Kustom untuk TikTok
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-bold tracking-wider uppercase text-sm mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Tetap Terhubung & <span className="text-amber-500">Pesan Sekarang.</span>
          </h2>
        </div>

        {/* 3 Cards Grid (Semua sejajar dan ukurannya sama dengan items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* CARD 1: Follow Us */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Follow Us</h3>
            </div>
            
            <div className="flex flex-col gap-4 flex-grow">
              {/* Inner Card WhatsApp */}
              <a href="https://wa.me/+6289664031115" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-neutral-100 hover:border-green-500 hover:bg-green-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-green-100 text-green-600 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="font-bold text-neutral-800 group-hover:text-green-600 transition-colors">+62 812 3456 7890</p>
                  </div>
                </div>
              </a>

              {/* Inner Card Instagram */}
              <a href="https://instagram.com/empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-neutral-100 hover:border-pink-500 hover:bg-pink-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-pink-100 text-pink-500 rounded-full group-hover:bg-pink-500 group-hover:text-white transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">Instagram</p>
                    <p className="font-bold text-neutral-800 group-hover:text-pink-500 transition-colors">@empalgentongmaskhans</p>
                  </div>
                </div>
              </a>

              {/* Inner Card TikTok */}
              <a href="https://tiktok.com/@empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-neutral-100 hover:border-neutral-900 hover:bg-neutral-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-neutral-100 text-neutral-900 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <TikTokIcon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-0.5">TikTok</p>
                    <p className="font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors">@empalgentongmaskhans</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* CARD 2: Order Online */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-50 text-amber-500 rounded-2xl">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Order Online</h3>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              {/* Inner Card GoFood */}
              <button className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-neutral-100 hover:border-red-500 hover:bg-red-50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-extrabold text-xs">GF</div>
                  <span className="font-bold text-neutral-800 group-hover:text-red-600">GoFood</span>
                </div>
                <ArrowRight size={18} className="text-neutral-400 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all" />
              </button>

              {/* Inner Card GrabFood */}
              <button className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-neutral-100 hover:border-green-500 hover:bg-green-50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-extrabold text-xs">GR</div>
                  <span className="font-bold text-neutral-800 group-hover:text-green-700">GrabFood</span>
                </div>
                <ArrowRight size={18} className="text-neutral-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            <div className="mt-6 text-center bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
              <p className="text-sm font-semibold text-amber-700">
                🎉 Nikmati promo spesial di setiap platform!
              </p>
            </div>
          </div>

          {/* CARD 3: Catering & Pesanan Khusus (Sejajar dan Ukuran Sama) */}
          <div className="bg-neutral-900 rounded-3xl p-8 shadow-xl shadow-neutral-900/30 flex flex-col relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
            {/* Latar Belakang Dekoratif */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <UtensilsCrossed size={120} />
            </div>

            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-500 text-neutral-900 rounded-2xl">
                <ChefHat size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Catering & Spesial</h3>
            </div>

            <ul className="relative z-10 space-y-4 mb-8 flex-grow">
              {[
                "Minimal pemesanan 20 porsi",
                "Harga spesial untuk jumlah banyak",
                "Gratis pengiriman area Slipi",
                "Konsultasi menu gratis",
                "Packaging rapi & higienis"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/+6289664031115" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-amber-500/20 active:scale-95 mt-auto"
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