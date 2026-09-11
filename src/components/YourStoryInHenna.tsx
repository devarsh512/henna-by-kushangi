import React from 'react';
import { motion } from 'motion/react';
import { BotanicalDivider } from './BotanicalIllustrations';

export const YourStoryInHenna: React.FC = () => {
  const storyElements = [
    {
      title: 'Couple Initials',
      description: 'Discreetly woven into intricate lace vines or placed prominently within the bridal palm motif.'
    },
    {
      title: 'Wedding Dates',
      description: 'Artfully etched in Roman numerals or traditional calligraphy within delicate floral borders.'
    },
    {
      title: 'Meaningful Symbols',
      description: 'Sacred skylines, cherished flora, or emblems representing your shared heritage.'
    },
    {
      title: 'Special Memories',
      description: 'Visual cues of where you met, travel keepsakes, and favorite moments captured in fine lines.'
    },
    {
      title: 'Custom Motifs',
      description: 'Handcrafted peacocks, royal jharokhas, elephants, or modern geometric mandalas made exclusively for you.'
    }
  ];

  return (
    <section id="your-story" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
            Personalized Storytelling
          </span>
          <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#633928] font-normal tracking-tight">
            Your Story, In Henna
          </h2>
        </motion.div>

        <BotanicalDivider variant="lotus" className="my-8 max-w-xs" />

        {/* Large Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="my-6 sm:my-8"
        >
          <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#3E4D35] font-normal italic leading-[1.35]">
            “Because the most beautiful designs are the ones that mean something.”
          </p>
        </motion.blockquote>

        {/* Narrative text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-sans text-base text-[#633928]/85 font-light leading-relaxed max-w-2xl mx-auto"
        >
          We believe bridal mehndi is more than decoration — it is a living canvas of your journey. Every custom commission is tailored with elements personal to both of you:
        </motion.p>

        {/* Personalized Elements (Handcrafted Typography & Botanical Accents instead of cards) */}
        <div className="mt-14 space-y-8 max-w-3xl mx-auto text-left">
          {storyElements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10 pb-6 border-b border-[#C5A059]/25 last:border-b-0 group"
            >
              {/* Botanical bullet marker */}
              <div className="absolute left-0 top-1.5 flex items-center justify-center">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#A2583E] group-hover:scale-125 transition-transform duration-300" fill="none">
                  <circle cx="10" cy="10" r="4" stroke="#633928" strokeWidth="0.8" />
                  <circle cx="10" cy="10" r="1.8" fill="#C5A059" />
                  <path d="M 10 2 L 10 5 M 10 15 L 10 18 M 2 10 L 5 10 M 15 10 L 18 10" stroke="#A2583E" strokeWidth="0.8" />
                </svg>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <h4 className="font-heading-luxury text-base sm:text-lg text-[#633928] tracking-[0.1em] uppercase">
                  {item.title}
                </h4>
                <p className="font-serif-luxury text-base sm:text-lg text-[#3E4D35] italic sm:text-right max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
