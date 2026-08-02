"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";
import { trackVirtualPageView } from "@/lib/tracking";

/**
 * Mounted once in the root layout.
 *
 * - Captures first-touch attribution on landing.
 * - Pushes virtual_page_view on confirmed client-side route changes only.
 *
 * Deliberately uses usePathname and not useSearchParams: useSearchParams
 * opts the whole tree into dynamic rendering, which would drop ~221 statically
 * generated pages. The query string is read directly off window.location in
 * captureAttribution instead, which has the same effect without that cost.
 */
const AnalyticsTracker = () => {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    // Skip the initial load. GTM's own container load handles the first
    // pageview; virtual_page_view is for SPA navigation only.
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;
    trackVirtualPageView(pathname);
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
