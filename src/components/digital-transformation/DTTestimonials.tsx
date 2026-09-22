"use client";

import { motion } from "framer-motion";
import ClutchProof from "@/components/ClutchProof";

/**
 * Previously rendered three testimonials attributed to "Rajesh Kumar, CEO,
 * TechScale India", "Sarah Al-Maktoum, CTO, Gulf Innovations" and "Michael
 * Chen, IT Director, Pacific Retail Group". None were real clients and the
 * quoted results were not documented, so the whole set was removed.
 *
 * Replaced with the verified Clutch profile and its real named reviewers.
 */
const DTTestimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Reviewed by the Clients We Work With
          </h2>
        </motion.div>

        <ClutchProof />
      </div>
    </section>
  );
};

export default DTTestimonials;
