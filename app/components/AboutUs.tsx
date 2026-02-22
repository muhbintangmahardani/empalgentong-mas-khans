"use client";

import React from 'react';
import { Flame, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="tentang-kami" className="py-24 bg-[#FFFBEB] relative overflow-hidden">
      
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-50/50 rounded-l-[5rem] -z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* --- BAGIAN KIRI: AREA GAMBAR --- */}
        <div className="w-full lg:w-1/2 relative">
          {/* Latar Belakang Gambar (Kotak Miring) */}
          <div className="absolute inset-0 bg-amber-200 rounded-[2.5rem] rotate-3 scale-105 z-0 transition-transform duration-500 hover:rotate-6"></div>
          
          {/* Kontainer Gambar Utama */}
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl animate-float-slow group">
            <img 
              src="assets/aboutus.png" // <-- Ganti nama file ini dengan gambar lokal Anda nanti
              alt="Sejarah Empal Gentong Mas Khans" 
              className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Badge Animasi Melayang di Sudut Gambar */}
          <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 animate-float-medium z-20">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
              <Award size={28} />
            </div>
            <div>
              <p className="font-extrabold text-neutral-900 text-lg leading-tight">100% Asli</p>
              <p className="text-sm font-medium text-neutral-500">Resep Turun Temurun</p>
            </div>
          </div>
        </div>

        {/* --- BAGIAN KANAN: TEKS & IKON --- */}
        <div className="w-full lg:w-1/2 space-y-8 z-10">
          
          {/* Judul */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-600 font-bold text-sm mb-4 border border-amber-200 shadow-sm">
              {/* --- PERBAIKAN 1: Menambahkan animate-pulse pada ikon Heart --- */}
              <Heart size={16} className="fill-amber-500 text-amber-500 animate-pulse" />
              Cerita Mas Khans
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
              Menjaga Tradisi, <br />
              <span className="text-amber-500">Merawat Cita Rasa.</span>
            </h2>
          </div>

          {/* Paragraf Cerita */}
          <p className="text-lg text-neutral-600 leading-relaxed">
            Berawal dari resep keluarga yang dijaga ketat keasliannya, Mas Khans hadir untuk membawa kembali kenangan rasa otentik khas Cirebon. Kami percaya bahwa makanan lezat berasal dari kejujuran bahan dan kesabaran dalam memasak.
          </p>

          {/* List Keunggulan dengan Ikon */}
          <div className="space-y-4 pt-4">
            
            {/* Poin 1 (DI-UPDATE CAPTION-NYA) */}
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-amber-100/50 transition-all border border-transparent hover:border-amber-100">
              <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600 shrink-0 mt-1">
                <Flame size={24} />
              </div>
              <div>
                {/* --- PERBAIKAN 2: Mengupdate Judul & Deskripsi --- */}
                <h3 className="font-bold text-neutral-900 text-lg mb-1">Kaya Rempah & Kuah Kental</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">Perpaduan rempah-rempah pilihan dan santan segar menghasilkan kuah yang gurih, kental, dan beraroma harum yang khas.</p>
              </div>
            </div>

            {/* Poin 2 */}
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-amber-100/50 transition-all border border-transparent hover:border-amber-100">
              <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600 shrink-0 mt-1">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-1">Daging Sapi Segar Pilihan</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">Hanya menggunakan potongan daging dan jeroan sapi segar setiap harinya untuk tekstur empuk yang sempurna.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}