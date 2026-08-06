/**
 * Maps a lead to one of a fixed set of normalized service values.
 *
 * Only the normalized value ever reaches the dataLayer. Raw visitor selections
 * are mapped here and then discarded, which means no free-text or unexpected
 * value can leak into analytics even if a form later adds one.
 */

export const SERVICE_VALUES = [
  "shopify_development",
  "wordpress_to_shopify_migration",
  "ai_automation",
  "other",
] as const;

export type ServiceRequested = (typeof SERVICE_VALUES)[number];

/**
 * Visitor-selected service labels, as they appear in the generic contact
 * forms. Compared case-insensitively after trimming.
 */
const SELECTION_MAP: Record<string, ServiceRequested> = {
  // ContactFormDialog
  "shopify development": "shopify_development",
  "shopify plus": "shopify_development",
  "shopify themes": "shopify_development",
  "shopify app development": "shopify_development",
  "ai & automation": "ai_automation",
  "ai chatbots": "ai_automation",
  "process automation": "ai_automation",
  "predictive analytics": "ai_automation",
  "ai transformation framework": "ai_automation",
  // /contact "How can we help?"
  "shopify / e-commerce": "shopify_development",
};

/**
 * Path prefixes that imply a service when the form itself does not collect
 * one. Longest match wins, so a more specific prefix can override a broader
 * one if that is ever needed.
 */
const PATH_MAP: Array<[string, ServiceRequested]> = [
  // Every /shopify-* page: /shopify-development, /shopify-uae, /shopify-plus,
  // /shopify-themes, /shopify-app-development and the country pages.
  ["/shopify-", "shopify_development"],

  ["/ai-automation", "ai_automation"],
  ["/ai-chatbots", "ai_automation"],
  ["/process-automation", "ai_automation"],
  ["/predictive-analytics", "ai_automation"],
  ["/ai-transformation-framework", "ai_automation"],

  // Not built yet. Registered in advance so the future WordPress and
  // WooCommerce to Shopify landing page is attributed correctly on day one.
  // Add the real slug here when the page ships.
  ["/wordpress-to-shopify", "wordpress_to_shopify_migration"],
  ["/woocommerce-to-shopify", "wordpress_to_shopify_migration"],
];

/** Maps a visitor's selected service label, or null if it is not recognised. */
export const serviceFromSelection = (
  selection?: string | null
): ServiceRequested | null => {
  if (!selection) return null;
  return SELECTION_MAP[selection.trim().toLowerCase()] ?? null;
};

/** Maps a page path to its default service, or null if the page implies none. */
export const serviceFromPath = (
  pathname?: string | null
): ServiceRequested | null => {
  if (!pathname) return null;
  const path = pathname.toLowerCase();
  let match: ServiceRequested | null = null;
  let matchedLength = 0;
  for (const [prefix, service] of PATH_MAP) {
    if (path.startsWith(prefix) && prefix.length > matchedLength) {
      match = service;
      matchedLength = prefix.length;
    }
  }
  return match;
};

/**
 * An explicit visitor selection wins over the page default, since a visitor on
 * a Shopify page who asks about AI automation means what they picked. Falls
 * back to "other" when neither resolves.
 */
export const resolveServiceRequested = (
  pathname?: string | null,
  selection?: string | null
): ServiceRequested =>
  serviceFromSelection(selection) ?? serviceFromPath(pathname) ?? "other";
