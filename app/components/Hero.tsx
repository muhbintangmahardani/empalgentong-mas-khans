"use client"; 

import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Soup, Leaf, Flame, ChevronDown, Star, Sparkles, BadgeCheck } from 'lucide-react'; // <-- Tambahkan BadgeCheck di sini

// --- SUB-KOMPONEN UNTUK ANIMASI ANGKA ---
const AnimatedCounter = ({ end, decimals = 0, suffix = "" }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; 

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const current = Math.min(progress / duration, 1) * end;

      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); 
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
};


export default function Hero() {
  
  // Fungsi universal untuk scroll mulus ke section manapun
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-32 md:pt-40 pb-10 max-w-7xl mx-auto px-6 md:px-12">
      
      {/* --- KONTEN UTAMA HERO --- */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        
        {/* --- BAGIAN KIRI (TEKS & STATISTIK) --- */}
        <div className="flex-1 text-center md:text-left space-y-6 z-20 w-full">
          
          {/* Badge dengan icon BadgeCheck sebagai pengganti bendera ID */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 font-bold text-sm mb-2 border border-amber-200/50 shadow-sm backdrop-blur-sm">
            <Sparkles size={16} className="text-amber-500 animate-pulse" />
            100% Resep Asli Cirebon
            <BadgeCheck size={16} className="text-amber-600" />
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-neutral-900">
            Kehangatan Tradisi dalam Semangkuk <span className="text-amber-500 underline decoration-amber-300/50 underline-offset-4">Empal Gentong.</span>
          </h1>
          
          <p className="text-lg text-neutral-600 md:max-w-xl leading-relaxed mx-auto md:mx-0">
            Nikmati resep warisan Mas Khans. Daging sapi pilihan yang empuk, berpadu dengan kuah santan kaya rempah yang dimasak dalam gentong tanah liat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('menu')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#171717] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-neutral-800 transition-all active:scale-95 shadow-lg shadow-neutral-900/20"
            >
              Lihat Menu Kami
              <ArrowRight size={18} className="text-amber-400" />
            </button>
            
            <button 
              onClick={() => scrollToSection('location')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-neutral-700 border-2 border-amber-200 px-8 py-3.5 rounded-full font-semibold hover:border-amber-400 hover:bg-amber-50 transition-all active:scale-95 shadow-sm"
            >
              <MapPin size={18} className="text-amber-500"/>
               Cek Lokasi
            </button>
          </div>

          {/* --- BAGIAN STATISTIK ANIMASI --- */}
          <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-10 pt-8 mt-6 border-t border-amber-200/60 w-full">
            
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl sm:text-3xl font-extrabold text-neutral-900 flex items-center">
                <AnimatedCounter end={4.9} decimals={1} />
                <Star size={20} className="fill-amber-500 text-amber-500 ml-1 pb-1 sm:w-6 sm:h-6" />
              </span>
              <span className="text-[10px] sm:text-sm font-semibold text-neutral-500 uppercase tracking-wide">Rating</span>
            </div>
            
            <div className="w-px h-8 sm:h-10 bg-amber-200/80"></div>
            
            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl sm:text-3xl font-extrabold text-neutral-900">
                <AnimatedCounter end={10} decimals={0} suffix="K+" />
              </span>
              <span className="text-[10px] sm:text-sm font-semibold text-neutral-500 uppercase tracking-wide">Customers</span>
            </div>

            <div className="w-px h-8 sm:h-10 bg-amber-200/80"></div>

            <div className="flex flex-col items-center md:items-start">
              <span className="text-xl sm:text-3xl font-extrabold text-neutral-900">
                <AnimatedCounter end={15} decimals={0} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-sm font-semibold text-neutral-500 uppercase tracking-wide">Years Exp.</span>
            </div>
          </div>

        </div>

        {/* --- BAGIAN KANAN (GAMBAR & ANIMASI) --- */}
        <div className="flex-1 relative w-full max-w-[500px] md:max-w-none mx-auto md:mx-0 z-10 mt-12 md:mt-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[120%] aspect-square border-[2px] border-dashed border-amber-400/50 rounded-full animate-spin-slower -z-10 hidden sm:block"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[130%] aspect-square bg-gradient-to-tr from-amber-200/50 to-yellow-100/40 blur-3xl rounded-full -z-20"></div>

          <div className="absolute -top-6 -left-4 md:-left-10 bg-white p-3 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-2 animate-float-medium z-30">
            <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
              <Leaf size={20} />
            </div>
            <span className="text-sm font-bold text-neutral-800 pr-2">Kaya Rempah</span>
          </div>

          <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-3 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-2 animate-float-medium z-30" style={{ animationDelay: '1s' }}>
            <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
              <Flame size={20} />
            </div>
            <span className="text-sm font-bold text-neutral-800 pr-2">Dimasak Segar</span>
          </div>

          <div className="absolute top-4 -right-4 md:-right-6 bg-amber-500 p-3 rounded-full shadow-lg shadow-amber-500/40 text-white animate-float-slow z-20" style={{ animationDelay: '0.5s' }}>
            <Soup size={24} />
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-300/50 border-[6px] border-white/90 backdrop-blur-sm rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out animate-float-slow group">
            <img 
              src="assets/empal-gentong.png" 
              alt="Empal Gentong Mas Khans" 
              className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>

      {/* --- PEMBATAS MENUJU TENTANG KAMI --- */}
      <div className="w-full flex flex-col items-center justify-center mt-24 relative">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        
        <button 
          onClick={() => scrollToSection('tentang-kami')}
          className="relative z-10 bg-[#FFFBEB] px-6 py-2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="text-sm md:text-base font-extrabold uppercase tracking-widest text-neutral-800 group-hover:text-amber-600 transition-colors">
            Kenali Kami
          </span>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-amber-200 shadow-sm text-amber-500 group-hover:bg-amber-50 animate-bounce mt-1">
            <ChevronDown size={20} />
          </div>
        </button>
      </div>

    </main>
  );
}