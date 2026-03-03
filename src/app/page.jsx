"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/section/Hero";
import Features from "../components/section/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/section/HowItWorks";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features/>
        <HowItWorks/>
      </div>
      <Footer />
    </main>
  );
}
