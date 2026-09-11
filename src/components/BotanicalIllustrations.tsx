import React from 'react';

interface BotanicalProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/**
 * Delicate Top-Left Botanical Corner Ornament
 * Handcrafted Indian wedding floral illustration with lotus, leaves, and mehndi flourishes
 */
export const BotanicalCornerTL: React.FC<BotanicalProps> = ({
  className = "w-48 h-48 sm:w-64 sm:h-64",
  color = "#633928",
  opacity = 0.85
}) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* Outer border guide line */}
    <path
      d="M 12 188 L 12 12 L 188 12"
      stroke="#C5A059"
      strokeWidth="0.75"
      strokeDasharray="4 3"
      opacity="0.6"
    />
    <path
      d="M 20 170 L 20 20 L 170 20"
      stroke={color}
      strokeWidth="0.5"
      opacity="0.4"
    />

    {/* Corner corner-stone floral cluster */}
    <g transform="translate(18, 18)" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Central Corner Lotus/Rose */}
      <path d="M 0 0 C 15 25, 25 15, 0 0" fill="#E8D3D1" fillOpacity="0.45" stroke={color} strokeWidth="0.8" />
      <path d="M 12 12 C 30 20, 20 30, 12 12" fill="#E8D3D1" fillOpacity="0.35" stroke={color} strokeWidth="0.8" />
      
      {/* Paisley curve (Kalka) */}
      <path
        d="M 4 4 C 28 6, 45 22, 40 42 C 36 56, 18 52, 24 38 C 28 28, 15 20, 4 4 Z"
        stroke={color}
        strokeWidth="1.1"
        fill="#FDFBF7"
      />
      {/* Paisley internal hatching */}
      <path d="M 18 24 C 26 28, 30 36, 28 42" stroke="#C5A059" strokeWidth="0.75" />
      <circle cx="28" cy="34" r="1.5" fill="#633928" />
      <circle cx="24" cy="28" r="1.2" fill="#A2583E" />
      
      {/* Horizontal vine trailing right */}
      <path
        d="M 40 14 C 65 8, 90 20, 120 12 C 140 7, 155 14, 170 10"
        stroke="#3E4D35"
        strokeWidth="0.9"
      />
      {/* Leaves along horizontal vine */}
      <path d="M 60 11 C 65 4, 75 6, 73 13 C 68 14, 62 13, 60 11 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      <path d="M 90 16 C 96 22, 106 20, 102 14 C 97 13, 91 14, 90 16 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      <path d="M 125 11 C 130 5, 140 7, 137 13 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      <path d="M 152 11 C 158 4, 168 7, 163 12 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      {/* Jasmine buds & berries */}
      <circle cx="78" cy="8" r="2" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />
      <circle cx="112" cy="18" r="2" fill="#C5A059" />
      <circle cx="145" cy="8" r="2.2" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />

      {/* Vertical vine trailing down */}
      <path
        d="M 14 40 C 8 65, 20 90, 12 120 C 7 140, 14 155, 10 170"
        stroke="#3E4D35"
        strokeWidth="0.9"
      />
      {/* Leaves along vertical vine */}
      <path d="M 11 60 C 4 65, 6 75, 13 73 C 14 68, 13 62, 11 60 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      <path d="M 16 90 C 22 96, 20 106, 14 102 C 13 97, 14 91, 16 90 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      <path d="M 11 125 C 5 130, 7 140, 13 137 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      <path d="M 11 152 C 4 158, 7 168, 12 163 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.7" />
      {/* Jasmine buds & berries */}
      <circle cx="8" cy="78" r="2" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />
      <circle cx="18" cy="112" r="2" fill="#C5A059" />
      <circle cx="8" cy="145" r="2.2" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />

      {/* Floral Rosette / Mandala Center */}
      <g transform="translate(32, 32)">
        <circle cx="0" cy="0" r="10" stroke="#C5A059" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
        <circle cx="0" cy="0" r="4" fill="#C5A059" fillOpacity="0.7" stroke={color} strokeWidth="0.5" />
        {/* Petals */}
        <path d="M 0 -10 C 3 -16, -3 -16, 0 -10" stroke={color} strokeWidth="0.75" fill="#FDFBF7" />
        <path d="M 10 0 C 16 3, 16 -3, 10 0" stroke={color} strokeWidth="0.75" fill="#FDFBF7" />
        <path d="M 0 10 C 3 16, -3 16, 0 10" stroke={color} strokeWidth="0.75" fill="#FDFBF7" />
        <path d="M -10 0 C -16 3, -16 -3, -10 0" stroke={color} strokeWidth="0.75" fill="#FDFBF7" />
        <path d="M 7 -7 C 12 -12, 10 -14, 7 -7" stroke="#3E4D35" strokeWidth="0.6" />
        <path d="M 7 7 C 12 12, 14 10, 7 7" stroke="#3E4D35" strokeWidth="0.6" />
        <path d="M -7 7 C -12 12, -10 14, -7 7" stroke="#3E4D35" strokeWidth="0.6" />
        <path d="M -7 -7 C -12 -12, -14 -10, -7 -7" stroke="#3E4D35" strokeWidth="0.6" />
      </g>
    </g>
  </svg>
);

