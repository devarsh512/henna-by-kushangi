import React from 'react';
import {
  BRAND_NAME,
  TAGLINE,
  INSTAGRAM_USERNAME,
  INSTAGRAM_URL,
  EMAIL,
  LOGO_IMAGE
} from '../brandConfig';
import { BotanicalCornerBL, BotanicalCornerBR } from './BotanicalIllustrations';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = React.useState(false);
  const isDirectImageLogo =
    !logoError &&
    LOGO_IMAGE &&
    !LOGO_IMAGE.includes('instagram.com') &&
    (LOGO_IMAGE.endsWith('.png') ||
      LOGO_IMAGE.endsWith('.jpg') ||
      LOGO_IMAGE.endsWith('.svg') ||
      LOGO_IMAGE.endsWith('.webp') ||
      LOGO_IMAGE.includes('cdn') ||
      LOGO_IMAGE.includes('images'));

  return (
    <footer id="main-footer" className="relative py-20 sm:py-28 px-6 sm:px-10 bg-[#FDFBF7] border-t border-[#C5A059]/30 overflow-hidden">
      {/* Botanical illustrations growing from both bottom corners */}
      <div className="absolute bottom-0 left-0 pointer-events-none">
        <BotanicalCornerBL className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64" opacity={0.7} />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <BotanicalCornerBR className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64" opacity={0.7} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Logo / Monogram */}
        <div className="mb-6">
          {isDirectImageLogo ? (
            <img
              src={LOGO_IMAGE}
              alt=""
              onError={() => setLogoError(true)}
              className="h-16 w-16 object-cover rounded-full border border-[#C5A059]/40 mx-auto shadow-sm"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-14 h-14 rounded-full border border-[#C5A059] flex items-center justify-center bg-[#FDFBF7] shadow-sm">
              <span className="font-heading-luxury text-sm tracking-widest text-[#633928]">
                HK
              </span>
            </div>
          )}
        </div>

        {/* Brand Name */}
        <h3 className="font-heading-luxury text-2xl sm:text-3xl tracking-[0.2em] text-[#633928] uppercase font-normal">
          {BRAND_NAME}
        </h3>

        {/* Tagline */}
        <p className="font-serif-luxury text-lg sm:text-xl text-[#3E4D35] italic mt-2">
          {TAGLINE}
        </p>

        {/* Links: Instagram · Email */}
        <div className="mt-8 flex items-center justify-center space-x-4 text-xs font-heading-luxury tracking-[0.2em] uppercase text-[#633928]">
          <a
            id="footer-instagram-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A2583E] transition-colors"
          >
            Instagram
          </a>
          <span className="text-[#C5A059]">•</span>
          <a
            id="footer-email-link"
            href={`mailto:${EMAIL}`}
            className="hover:text-[#A2583E] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright notice */}
        <div className="mt-12 pt-6 border-t border-[#C5A059]/25 w-full max-w-xs text-[11px] font-sans tracking-widest text-[#633928]/60 uppercase">
          © {new Date().getFullYear()} {BRAND_NAME}. Handcrafted Digital Portfolio.
        </div>
      </div>
    </footer>
  );
};
