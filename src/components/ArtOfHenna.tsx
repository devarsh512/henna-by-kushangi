import React from 'react';
import { motion } from 'motion/react';
import { BotanicalDivider, SideVineFlourish } from './BotanicalIllustrations';

export const ArtOfHenna: React.FC = () => {
  return (
    <section id="art-of-henna" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
      {/* Ambient Side Vines */}
      <SideVineFlourish side="left" className="top-10" />
      <SideVineFlourish side="right" className="bottom-10" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
            Philosophy & Dedication
          </span>
          <h2 className="font-heading-luxury text-2xl sm:text-3xl md:text-4xl text-[#633928] font-normal tracking-[0.12em] uppercase">
            The Art of Henna
          </h2>
        </motion.div>

        <BotanicalDivider variant="leaves" className="my-8 max-w-xs" />

        {/* Large Quote in Warm Organic style */}
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="my-8 sm:my-10"
        >
          <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#3E4D35] font-normal italic leading-[1.35] tracking-wide">
            “Every celebration has a story.{' '}
            <br className="hidden sm:inline" />
            Every story deserves a design of its own.”
          </p>
        </motion.blockquote>

        {/* Short Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-base sm:text-lg text-[#633928]/85 font-light leading-relaxed max-w-2xl mx-auto tracking-normal"
        >
          From intricate bridal details to graceful minimal designs, every creation is thoughtfully crafted to make your special moments even more memorable.
        </motion.p>

        {/* Three delicate signature craft notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 pt-10 border-t border-[#C5A059]/35 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="font-script-luxury text-3xl text-[#A2583E]">100% Organic</span>
            <span className="text-xs font-heading-luxury uppercase tracking-[0.18em] text-[#633928] mt-1">Natural Henna Stains</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-script-luxury text-3xl text-[#A2583E]">Custom Motifs</span>
            <span className="text-xs font-heading-luxury uppercase tracking-[0.18em] text-[#633928] mt-1">Personalized Storytelling</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-script-luxury text-3xl text-[#A2583E]">Timeless Grace</span>
            <span className="text-xs font-heading-luxury uppercase tracking-[0.18em] text-[#633928] mt-1">Wedding Couture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
