/**
 * Verified Shopify clients with live storefronts.
 *
 * Every entry here must be a real, launched store that can be checked by
 * visiting the URL. Brand names are shown as the brand trades, not as the
 * holding company. Do not add an entry without a live URL to back it.
 */

export type ShopifyClient = {
  brand: string;
  url?: string;
};

export const SHOPIFY_CLIENTS: ShopifyClient[] = [
  { brand: "Wilson GCC", url: "https://wilsonme.com" },
  { brand: "Salomon GCC", url: "https://salomongcc.com" },
  { brand: "Judith Leiber", url: "https://judithleiber.ae" },
  { brand: "Kat Maconie", url: "https://katmaconie.com" },
  { brand: "InstaRunway", url: "https://instarunway.com" },
  { brand: "Creative Florist", url: "https://creativefloristdxb.com" },
  { brand: "Sweaty Betty", url: "https://sweatybetty.ae" },
  { brand: "Moher", url: "https://moher.in" },
  // No public storefront URL supplied for this brand yet.
  { brand: "Amrita Jewels" },
];

/**
 * Verified Clutch reviewers. Names and roles are as published on the Clutch
 * profile; do not paraphrase or invent quotes for these people.
 */
export const CLUTCH_PROFILE_URL =
  "https://clutch.co/profile/globify-software-solutions-0";

export const CLUTCH_REVIEWERS = [
  { name: "Maya Pillai", role: "Co-Founder, Moher Fashions" },
  { name: "Sreeresmi Krishnan", role: "Director, Moher Fashions" },
  { name: "Vishnu S", role: "Skeebee" },
];
