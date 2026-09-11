import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import {
  EMAIL,
  INSTAGRAM_USERNAME,
  INSTAGRAM_URL,
  BRAND_NAME
} from '../brandConfig';
import { BotanicalDivider, SideVineFlourish } from './BotanicalIllustrations';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [notes, setNotes] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Generate customized mailto URL
  const subject = encodeURIComponent(`Bridal Mehndi Enquiry for ${BRAND_NAME} ${eventDate ? `(${eventDate})` : ''}`);
  const bodyText = encodeURIComponent(
    `Hello Kushangi,\n\nI would love to inquire about your bridal mehndi services for my upcoming celebration.\n\nEvent Type: ${eventName || 'Bridal Mehndi'}\nEvent Date: ${eventDate || '[Date]'}\nLocation / Venue: ${eventLocation || '[City / Venue]'}\n\nOur Vision & Notes:\n${notes || 'We would love to know your availability and discuss bespoke motifs.'}\n\nWarm regards,\n`
  );
  const mailtoLink = `mailto:${EMAIL}?subject=${subject}&body=${bodyText}`;

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-6 sm:px-10 overflow-hidden bg-[#FDFBF7]">
      {/* Decorative side vines */}
      <SideVineFlourish side="left" className="bottom-12" />
      <SideVineFlourish side="right" className="bottom-12" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <span className="text-[11px] font-heading-luxury tracking-[0.3em] uppercase text-[#C5A059]">
            Begin the Conversation
          </span>
          <h2 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#633928] font-normal tracking-tight">
            Let's Create Something Beautiful
          </h2>
          <p className="font-serif-luxury text-xl sm:text-2xl text-[#3E4D35] italic mt-3 max-w-xl mx-auto">
            “Planning your special day? We'd love to hear your story.”
          </p>
        </motion.div>

        <BotanicalDivider variant="lotus" className="my-8 max-w-xs" />

        {/* Display Instagram and Email details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="my-10 max-w-2xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/45 shadow-[0_15px_40px_rgba(99,57,40,0.05)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A059]/30">
            {/* Instagram */}
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#A2583E] mb-3">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="font-heading-luxury text-xs tracking-[0.25em] text-[#633928]/80 uppercase">
                Instagram
              </span>
              <a
                id="contact-instagram-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-luxury text-xl sm:text-2xl text-[#633928] hover:text-[#A2583E] transition-colors mt-1 font-normal"
              >
                {INSTAGRAM_USERNAME}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2 text-center">
              <div className="w-10 h-10 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#A2583E] mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-heading-luxury text-xs tracking-[0.25em] text-[#633928]/80 uppercase">
                Email
              </span>
              <a
                id="contact-email-link"
                href={`mailto:${EMAIL}`}
                className="font-serif-luxury text-lg sm:text-xl text-[#633928] hover:text-[#A2583E] transition-colors mt-1 break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Direct CTA Button: Send an Enquiry → */}
          <div className="mt-10 pt-8 border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="send-enquiry-direct-btn"
              href={mailtoLink}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#633928] bg-[#633928] hover:bg-[#452417] text-[#FDFBF7] font-heading-luxury text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Send an Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#E8D3D1] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#C5A059]/45 bg-[#FDFBF7] hover:bg-[#F7F4EE] text-[#633928] font-heading-luxury text-[11px] tracking-[0.18em] uppercase transition-all duration-300"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-[#3E4D35]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <span>Copy Email</span>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
