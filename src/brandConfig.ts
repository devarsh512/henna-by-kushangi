/**
 * ============================================================================
 * 🌸 HENNA BY KUSHANGI — EDITABLE BRAND SETTINGS
 * ============================================================================
 * 
 * ✏️ EDIT THESE DETAILS
 * You can easily update your brand information, social links, and images below.
 * Change the values inside the quotes ("...") to your own details.
 * 
 * ============================================================================
 */

import kushangiHeroArt from './assets/images/kushangi_hero_art_1788349039294.jpg';

// ✏️ EDIT THESE DETAILS
export const BRAND_NAME = "Henna by Kushangi";
export const TAGLINE = "Where Every Design Tells a Story";
export const SUBTITLE = "Bridal Mehndi • Custom Henna • Wedding Celebrations";

export const INSTAGRAM_USERNAME = "@hennabykushangi";
export const INSTAGRAM_URL = "https://www.instagram.com/hennabykushangi/";
export const EMAIL = "kushangiprajapati63@gmail.com";

// Logo Image (1000268521.png -> /images/logo.png)
export const LOGO_IMAGE = "/images/logo.png";

// Hero Banner Image (Post_01.jpeg -> /images/hero.jpg)
export const HERO_IMAGE = "/images/hero.jpg";

// 8 Portfolio Work Images in Given Order:
// 1. Post_02.jpeg -> Lotus hand and wrist henna
export const WORK_IMAGE_1 = "/images/bridal.jpg";
// 2. WhatsApp Image ... 10.32.27 AM (1).jpeg -> Back hand mandala in garden
export const WORK_IMAGE_2 = "/images/work2.jpg";
// 3. WhatsApp Image ... 10.32.29 AM (1).jpeg -> Feet & ankle mehndi with swans
export const WORK_IMAGE_3 = "/images/work3.jpg";
// 4. WhatsApp Image ... 10.32.29 AM.jpeg -> Dark mahogany lotus stain & ring
export const WORK_IMAGE_4 = "/images/work4.jpg";
// 5. WhatsApp Image ... 10.29.26 AM (2).jpeg -> Full bridal peacock & elephant forearm
export const WORK_IMAGE_5 = "/images/work5.jpg";
// 6. WhatsApp Image ... 2.24.58 PM.jpeg -> Symmetrical bridal jaal & palm mehndi
export const WORK_IMAGE_6 = "/images/work6.jpg";
// 7. WhatsApp Image ... 2.25.03 PM.jpeg -> Dual back-of-hand mandalas on pink cushion
export const WORK_IMAGE_7 = "/images/work7.jpg";
// 8. WhatsApp Image ... 2.25.05 PM.jpeg -> Intricate bridal palms & paisleys
export const WORK_IMAGE_8 = "/images/work8.jpg";

/**
 * 🌿 HIGH-RESOLUTION TASTEFUL MEHNDI PHOTOGRAPHY (Fallbacks if file not yet uploaded)
 */
export const DEFAULT_FALLBACK_IMAGES = {
  hero: kushangiHeroArt, // Official Kushangi bridal henna holding white rose
  work1: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80",
  work2: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
  work3: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
  work4: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=1000&q=80",
  work5: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
  work6: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
  work7: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  work8: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  bridalMain: kushangiHeroArt,
};

/**
 * Helper function to determine if a URL is a direct displayable image
 * or requires a tasteful curated fallback.
 */
export function resolveImageUrl(url: string, fallbackKey: keyof typeof DEFAULT_FALLBACK_IMAGES): string {
  if (!url || url === "YOUR_IMAGE_URL_HERE" || url.trim() === "") {
    return DEFAULT_FALLBACK_IMAGES[fallbackKey];
  }
  
  // If the user pasted an Instagram post/profile URL (which cannot be loaded directly via <img src>),
  // we return our curated photograph while preserving their Instagram link for click-throughs.
  const isInstagramWebUrl = url.includes("instagram.com/p/") || 
                             url.includes("instagram.com/reel/") || 
                             url.endsWith("instagram.com/hennabykushangi/") || 
                             url.endsWith("instagram.com/hennabykushangi");
                             
  if (isInstagramWebUrl) {
    return DEFAULT_FALLBACK_IMAGES[fallbackKey];
  }

  return url;
}
