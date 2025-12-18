"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import ClientManual from "@/components/sections/ClientManual";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesDetailed />
      <Pricing />
      <Testimonials />
      <ClientManual />
      <Contact />
      <Footer />
    </main>
  );
}
