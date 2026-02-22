"use client";

import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle, ChevronRight } from 'lucide-react';

// Komponen Ikon Kustom untuk TikTok
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-20 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Menggunakan Grid 12 Kolom agar proporsinya pas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* KOLOM 1: Brand & Sosial Media (Lebih Lebar - 4 Kolom) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              
              {/* --- PERBAIKAN: Mengganti Inisial M dengan Logo Asli --- */}
              <div className="h-12 w-12 rounded-xl flex items-center justify-center p-1 bg-white/5 border border-neutral-800 shadow-md">
                <img 
                  src="/assets/logo.png" 
                  alt="Logo Mas Khans" 
                  className="h-full w-full object-contain drop-shadow-sm" 
                />
              </div>
              
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Mas Khans<span className="text-amber-500">.</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 pr-4">
              Menyajikan cita rasa otentik kelezatan Empal Gentong khas Cirebon dengan resep warisan leluhur, daging pilihan terbaik, dan perpaduan rempah yang sempurna.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com/@empalgentongmaskhans" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* KOLOM 2: Tautan Navigasi (Lebih Kecil - 2 Kolom) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Navigasi</h4>
            <ul className="space-y-3">
              {/* Array Object agar link lebih spesifik dan akurat */}
              {[
                { name: 'Beranda', link: '#' },
                { name: 'Tentang Kami', link: '#tentang-kami' },
                { name: 'Menu', link: '#menu' },
                { name: 'FAQ', link: '#faq' },
                { name: 'Testimonial', link: '#testimonials' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="group flex items-center text-sm text-neutral-400 hover:text-amber-500 transition-colors">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-amber-500 mr-1" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: Layanan Kami (Sedang - 3 Kolom) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Layanan</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></span>
                <span className="leading-relaxed">Dine-in & Takeaway</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></span>
                <span className="leading-relaxed">Pesan Antar (GoFood, GrabFood)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></span>
                <span className="leading-relaxed">Katering & Pemesanan Jumlah Besar</span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: Kontak Info (Sedang - 3 Kolom) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-neutral-900 rounded-lg group-hover:bg-amber-500/10 transition-colors shrink-0">
                  <MapPin size={16} className="text-amber-500" />
                </div>
                <span className="text-sm text-neutral-400 leading-relaxed group-hover:text-white transition-colors">
                  Jl. Anggrek Garuda No.h 10, RT.1/RW.5, Kemanggisan, Jakarta Barat 11480
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-neutral-900 rounded-lg group-hover:bg-amber-500/10 transition-colors shrink-0">
                  <Phone size={16} className="text-amber-500" />
                </div>
                <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                  +62 89664031115
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-neutral-900 rounded-lg group-hover:bg-amber-500/10 transition-colors shrink-0">
                  <MessageCircle size={16} className="text-amber-500" />
                </div>
                <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                  WhatsApp Available
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT (Garis pemisah lebih halus dan teks di tengah) */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 Empal Gentong MasKhans All rights reserved.
          </p>
          <p className="text-neutral-600 text-sm hidden md:block">
            Dirancang dengan <span className="text-red-500">❤</span> untuk penikmat kuliner.
          </p>
        </div>

      </div>
    </footer>
  );
}