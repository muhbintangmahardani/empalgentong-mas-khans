"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, Flame, Sparkles, Info, X, Leaf } from 'lucide-react';

export default function PopularMenu() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const menuItems = [
    {
      id: 1,
      name: "Empal Gentong Santan",
      description: "Signature dish Mas Khans. Kuah santan gurih kaya rempah dengan irisan daging sapi pilihan yang sangat empuk. Dimasak secara perlahan untuk mempertahankan aroma khas Cirebon yang autentik.",
      price: "Rp 25.000",
      image: "assets/empal-gentong.png", 
      badge: "Best Seller",
      icon: <Star size={14} className="fill-amber-400 text-amber-400" />
    },
    {
      id: 2,
      name: "Empal Gentong Non-Santan",
      description: "Sering disebut Empal Asem. Kuah bening segar dengan sensasi asam gurih dari belimbing wuluh dan daging empuk. Sangat cocok bagi Anda yang menginginkan kehangatan tanpa santan.",
      price: "Rp 25.000",
      image: "assets/empal-gentong.png",
      badge: "Segar",
      icon: <Flame size={14} className="text-orange-400" />
    },
    {
      id: 3,
      name: "Nasi Lengko Spesial",
      description: "Perpaduan nasi hangat, tahu, tempe, tauge segar, siraman saus kacang khas Cirebon dan taburan kucai. Menu sehat yang mengenyangkan dan kaya rasa.",
      price: "Rp 15.000",
      image: "assets/empal-gentong.png",
      badge: "Pilihan Sehat",
      icon: <Leaf size={14} className="text-emerald-400" />
    },
    {
      id: 4,
      name: "Indomie Mas Khans",
      description: "Bukan Indomie biasa. Diracik dengan bumbu rahasia Mas Khans dan dipadukan dengan siraman kuah empal yang kaya rasa, ditambah topping daging sapi empuk.",
      price: "Rp 18.000",
      image: "assets/empal-gentong.png",
      badge: "Menu Unik",
      icon: <Sparkles size={14} className="text-amber-400" />
    }
  ];

  const closeModal = () => setSelectedItem(null);

  // --- PERBAIKAN: JURUS KUNCI SCROLL PALING AMPUH (Bisa untuk iOS/Safari) ---
  useEffect(() => {
    if (selectedItem) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Mematikan gestur scroll di layar HP
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [selectedItem]);

  return (
    <section id="menu" className="py-20 md:py-24 bg-neutral-50 relative">
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          50% { transform: translateX(200%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }

        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-pop-in { animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-shimmer {
          animation: shimmer-sweep 3s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-end mb-10 md:mb-16 gap-6 w-full text-left">
          
          <div className="max-w-2xl w-full">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-amber-50 text-amber-600 font-bold text-[11px] md:text-sm mb-4 md:mb-5 border border-amber-200/50 shadow-sm">
              <Sparkles size={16} className="animate-pulse text-amber-500 md:w-4 md:h-4 w-3.5 h-3.5" />
              Pilihan Favorit
            </span>
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-[1.2] md:leading-tight w-full tracking-tight">
              <span className="whitespace-nowrap">Menu Andalan</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 whitespace-nowrap">Mas Khans.</span>
            </h2>
          </div>
          
          <Link href="/menu" className="hidden md:flex items-center gap-2 text-neutral-600 hover:text-amber-600 font-bold text-sm md:text-base transition-colors group shrink-0">
            Lihat Semua Menu 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Grid Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[1.5rem] md:rounded-3xl border border-neutral-100 shadow-lg shadow-neutral-200/40 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 md:hover:-translate-y-2 flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(item)} 
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden bg-neutral-100 group">
                
                {item.badge && (
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 overflow-hidden bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-neutral-700/50">
                    <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer z-0 pointer-events-none"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-white tracking-wide">
                      {item.icon}
                      {item.badge}
                    </div>
                  </div>
                )}
                
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 leading-tight mb-2">
                    {item.name}
                  </h3>
                  {/* PERBAIKAN: Dibuat rata kiri natural (text-left) */}
                  <p className="text-[14px] sm:text-sm md:text-[15px] text-neutral-500 leading-relaxed mb-6 line-clamp-3 text-left">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                  <span className="text-base md:text-lg font-extrabold text-amber-600">
                    {item.price}
                  </span>
                  
                  <button 
                    className="flex items-center justify-center p-2 md:p-2.5 rounded-2xl bg-amber-50 text-amber-500 border border-amber-200/50 transition-all duration-200 active:scale-90 active:bg-amber-500 active:text-white md:hover:bg-amber-500 md:hover:text-white shadow-sm"
                    aria-label="Lihat Detail Menu"
                  >
                    <Info size={18} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua Menu (Mobile) */}
        <div className="mt-8 text-center md:hidden w-full">
            <Link href="/menu" className="block w-full py-3.5 rounded-full border-2 border-amber-200 text-amber-600 text-[15px] font-bold hover:bg-amber-50 transition-colors active:scale-95">
                Lihat Semua Menu
            </Link>
        </div>

      </div>

      {/* --- MODAL POP-UP DETAIL MENU --- */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-fade-in touch-none"
          /* Pastikan area ini kosong tanpa fungsi onClick apapun */
        >
          <div 
            className="bg-white rounded-[1.5rem] md:rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative animate-pop-in pointer-events-auto"
            /* Tidak ada stopPropagation karena parent sudah bersih */
          >
            {/* INI SATU-SATUNYA CARA KELUAR */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 active:scale-90 text-white p-2 rounded-full backdrop-blur-md transition-all md:hover:rotate-90 md:hover:scale-110 duration-300"
            >
              <X size={20} />
            </button>

            <div className="relative h-56 md:h-64 w-full">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {selectedItem.badge && (
                <div className="absolute bottom-4 left-5 md:left-6 overflow-hidden bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-neutral-700/50">
                  <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer z-0 pointer-events-none"></div>
                  <div className="relative z-10 flex items-center gap-1.5 md:gap-2 text-[11px] md:text-sm font-bold text-white tracking-wide">
                    {selectedItem.icon && React.cloneElement(selectedItem.icon as React.ReactElement<any>, { size: 16 })}
                    {selectedItem.badge}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-tight mb-3 md:mb-4">
                {selectedItem.name}
              </h3>
              
              {/* PERBAIKAN: Dibuat rata kiri natural (text-left) */}
              <p className="text-[14px] md:text-base text-neutral-600 leading-relaxed mb-6 md:mb-8 text-left">
                {selectedItem.description}
              </p>

              <div className="flex items-center justify-between pt-5 md:pt-6 border-t border-neutral-100">
                <div className="flex flex-col w-full text-center">
                  <span className="text-xs md:text-sm text-neutral-500 font-medium uppercase tracking-widest mb-1">Harga Menu</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-amber-600">
                    {selectedItem.price}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}