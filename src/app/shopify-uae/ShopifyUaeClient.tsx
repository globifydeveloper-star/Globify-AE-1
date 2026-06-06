"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import CrossLinkSection from "@/components/CrossLinkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WebDevClients from "@/components/web-dev/WebDevClients";
import ShopifyPricingPackages from "@/components/shopify/ShopifyPricingPackages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactDialog } from "@/contexts/ContactDialogContext";
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, Clock,
  BarChart3, Rocket, RefreshCw, ShoppingCart, Palette, Layers,
  Globe, ChevronRight, MessageCircle, Phone,
  Send, Lock, CreditCard, Truck, Languages, Receipt, Loader2
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const InlineLeadForm = ({ id, variant = "dark" }: { id: string; variant?: "dark" | "light" }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1 = (e: React.FormEvent) => { e.preventDefault(); if (email) setStep(2); };
  const handleStep2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('email', email);
    formData.append('source', `Shopify UAE - ${id}`);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      typeof window !== "undefined" && (window as any).gtag && (window as any).gtag('event', 'generate_lead');
      toast.success("We'll be in touch within 24 hours!");
    router.push("/thank-you");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  const inputCls = isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/40" : "bg-foreground/5 border-border text-foreground placeholder:text-muted";

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <CheckCircle className="w-12 h-12 text-primary" />
        <p className={`font-semibold text-lg ${isDark ? "text-white" : "text-foreground"}`}>Thank you!</p>
        <p className={`text-sm ${isDark ? "text-white/60" : "text-muted"}`}>Our Shopify experts will reach out within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col sm:flex-row gap-3">
          <Input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className={`flex-1 h-12 rounded-full px-5 ${inputCls}`} />
          <Button type="submit" className="h-12 rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 whitespace-nowrap">
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col gap-3">
          <p className={`text-xs font-medium ${isDark ? "text-white/60" : "text-muted"}`}>Almost there — tell us a bit more:</p>
          <Input required name="name" placeholder="Your name *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input required name="phone" type="tel" placeholder="Phone Number *" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <Input name="company" placeholder="Company / Brand name" className={`h-11 rounded-lg px-4 ${inputCls}`} />
          <select required name="revenue" className={`h-11 rounded-lg px-4 text-sm border ${isDark ? "bg-white/10 border-white/20 text-white" : "bg-foreground/5 border-border text-foreground"}`}>
            <option value="">Monthly revenue range</option>
            <option>Startup</option>
            <option>Growing Business</option>
            <option>Enterprise</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {isSubmitting ? "Submitting..." : "Get My Free Growth Plan"}
          </Button>
        </form>
      )}
    </div>
  );
};

