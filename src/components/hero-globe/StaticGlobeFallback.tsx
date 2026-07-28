"use client";

/**
 * Lightweight, dependency-free hero visual shown whenever the interactive
 * WebGL globe can't or shouldn't run — no WebGL support, reduced-motion
 * preference, low-powered device, or a runtime error caught by
 * GlobeErrorBoundary. Pure CSS: no canvas, no animation loop, so it can
 * never throw and costs almost nothing to paint. Colors match the existing
 * globe/atmosphere palette so the swap is visually seamless.
 */
const StaticGlobeFallback = () => {
  return (
    <div
      className="relative rounded-full"
      style={{
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at 35% 30%, hsl(25 90% 55% / 0.9) 0%, hsl(25 80% 35% / 0.55) 35%, hsl(25 60% 15% / 0.25) 65%, transparent 75%)",
        boxShadow:
          "0 0 120px 20px hsl(25 80% 45% / 0.15), inset -40px -30px 100px hsl(20 60% 10% / 0.5)",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 65% 70%, transparent 0%, hsl(20 60% 8% / 0.35) 60%)",
        }}
      />
    </div>
  );
};

export default StaticGlobeFallback;