/**
 * Top-Right Botanical Corner Ornament
 */
export const BotanicalCornerTR: React.FC<BotanicalProps> = ({
  className = "w-48 h-48 sm:w-64 sm:h-64",
  color = "#633928",
  opacity = 0.85
}) => (
  <div className={`transform scale-x-[-1] ${className}`} style={{ opacity }}>
    <BotanicalCornerTL className="w-full h-full" color={color} opacity={1} />
  </div>
);

/**
 * Bottom-Left Botanical Corner Ornament
 */
export const BotanicalCornerBL: React.FC<BotanicalProps> = ({
  className = "w-48 h-48 sm:w-64 sm:h-64",
  color = "#633928",
  opacity = 0.85
}) => (
  <div className={`transform scale-y-[-1] ${className}`} style={{ opacity }}>
    <BotanicalCornerTL className="w-full h-full" color={color} opacity={1} />
  </div>
);

/**
 * Bottom-Right Botanical Corner Ornament
 */
export const BotanicalCornerBR: React.FC<BotanicalProps> = ({
  className = "w-48 h-48 sm:w-64 sm:h-64",
  color = "#633928",
  opacity = 0.85
}) => (
  <div className={`transform scale-x-[-1] scale-y-[-1] ${className}`} style={{ opacity }}>
    <BotanicalCornerTL className="w-full h-full" color={color} opacity={1} />
  </div>
);

/**
 * Elegant Center Botanical Flourish / Section Divider
 */