const ShopifyUae = () => {
  const { openContactDialog } = useContactDialog();
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(230,35%,14%)] to-[hsl(240,40%,18%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-border/20 rounded-full px-4 py-1.5 text-xs font-medium text-foreground shadow-sm">
                Shopify Experts in UAE — Globify
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-white">
                Shopify Development Agency in <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">UAE</span> — Dubai-Based Shopify Partner
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl leading-relaxed">
                We build, migrate, and scale Shopify and Shopify Plus stores for UAE brands across Dubai, Abu Dhabi, and Sharjah. Native integration with Stripe, PayTabs, Network International, CCAvenue, Tabby, Tamara, Aramex, Quiqup, full UAE VAT compliance, and bilingual Arabic/English RTL storefronts.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
                {["30+ UAE Stores", "Tabby & Tamara Integrated", "Arabic + English RTL", "VAT Compliant", "Aramex & Quiqup"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> {t}</span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}><InlineLeadForm id="hero-uae" variant="dark" /></motion.div>
              <motion.p variants={fadeUp} className="text-xs text-white/40">Last updated: November 2025</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="hidden lg:block relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><ShoppingCart className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-white font-bold">UAE Market Leader</h3>
                    <p className="text-white/40 text-sm">Serving the entire region</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: CreditCard, title: "Local Payments", desc: "Stripe, PayTabs, Network International, CCAvenue, Tabby, Tamara." },
                    { icon: Truck, title: "Logistics Setup", desc: "Aramex, Quiqup, DHL Express via ClickPost aggregator." },
                    { icon: Lock, title: "Compliance", desc: "5% UAE VAT, TRN capture, FTA-compliant invoices." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <item.icon className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { val: "30+", label: "UAE Stores Delivered" },
              { val: "100+", label: "Globally" },
              { val: "AED 200M+", label: "GMV Processed" },
              { val: "4.9/5", label: "Client Rating" },
              { val: "Shopify", label: "Partner Agency" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary">{s.val}</p>
                <p className="text-xs text-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <WebDevClients />

      {/* MARKET CONTEXT — citation magnet for AI engines */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">UAE Shopify Market</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why UAE Brands Are Choosing Shopify in 2026</motion.h2>

            <motion.div variants={fadeUp} className="space-y-8 text-foreground/80 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">A Maturing E-commerce Market</h3>
                <p>The UAE&apos;s e-commerce sector continues to outpace most of the GCC. With a digitally-native population, near-universal smartphone penetration, and consumer comfort with both card and Cash on Delivery purchases, the UAE has become the launchpad for D2C brands targeting the wider Middle East. Dubai alone accounts for the majority of UAE ecommerce GMV, with Abu Dhabi and Sharjah following.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Why Shopify Dominates UAE D2C</h3>
                <p>Shopify is the platform of choice for the UAE&apos;s growing direct-to-consumer landscape. Global sports and fashion brands operating UAE storefronts — from Wilson Middle East and Salomon GCC to InstaRunway and Judith Leiber — run on Shopify because the platform balances speed-to-market with the customization needed for regional integrations: Arabic RTL storefronts, local payment processors, regional shipping carriers, and VAT-compliant checkout.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What&apos;s Different About Selling in the UAE</h3>
                <p>A UAE Shopify build is not the same as a US or UK build. The right checkout stack includes Stripe, PayTabs, Network International, or CCAvenue for card processing, plus Tabby and Tamara for BNPL — both of which now account for a meaningful share of UAE cart conversions. Shipping integrations need to handle Aramex, Quiqup, and DHL Express at minimum, often via an aggregator like ClickPost for stores managing multiple carriers. The 5% UAE VAT must be configured in Shopify Tax with TRN capture at checkout for B2B customers. And around 25% of UAE ecommerce transactions are still completed via Cash on Delivery — a COD workflow with payment verification on delivery remains essential for brands serving the broader market.</p>
                <p className="mt-4">Brands that get these regional details right convert significantly better than those running generic global Shopify themes.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW WE BUILD — implementation depth (citation magnet) */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Implementation</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-8">How We Build Shopify Stores That Win in the UAE</motion.h2>

            <motion.div variants={fadeUp} className="space-y-10 text-foreground/80 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><CreditCard className="w-5 h-5 text-primary" /> UAE Payment Stack</h3>
                <p>For UAE Shopify and Shopify Plus stores, we deploy a tested combination of regional and global payment processors based on the brand&apos;s customer base and average order value.</p>
                <p className="mt-3">For card processing, we work with Stripe (AED settlement), PayTabs, Network International, and CCAvenue. Each handles 3DS 2.0 compliance required by UAE Central Bank rules, and each has tradeoffs around transaction fees, settlement timing, and supported card brands. For brands also serving Saudi customers, we integrate Mada-capable gateways through PayTabs or HyperPay alongside the UAE stack.</p>
                <p className="mt-3">BNPL adoption in the UAE has shifted from optional to expected. We&apos;ve integrated Tabby and Tamara on Shopify Plus storefronts including Wilson Middle East, Salomon GCC, and InstaRunway — handling BNPL eligibility checks at the cart level, refund and chargeback workflows, and the messaging UX that nudges customers from one-shot payment to installments without breaking checkout flow.</p>
                <p className="mt-3">For brands serving the broader UAE consumer base, we build Cash on Delivery flows with payment verification at delivery — including risk-scoring rules that flag suspicious orders before they ship, reducing return-on-delivery losses that hit unfiltered COD stores hard. Apple Pay and Google Pay are enabled by default; UAE adoption of both is high enough that turning them off costs measurable conversion.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><Truck className="w-5 h-5 text-primary" /> UAE Shipping &amp; Logistics</h3>
                <p>UAE shipping is more complex than a single-carrier setup. Most brands need Aramex for nationwide standard delivery, Quiqup for same-day in Dubai, and DHL Express for cross-border. Rather than maintain three independent integrations, we typically deploy a shipping aggregator like ClickPost — letting the brand switch carriers per order based on postcode, weight, and delivery promise, without re-engineering the Shopify integration each time a carrier changes.</p>
                <p className="mt-3">Live shipping rates at checkout reduce cart abandonment compared to flat-rate setups. We configure rate cards per carrier and surface only the relevant options to the customer based on cart contents.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><Receipt className="w-5 h-5 text-primary" /> UAE VAT Compliance on Shopify</h3>
                <p>UAE merchants must charge 5% VAT and produce FTA-compliant tax invoices. We configure Shopify Tax to apply the correct rate per order, capture the Tax Registration Number (TRN) at checkout for B2B customers, and generate invoices that include all required fields — TRN, supply date, tax amount in AED, customer details, and the required Arabic and English formatting.</p>
                <p className="mt-3">For brands selling to both consumers and businesses, we build separate invoice templates: simplified tax invoices for B2C, full tax invoices for B2B. We typically use apps like Sufio or Order Printer Pro for this. The Federal Tax Authority has discussed e-invoicing standards for UAE rollout — we&apos;re tracking those developments and will update client setups when formal requirements are published.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><Languages className="w-5 h-5 text-primary" /> Bilingual Arabic + English Storefronts</h3>
                <p>Building a Shopify store that genuinely works in Arabic is harder than flipping a language toggle. We&apos;ve rebuilt themes for Arabic RTL by combining AI-assisted translation passes with manual review — the AI gets you 80% of the way, but the remaining 20% (cultural nuance, product naming, transactional email tone) is where untested Arabic deployments fall apart.</p>
                <p className="mt-3">The technical challenges go beyond translation. RTL alignment breaks in most generic Shopify themes — product grids flip incorrectly, checkout fields lose their labels, mobile navigation collapses awkwardly, and Arabic numerals interact poorly with currency formatting. We handle the CSS reflow per template, test the checkout end-to-end in Arabic (not just the storefront), and configure hreflang tags so Google serves the right language version to the right user.</p>
                <p className="mt-3">For brands operating both Arabic and English storefronts under one domain, we use Shopify Markets with proper locale targeting — keeping SEO equity in both languages without duplicate-content penalties.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> UAE Market Considerations</h3>
                <p>A UAE Shopify build also has to factor in the operating rhythm of the market. The weekend is Saturday-Sunday (or Friday-Saturday for some brands&apos; B2B customers), which shifts campaign timing. Ramadan changes shopping behavior dramatically for several weeks each year, with late-evening order spikes and longer-than-usual fulfillment cycles. Eid sales calendars work differently from Black Friday. And UAE consumers increasingly compare D2C brand prices against marketplace alternatives on Noon and Amazon.ae — meaning DTC pricing strategy has to account for marketplace pressure.</p>
                <p className="mt-3">These aren&apos;t details we pad into proposals. They&apos;re the difference between a Shopify store that launches and stalls versus one that compounds.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ShopifyPricingPackages />

      {/* OUR PROCESS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">Our Process</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our 5-Step Shopify Development Process</motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-foreground/80 leading-relaxed">
              {[
                { n: "1", title: "Discovery & UAE Market Audit (Week 1)", desc: "We start by understanding your existing store (if any), customer data, competitor positioning in the UAE market, and the specific regional integrations you'll need. For brands migrating from another platform, this is also when we audit your current data structure for migration planning." },
                { n: "2", title: "Strategy & Wireframe (Weeks 2-3)", desc: "We map out the storefront architecture, checkout flow, product catalog structure, and the integration stack — payment processors, shipping carriers, marketing tools, ERP connections. You see wireframes and approve scope before we build." },
                { n: "3", title: "Build & Integration (Weeks 4-8)", desc: "Theme development, payment gateway integration, shipping carrier setup, Arabic RTL implementation, VAT configuration, marketing tool connections, and content population. We test every checkout path including BNPL, COD, and international payment edge cases." },
                { n: "4", title: "UAE Launch (Week 9)", desc: "Pre-launch QA across mobile and desktop, both languages, all payment methods, and all shipping options. DNS cutover and live launch coordinated with your team. We monitor closely for the first 48 hours." },
                { n: "5", title: "Growth & Optimization (Ongoing)", desc: "Post-launch, we transition into a support and growth partnership — CRO experiments, performance monitoring, app management, security updates, and quarterly reviews of what's working and what to test next." },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 p-6 bg-card border border-border rounded-xl">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center">{step.n}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted italic">Typical project timeline is 4-12 weeks depending on scope. Shopify Plus migrations from other platforms typically run 8-16 weeks.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-primary to-green-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Grow Your Business in UAE?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Join the most successful brands. Get your free market entry strategy today.</p>
          <div className="flex justify-center"><InlineLeadForm id="mid-uae" variant="dark" /></div>
        </div>
      </section>

      {/* FAQ — visible HTML answers for AEO */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground">Shopify in UAE: Frequently Asked Questions</motion.h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "How long does it take to build a Shopify store for a UAE business?",
                a: "Project timelines depend on scope. A starter store using a premium theme typically launches in 2-3 weeks. A custom-designed store with marketing integrations takes 4-6 weeks. Enterprise builds with ERP integration, multi-language support, and custom checkout typically run 8-12 weeks. Shopify Plus migrations from other platforms — Magento, WooCommerce, Salla, Zid — range from 6-16 weeks depending on data complexity and B2B requirements."
              },
              {
                q: "Which payment gateways work best for Shopify in the UAE?",
                a: "For UAE-based merchants, we recommend a combination of Stripe (with AED settlement), PayTabs, Network International, or CCAvenue for card processing. All support the 3DS 2.0 authentication required by UAE Central Bank rules. For Buy Now Pay Later, Tabby leads in the UAE market with Tamara as a strong secondary option — both have become essential for D2C brands targeting younger consumers. Apple Pay and Google Pay are enabled by default given high UAE adoption. Cash on Delivery still accounts for around 25% of UAE ecommerce transactions, so a COD workflow with delivery-time verification remains essential for brands serving the broader market."
              },
              {
                q: "Is Shopify VAT-compliant for UAE businesses?",
                a: "Yes. Shopify supports the UAE's 5% VAT rate through Shopify Tax. Merchants configure VAT settings, register their Tax Registration Number (TRN), and enable VAT-compliant invoice generation. For B2B transactions, the customer's TRN is captured at checkout and tax invoices are produced in the format required by the Federal Tax Authority — typically using apps like Sufio or Order Printer Pro. The FTA has discussed e-invoicing standards for UAE rollout but formal requirements are still being finalized."
              },
              {
                q: "Can Shopify support Arabic right-to-left (RTL) stores in the UAE?",
                a: "Yes, with proper theme implementation. Shopify's native multi-language feature supports Arabic, but RTL layout requires theme-level adjustments to CSS, text alignment, navigation flow, and checkout. Generic Shopify themes don't handle Arabic RTL correctly out of the box — product grids flip incorrectly, checkout fields lose labels, and mobile navigation often breaks. We rebuild themes for Arabic by combining AI-assisted translation with manual review, then test the full checkout flow in Arabic. Proper hreflang setup signals Google which language version to serve to which user."
              },
              {
                q: "Which shipping carriers integrate with Shopify in the UAE?",
                a: "The most common UAE shipping integrations are Aramex (nationwide standard delivery), Quiqup (Dubai same-day), DHL Express (cross-border), and Fetchr (regional last-mile). For brands managing multiple carriers, we typically deploy a shipping aggregator like ClickPost — this lets the brand switch carriers per order without re-engineering the Shopify integration. Live shipping rates at checkout reduce cart abandonment significantly compared to flat-rate shipping."
              },
              {
                q: "What do a Shopify store for a UAE business typically cost?",
                a: "Globify's transparent pricing starts at AED 3,000 for a starter store using a premium theme (2-3 week delivery). Custom-designed stores with marketing integrations are AED 12,000. Enterprise builds with ERP integration and multi-language are AED 30,000. Shopify Plus engagements are custom-quoted based on scope. These prices cover development; ongoing Shopify subscription fees, payment gateway transaction fees (typically 2-2.9% + AED 1 per transaction), and optional app subscriptions are billed separately."
              },
              {
                q: "Should a UAE business choose Shopify or Salla?",
                a: "For brands selling primarily within Saudi Arabia, Salla offers strong Arabic-first defaults and built-in Saudi payment gateways. For brands targeting the UAE, GCC-wide, and international markets, Shopify offers a stronger app ecosystem, better international payment processing, more theme flexibility, and superior B2B capabilities through Shopify Plus. UAE D2C brands that plan to scale beyond the GCC typically choose Shopify. Many Saudi brands that started on Salla migrate to Shopify Plus once they hit operational ceilings around catalog complexity, multi-currency, and B2B workflows."
              },
              {
                q: "Can you migrate an existing store to Shopify from another platform?",
                a: "Yes. We've migrated stores from WooCommerce, Magento, Salla, Zid, and custom-built carts. Migration typically includes product catalog, customer accounts, order history, URL redirect mapping for SEO preservation, theme rebuild, payment gateway reconnection, app reinstallation, and tax and shipping configuration. Standard migrations take 4-8 weeks; complex multi-currency or B2B migrations run 12-16 weeks. We commit to zero downtime during the cutover."
              },
              {
                q: "Do you offer ongoing support after the Shopify store launches?",
                a: "Yes. Our post-launch support covers bug fixes, performance monitoring, security updates, Shopify version upgrades, app management, conversion rate optimization (CRO), and growth strategy. Pricing depends on store complexity and support hours needed. Enterprise and Shopify Plus clients receive a dedicated solutions architect as part of the ongoing partnership."
              },
              {
                q: "Are you a Shopify Partner in the UAE?",
                a: "Yes. Globify is a Shopify Partner with offices in Dubai (Al Qusais Plaza), Trivandrum (India), and Gießen (Germany). We're ISO 27001 certified for information security management, a Google Partner, and a Clutch Top Agency. We've built and scaled Shopify and Shopify Plus stores for brands including Wilson Middle East, Salomon GCC, and InstaRunway. Our UAE team handles strategy and project management; our Trivandrum team provides development capacity at competitive rates."
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,6%)] via-[hsl(230,35%,14%)] to-[hsl(240,40%,18%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">Build the Future of E-commerce</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 mb-10">Our UAE-focused Shopify team is here to help you scale.</motion.p>
            <motion.div variants={fadeUp} className="flex justify-center mb-8"><InlineLeadForm id="final-uae" variant="dark" /></motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button onClick={openContactDialog} variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white gap-2 font-semibold">Book Strategy Call</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CrossLinkSection currentPage="shopify-uae" links={["shopify-dev", "shopify-plus", "shopify-themes", "ecommerce", "digital-marketing", "cro"]} variant="light" />
      <Footer />
      <MobileFloatingCTA />
    </>
  );
};

export default ShopifyUae;