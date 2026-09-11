import React from 'react';
import { motion } from 'motion/react';
import { WORK_IMAGE_1, resolveImageUrl } from '../brandConfig';
import { BotanicalDivider, SideVineFlourish } from './BotanicalIllustrations';
import { useCustomPhoto } from '../hooks/useCustomPhotos';

export const BridalMehndi: React.FC = () => {
  const defaultBridalImg = resolveImageUrl(WORK_IMAGE_1, 'bridalMain');
  const { src: bridalImg } = useCustomPhoto('bridalMain', defaultBridalImg);

  return (
    <section id="bridal" className="relative py-24 sm:py-36 px-6 sm:px-10 bg-[#FDFBF7] overflow-hidden">
      {/* Background warm aesthetic aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F7F4EE]/80 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative side botanical vines */}
      <SideVineFlourish side="right" className="top-20" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side: Archival Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-5 relative group"
          >
            {/* Arch-shaped or double bordered luxury frame */}
            <div className="relative p-4 sm:p-6 bg-[#FDFBF7] border border-[#C5A059]/45 rounded-t-full rounded-b-2xl shadow-[0_20px_50px_rgba(99,57,40,0.06)]">
              {/* Inner frame */}
              <div className="relative rounded-t-full rounded-b-xl overflow-hidden border border-[#633928]/20 aspect-[3/4] bg-[#F7F4EE]">
                <img
                  src={bridalImg}
                  alt="Bridal Mehndi Luxury Artistry"
                  onError={(e) => {
                    if (defaultBridalImg) {
                      e.currentTarget.src = defaultBridalImg;
                    }
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Handcrafted Botanical Corner Flourishes */}
              <div className="absolute top-4 left-4 w-12 h-12 pointer-events-none opacity-90">
                <svg viewBox="0 0 50 50" fill="none">
                  <path d="M 5 45 C 5 20, 20 5, 45 5" stroke="#C5A059" strokeWidth="1" />
                  <circle cx="25" cy="25" r="2" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 pointer-events-none opacity-90 scale-x-[-1]">
                <svg viewBox="0 0 50 50" fill="none">
                  <path d="M 5 45 C 5 20, 20 5, 45 5" stroke="#C5A059" strokeWidth="1" />
                  <circle cx="25" cy="25" r="2" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Text Side: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
                Bespoke Bridal Couture
              </span>
            </div>

            <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#633928] font-normal tracking-tight leading-[1.15]">
              Made for Your Moment
            </h2>

            <p className="font-serif-luxury text-xl sm:text-2xl text-[#3E4D35] italic mt-6 max-w-xl">
              “Your wedding day deserves details that feel uniquely yours.”
            </p>

            <p className="font-sans text-base text-[#633928]/80 font-light leading-relaxed mt-4 max-w-lg">
              Every stroke is an intimate collaboration — blending ancestral precision with your personal love story to create an heirloom artwork that radiates grace throughout your celebrations.
            </p>

            {/* Three Elegant Words */}
            <div className="mt-10 pt-8 border-t border-[#C5A059]/35 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center sm:text-left space-y-1">
                <span className="font-display-luxury text-lg sm:text-xl md:text-2xl text-[#633928] tracking-wide block">
                  Intricate
                </span>
                <span className="text-xs text-[#3E4D35] font-serif-luxury italic">
                  Micro-fine detailing
                </span>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <span className="font-display-luxury text-lg sm:text-xl md:text-2xl text-[#633928] tracking-wide block">
                  Personal
                </span>
                <span className="text-xs text-[#3E4D35] font-serif-luxury italic">
                  Bespoke motifs & dates
                </span>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <span className="font-display-luxury text-lg sm:text-xl md:text-2xl text-[#633928] tracking-wide block">
                  Timeless
                </span>
                <span className="text-xs text-[#3E4D35] font-serif-luxury italic">
                  Enduring wedding beauty
                </span>
              </div>
            </div>

            {/* Subtle botanical flourish */}
            <BotanicalDivider variant="mandala" className="mt-10 max-w-xs self-start" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
