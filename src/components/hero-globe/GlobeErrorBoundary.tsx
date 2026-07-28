"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches any runtime error thrown while mounting or rendering the
 * interactive 3D hero globe — WebGL context creation failure, lost
 * context, a Three.js runtime exception, etc. — and swaps in a static
 * fallback instead of letting the error bubble up and crash the page.
 *
 * This is a deliberate belt-and-braces layer on top of the upfront
 * `useHeroGlobeCapability` check: that check prevents mounting the globe
 * in environments we already know can't support it, this boundary catches
 * anything that still goes wrong once it's running (e.g. context loss
 * mid-session on a throttled mobile tab).
 */
class GlobeErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        "Hero globe failed to render — falling back to static hero background.",
        error,
      );
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default GlobeErrorBoundary;