"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Info, X } from 'lucide-react';

export default function AllMenuPage() {
  // State untuk mengontrol pop-up detail menu
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Data lengkap semua menu
  const allMenuItems = [
    {
      id: 1,
      category: "Empal Gentong",
      name: "Empal Gentong Santan",
      description: "Kuah santan gurih kaya rempah dengan irisan daging sapi empuk.",
      price: "Rp 25.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 2,
      category: "Empal Gentong",
      name: "Empal Gentong Non-Santan (Asem)",
      description: "Kuah bening segar dengan belimbing wuluh dan daging empuk.",
      price: "Rp 25.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 3,
      category: "Makanan Pendamping",
      name: "Nasi Lengko Spesial",
      description: "Nasi, tahu, tempe, tauge dengan siraman saus kacang.",
      price: "Rp 15.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 4,
      category: "Menu Modern",
      name: "Indomie Mas Khans",
      description: "Indomie dengan siraman kuah empal dan daging sapi.",
      price: "Rp 18.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 5,
      category: "Makanan Pendamping",
      name: "Sate Kambing Muda (10 Tusuk)",
      description: "Sate kambing muda khas Cirebon yang super empuk.",
      price: "Rp 45.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 6,
      category: "Minuman",
      name: "Es Tjampolay",
      description: "Sirup legendaris asli Cirebon rasa pisang susu.",
      price: "Rp 12.000",
      image: "/assets/empal-gentong.png"
    }
  ];

  // Fungsi untuk menutup modal
  const closeModal = () => setSelectedItem(null);

  return (
    <main className="min-h-screen bg-[#FFFBEB] pt-8 pb-24 relative">
      
      {/* --- INJEKSI CSS UNTUK ANIMASI MODAL --- */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pop-in { animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Tombol Kembali */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-amber-600 font-semibold transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-amber-100 w-fit">
            <ArrowLeft size={20} />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="text-center md:text-left mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
            Menu Lengkap <span className="text-amber-500">Mas Khans.</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Dari hidangan legendaris warisan leluhur hingga racikan modern, temukan semua kelezatan kami di sini.
          </p>
        </div>

        {/* Grid Semua Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allMenuItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-[2rem] p-4 flex flex-col shadow-lg shadow-neutral-200/50 border border-amber-50 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedItem(item)}
            >
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-4 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-neutral-800 shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="flex-grow px-2">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                <p className="text-neutral-500 text-sm mb-6 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-center justify-between px-2 pt-4 border-t border-neutral-100 mt-auto">
                <span className="text-xl font-extrabold text-amber-600">{item.price}</span>
                
                {/* Tombol Info (Detail) Baru */}
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <button className="relative z-10 bg-neutral-100 text-neutral-600 group-hover:bg-amber-500 group-hover:text-white p-3 rounded-2xl transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/50 active:scale-90 flex items-center justify-center">
                    <Info size={20} className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL POP-UP DETAIL MENU --- */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-fade-in"
          onClick={closeModal} 
        >
          <div 
            className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative animate-pop-in"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all hover:rotate-90 hover:scale-110 duration-300"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 w-full">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              {/* Menampilkan kategori sebagai badge di modal karena data AllMenuPage tidak memiliki badge khusus */}
              <div className="absolute bottom-4 left-6 bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center shadow-md">
                {selectedItem.category}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-neutral-900 leading-tight mb-4">
                {selectedItem.name}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed mb-8">
                {selectedItem.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-500 font-medium">Harga</span>
                  <span className="text-2xl font-extrabold text-amber-600">
                    {selectedItem.price}
                  </span>
                </div>
                
                <button className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-lg active:scale-95 group">
                  <ShoppingBag size={18} className="transform group-hover:-translate-y-1 transition-transform" />
                  Pesan
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}