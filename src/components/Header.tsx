import React, { useState, useEffect } from 'react';
import {
  BRAND_NAME,
  INSTAGRAM_USERNAME,
  INSTAGRAM_URL,
  LOGO_IMAGE
} from '../brandConfig';
import { ExternalLink, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Bridal', href: '#bridal' },
    { label: 'Contact', href: '#contact' },
  ];

  // Helper to render logo or luxury typography monogram
  const isDirectImageLogo =
    LOGO_IMAGE &&
    !LOGO_IMAGE.includes('instagram.com') &&
    (LOGO_IMAGE.endsWith('.png') ||
      LOGO_IMAGE.endsWith('.jpg') ||
      LOGO_IMAGE.endsWith('.svg') ||
      LOGO_IMAGE.endsWith('.webp') ||
      LOGO_IMAGE.includes('cdn') ||
      LOGO_IMAGE.includes('images'));

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FDFBF7]/92 backdrop-blur-md border-b border-[#C5A059]/30 shadow-[0_4px_20px_rgba(99,57,40,0.04)] py-3'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left Side: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-heading-luxury text-xs tracking-[0.2em] text-[#633928]/80 hover:text-[#633928] uppercase transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#633928] hover:text-[#A2583E] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center: Brand Name / Logo */}
        <div className="flex-1 md:flex-initial flex justify-center text-center">
          <a
            href="#home"
            className="group inline-flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            {isDirectImageLogo && !logoError && (
              <img
                src={LOGO_IMAGE}
                alt=""
                onError={() => setLogoError(true)}
                className="h-8 sm:h-9 w-8 sm:w-9 rounded-full object-cover border border-[#C5A059]/40 shadow-xs shrink-0"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="font-heading-luxury text-base sm:text-lg md:text-xl tracking-[0.20em] text-[#633928] uppercase font-normal leading-tight">
                {BRAND_NAME}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-serif-luxury text-[#3E4D35] uppercase italic">
                Artistry & Weddings
              </span>
            </div>
          </a>
        </div>

        {/* Right Side: Instagram Link */}
        <div className="flex items-center justify-end">
          <a
            id="header-instagram-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C5A059]/50 bg-[#FDFBF7]/80 hover:bg-[#F7F4EE] text-[#633928] font-heading-luxury text-[11px] tracking-[0.15em] uppercase transition-all duration-300 hover:border-[#633928] hover:shadow-sm"
          >
            <span className="hidden sm:inline">Instagram</span>
            <span className="sm:hidden">{INSTAGRAM_USERNAME}</span>
            <ExternalLink className="w-3 h-3 text-[#C5A059]" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7]/95 backdrop-blur-lg border-b border-[#C5A059]/30 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading-luxury text-sm tracking-[0.25em] text-[#633928] hover:text-[#A2583E] uppercase py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#C5A059]/20 flex justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-heading-luxury text-[#3E4D35] tracking-widest uppercase"
              >
                {INSTAGRAM_USERNAME}
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
