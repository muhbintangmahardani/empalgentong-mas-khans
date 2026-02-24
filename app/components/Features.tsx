"use client";

import React, { useState } from 'react';
import { Sparkles, Soup, ShieldCheck, Clock } from 'lucide-react';

export default function Features() {
  // State untuk melacak card mana yang sedang ditekan
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Fungsi klik diubah menjadi "Toggle" (Permanen sampai diklik lagi)
  const handleCardClick = (index: number) => {
    // Jika user mengklik card yang sudah aktif, matikan (null). 
    // Jika mengklik card yang belum aktif, nyalakan (index).
    setActiveCard(prev => prev === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- HEADER DENGAN TIPOGRAFI & ANIMASI BARU --- */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-amber-50 text-amber-600 font-bold text-[11px] md:text-sm mb-4 md:mb-5 border border-amber-200/50 shadow-sm">
            <Sparkles size={16} className="animate-pulse md:w-4 md:h-4 w-3.5 h-3.5" />
            Keunggulan Kami
          </span>
          
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-[1.2] md:leading-tight tracking-tight">
            <span className="whitespace-nowrap">Kenapa Harus</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 whitespace-nowrap">
              Mas Khans?
            </span>
          </h2>
          
          <p className="text-[15px] sm:text-base md:text-lg text-neutral-500 mt-4 md:mt-6 max-w-2xl mx-auto font-medium leading-[1.8] md:leading-relaxed">
            Komitmen kami untuk selalu menyajikan kualitas dan rasa terbaik di setiap mangkuknya.
          </p>
        </div>
        
        {/* --- 3 KOTAK FITUR (Interaktif Toggle) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          
          {/* Kotak 1: Resep & Rempah */}
          <div 
            onClick={() => handleCardClick(1)}
            className={`group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#FFFBEB] border transition-all duration-300 relative overflow-hidden cursor-pointer select-none
              ${activeCard === 1 
                ? 'border-amber-400 scale-[0.98] shadow-inner bg-amber-50 ring-4 ring-amber-100/50' 
                : 'border-amber-100 md:hover:border-amber-300 md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-amber-100/50' 
              }
            `}
          >
            {/* Dekorasi tipis di background */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 transform translate-x-4 -translate-y-4 md:group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Soup size={100} />
            </div>

            <div className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center text-white mb-5 md:mb-6 shadow-md transition-all duration-300 relative z-10
              ${activeCard === 1 
                ? 'bg-amber-600 scale-110 rotate-3 shadow-lg shadow-amber-600/40 animate-pulse' 
                : 'bg-amber-500 shadow-amber-500/20 md:group-hover:scale-110 md:group-hover:rotate-3'
              }
            `}>
              <Soup size={24} className={`md:w-7 md:h-7 ${activeCard === 1 ? 'animate-bounce' : ''}`} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-neutral-900 relative z-10">Kaya Rempah Otentik</h3>
            {/* PERBAIKAN: Mengubah kembali menjadi rata kiri (text-left) */}
            <p className="text-[14px] sm:text-sm md:text-base text-neutral-600 leading-relaxed relative z-10 text-left">
              Diramu dengan takaran bumbu tradisional yang pas dan santan berkualitas untuk menghasilkan kuah kental beraroma khas Cirebon.
            </p>
          </div>

          {/* Kotak 2: Bahan Segar */}
          <div 
            onClick={() => handleCardClick(2)}
            className={`group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#FFFBEB] border transition-all duration-300 relative overflow-hidden cursor-pointer select-none
              ${activeCard === 2 
                ? 'border-amber-400 scale-[0.98] shadow-inner bg-amber-50 ring-4 ring-amber-100/50'
                : 'border-amber-100 md:hover:border-amber-300 md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-amber-100/50'
              }
            `}
          >
             {/* Dekorasi tipis di background */}
             <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 transform translate-x-4 -translate-y-4 md:group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <ShieldCheck size={100} />
            </div>

            <div className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center text-white mb-5 md:mb-6 shadow-md transition-all duration-300 relative z-10
              ${activeCard === 2 
                ? 'bg-amber-600 scale-110 rotate-3 shadow-lg shadow-amber-600/40 animate-pulse' 
                : 'bg-amber-500 shadow-amber-500/20 md:group-hover:scale-110 md:group-hover:rotate-3'
              }
            `}>
              <ShieldCheck size={24} className={`md:w-7 md:h-7 ${activeCard === 2 ? 'animate-bounce' : ''}`} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-neutral-900 relative z-10">Bahan Segar Harian</h3>
            {/* PERBAIKAN: Mengubah kembali menjadi rata kiri (text-left) */}
            <p className="text-[14px] sm:text-sm md:text-base text-neutral-600 leading-relaxed relative z-10 text-left">
              Kami hanya menggunakan potongan daging sapi segar pilihan setiap hari, bukan daging beku, agar tekstur empuknya tetap terjaga sempurna.
            </p>
          </div>

          {/* Kotak 3: Pelayanan Cepat */}
          <div 
            onClick={() => handleCardClick(3)}
            className={`group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#FFFBEB] border transition-all duration-300 relative overflow-hidden cursor-pointer select-none
              ${activeCard === 3 
                ? 'border-amber-400 scale-[0.98] shadow-inner bg-amber-50 ring-4 ring-amber-100/50'
                : 'border-amber-100 md:hover:border-amber-300 md:hover:-translate-y-1 md:hover:shadow-xl md:hover:shadow-amber-100/50'
              }
            `}
          >
             {/* Dekorasi tipis di background */}
             <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 transform translate-x-4 -translate-y-4 md:group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Clock size={100} />
            </div>

            <div className={`h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center text-white mb-5 md:mb-6 shadow-md transition-all duration-300 relative z-10
              ${activeCard === 3 
                ? 'bg-amber-600 scale-110 rotate-3 shadow-lg shadow-amber-600/40 animate-pulse' 
                : 'bg-amber-500 shadow-amber-500/20 md:group-hover:scale-110 md:group-hover:rotate-3'
              }
            `}>
              <Clock size={24} className={`md:w-7 md:h-7 ${activeCard === 3 ? 'animate-bounce' : ''}`} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-neutral-900 relative z-10">Pelayanan Responsif</h3>
            {/* PERBAIKAN: Mengubah kembali menjadi rata kiri (text-left) */}
            <p className="text-[14px] sm:text-sm md:text-base text-neutral-600 leading-relaxed relative z-10 text-left">
              Lapar tidak bisa menunggu. Kami selalu memastikan pesanan Anda disiapkan dengan cepat dan disajikan dalam keadaan hangat.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}