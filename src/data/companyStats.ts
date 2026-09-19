/**
 * Single source of truth for company-wide statistics.
 *
 * Any stat that describes the company as a whole belongs here, so the same
 * fact cannot be stated two different ways on two different pages. Import
 * these rather than hardcoding a number or label in a page component.
 *
 * Rules:
 * - One fact, one label. Do not restate "Projects Delivered" as
 *   "Transformations Delivered" elsewhere.
 * - Values must be documentable. If a figure cannot be evidenced, remove it
 *   rather than rounding it up.
 * - Platform-specific counts (Shopify, Magento, Wix, WooCommerce, WordPress)
 *   are deliberately NOT here: they are subsets owned by their own pages.
 */

export const COMPANY_STATS = {
  projectsDelivered: { value: "170+", label: "Projects Delivered" },
  shopifyStores: { value: "30+", label: "Shopify Stores Delivered" },
  countriesServed: { value: "10+", label: "Countries Served" },
  clientSatisfaction: { value: "98%", label: "Client Satisfaction" },
  yearsOperating: { value: "5+", label: "Years Experience" },
  foundedYear: "2020",
} as const;

/** Convenience accessors for prose, so copy and tiles cannot drift apart. */
export const PROJECTS_DELIVERED = COMPANY_STATS.projectsDelivered.value;
export const SHOPIFY_STORES = COMPANY_STATS.shopifyStores.value;
export const FOUNDED_YEAR = COMPANY_STATS.foundedYear;
