"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "globify-cookie-consent";

/**
 * Dispatched to re-open the banner after a decision has already been made,
 * so visitors can change their mind without clearing site data.
 */
export const CONSENT_SETTINGS_EVENT = "globify:open-consent-settings";

export const openConsentSettings = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
};

type Preferences = {
  analytics: boolean;
  advertising: boolean;
};

const ALL_DENIED: Preferences = { analytics: false, advertising: false };
const ALL_GRANTED: Preferences = { analytics: true, advertising: true };

const signalsFor = (prefs: Preferences) => ({
  analytics_storage: prefs.analytics ? "granted" : "denied",
  ad_storage: prefs.advertising ? "granted" : "denied",
  ad_user_data: prefs.advertising ? "granted" : "denied",
  ad_personalization: prefs.advertising ? "granted" : "denied",
});

/**
 * Pushes a Consent Mode v2 update. The gtag stub is defined in the
 * beforeInteractive script in the root layout, so window.gtag normally
 * exists by the time this runs; the dataLayer push is a fallback in case
 * this component mounts first.
 */
const updateConsent = (prefs: Preferences) => {
  if (typeof window === "undefined") return;
  const w = window as any;
  const signals = signalsFor(prefs);
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", signals);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["consent", "update", signals]);
  }
};

const readStored = (): Preferences | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    // Migrate the earlier all-or-nothing values.
    if (raw === "granted") return ALL_GRANTED;
    if (raw === "denied") return ALL_DENIED;
    const parsed = JSON.parse(raw) as Partial<Preferences>;
    return {
      analytics: parsed.analytics === true,
      advertising: parsed.advertising === true,
    };
  } catch {
    return null;
  }
};

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      // The consent default denies everything on every page load, so a stored
      // decision has to be re-applied on each visit.
      updateConsent(stored);
      setAnalytics(stored.analytics);
      setAdvertising(stored.advertising);
      return;
    }
    setVisible(true);
  }, []);

  // Re-open on demand from anywhere on the site, e.g. the footer link.
  useEffect(() => {
    const reopen = () => {
      const stored = readStored();
      if (stored) {
        setAnalytics(stored.analytics);
        setAdvertising(stored.advertising);
      }
      setShowPreferences(false);
      setVisible(true);
    };
    window.addEventListener(CONSENT_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_SETTINGS_EVENT, reopen);
  }, []);

  const apply = (prefs: Preferences) => {
    updateConsent(prefs);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // If we cannot persist the choice the banner will show again next
      // visit, which is the safe direction to fail in.
    }
    setAnalytics(prefs.analytics);
    setAdvertising(prefs.advertising);
    setShowPreferences(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background/95 backdrop-blur-sm shadow-lg p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-foreground/80">
          We use cookies to analyse site traffic and measure our advertising. Essential cookies are
          always active. You can accept, reject, or choose which categories to allow. See our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
          .
        </p>

        {showPreferences && (
          <fieldset className="mt-5 border-t border-border pt-4">
            <legend className="sr-only">Cookie categories</legend>

            <div className="flex items-start gap-3 py-2">
              <input
                type="checkbox"
                id="consent-analytics"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <label htmlFor="consent-analytics" className="text-sm text-foreground/80">
                <span className="font-semibold text-foreground">Analytics</span>
                <span className="block text-foreground/60">
                  Helps us understand how the site is used.
                </span>
              </label>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input
                type="checkbox"
                id="consent-advertising"
                checked={advertising}
                onChange={(e) => setAdvertising(e.target.checked)}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <label htmlFor="consent-advertising" className="text-sm text-foreground/80">
                <span className="font-semibold text-foreground">Advertising</span>
                <span className="block text-foreground/60">
                  Used to measure and personalise our ads.
                </span>
              </label>
            </div>
          </fieldset>
        )}

        {/* All actions share the same component, variant and width. Giving
            "Accept all" more visual weight than the alternatives is itself a
            compliance problem, not a styling choice. */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          {showPreferences ? (
            <Button
              onClick={() => apply({ analytics, advertising })}
              className="flex-1 sm:flex-none sm:min-w-[12rem]"
            >
              Save preferences
            </Button>
          ) : (
            <Button
              onClick={() => setShowPreferences(true)}
              className="flex-1 sm:flex-none sm:min-w-[12rem]"
            >
              Manage preferences
            </Button>
          )}
          <Button
            onClick={() => apply(ALL_GRANTED)}
            className="flex-1 sm:flex-none sm:min-w-[12rem]"
          >
            Accept all
          </Button>
          <Button
            onClick={() => apply(ALL_DENIED)}
            className="flex-1 sm:flex-none sm:min-w-[12rem]"
          >
            Reject non-essential
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
