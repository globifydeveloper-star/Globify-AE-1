"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import {
  SHOPIFY_CLIENTS,
  CLUTCH_REVIEWERS,
  CLUTCH_PROFILE_URL,
} from "@/data/shopifyClients";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

/**
 * Replaces the previous anonymous testimonial cards with proof that can be
 * independently checked: named brands linking to their live storefronts, and
 * real Clutch reviewers linking to the public profile.
 */
const ShopifyClientProof = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">
          Client Proof
        </motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">
          30+ Shopify Stores Delivered. Here Are Some You Can Visit.
        </motion.h2>
      </motion.div>

      {/* Named brands, each linking to its live storefront */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14"
      >
        {SHOPIFY_CLIENTS.map((client) =>
          client.url ? (
            <motion.a
              key={client.brand}
              variants={fadeUp}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2 bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/30 transition-colors"
            >
              <span className="font-semibold text-sm text-foreground">{client.brand}</span>
              <ArrowUpRight className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ) : (
            <motion.div
              key={client.brand}
              variants={fadeUp}
              className="flex items-center bg-card border border-border rounded-xl px-5 py-4"
            >
              <span className="font-semibold text-sm text-foreground">{client.brand}</span>
            </motion.div>
          )
        )}
      </motion.div>

      {/* Verified Clutch reviews */}
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
            <span className="font-bold text-foreground">5.0 on Clutch</span>
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
              className="bg-card border border-border rounded-xl p-5"
            >
              <p className="font-semibold text-foreground text-sm">{reviewer.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{reviewer.role}</p>
            </motion.div>
          ))}
        </div>

        {/*
          TODO: EMBED CLIENT VIDEO TESTIMONIALS HERE.
          Awaiting YouTube links from the channel youtube.com/@globifydigitalsolutions.
          Replace this placeholder with the embeds once the URLs are supplied.
          Until then nothing is rendered, so no unverifiable claim is shown.
        */}
      </motion.div>
    </div>
  </section>
);

export default ShopifyClientProof;
