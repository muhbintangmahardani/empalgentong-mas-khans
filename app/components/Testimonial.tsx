"use client";

import React from 'react';
import { Star, Quote, User } from 'lucide-react';

export default function TestimonialSection() {
  // --- DATA TESTIMONIAL MOCKUP ---
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pecinta Kuliner",
      quote: "Empal gentong paling otentik yang pernah saya coba di Jakarta! Kuah santannya kental, dagingnya super empuk, dan aroma rempahnya bikin kangen Cirebon. Wajib coba!",
      rating: 5
    },
    {
      id: 2,
      name: "Siti Aminah",
      role: "Ibu Rumah Tangga",
      quote: "Tempatnya bersih dan nyaman banget buat makan bareng keluarga. Pelayanannya ramah, dan Nasi Lengkonya juga juara. Anak-anak saya suka banget sama sate kambing mudanya.",
      rating: 5
    },
    {
      id: 3,
      name: "Raka Pratama",
      role: "Karyawan Swasta",
      quote: "Pesen catering buat acara kantor di sini ga pernah ngecewain. Porsinya pas, packaging rapi, dan rasanya konsisten enak. Rekan kerja pada nanya beli di mana.",
      rating: 4
    },
    {
      id: 4,
      name: "Dina Wijaya",
      role: "Food Blogger",
      quote: "Sebagai orang Cirebon asli, saya akui ini rasanya mirip banget sama yang di kampung halaman. Sambal cabai bubuknya itu lho, pedasnya nendang! Recommended banget.",
      rating: 5
    },
    {
      id: 5,
      name: "Ahmad Fauzi",
      role: "Mahasiswa",
      quote: "Harganya terjangkau banget buat rasa seenak ini. Sering mampir kalau lagi kangen masakan daerah. Es Tjampolay-nya seger banget!",
      rating: 4
    }
  ];

  // --- FUNGSI RENDER BINTANG ---
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={`${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-neutral-200 text-neutral-200'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FFFBEB] overflow-hidden relative">
       {/* --- INJEKSI CSS UNTUK ANIMASI SCROLL --- */}
       <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Bergerak setengah dari total lebar (karena data diduplikasi) */
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite; /* Durasi 40s agar tidak terlalu cepat */
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused; /* Berhenti saat di-hover agar mudah dibaca */
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center relative z-10">
        <span className="inline-block text-amber-600 font-bold tracking-wider uppercase text-sm mb-3">
          Kata Mereka
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
          Cerita Kepuasan <span className="text-amber-500">Pelanggan.</span>
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mt-4">
          Jangan hanya percaya kata kami. Simak apa kata mereka yang telah merasakan kelezatan otentik Mas Khans.
        </p>
      </div>
      
      {/* --- CONTAINER SLIDER --- */}
      {/* Kita gunakan teknik duplikasi data untuk membuat efek loop tanpa putus */}
      <div className="flex relative overflow-hidden py-4">
        {/* Gradient Fade di kiri dan kanan agar transisi halus */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#FFFBEB] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#FFFBEB] to-transparent z-10 pointer-events-none"></div>

        {/* Track Animasi */}
        <div className="flex animate-infinite-scroll gap-6 md:gap-8 w-max px-6">
          {/* Kita render data 2 KALI agar saat scroll mencapai ujung, data awal sudah siap menyambung */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={index} // Menggunakan index sebagai key karena datanya diduplikasi
              className="w-[350px] md:w-[450px] bg-white p-8 rounded-[2rem] shadow-xl shadow-neutral-200/40 border border-neutral-100 relative flex flex-col flex-shrink-0 hover:-translate-y-1 transition-transform duration-300 group"
            >
              {/* Icon Quote Dekoratif Besar di Background */}
              <Quote size={100} className="absolute top-4 right-4 text-neutral-100 opacity-50 transform rotate-12 pointer-events-none group-hover:text-amber-50 transition-colors duration-300" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {renderStars(item.rating)}
              </div>

              {/* Isi Testimonial */}
              <blockquote className="text-neutral-700 text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
                "{item.quote}"
              </blockquote>

              {/* Profil User */}
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                {/* Placeholder Avatar (bisa diganti <img> asli nanti) */}
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-amber-600 border-2 border-white shadow-md">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg">{item.name}</h4>
                  <p className="text-sm text-neutral-500 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}