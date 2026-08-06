import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

/**
 * Structural guarantees across every lead form in the app.
 *
 * These assert the invariants that a per-component render test would, but
 * across all 48 forms at once and without a DOM stack: one submission path
 * produces exactly one generate_lead, it only fires after a confirmed success,
 * and no form pushes personal data.
 */

const SRC = path.resolve(__dirname, "..");

const walk = (dir: string, out: string[] = []): string[] => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".tsx")) out.push(full);
  }
  return out;
};

const allTsx = walk(SRC);
const rel = (f: string) => path.relative(SRC, f).replace(/\\/g, "/");
const count = (haystack: string, needle: string) => haystack.split(needle).length - 1;

const leadForms = allTsx
  .map((file) => ({ file, src: fs.readFileSync(file, "utf8") }))
  .filter(({ src }) => src.includes('fetch("/api/contact"'));

describe("lead form inventory", () => {
  it("finds every lead form in the app", () => {
    expect(leadForms.length).toBeGreaterThanOrEqual(48);
  });
});

describe("exactly one generate_lead per submission", () => {
  it("every form that posts a lead also tracks it", () => {
    const untracked = leadForms
      .filter(({ src }) => !src.includes("trackLeadSubmitted"))
      .map(({ file }) => rel(file));
    expect(untracked).toEqual([]);
  });

  it("tracks exactly once per submission path, never twice", () => {
    const mismatched = leadForms
      .filter(
        ({ src }) =>
          count(src, "trackLeadSubmitted(") !== count(src, 'fetch("/api/contact"')
      )
      .map(({ file, src }) => ({
        file: rel(file),
        submissions: count(src, 'fetch("/api/contact"'),
        trackCalls: count(src, "trackLeadSubmitted("),
      }));
    expect(mismatched).toEqual([]);
  });

  it("has no legacy direct gtag generate_lead calls left anywhere", () => {
    const offenders = allTsx
      .filter((file) => fs.readFileSync(file, "utf8").includes("'generate_lead'"))
      .map(rel);
    expect(offenders).toEqual([]);
  });
});

describe("generate_lead only fires on confirmed success", () => {
  it("is always preceded by a response-ok guard", () => {
    const unguarded = leadForms
      .filter(({ src }) => {
        const idx = src.indexOf("trackLeadSubmitted(");
        if (idx === -1) return false;
        // The success guard must appear before the tracking call.
        const before = src.slice(0, idx);
        return !/res\.ok/.test(before);
      })
      .map(({ file }) => rel(file));
    expect(unguarded).toEqual([]);
  });

  it("is never called from a click handler", () => {
    const onClickTracked = leadForms
      .filter(({ src }) => /onClick=\{[^}]*trackLeadSubmitted/.test(src))
      .map(({ file }) => rel(file));
    expect(onClickTracked).toEqual([]);
  });
});

describe("no PII reaches the dataLayer", () => {
  it("no component pushes a raw form field into the dataLayer", () => {
    const banned = [
      /pushDataLayerEvent\([^)]*\bname\b/,
      /pushDataLayerEvent\([^)]*\bemail\b/,
      /pushDataLayerEvent\([^)]*\bphone\b/,
      /pushDataLayerEvent\([^)]*\bmessage\b/,
      /pushDataLayerEvent\([^)]*\bcompany\b/,
    ];
    const offenders = allTsx
      .map((file) => ({ file, src: fs.readFileSync(file, "utf8") }))
      .filter(({ src }) => banned.some((re) => re.test(src)))
      .map(({ file }) => rel(file));
    expect(offenders).toEqual([]);
  });

  it("only ever passes a service value to trackLeadSubmitted", () => {
    const offenders = leadForms
      .filter(({ src }) => {
        const calls = src.match(/trackLeadSubmitted\(\{[^}]*\}\)/g) ?? [];
        return calls.some((call) => !/^trackLeadSubmitted\(\{\s*service:/.test(call));
      })
      .map(({ file }) => rel(file));
    expect(offenders).toEqual([]);
  });
});
