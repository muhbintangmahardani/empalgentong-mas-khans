import React from 'react';

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">Kenapa Harus Mas Khans?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kotak 1 */}
          <div className="group p-8 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-100/50">
            <div className="h-12 w-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.83 2.83l-1.1 8A4 4 0 0 0 8 19h5.5a4 4 0 0 0 3.1-1.7l1.47-2.47a3 3 0 1 0-5.24-2.66l-.93 2.83"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Resep Warisan Asli</h3>
            <p className="text-neutral-600 leading-relaxed">Bumbu rempah lengkap yang dimasak tradisional menggunakan gentong tanah liat untuk rasa otentik.</p>
          </div>

          {/* Kotak 2 */}
          <div className="group p-8 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-100/50">
            <div className="h-12 w-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17h-2v-4m0-10h16l-3 10h-10"/><path d="M3 3l2 2h14l-2 13"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Bahan Segar Harian</h3>
            <p className="text-neutral-600 leading-relaxed">Kami hanya menggunakan daging sapi segar pilihan setiap hari, bukan daging bekuan.</p>
          </div>

          {/* Kotak 3 */}
          <div className="group p-8 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-100/50">
            <div className="h-12 w-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Pelayanan Cepat</h3>
            <p className="text-neutral-600 leading-relaxed">Lapar tidak bisa menunggu. Kami memastikan pesanan Anda disajikan hangat dengan cepat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}