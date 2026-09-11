/**
 * ============================================================================
 * 🌸 HENNA BY KUSHANGI — EDITABLE BRAND SETTINGS
 * ============================================================================
 * 
 * ✏️ EDIT THESE DETAILS
 * You can easily update your brand information, social links, and images in
 * `src/brandConfig.ts`. The settings are centralized so you can replace:
 * 
 * - BRAND_NAME = "Henna by Kushangi"
 * - INSTAGRAM_USERNAME = "@hennabykushangi"
 * - INSTAGRAM_URL = "https://www.instagram.com/hennabykushangi/"
 * - EMAIL = "kushangiprajapati63@gmail.com"
 * - LOGO_IMAGE = "https://www.instagram.com/hennabykushangi/"
 * - HERO_IMAGE = "https://www.instagram.com/p/DbnJctdiUlF/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
 * - WORK_IMAGE_1 to WORK_IMAGE_8
 * 
 * ============================================================================
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { BotanicalFrame } from './components/BotanicalFrame';
import { OpeningExperience } from './components/OpeningExperience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArtOfHenna } from './components/ArtOfHenna';
import { MehndiStories } from './components/MehndiStories';
import { BridalMehndi } from './components/BridalMehndi';
import { YourStoryInHenna } from './components/YourStoryInHenna';
import { WhatWeCreate } from './components/WhatWeCreate';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#633928] paper-texture overflow-x-hidden selection:bg-[#C5A059]/20 selection:text-[#633928]">
      {/* Opening Handcrafted Mehndi Animation */}
      <AnimatePresence>
        {showIntro && (
          <OpeningExperience onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Continuous Hand-drawn Botanical Floral Frame around entire page */}
      <BotanicalFrame />

      {/* Minimal Luxury Navigation Header */}
      <Header />

      {/* Main Single-Page Continuous Digital Artwork */}
      <main className="relative z-20">
        {/* Editorial Hero Section */}
        <Hero />

        {/* The Art of Henna (Spacious Quote & Philosophy) */}
        <ArtOfHenna />

        {/* Our Mehndi Stories (Asymmetric Magazine Portfolio) */}
        <MehndiStories />

        {/* Bridal Mehndi (Archival Visual & Made for Your Moment) */}
        <BridalMehndi />

        {/* Your Story, In Henna (Personalized Wedding Storytelling) */}
        <YourStoryInHenna />

        {/* What We Create (Text Flow with Floral Separators) */}
        <WhatWeCreate />

        {/* Follow the Journey Instagram Section */}
        <InstagramSection />

        {/* Contact Section (Email & Instagram) */}
        <ContactSection />
      </main>

      {/* Minimal Footer with Corner Growing Botanicals */}
      <Footer />
    </div>
  );
}