export const BotanicalDivider: React.FC<{ className?: string; color?: string; variant?: 'mandala' | 'lotus' | 'leaves' }> = ({
  className = "w-full max-w-md mx-auto my-8",
  color = "#633928",
  variant = 'lotus'
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 px-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/50 to-[#633928]/40" />
      
      {variant === 'lotus' && (
        <svg viewBox="0 0 120 40" className="w-24 h-8 text-[#633928] flex-shrink-0" fill="none">
          {/* Central Lotus */}
          <path
            d="M 60 8 C 55 18, 52 28, 60 34 C 68 28, 65 18, 60 8 Z"
            fill="#FDFBF7"
            stroke={color}
            strokeWidth="0.8"
          />
          <path
            d="M 60 14 C 48 20, 44 28, 56 33 C 58 28, 59 22, 60 14 Z"
            fill="#E8D3D1"
            fillOpacity="0.5"
            stroke={color}
            strokeWidth="0.7"
          />
          <path
            d="M 60 14 C 72 20, 76 28, 64 33 C 62 28, 61 22, 60 14 Z"
            fill="#E8D3D1"
            fillOpacity="0.5"
            stroke={color}
            strokeWidth="0.7"
          />
          {/* Side Petals / Vines */}
          <path d="M 45 28 C 30 25, 20 32, 8 28" stroke="#C5A059" strokeWidth="0.75" />
          <path d="M 75 28 C 90 25, 100 32, 112 28" stroke="#C5A059" strokeWidth="0.75" />
          {/* Leaf accents */}
          <path d="M 32 26 C 28 22, 22 24, 25 29 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.5" />
          <path d="M 88 26 C 92 22, 98 24, 95 29 Z" fill="#3E4D35" fillOpacity="0.35" stroke="#3E4D35" strokeWidth="0.5" />
          {/* Tiny Dots */}
          <circle cx="60" cy="5" r="1.5" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />
          <circle cx="14" cy="28" r="1.5" fill="#C5A059" />
          <circle cx="106" cy="28" r="1.5" fill="#C5A059" />
        </svg>
      )}

      {variant === 'mandala' && (
        <svg viewBox="0 0 60 60" className="w-10 h-10 text-[#633928] flex-shrink-0" fill="none">
          <circle cx="30" cy="30" r="18" stroke="#C5A059" strokeWidth="0.75" strokeDasharray="2 2" />
          <circle cx="30" cy="30" r="10" stroke={color} strokeWidth="0.75" fill="#FDFBF7" />
          <circle cx="30" cy="30" r="3.5" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
          {/* 8-point tiny floral rays */}
          <path d="M 30 8 L 30 14 M 30 46 L 30 52 M 8 30 L 14 30 M 46 30 L 52 30" stroke="#3E4D35" strokeWidth="0.75" />
          <circle cx="30" cy="6" r="1.2" fill="#C5A059" />
          <circle cx="30" cy="54" r="1.2" fill="#C5A059" />
          <circle cx="6" cy="30" r="1.2" fill="#C5A059" />
          <circle cx="54" cy="30" r="1.2" fill="#C5A059" />
        </svg>
      )}

      {variant === 'leaves' && (
        <svg viewBox="0 0 80 30" className="w-16 h-6 text-[#633928] flex-shrink-0" fill="none">
          <path d="M 10 15 Q 40 5 70 15" stroke="#3E4D35" strokeWidth="0.8" />
          <path d="M 40 10 C 45 4, 55 6, 52 13 C 47 12, 43 11, 40 10 Z" fill="#3E4D35" fillOpacity="0.4" stroke="#3E4D35" strokeWidth="0.6" />
          <path d="M 40 20 C 35 26, 25 24, 28 17 C 33 18, 37 19, 40 20 Z" fill="#3E4D35" fillOpacity="0.4" stroke="#3E4D35" strokeWidth="0.6" />
          <circle cx="40" cy="15" r="2" fill="#C5A059" />
        </svg>
      )}

      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/50 to-[#633928]/40" />
    </div>
  );
};

/**
 * Side Vine Flourish for Continuous Page Framing
 */
export const SideVineFlourish: React.FC<{ side?: 'left' | 'right'; className?: string }> = ({
  side = 'left',
  className = ""
}) => {
  return (
    <div
      className={`hidden lg:block absolute pointer-events-none z-10 ${
        side === 'left' ? 'left-2' : 'right-2 scale-x-[-1]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg width="48" height="240" viewBox="0 0 48 240" fill="none" opacity="0.75">
        <path
          d="M 12 0 C 18 40, 6 80, 16 120 C 26 160, 10 200, 14 240"
          stroke="#3E4D35"
          strokeWidth="0.8"
        />
        {/* Leaves */}
        <path d="M 14 45 C 26 38, 32 46, 24 54 C 18 52, 15 48, 14 45 Z" fill="#3E4D35" fillOpacity="0.3" stroke="#3E4D35" strokeWidth="0.6" />
        <path d="M 9 95 C 2 88, -2 98, 4 104 C 8 102, 9 98, 9 95 Z" fill="#3E4D35" fillOpacity="0.3" stroke="#3E4D35" strokeWidth="0.6" />
        <path d="M 18 145 C 30 138, 36 148, 28 155 C 22 154, 19 148, 18 145 Z" fill="#3E4D35" fillOpacity="0.3" stroke="#3E4D35" strokeWidth="0.6" />
        <path d="M 11 195 C 3 188, 1 198, 6 204 C 9 202, 11 198, 11 195 Z" fill="#3E4D35" fillOpacity="0.3" stroke="#3E4D35" strokeWidth="0.6" />
        {/* Buds & gold dots */}
        <circle cx="28" cy="42" r="1.8" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />
        <circle cx="2" cy="92" r="1.8" fill="#C5A059" />
        <circle cx="32" cy="142" r="1.8" fill="#E8D3D1" stroke="#633928" strokeWidth="0.4" />
        <circle cx="3" cy="192" r="1.8" fill="#C5A059" />
      </svg>
    </div>
  );
};

/**
 * Traditional Indian Bridal Henna Motifs
 */
export const HennaMotifBadge: React.FC<{ title: string; subtitle?: string; className?: string }> = ({
  title,
  subtitle,
  className = ""
}) => {
  return (
    <div className={`relative p-6 text-center group ${className}`}>
      {/* Delicate background decorative border */}
      <div className="absolute inset-0 rounded-lg border border-[#C5A059]/40 bg-[#FDFBF7]/90 backdrop-blur-[2px] transition-all duration-500 group-hover:border-[#633928]/60 group-hover:shadow-[0_8px_30px_rgba(99,57,40,0.08)]" />
      
      {/* Corner mini dots */}
      <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#C5A059]" />
      <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#C5A059]" />
      <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#C5A059]" />
      <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#C5A059]" />
      
      <div className="relative z-10 flex flex-col items-center">
        <svg viewBox="0 0 40 40" className="w-8 h-8 mb-3 text-[#633928] transition-transform duration-500 group-hover:scale-110" fill="none">
          <circle cx="20" cy="20" r="12" stroke="#C5A059" strokeWidth="0.75" />
          <path d="M 20 8 C 24 14, 28 18, 20 28 C 12 18, 16 14, 20 8 Z" fill="#E8D3D1" fillOpacity="0.5" stroke="#633928" strokeWidth="0.75" />
          <circle cx="20" cy="20" r="2.5" fill="#3E4D35" />
        </svg>
        <h4 className="font-heading-luxury text-base tracking-[0.15em] text-[#633928] uppercase">{title}</h4>
        {subtitle && <p className="text-xs text-[#3E4D35] font-serif-luxury italic mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};
