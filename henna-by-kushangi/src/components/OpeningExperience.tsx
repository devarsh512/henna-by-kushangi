import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { BRAND_NAME, TAGLINE } from '../brandConfig';

interface OpeningExperienceProps {
  onComplete: () => void;
}

export const OpeningExperience: React.FC<OpeningExperienceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(1);
  const [conePos, setConePos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    // Stage 1: Mehndi cone starts drawing floral vine
    const t1 = setTimeout(() => setStage(2), 1200);
    // Stage 2: Pattern expands into intricate mandala/lotus
    const t2 = setTimeout(() => setStage(3), 2600);
    // Stage 3: Brand name reveals
    const t3 = setTimeout(() => setStage(4), 4000);
    // Stage 4: Tagline and Explore button reveal
    const t4 = setTimeout(() => setStage(5), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF7] paper-texture px-6 select-none overflow-hidden"
    >
      {/* Subtle background cultural warmth vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#F7F4EE]/50 to-[#E8D3D1]/20 pointer-events-none" />

      {/* Decorative corner accents in intro */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#C5A059]/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#C5A059]/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#C5A059]/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#C5A059]/50" />

      <div className="relative max-w-xl w-full flex flex-col items-center text-center">
        {/* Animated Handcrafted Mehndi Cone & Drawing Vector Canvas */}
        <div className="relative w-64 h-48 sm:w-80 sm:h-56 flex items-center justify-center mb-6">
          <svg
            viewBox="0 0 300 200"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Animated Floral Vines */}
            <motion.path
              d="M 50 100 C 90 60, 130 140, 150 100 C 170 60, 210 140, 250 100"
              stroke="#633928"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage >= 1 ? 1 : 0 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />

            {/* Central Lotus Flower blooming */}
            <motion.path
              d="M 150 60 C 138 78, 138 98, 150 100 C 162 98, 162 78, 150 60 Z"
              fill="#FDFBF7"
              stroke="#A2583E"
              strokeWidth="1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: stage >= 2 ? 1 : 0, opacity: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M 150 72 C 130 80, 126 95, 144 100"
              stroke="#633928"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <motion.path
              d="M 150 72 C 170 80, 174 95, 156 100"
              stroke="#633928"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            {/* Leaves Sprouting along the vine */}
            <motion.path
              d="M 95 86 C 105 75, 115 82, 108 92 C 100 90, 96 88, 95 86 Z"
              fill="#3E4D35"
              fillOpacity="0.35"
              stroke="#3E4D35"
              strokeWidth="0.8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: stage >= 2 ? 1 : 0, opacity: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.path
              d="M 205 114 C 195 125, 185 118, 192 108 C 200 110, 204 112, 205 114 Z"
              fill="#3E4D35"
              fillOpacity="0.35"
              stroke="#3E4D35"
              strokeWidth="0.8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: stage >= 2 ? 1 : 0, opacity: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            />

            {/* Decorative Paisley / Mehndi Swirls */}
            <motion.path
              d="M 70 102 C 60 115, 68 132, 85 128 C 95 125, 96 112, 88 108 C 80 105, 75 110, 78 116"
              stroke="#633928"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage >= 3 ? 1 : 0 }}
              transition={{ duration: 1.8 }}
            />
            <motion.path
              d="M 230 98 C 240 85, 232 68, 215 72 C 205 75, 204 88, 212 92 C 220 95, 225 90, 222 84"
              stroke="#633928"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: stage >= 3 ? 1 : 0 }}
              transition={{ duration: 1.8 }}
            />

            {/* Delicate gold dots */}
            <motion.circle
              cx="150"
              cy="52"
              r="2.5"
              fill="#C5A059"
              initial={{ scale: 0 }}
              animate={{ scale: stage >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.circle
              cx="135"
              cy="56"
              r="1.8"
              fill="#E8D3D1"
              stroke="#633928"
              strokeWidth="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: stage >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.circle
              cx="165"
              cy="56"
              r="1.8"
              fill="#E8D3D1"
              stroke="#633928"
              strokeWidth="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: stage >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </svg>

          {/* Realistic Mehndi Cone Cursor drawing effect */}
          {stage < 4 && (
            <motion.div
              className="absolute pointer-events-none"
              animate={{
                x: stage === 1 ? [-80, 0, 80] : stage === 2 ? [0, -20, 0] : [0, 40],
                y: stage === 1 ? [10, -15, 10] : stage === 2 ? [-30, 10, -10] : [10, -20],
                rotate: [-25, -15, -30],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative -top-6 -left-3">
                {/* Mehndi cone representation */}
                <svg width="28" height="42" viewBox="0 0 28 42" fill="none" className="drop-shadow-sm">
                  <path d="M 2 2 L 26 8 L 14 38 Z" fill="#9E7D3B" stroke="#633928" strokeWidth="0.8" />
                  <path d="M 6 4 L 22 8 L 14 34 Z" fill="#C5A059" opacity="0.6" />
                  <circle cx="14" cy="38" r="1.5" fill="#633928" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Revealed Brand Name */}
        <AnimatePresence>
          {stage >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="space-y-3"
            >
              <h1 className="font-heading-luxury text-3xl sm:text-4xl md:text-5xl tracking-[0.18em] text-[#633928] uppercase font-normal">
                {BRAND_NAME}
              </h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="font-serif-luxury text-xl sm:text-2xl text-[#3E4D35] italic tracking-wide"
              >
                {TAGLINE}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explore CTA */}
        <AnimatePresence>
          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-10"
            >
              <button
                id="explore-opening-btn"
                onClick={onComplete}
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C5A059]/60 bg-[#FDFBF7]/90 hover:bg-[#F7F4EE] text-[#633928] font-heading-luxury text-xs tracking-[0.25em] uppercase transition-all duration-500 hover:border-[#633928] hover:shadow-[0_8px_25px_rgba(99,57,40,0.08)] cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C5A059] transition-transform duration-500 group-hover:translate-y-0.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip button for quick browsing */}
        <button
          id="skip-intro-btn"
          onClick={onComplete}
          className="absolute -bottom-16 sm:bottom-0 text-[11px] font-sans tracking-[0.2em] text-[#633928]/60 hover:text-[#633928] uppercase transition-colors py-2"
        >
          Skip Intro
        </button>
      </div>
    </motion.div>
  );
};
