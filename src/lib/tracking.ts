import { pushDataLayerEvent } from "@/lib/dataLayer";
import { getAttribution } from "@/lib/attribution";

/**
 * Domain-level tracking helpers.
 *
 * Hard rule for everything in this file: no personal data ever reaches the
 * dataLayer. Never push name, email, phone, message or company. Only campaign
 * identifiers, page context, and a random lead_id used for deduplication.
 */

export type LinkLocation =
  | "header"
  | "footer"
  | "floating"
  | "hero"
  | "contact_page"
  | "other";

export type ContactMethod = "whatsapp" | "call" | "email";

/** Random, non-PII identifier so GTM/GA4 can de-duplicate a submission. */
const newLeadId = (): string => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
};

const pagePath = (): string =>
  typeof window === "undefined" ? "" : window.location.pathname;

/**
 * Fires only after /api/contact has returned a confirmed success. Must not be
 * called on click, on validation failure, on API failure, or on a thank-you
 * page load.
 */
export const trackLeadSubmitted = (parameters: Record<string, unknown> = {}) => {
  pushDataLayerEvent("generate_lead", {
    lead_id: newLeadId(),
    page_path: pagePath(),
    ...getAttribution(),
    ...parameters,
  });
};

const CONTACT_EVENT: Record<ContactMethod, string> = {
  whatsapp: "contact_whatsapp",
  call: "contact_call",
  email: "contact_email",
};

export const trackContactClick = (
  method: ContactMethod,
  linkLocation: LinkLocation = "other"
) => {
  pushDataLayerEvent(CONTACT_EVENT[method], {
    link_location: linkLocation,
    page_path: pagePath(),
  });

  // PHASE 2: delete this block. It keeps the pre-GTM direct GA4 events firing
  // so reporting does not go dark while the GTM container is still empty.
  // Once GTM is published these become duplicates and gtag.js is removed.
  if (typeof window !== "undefined") {
    const w = window as any;
    if (typeof w.gtag === "function") w.gtag("event", CONTACT_EVENT[method]);
  }
};

/** Route changes only. The initial page load is handled by GTM's own pageview. */
export const trackVirtualPageView = (path: string) => {
  pushDataLayerEvent("virtual_page_view", { page_path: path });
};
