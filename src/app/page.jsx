"use client";

import Navbar from "../components/public/Navbar";
import Hero from "../components/public/section/Hero";
import Features from "../components/public/section/Features";
import HowItWorks from "../components/public/section/HowItWorks";
import ChallengePreview from "../components/public/section/ChallengePreview";
import Leaderboard from "../components/public/section/Leaderboard";
import CTA from "../components/public/section/CTA";
import Footer from "../components/public/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <ChallengePreview />
        <Leaderboard />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
