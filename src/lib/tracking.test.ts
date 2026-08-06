import { describe, it, expect, beforeEach, vi } from "vitest";
import { resolveServiceRequested, SERVICE_VALUES } from "@/lib/serviceMapping";

/**
 * Field names that must never appear in a dataLayer payload, in any event.
 * Checked against both keys and values so a mislabelled key cannot smuggle
 * personal data through.
 */
const PII_KEYS = [
  "name",
  "email",
  "phone",
  "company",
  "message",
  "first_name",
  "last_name",
  "full_name",
  "revenue",
  "budget",
];

const PII_VALUES = [
  "ada@example.com",
  "+971500000000",
  "Ada Lovelace",
  "Acme Trading LLC",
  "Please call me about my store",
];

type DataLayerEntry = Record<string, unknown>;

const setPath = (pathname: string) => {
  (globalThis as any).window = {
    location: { pathname, search: "", origin: "https://www.globify.ae" },
    dataLayer: [],
    localStorage: {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
    },
  };
  (globalThis as any).document = { referrer: "" };
};

const dataLayer = (): DataLayerEntry[] =>
  ((globalThis as any).window.dataLayer ?? []) as DataLayerEntry[];

const leads = () => dataLayer().filter((e) => e.event === "generate_lead");

/** Imported fresh per test so module state cannot leak between cases. */
const importTracking = async () => {
  vi.resetModules();
  return import("@/lib/tracking");
};

beforeEach(() => {
  setPath("/");
});

describe("service mapping", () => {
  it("only ever returns one of the four normalized values", () => {
    const inputs: Array<[string, string | undefined]> = [
      ["/shopify-uae", undefined],
      ["/ai-automation", undefined],
      ["/wordpress-to-shopify", undefined],
      ["/contact", "Shopify Development"],
      ["/contact", "Something We Do Not Offer"],
      ["/about", undefined],
      ["/", ""],
    ];
    for (const [path, selection] of inputs) {
      expect(SERVICE_VALUES).toContain(resolveServiceRequested(path, selection));
    }
  });

  it("defaults every Shopify page to shopify_development", () => {
    for (const path of [
      "/shopify-development",
      "/shopify-uae",
      "/shopify-plus",
      "/shopify-themes",
      "/shopify-app-development",
      "/shopify-ksa",
      "/shopify-netherlands",
    ]) {
      expect(resolveServiceRequested(path)).toBe("shopify_development");
    }
  });

  it("defaults the AI pages to ai_automation", () => {
    for (const path of [
      "/ai-automation",
      "/ai-chatbots",
      "/process-automation",
      "/predictive-analytics",
    ]) {
      expect(resolveServiceRequested(path)).toBe("ai_automation");
    }
  });

  it("maps the future WordPress and WooCommerce to Shopify landing pages", () => {
    expect(resolveServiceRequested("/wordpress-to-shopify")).toBe(
      "wordpress_to_shopify_migration"
    );
    expect(resolveServiceRequested("/woocommerce-to-shopify-migration")).toBe(
      "wordpress_to_shopify_migration"
    );
  });

  it("maps a visitor selection on a generic contact form", () => {
    expect(resolveServiceRequested("/contact", "Shopify / E-Commerce")).toBe(
      "shopify_development"
    );
    expect(resolveServiceRequested("/contact", "AI & Automation")).toBe(
      "ai_automation"
    );
    expect(resolveServiceRequested("/contact", "ERP Solutions")).toBe("other");
  });

  it("lets an explicit selection win over the page default", () => {
    expect(resolveServiceRequested("/shopify-uae", "AI & Automation")).toBe(
      "ai_automation"
    );
  });

  it("falls back to other for unmapped pages and selections", () => {
    expect(resolveServiceRequested("/about")).toBe("other");
    expect(resolveServiceRequested("/contact", "Underwater Basket Weaving")).toBe(
      "other"
    );
    expect(resolveServiceRequested(undefined, undefined)).toBe("other");
  });

  it("is case and whitespace insensitive on selections", () => {
    expect(resolveServiceRequested("/contact", "  shopify development  ")).toBe(
      "shopify_development"
    );
  });
});

describe("generate_lead event", () => {
  it("fires exactly once per submission", async () => {
    setPath("/shopify-uae");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    expect(leads()).toHaveLength(1);
  });

  it("fires once per submission across repeated submissions", async () => {
    setPath("/shopify-uae");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    trackLeadSubmitted();
    trackLeadSubmitted();
    expect(leads()).toHaveLength(3);
  });

  it("populates a non-empty lead_id", async () => {
    setPath("/shopify-uae");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    const lead = leads()[0];
    expect(typeof lead.lead_id).toBe("string");
    expect((lead.lead_id as string).length).toBeGreaterThan(0);
  });

  it("generates a unique lead_id per submission, for deduplication", async () => {
    setPath("/shopify-uae");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    trackLeadSubmitted();
    const [a, b] = leads();
    expect(a.lead_id).not.toBe(b.lead_id);
  });

  it("carries the correct service_requested from the page", async () => {
    setPath("/ai-automation");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    expect(leads()[0].service_requested).toBe("ai_automation");
  });

  it("carries the correct service_requested from a selection", async () => {
    setPath("/contact");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted({ service: "Shopify Development" });
    expect(leads()[0].service_requested).toBe("shopify_development");
  });

  it("normalizes an unrecognised selection to other rather than passing it through", async () => {
    setPath("/contact");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted({ service: "ada@example.com" });
    const lead = leads()[0];
    expect(lead.service_requested).toBe("other");
    expect(JSON.stringify(lead)).not.toContain("ada@example.com");
  });

  it("preserves page_path", async () => {
    setPath("/shopify-development");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    expect(leads()[0].page_path).toBe("/shopify-development");
  });

  it("pushes no PII keys", async () => {
    setPath("/contact");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted({ service: "Shopify Development" });
    const keys = Object.keys(leads()[0]).map((k) => k.toLowerCase());
    for (const banned of PII_KEYS) {
      expect(keys).not.toContain(banned);
    }
  });

  it("pushes no PII values even if a caller passes them", async () => {
    setPath("/contact");
    const { trackLeadSubmitted } = await importTracking();
    for (const value of PII_VALUES) {
      trackLeadSubmitted({ service: value });
    }
    const serialized = JSON.stringify(leads());
    for (const value of PII_VALUES) {
      expect(serialized).not.toContain(value);
    }
  });

  it("emits only the expected keys, so new fields cannot slip in unnoticed", async () => {
    setPath("/shopify-uae");
    const { trackLeadSubmitted } = await importTracking();
    trackLeadSubmitted();
    const allowed = [
      "event",
      "lead_id",
      "page_path",
      "service_requested",
      // attribution keys, present only when a campaign was captured
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "gbraid",
      "wbraid",
      "landing_page",
      "referrer",
      "captured_at",
    ];
    for (const key of Object.keys(leads()[0])) {
      expect(allowed).toContain(key);
    }
  });
});

describe("contact events remain unaffected", () => {
  it("still fires exactly one event per contact click", async () => {
    setPath("/shopify-development");
    const { trackContactClick } = await importTracking();
    trackContactClick("whatsapp", "hero");
    const events = dataLayer().filter((e) => e.event === "contact_whatsapp");
    expect(events).toHaveLength(1);
    expect(events[0].link_location).toBe("hero");
  });
});
