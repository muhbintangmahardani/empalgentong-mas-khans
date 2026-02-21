"use client";

import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Map } from 'lucide-react';

export default function LocationSection() {
  // URL untuk mengarahkan pengguna ke aplikasi Google Maps
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jl.+Anggrek+Garuda+No.h+10,+Kemanggisan,+Palmerah,+Jakarta+Barat";
  
  // URL untuk embed iframe peta di website
  const embedMapUrl = "https://maps.google.com/maps?q=Jl.%20Anggrek%20Garuda%20No.h%2010,%20Kemanggisan,%20Palmerah,%20Jakarta%20Barat&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-2xl text-amber-600 mb-6">
            <Map size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-4">
            Temukan Kami <span className="text-amber-500">Disini.</span>
          </h2>
          <p className="text-lg text-neutral-600 font-medium">
            Empal Gentong Mas Khans • Slipi • Jakarta Barat
          </p>
        </div>

        {/* Grid Layout: Kiri (Info), Kanan (Maps) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* KIRI: Card Informasi */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 md:p-10 border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 border-b border-neutral-100 pb-4">
               Informasi Lokasi
            </h3>

            <div className="space-y-8 flex-grow">
              
              {/* Telepon */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-500 rounded-xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">Telepon</h4>
                  <a href="tel:+6289664031115" className="text-lg font-bold text-neutral-900 hover:text-blue-500 transition-colors">
                    +6289664031115
                  </a>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-500 rounded-xl shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">Jam Buka</h4>
                  <p className="text-lg font-bold text-neutral-900">
                    Setiap Hari: <span className="text-green-600">10:00 - 21:00</span>
                  </p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-red-500 rounded-xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-1">Alamat</h4>
                  <p className="text-base text-neutral-700 leading-relaxed font-medium">
                    Jl. Anggrek Garuda No.h 10, RT.1/RW.5, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480
                  </p>
                </div>
              </div>

            </div>

            {/* Tombol Buka di Google Maps */}
            <div className="pt-8 mt-4 border-t border-neutral-100">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-amber-500 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-neutral-200 active:scale-95 group"
              >
                Buka di Google Maps
                <ExternalLink size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* KANAN: Google Maps Embed */}
          <div className="lg:col-span-7 relative bg-neutral-200 rounded-3xl overflow-hidden shadow-xl border-4 border-white min-h-[400px] md:min-h-[500px]">
            {/* Label Overlay di atas peta */}
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-neutral-100 flex items-center gap-2">
              <MapPin size={18} className="text-red-500" />
              <span className="font-bold text-neutral-900 text-sm">Mas Khans Area</span>
            </div>

            <iframe 
              src={embedMapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-[1.1]" // Sedikit filter agar warna peta lebih menyatu dengan tema web
              title="Peta Lokasi Empal Gentong Mas Khans"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}