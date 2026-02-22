"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, MessageSquareQuote, User } from 'lucide-react';

// --- DATA TESTIMONIAL MOCKUP ---
const testimonials = [
  {
    id: 1,
    name: "Artha Nugraha",
    role: "Mahasiswa",
    quote: "Empal gentong paling otentik di Jakarta! Kuahnya kental, dagingnya empuk banget. Rempahnya bikin nagih. Wajib dicoba!",
    rating: 5,
    image: "/assets/artha.png"
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga",
    quote: "Tempatnya nyaman buat keluarga. Pelayanan ramah, Nasi Lengko-nya juara. Anak-anak suka banget sama sate kambing mudanya.",
    rating: 5,
    image: null
  },
  {
    id: 3,
    name: "Apriyanto Dwi Herlambang",
    role: "Karyawan Swasta",
    quote: "Catering kantor di sini ga pernah ngecewain. Porsi pas, packaging rapi, rasanya konsisten enak. Rekan kerja pada nanya beli di mana.",
    rating: 4,
    image: "/assets/apri.jpg"
  },
  {
    id: 4,
    name: "Bintang Mahardani",
    role: "Pecinta Kuliner",
    quote: "Ini rasanya enak banget, maknyus yang ga ada duanya. Sambalnya juga nendang! Recommended.",
    rating: 5,
    image: "/assets/bintang.jpg"
  },
  {
    id: 5,
    name: "Achmad Zulfikar",
    role: "Mahasiswa",
    quote: "Harga terjangkau buat rasa seenak ini. Bukan maen dah rasanya, ajib bin mantap!",
    rating: 4,
    image: "/assets/zul.jpg"
  },
];

const firstHalf = testimonials.slice(0, 3);
const secondHalf = testimonials.slice(3);

const renderStars = (rating: number) => {
  return [...Array(5)].map((_, i) => (
    <Star 
      key={i} 
      size={16} 
      className={`${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-neutral-600 text-neutral-600'}`} 
    />
  ));
};

// --- KOMPONEN KARTU TESTIMONIAL ---
const TestimonialCard = ({ item, className = "" }: { item: any, className?: string }) => (
  <div className={`w-[85vw] sm:w-[340px] md:w-[400px] max-w-full bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 relative flex flex-col shrink-0 hover:bg-white/10 transition-colors duration-300 group ${className}`}>
    <Quote size={80} className="absolute top-4 right-4 text-white/5 transform rotate-12 pointer-events-none group-hover:text-amber-500/10 transition-colors duration-300" />

    <div className="flex gap-1 mb-6 relative z-10">
      {renderStars(item.rating)}
    </div>

    <blockquote className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
      "{item.quote}"
    </blockquote>

    <div className="flex items-center gap-4 relative z-10 mt-auto">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-amber-500/50 shadow-md shrink-0 flex items-center justify-center bg-neutral-800 text-amber-500">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=User'; 
            }}
          />
        ) : (
          <User size={24} />
        )}
      </div>
      <div>
        <h4 className="font-bold text-white text-base md:text-lg">{item.name}</h4>
        <p className="text-sm text-neutral-400 font-medium">{item.role}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoScrolling = useRef(false); // Kunci agar geser manual & otomatis tidak berantem

  // 1. Logika Interval Otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) { 
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }
    }, 3500); 
    
    return () => clearInterval(interval);
  }, []);

  // 2. Eksekusi Geser Akurat
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const container = scrollRef.current;
      const cards = container.children;
      
      if (cards[activeIndex]) {
        isAutoScrolling.current = true; // Kunci scroll manual
        const card = cards[activeIndex] as HTMLElement;
        
        // Rumus matematika untuk menaruh card pas di tengah layar
        const scrollLeft = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });

        // Buka kunci setelah animasi geser selesai (sekitar 600ms)
        setTimeout(() => {
          isAutoScrolling.current = false;
        }, 600);
      }
    }
  }, [activeIndex]);

  // 3. Deteksi Geser Manual (Saat user pakai jari)
  const handleManualScroll = () => {
    if (!scrollRef.current || isAutoScrolling.current) return; // Abaikan jika sedang jalan otomatis
    
    const container = scrollRef.current;
    const centerPosition = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    // Cari card mana yang posisinya paling dekat dengan bagian tengah layar
    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft - container.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(centerPosition - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden relative">
       
       <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left { animation: scroll-left 25s linear infinite; }
        .animate-scroll-right { animation: scroll-right 25s linear infinite; }

        .group-hover\\:paused:hover .animate-scroll-left,
        .group-hover\\:paused:hover .animate-scroll-right {
          animation-play-state: paused;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl text-amber-500 mb-6">
            <MessageSquareQuote size={28} />
        </div>
        <br />
        <span className="inline-block text-amber-500 font-bold tracking-wider uppercase text-sm mb-3">
          Kata Mereka
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Cerita Kepuasan <span className="text-amber-500">Pelanggan.</span>
        </h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-4">
          Bukti nyata dari mereka yang telah merasakan kelezatan otentik Mas Khans.
        </p>
      </div>
      
      <div className="relative py-4 group-hover:paused">
        
        {/* Gradient Fade: Hanya Desktop */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-neutral-900 to-transparent z-20 pointer-events-none hidden lg:block"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-neutral-900 to-transparent z-20 pointer-events-none hidden lg:block"></div>

        {/* --- LAYOUT DESKTOP --- */}
        <div className="hidden lg:flex flex-col gap-8">
            <div className="flex animate-scroll-left gap-6 w-max px-6">
                {[...firstHalf, ...firstHalf, ...firstHalf, ...firstHalf].map((item, index) => (
                    <TestimonialCard key={`top-${index}`} item={item} />
                ))}
            </div>
            <div className="flex animate-scroll-right gap-6 w-max px-6">
                {[...secondHalf, ...secondHalf, ...secondHalf, ...secondHalf].map((item, index) => (
                    <TestimonialCard key={`bottom-${index}`} item={item} />
                ))}
            </div>
        </div>

        {/* --- LAYOUT MOBILE & IPAD --- */}
        <div className="lg:hidden w-full relative z-10 flex flex-col items-center">
            
            {/* Hapus scroll-smooth dari sini agar tidak bentrok dengan script scrollTo JS */}
            <div 
              ref={scrollRef}
              onScroll={handleManualScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 pt-4 w-full hide-scrollbar"
            >
                {testimonials.map((item, index) => (
                    <TestimonialCard 
                        key={`mobile-${index}`} 
                        item={item} 
                        className="snap-center shrink-0" 
                    />
                ))}
            </div>

            {/* Indikator Titik */}
            <div className="flex justify-center items-center gap-2 mt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === index 
                      ? "w-8 h-2.5 bg-amber-500" 
                      : "w-2.5 h-2.5 bg-neutral-600 hover:bg-neutral-500" 
                  }`}
                  aria-label={`Lihat testimoni ke-${index + 1}`}
                />
              ))}
            </div>

        </div>

      </div>

    </section>
  );
}