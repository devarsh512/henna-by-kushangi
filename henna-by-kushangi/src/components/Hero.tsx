import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import {
  HERO_IMAGE,
  INSTAGRAM_USERNAME,
  INSTAGRAM_URL,
  resolveImageUrl
} from '../brandConfig';
import { BotanicalDivider } from './BotanicalIllustrations';
import { useCustomPhoto } from '../hooks/useCustomPhotos';

export const Hero: React.FC = () => {
  const defaultHeroSrc = resolveImageUrl(HERO_IMAGE, 'hero');
  const { src: heroImgSrc } = useCustomPhoto('hero', defaultHeroSrc);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#F7F4EE]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">
        {/* Subtle Wedding Season / Artistry Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#FDFBF7]/90 backdrop-blur-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E4D35]" />
          <span className="font-heading-luxury text-[11px] tracking-[0.25em] text-[#C5A059] uppercase">
            Bridal Mehndi • Custom Henna
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E4D35]" />
        </motion.div>

        {/* Large Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="font-display-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#633928] font-normal leading-[1.12] tracking-tight max-w-4xl"
        >
          Where Every Design <br className="hidden sm:inline" />
          <span className="font-serif-luxury italic font-normal text-[#633928]">
            Tells a Story
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#3E4D35] mt-4 sm:mt-5 tracking-wide max-w-2xl"
        >
          Bridal Mehndi • Custom Henna • Wedding Celebrations
        </motion.p>

        {/* Botanical Divider */}
        <BotanicalDivider variant="lotus" className="my-6 max-w-xs" />

        {/* Hero Image in a Handcrafted Botanical Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-2 sm:mt-4 w-full max-w-2xl group"
        >
          {/* Outer Gold & Mehndi Double Frame */}
          <div className="relative p-3 sm:p-5 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/45 shadow-[0_20px_50px_rgba(99,57,40,0.08)]">
            {/* Fine Inner Accent Border */}
            <div className="relative rounded-xl overflow-hidden border border-[#633928]/20 bg-[#F7F4EE]">
              <div className="aspect-[1/1] sm:aspect-[4/3] w-full relative overflow-hidden flex items-center justify-center">
                <img
                  src={heroImgSrc}
                  alt="Henna by Kushangi - Bridal Mehndi Artistry"
                  onError={(e) => {
                    if (defaultHeroSrc) {
                      e.currentTarget.src = defaultHeroSrc;
                    }
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Corner Botanical Floral Flourishes around Hero Image */}
            <div className="absolute -top-3 -left-3 w-10 h-10 pointer-events-none">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M 4 36 L 4 4 L 36 4" stroke="#C5A059" strokeWidth="1.5" />
                <circle cx="4" cy="4" r="3" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                <path d="M 4 4 C 12 12, 12 18, 4 24" stroke="#3E4D35" strokeWidth="1" />
                <path d="M 4 4 C 12 12, 18 12, 24 4" stroke="#3E4D35" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute -top-3 -right-3 w-10 h-10 pointer-events-none scale-x-[-1]">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M 4 36 L 4 4 L 36 4" stroke="#C5A059" strokeWidth="1.5" />
                <circle cx="4" cy="4" r="3" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                <path d="M 4 4 C 12 12, 12 18, 4 24" stroke="#3E4D35" strokeWidth="1" />
                <path d="M 4 4 C 12 12, 18 12, 24 4" stroke="#3E4D35" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 pointer-events-none scale-y-[-1]">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M 4 36 L 4 4 L 36 4" stroke="#C5A059" strokeWidth="1.5" />
                <circle cx="4" cy="4" r="3" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                <path d="M 4 4 C 12 12, 12 18, 4 24" stroke="#3E4D35" strokeWidth="1" />
                <path d="M 4 4 C 12 12, 18 12, 24 4" stroke="#3E4D35" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 pointer-events-none scale-x-[-1] scale-y-[-1]">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M 4 36 L 4 4 L 36 4" stroke="#C5A059" strokeWidth="1.5" />
                <circle cx="4" cy="4" r="3" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                <path d="M 4 4 C 12 12, 12 18, 4 24" stroke="#3E4D35" strokeWidth="1" />
                <path d="M 4 4 C 12 12, 18 12, 24 4" stroke="#3E4D35" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Primary CTA: See Our Work ↓ */}
          <a
            id="hero-see-work-btn"
            href="#our-work"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#633928] bg-[#633928] hover:bg-[#452417] text-[#FDFBF7] font-heading-luxury text-xs tracking-[0.22em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>See Our Work</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#E8D3D1] transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary CTA: @hennabykushangi ↗ */}
          <a
            id="hero-instagram-secondary-btn"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#C5A059]/60 bg-[#FDFBF7]/90 hover:bg-[#F7F4EE] text-[#633928] font-heading-luxury text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#633928]"
          >
            <span>{INSTAGRAM_USERNAME}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
