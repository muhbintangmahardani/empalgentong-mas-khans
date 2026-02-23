"use client";

import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 border-b border-amber-100 bg-[#FFFBEB]/90 backdrop-blur-md">
      {/* --- CONTAINER UTAMA (py-3 untuk navbar lebih ramping) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 z-50 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/assets/logo.png" 
            alt="Logo Mas Khans" 
            className="h-8 w-8 md:h-9 md:w-9 object-contain drop-shadow-sm" 
          />
          <span className="text-lg md:text-xl font-extrabold tracking-tight">
            Mas Khans<span className="text-amber-500">.</span>
          </span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-7 font-semibold text-neutral-600 text-sm">
          {[
            { name: 'Beranda', id: '' },
            { name: 'Tentang Kami', id: 'tentang-kami' },
            { name: 'Menu', id: 'menu' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Testimonial', id: 'testimonials' },
            { name: 'Lokasi', id: 'location' },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="relative py-1 hover:text-amber-600 transition-colors group"
            >
              {item.name}
              {/* ANIMASI GARIS BAWAH */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* TOMBOL PESAN & HAMBURGER */}
        <div className="flex items-center gap-4 z-50">
          <button 
            onClick={(e) => handleScroll(e, 'contact')}
            className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md shadow-amber-200/50 active:scale-95"
          >
            <ShoppingBag size={16} />
            Pesan Sekarang
          </button>

          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 -mr-2 text-neutral-600 hover:text-amber-600 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MENU DROPDOWN MOBILE --- */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#FFFBEB] border-b border-amber-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-5">
          <a href="#" onClick={(e) => handleScroll(e, '')} className="hover:text-amber-600 transition-colors font-bold text-sm">Beranda</a>  
          <a href="#tentang-kami" onClick={(e) => handleScroll(e, 'tentang-kami')} className="hover:text-amber-600 transition-colors font-bold text-sm">Tentang Kami</a>
          <a href="#menu" onClick={(e) => handleScroll(e, 'menu')} className="hover:text-amber-600 transition-colors font-bold text-sm">Lihat Menu</a>
          <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="hover:text-amber-600 transition-colors font-bold text-sm">FAQ</a>
          <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="hover:text-amber-600 transition-colors font-bold text-sm">Testimonial</a>
          <a href="#location" onClick={(e) => handleScroll(e, 'location')} className="hover:text-amber-600 transition-colors font-bold text-sm">Temukan Kami</a>
          
          <button 
            onClick={(e) => handleScroll(e, 'contact')}
            className="sm:hidden mt-2 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-full font-bold transition-all shadow-md active:scale-95 text-sm"
          >
            <ShoppingBag size={18} />
            Pesan Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}