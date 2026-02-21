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
  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-[#171717]">
      <Navbar />
      <ScrollReveal direction="up"><Hero /></ScrollReveal>
      <ScrollReveal direction="up"><AboutUs /></ScrollReveal>
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