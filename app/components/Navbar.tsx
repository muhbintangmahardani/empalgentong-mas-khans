"use client";

import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Ganti nomor ini dengan nomor WhatsApp asli Mas Khans (gunakan format 62 tanpa + atau 0)
  const whatsappNumber = "6281234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fungsi untuk scroll mulus ke section yang dituju & menutup menu mobile
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Tutup menu mobile jika sedang terbuka
    setIsOpen(false);

    // Jika target kosong (Beranda), scroll paling atas
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Cari elemen berdasarkan ID dan scroll
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-amber-100 bg-[#FFFBEB]/90 backdrop-blur-md">
      {/* --- CONTAINER UTAMA --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 z-50 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Mengganti Inisial M dengan Logo Lokal */}
          <img 
            src="assets/logo.png" /* Ganti nama file ini sesuai dengan nama logo Anda di folder public, misal: /icon.png */
            alt="Logo Mas Khans" 
            className="h-10 w-10 object-contain drop-shadow-sm" /* Ukuran bisa disesuaikan, h-10 = 40px */
          />
          <span className="text-xl font-extrabold tracking-tight">
            Mas Khans<span className="text-amber-500">.</span>
          </span>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-neutral-600">
          <a href="#" onClick={(e) => handleScroll(e, '')} className="hover:text-amber-600 transition-colors">Beranda</a>
          <a href="#tentang-kami" onClick={(e) => handleScroll(e, 'tentang-kami')} className="hover:text-amber-600 transition-colors">Tentang Kami</a>
          <a href="#menu" onClick={(e) => handleScroll(e, 'menu')} className="hover:text-amber-600 transition-colors">Lihat Menu</a>
          <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="hover:text-amber-600 transition-colors">FAQ</a>
          <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="hover:text-amber-600 transition-colors">Testimonial</a>
          <a href="#location" onClick={(e) => handleScroll(e, 'location')} className="hover:text-amber-600 transition-colors">Temukan Kami</a>
        </div>

        {/* TOMBOL PESAN & HAMBURGER */}
        <div className="flex items-center gap-4 z-50">
          {/* Tombol Pesan Desktop/Tablet */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-amber-200/50 active:scale-95"
          >
            <ShoppingBag size={18} />
            Pesan Sekarang
          </a>

          {/* Tombol Hamburger Mobile/iPad */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 -mr-2 text-neutral-600 hover:text-amber-600 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENU DROPDOWN MOBILE & IPAD --- */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#FFFBEB] border-b border-amber-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          <a href="#" onClick={(e) => handleScroll(e, '')} className="hover:text-amber-600 transition-colors font-medium">Beranda</a>  
          <a href="#tentang-kami" onClick={(e) => handleScroll(e, 'tentang-kami')} className="hover:text-amber-600 transition-colors font-medium">Tentang Kami</a>
          <a href="#menu" onClick={(e) => handleScroll(e, 'menu')} className="hover:text-amber-600 transition-colors font-medium">Lihat Menu</a>
          <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="hover:text-amber-600 transition-colors font-medium">FAQ</a>
          <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="hover:text-amber-600 transition-colors font-medium">Testimonial</a>
          <a href="#location" onClick={(e) => handleScroll(e, 'location')} className="hover:text-amber-600 transition-colors font-medium">Temukan Kami</a>
          
          {/* Tombol Pesan Khusus Mobile Layar Kecil */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-2 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white px-5 py-3.5 rounded-full font-semibold transition-all shadow-md shadow-amber-200/50 active:scale-95"
          >
            <ShoppingBag size={18} />
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}