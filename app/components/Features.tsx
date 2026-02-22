"use client";

import React from 'react';
import { Sparkles, Soup, ShieldCheck, Clock } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- HEADER DENGAN TIPOGRAFI & ANIMASI BARU --- */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 font-bold text-sm mb-4 border border-amber-200/50 shadow-sm">
            <Sparkles size={16} className="animate-pulse" />
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
            Kenapa Harus <br className="sm:hidden" /> {/* Turun baris otomatis hanya di layar HP kecil */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Mas Khans?
            </span>
          </h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto font-medium">
            Komitmen kami untuk selalu menyajikan kualitas dan rasa terbaik di setiap mangkuknya.
          </p>
        </div>
        
        {/* --- 3 KOTAK FITUR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Kotak 1: Resep & Rempah (Diperbarui caption-nya) */}
          <div className="group p-8 rounded-[2rem] bg-[#FFFBEB] border border-amber-100 hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 relative overflow-hidden">
            {/* Dekorasi tipis di background */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Soup size={100} />
            </div>

            <div className="h-14 w-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
              <Soup size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900 relative z-10">Kaya Rempah Otentik</h3>
            <p className="text-neutral-600 leading-relaxed relative z-10">
              Diramu dengan takaran bumbu tradisional yang pas dan santan berkualitas untuk menghasilkan kuah kental beraroma khas Cirebon.
            </p>
          </div>

          {/* Kotak 2: Bahan Segar */}
          <div className="group p-8 rounded-[2rem] bg-[#FFFBEB] border border-amber-100 hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 relative overflow-hidden">
             {/* Dekorasi tipis di background */}
             <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <ShieldCheck size={100} />
            </div>

            <div className="h-14 w-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900 relative z-10">Bahan Segar Harian</h3>
            <p className="text-neutral-600 leading-relaxed relative z-10">
              Kami hanya menggunakan potongan daging sapi segar pilihan setiap hari, bukan daging beku, agar tekstur empuknya tetap terjaga sempurna.
            </p>
          </div>

          {/* Kotak 3: Pelayanan Cepat */}
          <div className="group p-8 rounded-[2rem] bg-[#FFFBEB] border border-amber-100 hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 relative overflow-hidden">
             {/* Dekorasi tipis di background */}
             <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Clock size={100} />
            </div>

            <div className="h-14 w-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
              <Clock size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-neutral-900 relative z-10">Pelayanan Responsif</h3>
            <p className="text-neutral-600 leading-relaxed relative z-10">
              Lapar tidak bisa menunggu. Kami selalu memastikan pesanan Anda disiapkan dengan cepat dan disajikan dalam keadaan hangat.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}