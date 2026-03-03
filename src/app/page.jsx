"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/section/Hero";
import Features from "../components/section/Features";
import HowItWorks from "../components/section/HowItWorks";
import ChallengePreview from "../components/section/ChallengePreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <ChallengePreview />
      </div>
      <Footer />
    </main>
  );
}
