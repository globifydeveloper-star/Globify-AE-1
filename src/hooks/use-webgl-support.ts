"use client";

import * as React from "react";

/**
 * Attempts to create a real WebGL rendering context. This is the only
 * reliable way to know whether Three.js/@react-three/fiber can safely
 * initialize — browser/GPU/driver support can't be inferred from user
 * agent or feature-detecting `window.WebGLRenderingContext` alone (that
 * constructor can exist even when context creation fails).
 */
function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

/** Conservative heuristic — only flags clearly low-powered mobile hardware. */
function isLowPoweredDevice(): boolean {
  try {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    if (nav.connection?.saveData) return true;
    if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return true;
    if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2) return true;
    return false;
  } catch {
    return false;
  }
}

export type HeroGlobeCapability = "checking" | "enhanced" | "static";

/**
 * Decides whether the interactive 3D hero globe should be attempted.
 *
 * Resolves to "static" (lightweight, non-WebGL hero background) whenever:
 *  - WebGL is unavailable, disabled, or context creation fails,
 *  - the user has requested reduced motion,
 *  - the device looks low-powered (mobile heuristic only).
 *
 * Starts as "checking" and stays there through SSR and first client paint,
 * so server and client render identically (no hydration mismatch) and the
 * globe is only ever mounted once we're certain it's safe to do so.
 */
export function useHeroGlobeCapability(
  isMobile: boolean,
  prefersReducedMotion: boolean,
): HeroGlobeCapability {
  const [capability, setCapability] = React.useState<HeroGlobeCapability>("checking");

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setCapability("static");
      return;
    }
    if (!detectWebGL()) {
      setCapability("static");
      return;
    }
    if (isMobile && isLowPoweredDevice()) {
      setCapability("static");
      return;
    }
    setCapability("enhanced");
  }, [isMobile, prefersReducedMotion]);

  return capability;
}