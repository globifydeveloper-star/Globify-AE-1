/**
 * First-touch attribution capture.
 *
 * Reads campaign parameters from the landing URL plus document.referrer and
 * stores them first-party for 90 days. Existing stored attribution is never
 * overwritten, so the campaign that originally acquired the visitor is the one
 * credited even if they return later via another route.
 *
 * Nothing here is rendered in the UI and none of these values are personal
 * data: they are campaign identifiers and click IDs only.
 */

const STORAGE_KEY = "globify-attribution";
const TTL_DAYS = 90;
const TTL_MS = TTL_DAYS * 24 * 60 * 60 * 1000;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid"] as const;

export type Attribution = Partial<
  Record<(typeof UTM_KEYS)[number] | (typeof CLICK_ID_KEYS)[number], string>
> & {
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

type StoredAttribution = {
  data: Attribution;
  expires: number;
};

const read = (): StoredAttribution | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAttribution;
    if (!parsed?.expires || parsed.expires < Date.now()) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

/** Returns stored first-touch attribution, or an empty object if none. */
export const getAttribution = (): Attribution => read()?.data ?? {};

/**
 * Appends stored attribution to an outgoing lead submission. No-op when there
 * is nothing stored, so forms submitted by direct visitors are unchanged.
 */
export const appendAttribution = (formData: FormData) => {
  const attribution = getAttribution();
  for (const [key, value] of Object.entries(attribution)) {
    if (value) formData.append(key, String(value));
  }
};

/**
 * Captures attribution on first landing only. Safe to call on every page:
 * once a record exists and is unexpired it is left untouched.
 */
export const captureAttribution = () => {
  if (typeof window === "undefined") return;
  if (read()) return;

  const params = new URLSearchParams(window.location.search);
  const data: Attribution = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) data[key] = value;
  }
  for (const key of CLICK_ID_KEYS) {
    const value = params.get(key);
    if (value) data[key] = value;
  }

  const referrer = document.referrer;
  // Ignore same-origin referrers; they are internal navigation, not a source.
  if (referrer && !referrer.startsWith(window.location.origin)) {
    data.referrer = referrer;
  }

  // Only store a record if there is something worth attributing.
  if (Object.keys(data).length === 0) return;

  data.landing_page = window.location.pathname;
  data.captured_at = new Date().toISOString();

  try {
    const record: StoredAttribution = { data, expires: Date.now() + TTL_MS };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage unavailable (private browsing); attribution is simply not kept.
  }
};
