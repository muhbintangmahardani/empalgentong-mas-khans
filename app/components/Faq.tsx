"use client";

import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FAQSection() {
  // State untuk melacak pertanyaan mana yang sedang dibuka
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default index 0 terbuka

  // Data FAQ sesuai dengan yang Anda berikan
  const faqs = [
    {
      question: "Apa itu Empal Gentong?",
      answer: "Empal Gentong adalah masakan khas Cirebon yang terdiri dari daging sapi, usus, kikil, babat dan jeroan yang dimasak dengan kuah santan kental dan rempah-rempah pilihan. Rasanya yang gurih dan kaya rempah membuat Empal Gentong menjadi hidangan yang sangat khas dan nikmat."
    },
    {
      question: "Apakah ada menu lain selain Empal Gentong?",
      answer: "Selain Empal Gentong, kami juga menyajikan menu spesial lainnya seperti Nasi Lengko dan berbagai lauk pendamping lainnya yang menggugah selera. Kami juga memiliki pilihan minuman segar untuk menemani santapan Anda."
    },
    {
      question: "Apakah bisa melakukan pesanan untuk acara tertentu?",
      answer: "Tentu! Kami menerima pesanan untuk acara tertentu seperti pesta, pertemuan, dan acara keluarga. Anda dapat memesan dalam jumlah besar atau paket spesial untuk kebutuhan acara Anda. Untuk informasi lebih lanjut dan pemesanan, silakan hubungi kami langsung atau kunjungi restoran."
    },
    {
      question: "Dimana alamat Empal Gentong Mas Khan?",
      answer: "Empal Gentong Mas Khan berada di Jl. Anggrek Garuda No.h 10, RT.1/RW.5, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480. Kami juga melayani pesan antar untuk Anda yang ingin menikmati hidangan kami di rumah atau kantor."
    }
  ];

  // Fungsi untuk toggle (buka/tutup) FAQ
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // OPTIMASI: Padding konsisten py-20 untuk mobile, py-24 untuk desktop
    <section id="faq" className="py-20 md:py-24 bg-[#FFFBEB]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header FAQ */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 md:p-3.5 bg-amber-100 rounded-2xl text-amber-600 mb-5 md:mb-6 shadow-sm">
            <MessageCircleQuestion size={24} className="md:w-7 md:h-7" />
          </div>
          
          {/* OPTIMASI: Judul text-4xl mobile, tracking-tight, dan pembungkus whitespace */}
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-[1.2] md:leading-tight mb-4 tracking-tight">
            <span className="whitespace-nowrap">Pertanyaan yang Sering</span>{" "}
            <span className="text-amber-500 whitespace-nowrap">Diajukan.</span>
          </h2>
          
          {/* OPTIMASI: Paragraf deskripsi text-[15px] mobile */}
          <p className="text-[15px] sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-[1.8] md:leading-relaxed">
            Temukan jawaban untuk pertanyaan umum seputar hidangan, layanan, dan lokasi Empal Gentong Mas Khan.
          </p>
        </div>

        {/* Daftar FAQ (Accordion) */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                  isOpen ? 'border-amber-300 shadow-md shadow-amber-500/10' : 'border-neutral-100 hover:border-amber-200'
                }`}
              >
                {/* Tombol Pertanyaan */}
                <button
                  onClick={() => toggleFAQ(index)}
                  // OPTIMASI: Padding tombol disesuaikan untuk mobile (p-5) dan desktop (p-6)
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  {/* OPTIMASI: Ukuran teks pertanyaan text-base di mobile */}
                  <h3 className={`text-base md:text-lg font-bold pr-4 transition-colors leading-snug ${isOpen ? 'text-amber-600' : 'text-neutral-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`p-1.5 md:p-2 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-amber-100 text-amber-600 rotate-180' : 'bg-neutral-50 text-neutral-400'}`}>
                    <ChevronDown size={18} className="md:w-5 md:h-5" />
                  </div>
                </button>

                {/* Area Jawaban (dengan animasi buka-tutup halus menggunakan grid) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* PERBAIKAN: Teks jawaban text-[14px] mobile, rata kiri natural (text-left) */}
                    <div className="p-5 md:p-6 pt-0 text-[14px] sm:text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-50 mt-2 text-left">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tambahan: Ajakan bertindak jika masih ada pertanyaan */}
        <div className="mt-10 md:mt-12 text-center bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 shadow-sm">
          {/* OPTIMASI: Ukuran heading CTA diselaraskan */}
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">Masih punya pertanyaan lain?</h4>
          <p className="text-[14px] sm:text-[15px] md:text-base text-neutral-500 mb-5 md:mb-6">Jangan ragu untuk menghubungi tim kami secara langsung.</p>
          <a 
            href="https://wa.me/+6289664031115" 
            // OPTIMASI: Ukuran teks tombol diselaraskan
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-amber-500 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full text-[14px] md:text-base font-bold transition-colors shadow-lg shadow-neutral-200 active:scale-95"
          >
            Hubungi Kami
          </a>
        </div>

      </div>
    </section>
  );
}