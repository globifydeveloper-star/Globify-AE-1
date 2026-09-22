"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { CLUTCH_PROFILE_URL, CLUTCH_RATING, CLUTCH_REVIEWERS } from "@/data/clutch";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

/**
 * Verifiable social proof, used in place of the anonymous testimonial cards
 * that were previously shown. Every name here is a real reviewer on the public
 * Clutch profile, which is linked so a reader can check it.
 *
 * Deliberately shows no quotes: quoting a real person requires their actual
 * words from Clutch, not a paraphrase.
 */
const ClutchProof = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const isDark = variant === "dark";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className={`font-bold ${isDark ? "text-white" : "text-foreground"}`}>
            {CLUTCH_RATING} on Clutch
          </span>
        </div>
        <a
          href={CLUTCH_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary underline underline-offset-4 hover:no-underline"
        >
          Read the verified reviews
        </a>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-4">
        {CLUTCH_REVIEWERS.map((reviewer) => (
          <motion.div
            key={reviewer.name}
            variants={fadeUp}
            className={`rounded-xl p-5 border ${
              isDark ? "bg-white/[0.04] border-white/[0.08]" : "bg-card border-border"
            }`}
          >
            <p className={`font-semibold text-sm ${isDark ? "text-white" : "text-foreground"}`}>
              {reviewer.name}
            </p>
            <p className={`text-xs mt-0.5 ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
              {reviewer.role}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClutchProof;
