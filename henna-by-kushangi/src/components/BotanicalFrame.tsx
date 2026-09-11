import React from 'react';
import {
  BotanicalCornerTL,
  BotanicalCornerTR,
  BotanicalCornerBL,
  BotanicalCornerBR
} from './BotanicalIllustrations';

/**
 * Continuous Botanical Floral Frame
 * Surrounds the entire page with delicate hand-drawn wedding stationery illustrations.
 * Scaled gracefully on mobile devices without covering text or action buttons.
 */
export const BotanicalFrame: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none" aria-hidden="true">
      {/* Top Left Corner */}
      <div className="absolute top-0 left-0">
        <BotanicalCornerTL className="w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64" />
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0">
        <BotanicalCornerTR className="w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64" />
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0">
        <BotanicalCornerBL className="w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64" />
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0">
        <BotanicalCornerBR className="w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64" />
      </div>

      {/* Top Center Subtle Wedding Crest / Garland Accent */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-50 hidden md:block">
        <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
          <path d="M 0 6 Q 90 20 180 6" stroke="#C5A059" strokeWidth="0.7" strokeDasharray="3 3" />
          <circle cx="90" cy="13" r="3" fill="#E8D3D1" stroke="#633928" strokeWidth="0.5" />
          <circle cx="80" cy="11" r="1.5" fill="#3E4D35" />
          <circle cx="100" cy="11" r="1.5" fill="#3E4D35" />
        </svg>
      </div>

      {/* Outer Border Fine Line with warm gold & cultural framing */}
      <div className="absolute inset-2 sm:inset-4 md:inset-6 border border-[#C5A059]/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-3 sm:inset-5 md:inset-7 border border-[#633928]/15 rounded-md pointer-events-none" />
    </div>
  );
};
