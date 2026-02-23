import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import PopularMenu from './components/PopularMenu';
import Faq from './components/Faq';
import HubungiKami from './components/HubungiKami';
import Testimonial from './components/Testimonial';
import Lokasi from './components/Lokasi';
import Footer from './components/Footer';

// Import komponen Wrapper Animasi kita
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  // --- SCRIPT RAHASIA SEO LOKAL GOOGLE (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Empal Gentong Mas Khans",
    "image": "https://www.empalgentongmaskhans.com/assets/empal-gentong.png", 
    "description": "Nikmati kelezatan otentik Empal Gentong khas Cirebon Mas Khans di Slipi, Jakarta Barat.",
    "servesCuisine": ["Indonesian", "Cirebon"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Slipi", 
      "addressLocality": "Jakarta Barat",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID"
    },
    "telephone": "+6289664031115",
    "priceRange": "Rp 15.000 - Rp 45.000"
  };

  return (
    // PERHATIKAN BARIS INI: Kata 'font-sans' sudah saya hapus!
    <div className="min-h-screen bg-[#FFFBEB] text-[#171717] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* --- INJEKSI SCRIPT SEO KE DALAM HTML --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <ScrollReveal direction="up"><Hero /></ScrollReveal>
      <ScrollReveal direction="right"><AboutUs /></ScrollReveal>
      <ScrollReveal direction="left"><Features /></ScrollReveal>
      <ScrollReveal direction="right"><PopularMenu /></ScrollReveal>
      <ScrollReveal direction="up"><Faq /></ScrollReveal>
      <ScrollReveal direction="up"><HubungiKami /></ScrollReveal>
      <ScrollReveal direction="up"><Testimonial /></ScrollReveal>
      <ScrollReveal direction="up"><Lokasi /></ScrollReveal>

      <Footer />
    </div>
  );
}