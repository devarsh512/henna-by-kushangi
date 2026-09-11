import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Instagram } from 'lucide-react';
import { INSTAGRAM_USERNAME, INSTAGRAM_URL } from '../brandConfig';
import { BotanicalDivider } from './BotanicalIllustrations';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
            Social Artistry
          </span>
          <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#633928] font-normal tracking-tight">
            Follow the Journey
          </h2>
          <p className="font-serif-luxury text-lg sm:text-xl text-[#3E4D35] italic">
            More designs. More moments. More mehndi magic.
          </p>
        </motion.div>

        <BotanicalDivider variant="lotus" className="my-8 max-w-xs" />

        {/* Large Elegant Display of Username */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="my-8"
        >
          <a
            id="instagram-large-handle-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#633928] hover:text-[#A2583E] tracking-wide transition-colors duration-300 group"
          >
            <span className="relative">
              {INSTAGRAM_USERNAME}
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </motion.div>

        {/* Button: Visit Instagram ↗ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8"
        >
          <a
            id="visit-instagram-btn"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#633928] bg-[#633928] hover:bg-[#452417] text-[#FDFBF7] font-heading-luxury text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4 text-[#E8D3D1]" />
            <span>Visit Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E8D3D1] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
