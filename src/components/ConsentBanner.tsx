"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "globify-cookie-consent";

type Decision = "granted" | "denied";

const GRANTED_SIGNALS = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
} as const;

/**
 * Pushes a Consent Mode v2 update. The gtag stub is defined in the
 * beforeInteractive script in the root layout, so window.gtag normally
 * exists by the time this runs; the dataLayer push is a fallback in case
 * this component mounts first.
 */
const updateConsent = (signals: Record<string, string>) => {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", signals);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["consent", "update", signals]);
  }
};

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage can throw in private browsing modes; treat as no decision.
      stored = null;
    }

    if (stored === "granted") {
      // The consent default denies everything on every page load, so a
      // previously accepted decision has to be re-applied on each visit.
      updateConsent(GRANTED_SIGNALS);
      return;
    }

    if (stored === "denied") return;

    setVisible(true);
  }, []);

  const record = (decision: Decision) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, decision);
    } catch {
      // If we cannot persist the choice the banner will show again next
      // visit, which is the safe direction to fail in.
    }
    setVisible(false);
  };

  const onAccept = () => {
    updateConsent(GRANTED_SIGNALS);
    record("granted");
  };

  // Consent already defaults to denied, so rejecting only needs to be recorded
  // so the banner stops reappearing.
  const onReject = () => record("denied");

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background/95 backdrop-blur-sm shadow-lg p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <p className="text-sm leading-relaxed text-foreground/80 flex-1">
          We use cookies to analyse site traffic and measure our advertising. You can accept or
          reject these at any time. See our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Both actions are intentionally identical in size and visual weight. */}
        <div className="flex gap-3 shrink-0">
          <Button onClick={onAccept} className="flex-1 sm:flex-none min-w-[7rem]">
            Accept
          </Button>
          <Button onClick={onReject} className="flex-1 sm:flex-none min-w-[7rem]">
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
