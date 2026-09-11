import React from 'react';
import { motion } from 'motion/react';
import { BotanicalDivider } from './BotanicalIllustrations';

export const WhatWeCreate: React.FC = () => {
  const creations = [
    {
      title: 'Bridal Mehndi',
      desc: 'Extensive, bespoke heirloom designs for both arms, palms, and feet tailored to your bridal attire and personal story.'
    },
    {
      title: 'Engagement Mehndi',
      desc: 'Refined, graceful patterns harmonizing traditional delicate motifs with contemporary romantic silhouettes.'
    },
    {
      title: 'Wedding Events',
      desc: 'Sangeet, Mehndi nights, and festive celebrations catering to brides, bridal parties, family, and distinguished guests.'
    },
    {
      title: 'Custom Mehndi',
      desc: 'Bespoke commissions, festive celebrations, milestone anniversaries, and editorial henna artistry.'
    }
  ];

  return (
    <section id="what-we-create" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-16"
        >
          <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
            Our Repertoire
          </span>
          <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#633928] font-normal tracking-tight">
            What We Create
          </h2>
          <BotanicalDivider variant="lotus" className="mt-6 max-w-xs" />
        </motion.div>

        {/* Text-Based Creation Flow Separated by Delicate Floral Ornaments */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {creations.map((item, index) => (
            <React.Fragment key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center max-w-xl"
              >
                <h3 className="font-display-luxury text-2xl sm:text-3xl md:text-4xl text-[#633928] font-normal tracking-wide transition-colors duration-300 group-hover:text-[#A2583E]">
                  {item.title}
                </h3>
                <p className="font-serif-luxury text-base sm:text-lg text-[#3E4D35] italic mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>

              {index < creations.length - 1 && (
                <div className="py-2" aria-hidden="true">
                  <svg viewBox="0 0 80 20" className="w-16 h-4 text-[#C5A059]" fill="none">
                    <path d="M 0 10 Q 40 0 80 10" stroke="#C5A059" strokeWidth="0.8" />
                    <circle cx="40" cy="10" r="2.5" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
                    <circle cx="25" cy="10" r="1.5" fill="#C5A059" />
                    <circle cx="55" cy="10" r="1.5" fill="#C5A059" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
