"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Info, X, LayoutGrid, UtensilsCrossed, Coffee } from 'lucide-react';

export default function AllMenuPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('Semua');

  const allMenuItems = [
    {
      id: 1,
      type: "makanan",
      category: "Empal Gentong",
      name: "Empal Gentong Santan",
      description: "Kuah santan gurih kaya rempah dengan irisan daging sapi empuk.",
      price: "Rp 25.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 2,
      type: "makanan",
      category: "Empal Gentong",
      name: "Empal Gentong Non-Santan (Asem)",
      description: "Kuah bening segar dengan belimbing wuluh dan daging empuk.",
      price: "Rp 25.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 3,
      type: "makanan",
      category: "Makanan Pendamping",
      name: "Nasi Lengko Spesial",
      description: "Nasi, tahu, tempe, tauge dengan siraman saus kacang.",
      price: "Rp 15.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 4,
      type: "makanan",
      category: "Menu Modern",
      name: "Indomie Mas Khans",
      description: "Indomie dengan siraman kuah empal dan daging sapi.",
      price: "Rp 18.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 5,
      type: "makanan",
      category: "Makanan Pendamping",
      name: "Sate Kambing Muda (10 Tusuk)",
      description: "Sate kambing muda khas Cirebon yang super empuk.",
      price: "Rp 45.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 6,
      type: "minuman",
      category: "Minuman Khas",
      name: "Es Tjampolay",
      description: "Sirup legendaris asli Cirebon rasa pisang susu yang manis dan segar.",
      price: "Rp 12.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 7,
      type: "minuman",
      category: "Minuman",
      name: "Es Teh Manis / Tawar",
      description: "Teh melati pilihan yang diseduh sempurna, nikmat disajikan dingin.",
      price: "Rp 5.000",
      image: "/assets/empal-gentong.png"
    },
    {
      id: 8,
      type: "minuman",
      category: "Minuman",
      name: "Es Jeruk / Jeruk Panas",
      description: "Perasan jeruk segar asli, kaya akan vitamin C.",
      price: "Rp 8.000",
      image: "/assets/empal-gentong.png"
    }
  ];

  const filteredMenu = activeFilter === 'Semua' 
    ? allMenuItems 
    : allMenuItems.filter(item => item.type === activeFilter.toLowerCase());

  const closeModal = () => setSelectedItem(null);

  const filterOptions = [
    { label: 'Semua', icon: <LayoutGrid size={18} /> },
    { label: 'Makanan', icon: <UtensilsCrossed size={18} /> },
    { label: 'Minuman', icon: <Coffee size={18} /> }
  ];

  return (
    // Menambahkan kelas 'animate-fade-in-page' ke pembungkus utama
    <main className="min-h-screen bg-[#FFFBEB] pt-8 pb-24 relative animate-fade-in-page">
      
      <style>{`
        /* Animasi Transisi Halaman (Memudar Masuk) */
        @keyframes fadeInPage {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-page { 
          animation: fadeInPage 0.6s ease-out forwards; 
        }

        /* Animasi Modal & Filter */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pop-in { animation: popIn 0.3s ease-out forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Tombol Kembali ke #menu */}
        <div className="mb-8">
          <Link href="/#menu" className="inline-flex items-center gap-2 text-neutral-600 hover:text-amber-600 font-semibold transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-amber-100 w-fit active:scale-95">
            <ArrowLeft size={20} />
            Kembali
          </Link>
        </div>

        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
            Menu Lengkap <span className="text-amber-500">Mas Khans.</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Dari hidangan legendaris warisan leluhur hingga racikan modern, temukan semua kelezatan kami di sini.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-3 mb-10">
          {filterOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => setActiveFilter(option.label)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeFilter === option.label
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-white text-neutral-600 hover:bg-amber-50 hover:text-amber-600 border border-neutral-200"
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>

        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredMenu.map((item) => (
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
                
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <button className="relative z-10 bg-neutral-100 text-neutral-600 group-hover:bg-amber-500 group-hover:text-white p-3 rounded-2xl transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-amber-500/50 active:scale-90 flex items-center justify-center">
                    <Info size={20} className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </button>
                </div>

              </div>
            </div>
          ))}

          {filteredMenu.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-neutral-500 text-lg">Maaf, menu belum tersedia untuk kategori ini.</p>
            </div>
          )}
        </div>

      </div>

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
                <div className="flex flex-col w-full text-center">
                  <span className="text-sm text-neutral-500 font-medium uppercase tracking-widest mb-1">Harga Menu</span>
                  <span className="text-3xl font-extrabold text-amber-600">
                    {selectedItem.price}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}