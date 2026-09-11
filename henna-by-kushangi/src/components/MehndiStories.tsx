import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ZoomIn, X } from 'lucide-react';
import {
  WORK_IMAGE_1,
  WORK_IMAGE_2,
  WORK_IMAGE_3,
  WORK_IMAGE_4,
  WORK_IMAGE_5,
  WORK_IMAGE_6,
  WORK_IMAGE_7,
  WORK_IMAGE_8,
  INSTAGRAM_URL,
  resolveImageUrl
} from '../brandConfig';
import { BotanicalDivider } from './BotanicalIllustrations';
import { useCustomPhoto } from '../hooks/useCustomPhotos';

interface PortfolioItemProps {
  id: number;
  storageKey: string;
  defaultSrc: string;
  alt: string;
  span: string;
  label: string;
  onOpenZoom: (src: string) => void;
}

const PortfolioCard: React.FC<PortfolioItemProps> = ({
  storageKey,
  defaultSrc,
  alt,
  span,
  label,
  onOpenZoom
}) => {
  const { src } = useCustomPhoto(storageKey, defaultSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className={`relative group cursor-pointer ${span}`}
      onClick={() => onOpenZoom(src)}
    >
      {/* Decorative archival photo mount */}
      <div className="relative w-full h-full p-2 sm:p-3 bg-[#FDFBF7] border border-[#C5A059]/40 rounded-xl shadow-[0_10px_30px_rgba(99,57,40,0.04)] transition-all duration-500 group-hover:border-[#633928]/60 group-hover:shadow-[0_16px_40px_rgba(99,57,40,0.08)]">
        {/* Image Container with Overflow Hidden */}
        <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#F7F4EE]">
          <img
            src={src}
            alt={alt}
            onError={(e) => {
              if (defaultSrc) {
                e.currentTarget.src = defaultSrc;
              }
            }}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Hover Action Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#633928]/80 via-[#633928]/20 to-transparent transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4 opacity-0 group-hover:opacity-100 z-20">
            {/* Top Bar with Zoom and Label */}
            <div className="flex items-center justify-between w-full">
              <span className="text-[10px] font-heading-luxury uppercase tracking-widest text-[#FDFBF7] bg-[#633928]/60 backdrop-blur-sm px-2 py-0.5 rounded">
                {label}
              </span>
              <div
                className="p-1.5 rounded-full bg-[#FDFBF7]/90 hover:bg-[#FDFBF7] text-[#633928] shadow transition-transform hover:scale-110"
                title="View Fullscreen"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
            </div>

            {/* Subtle bottom label on hover */}
            <div className="text-left">
              <p className="font-serif-luxury italic text-xs sm:text-sm text-[#FDFBF7] drop-shadow-sm">
                {alt}
              </p>
            </div>
          </div>

          {/* Subtle corner gold accents */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#C5A059]/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#C5A059]/60 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export const MehndiStories: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      storageKey: 'work1',
      defaultSrc: resolveImageUrl(WORK_IMAGE_1, 'work1'),
      alt: 'Lotus Hand & Wrist Artistry (Post_02)',
      span: 'md:col-span-7 md:row-span-2 aspect-[4/5]',
      label: 'Lotus Hand Artistry'
    },
    {
      id: 2,
      storageKey: 'work2',
      defaultSrc: resolveImageUrl(WORK_IMAGE_2, 'work2'),
      alt: 'Garden Mandala & Floral Lace Cuff',
      span: 'md:col-span-5 md:row-span-1 aspect-[1/1]',
      label: 'Garden Mandala Art'
    },
    {
      id: 3,
      storageKey: 'work3',
      defaultSrc: resolveImageUrl(WORK_IMAGE_3, 'work3'),
      alt: 'Royal Bridal Feet & Swan Motifs',
      span: 'md:col-span-5 md:row-span-1 aspect-[1/1]',
      label: 'Royal Feet Adornment'
    },
    {
      id: 4,
      storageKey: 'work4',
      defaultSrc: resolveImageUrl(WORK_IMAGE_4, 'work4'),
      alt: 'Rich Mahogany Lotus Stain & Ring Detail',
      span: 'md:col-span-4 aspect-[4/5]',
      label: 'Mahogany Lotus Stain'
    },
    {
      id: 5,
      storageKey: 'work5',
      defaultSrc: resolveImageUrl(WORK_IMAGE_5, 'work5'),
      alt: 'Royal Peacock & Elephant Forearm Bridal Mehndi',
      span: 'md:col-span-4 aspect-[4/5]',
      label: 'Bridal Peacock Forearms'
    },
    {
      id: 6,
      storageKey: 'work6',
      defaultSrc: resolveImageUrl(WORK_IMAGE_6, 'work6'),
      alt: 'Symmetrical Bridal Palms & Geometric Jaal',
      span: 'md:col-span-4 aspect-[4/5]',
      label: 'Symmetrical Bridal Jaal'
    },
    {
      id: 7,
      storageKey: 'work7',
      defaultSrc: resolveImageUrl(WORK_IMAGE_7, 'work7'),
      alt: 'Dual Silk Mandalas & Delicate Finger Netting',
      span: 'md:col-span-6 aspect-[16/10]',
      label: 'Dual Silk Mandalas'
    },
    {
      id: 8,
      storageKey: 'work8',
      defaultSrc: resolveImageUrl(WORK_IMAGE_8, 'work8'),
      alt: 'Intricate Bridal Palms & Paisleys',
      span: 'md:col-span-6 aspect-[16/10]',
      label: 'Bridal Palms & Paisleys'
    },
  ];

  return (
    <section id="our-work" className="relative py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
            Curated Portfolio
          </span>
          <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#633928] font-normal tracking-tight mt-2">
            Our Mehndi Stories
          </h2>
          <p className="font-serif-luxury text-lg sm:text-xl text-[#3E4D35] italic mt-3">
            A little glimpse into the art we create.
          </p>
          <BotanicalDivider variant="lotus" className="mt-6 max-w-xs" />
        </div>

        {/* Asymmetric Editorial Magazine-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              storageKey={item.storageKey}
              defaultSrc={item.defaultSrc}
              alt={item.alt}
              span={item.span}
              label={item.label}
              onOpenZoom={(src) => setActiveImage(src)}
            />
          ))}
        </div>

        {/* Below Images: See More of Our Work → */}
        <div className="mt-16 sm:mt-20 text-center">
          <a
            id="see-more-work-btn"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#633928] bg-[#FDFBF7] hover:bg-[#633928] text-[#633928] hover:text-[#FDFBF7] font-heading-luxury text-xs tracking-[0.25em] uppercase transition-all duration-500 shadow-sm hover:shadow-md"
          >
            <span>See More of Our Work</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:text-[#FDFBF7] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Detail Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#452417]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-2 bg-[#FDFBF7] rounded-xl border border-[#C5A059] shadow-2xl">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 sm:-right-12 p-2 text-[#FDFBF7] hover:text-[#C5A059] transition-colors"
              aria-label="Close preview"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={activeImage}
              alt="Henna Story High Resolution"
              className="max-h-[82vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};
