"use client"; 

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Soup, 
  Leaf, 
  Flame, 
  ChevronDown, 
  Star, 
  Sparkles
} from 'lucide-react';

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
  const [currentImage, setCurrentImage] = useState(0);

  // DAFTAR GAMBAR SLIDER
  const heroImages = [
    "/assets/logo.png",
    "/assets/empal-gentong.png", 
    "/assets/farhan.jpeg"   
  ];

  // LOGIKA AUTO-SLIDE 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 4000); 
    
    return () => clearInterval(timer);
  }, [heroImages.length]);
  
  // Fungsi universal untuk scroll mulus ke section manapun
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-24 md:pt-32 pb-10 max-w-7xl mx-auto px-6 md:px-12">
      
      {/* --- INJEKSI CSS UNTUK ANIMASI KILATAN (SHIMMER) --- */}
      <style>
        {`
          @keyframes shine {
            0% { left: -100%; }
            20% { left: 200%; }
            100% { left: 200%; }
          }
          .animate-shine {
            animation: shine 8s infinite ease-in-out;
          }
        `}
      </style>

      {/* --- KONTEN UTAMA HERO --- */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 relative z-10">
        
        {/* --- BAGIAN KIRI (TEKS & STATISTIK) --- */}
        <div className="w-full lg:w-3/5 text-center md:text-left z-20 pr-0 lg:pr-8 relative">
          
          <div className="absolute -top-8 right-4 md:right-20 opacity-[0.02] -z-10 text-blue-500 transform rotate-12">
            <Sparkles size={140} />
          </div>
          <div className="absolute top-1/4 -left-10 md:-left-16 opacity-[0.02] -z-10 text-orange-600 transform -rotate-12">
            <Flame size={160} />
          </div>
          <div className="absolute bottom-10 right-0 md:right-32 opacity-[0.02] -z-10 text-emerald-600 transform -rotate-6">
            <Leaf size={120} />
          </div>
          
          {/* --- PERBAIKAN: BADGE INTERAKTIF BISA DIKLIK (MOBILE & DESKTOP) --- */}
          {/* Ubah cursor-default menjadi cursor-pointer */}
          <div className="mb-6 relative inline-block mx-auto md:mx-0 group cursor-pointer select-none">
            
            {/* Sparkle Kecil Melayang di Kiri Bawah */}
            <div className="absolute -bottom-2 -left-3 text-amber-400 animate-bounce z-20">
              <Sparkles size={12} />
            </div>
            
            {/* Sparkle Kecil Melayang di Kanan Atas */}
            <div className="absolute -top-2 -right-3 text-amber-500 animate-pulse z-20" style={{ animationDelay: '0.3s' }}>
              <Sparkles size={16} />
            </div>

            {/* Container Badge (Ditambah active:scale-95 agar memberi efek tertekan di HP) */}
            <div className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] border border-amber-200/60 shadow-sm backdrop-blur-sm z-10 transition-transform duration-300 hover:scale-105 active:scale-95">
              
              {/* === ELEMEN KILATAN CAHAYA (SHIMMER) === */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 animate-shine pointer-events-none z-20"></div>

              {/* Sparkle Kiri */}
              <Sparkles size={15} className="text-amber-500 animate-pulse relative z-10" />
              
              <span className="relative z-10">The Authentic Taste of Heritage</span>
              
              {/* Sparkle Kanan */}
              <Sparkles size={15} className="text-amber-500 animate-pulse relative z-10" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          {/* JUDUL UTAMA */}
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-black leading-[1.15] text-neutral-900 w-full relative z-10 tracking-tight">
            Kehangatan Tradisi <br className="hidden md:block"/> dalam Semangkuk <br className="block md:hidden"/> 
            <span className="relative inline-block mt-2 md:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic pb-2">
               Empal Gentong.
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-300/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
               </svg>
            </span>
          </h1>
          
          {/* SUBJUDUL/PARAGRAF */}
          <p className="text-[1.05rem] md:text-xl text-neutral-500 max-w-2xl mx-auto md:mx-0 font-medium leading-[1.7] relative z-10 mb-8 mt-6">
            Nikmati resep warisan Mas Khans. Daging sapi pilihan yang empuk, berpadu dengan kuah santan kaya rempah yang diracik dengan kesabaran untuk menghasilkan kelezatan otentik khas Cirebon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 relative z-10">
            <button 
              onClick={() => scrollToSection('menu')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#171717] text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-all active:scale-95 shadow-lg shadow-neutral-900/20"
            >
              Lihat Menu Kami
              <ArrowRight size={18} className="text-amber-400" />
            </button>
            
            <button 
              onClick={() => scrollToSection('location')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-neutral-700 border-2 border-amber-200 px-8 py-4 rounded-full font-semibold hover:border-amber-400 hover:bg-amber-50 transition-all active:scale-95 shadow-sm"
            >
              <MapPin size={18} className="text-amber-500"/>
               Cek Lokasi
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 sm:gap-10 pt-10 mt-8 border-t border-amber-200/60 w-full relative z-10">
            
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 flex items-center">
                <AnimatedCounter end={4.9} decimals={1} />
                <Star size={18} className="fill-amber-500 text-amber-500 ml-1 pb-1 sm:w-6 sm:h-6" />
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">Rating</span>
            </div>
            
            <div className="w-px h-8 sm:h-10 bg-amber-200/80"></div>
            
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                <AnimatedCounter end={10} decimals={0} suffix="K+" />
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">Customers</span>
            </div>

            <div className="w-px h-8 sm:h-10 bg-amber-200/80"></div>

            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                <AnimatedCounter end={15} decimals={0} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">Years Exp.</span>
            </div>
          </div>

        </div>

        {/* --- BAGIAN KANAN (GAMBAR & ANIMASI) --- */}
        <div className="w-full lg:w-2/5 relative max-w-[500px] lg:max-w-none mx-auto lg:mx-0 z-10 mt-12 lg:mt-0 flex-shrink-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[120%] aspect-square border-[2px] border-dashed border-amber-400/50 rounded-full animate-spin-slower -z-10 hidden sm:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[130%] aspect-square bg-gradient-to-tr from-amber-200/50 to-yellow-100/40 blur-3xl rounded-full -z-20"></div>

          <div className="absolute -top-6 -left-4 md:-left-10 bg-white p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2 animate-float-medium z-30">
            <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
              <Leaf size={20} />
            </div>
            <span className="text-sm font-bold text-neutral-800 pr-2">Kaya Rempah</span>
          </div>

          <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-3 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-2 animate-float-medium z-30" style={{ animationDelay: '1s' }}>
            <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
              <Flame size={20} />
            </div>
            <span className="text-sm font-bold text-neutral-800 pr-2">Dimasak Segar</span>
          </div>

          <div className="absolute top-4 -right-4 md:-right-6 bg-amber-500 p-3 rounded-full shadow-lg shadow-amber-500/40 text-white animate-float-slow z-20" style={{ animationDelay: '0.5s' }}>
            <Soup size={24} />
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-300/50 border-[6px] border-white/90 backdrop-blur-sm rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out animate-float-slow group w-full aspect-[4/5] sm:aspect-square md:h-[500px] bg-neutral-100">
            
            {heroImages.map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt={`Menu Spesial Mas Khans ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentImage 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-105 z-0'
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 via-transparent to-transparent pointer-events-none z-20"></div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentImage ? 'w-8 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Lihat gambar ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

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