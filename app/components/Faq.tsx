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
    <section id="faq" className="py-24 bg-[#FFFBEB]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header FAQ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-2xl text-amber-600 mb-6">
            <MessageCircleQuestion size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
            Pertanyaan yang Sering <span className="text-amber-500">Diajukan.</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar hidangan, layanan, dan lokasi Empal Gentong Mas Khan.
          </p>
        </div>

        {/* Daftar FAQ (Accordion) */}
        <div className="space-y-4">
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
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className={`text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-amber-600' : 'text-neutral-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-amber-100 text-amber-600 rotate-180' : 'bg-neutral-50 text-neutral-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Area Jawaban (dengan animasi buka-tutup halus menggunakan grid) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-neutral-600 leading-relaxed border-t border-neutral-50 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tambahan: Ajakan bertindak jika masih ada pertanyaan */}
        <div className="mt-12 text-center bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
          <h4 className="text-xl font-bold text-neutral-900 mb-2">Masih punya pertanyaan lain?</h4>
          <p className="text-neutral-500 mb-6">Jangan ragu untuk menghubungi tim kami secara langsung.</p>
          <a 
            href="https://wa.me/+6289664031115" 
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg shadow-neutral-200"
          >
            Hubungi Kami
          </a>
        </div>

      </div>
    </section>
  );
}