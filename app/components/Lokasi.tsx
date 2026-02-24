"use client";

import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Map } from 'lucide-react';

export default function LocationSection() {
  // URL untuk mengarahkan pengguna ke aplikasi Google Maps
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jl.+Anggrek+Garuda+No.h+10,+Kemanggisan,+Palmerah,+Jakarta+Barat";
  
  // URL untuk embed iframe peta di website
  const embedMapUrl = "https://maps.google.com/maps?q=Jl.%20Anggrek%20Garuda%20No.h%2010,%20Kemanggisan,%20Palmerah,%20Jakarta%20Barat&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    // OPTIMASI: py-20 mobile, py-24 desktop (konsisten dgn section lain)
    <section id="location" className="py-20 md:py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 md:p-3.5 bg-amber-100 rounded-2xl text-amber-600 mb-5 md:mb-6 shadow-sm">
            <Map size={24} className="md:w-7 md:h-7" />
          </div>
          
          {/* OPTIMASI: text-4xl mobile, tracking-tight, whitespace-nowrap */}
          <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-[1.2] md:leading-tight mb-3 md:mb-4 tracking-tight">
            <span className="whitespace-nowrap">Temukan Kami</span>{" "}
            <span className="text-amber-500 whitespace-nowrap">Disini.</span>
          </h2>
          
          {/* OPTIMASI: text-[14px] mobile, md:text-base desktop */}
          <p className="text-[14px] sm:text-[15px] md:text-base text-neutral-600 font-medium">
            Empal Gentong Mas Khans • Slipi • Jakarta Barat
          </p>
        </div>

        {/* Grid Layout: Kiri (Info), Kanan (Maps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* KIRI: Card Informasi */}
          <div className="lg:col-span-5 bg-white rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 lg:p-10 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* OPTIMASI: text-xl mobile, text-2xl desktop */}
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6 md:mb-8 border-b border-neutral-100 pb-4">
               Informasi Lokasi
            </h3>

            <div className="space-y-6 md:space-y-8 flex-grow">
              
              {/* Telepon */}
              <div className="flex items-start gap-3.5 md:gap-4">
                <div className="p-2.5 md:p-3 bg-blue-50 text-blue-500 rounded-xl shrink-0 shadow-sm">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  {/* OPTIMASI: Label text-[11px] mobile */}
                  <h4 className="text-[11px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Telepon</h4>
                  {/* OPTIMASI: text-[15px] mobile */}
                  <a href="tel:+6289664031115" className="text-[15px] md:text-lg font-bold text-neutral-900 hover:text-blue-500 transition-colors">
                    +62 896 6403 1115
                  </a>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-3.5 md:gap-4">
                <div className="p-2.5 md:p-3 bg-green-50 text-green-500 rounded-xl shrink-0 shadow-sm">
                  <Clock size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Jam Buka</h4>
                  <p className="text-[15px] md:text-lg font-bold text-neutral-900">
                    Setiap Hari: <span className="text-green-600">10:00 - 21:00</span>
                  </p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-start gap-3.5 md:gap-4">
                <div className="p-2.5 md:p-3 bg-red-50 text-red-500 rounded-xl shrink-0 shadow-sm">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Alamat</h4>
                  {/* OPTIMASI: Tanpa justify, text-[14px] mobile, line-height dilonggarkan agar mudah dibaca */}
                  <p className="text-[14px] md:text-base text-neutral-600 leading-relaxed md:leading-relaxed font-medium">
                    Jl. Anggrek Garuda No.h 10, RT.1/RW.5, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480
                  </p>
                </div>
              </div>

            </div>

            {/* Tombol Buka di Google Maps */}
            <div className="pt-6 md:pt-8 mt-4 border-t border-neutral-100">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                // OPTIMASI: text-[14px] mobile
                className="flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-amber-500 text-white py-3.5 md:py-4 rounded-2xl text-[14px] md:text-base font-bold transition-all shadow-lg shadow-neutral-200 active:scale-95 group"
              >
                Buka di Google Maps
                <ExternalLink size={18} className="md:w-5 md:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* KANAN: Google Maps Embed */}
          <div className="lg:col-span-7 relative bg-neutral-200 rounded-[1.5rem] md:rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
            {/* Label Overlay di atas peta */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-md border border-neutral-100 flex items-center gap-2">
              <MapPin size={16} className="text-red-500 md:w-[18px] md:h-[18px]" />
              <span className="font-bold text-neutral-900 text-[11px] md:text-sm">Mas Khans Area</span>
            </div>

            <iframe 
              src={embedMapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-[1.1]" 
              title="Peta Lokasi Empal Gentong Mas Khans"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}