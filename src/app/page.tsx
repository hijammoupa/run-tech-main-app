import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import {  Footers } from "../components/Footers";
import HeroSection from "../components/HeroSection";
import MangaSection from "../components/MangaSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";


export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection/>
      <MangaSection/>
      <ContactSection />
      <Footers/>
    </main>
  );
}