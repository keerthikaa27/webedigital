"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Inline SVG Icons ──────────────────────────────────────────────
const IconCart = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a2744" strokeWidth="2.5">
    <circle cx="24" cy="54" r="4" />
    <circle cx="48" cy="54" r="4" />
    <path d="M4 8h8l8 28h24l8-20H16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a2744" strokeWidth="2.5">
    <rect x="6" y="22" width="40" height="20" rx="4" />
    <line x1="36" y1="32" x2="58" y2="32" strokeLinecap="round" />
    <circle cx="50" cy="32" r="6" />
    <line x1="14" y1="32" x2="28" y2="32" strokeLinecap="round" />
  </svg>
);
const IconCode = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a2744" strokeWidth="2.5">
    <rect x="6" y="10" width="52" height="40" rx="4" />
    <polyline points="22,28 14,36 22,44" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="42,28 50,36 42,44" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="30" y1="24" x2="34" y2="48" strokeLinecap="round" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0" stroke="#2ec4b6" strokeWidth="2.5">
    <polyline points="4,10 8,14 16,6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
    <line x1="3" y1="10" x2="17" y2="10" />
    <polyline points="11,4 17,10 11,16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 20 20" fill="none" className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} stroke="currentColor" strokeWidth="2">
    <polyline points="4,7 10,13 16,7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const SEO_SERVICES = [
  {
    icon: <IconCart />,
    title: "E-Commerce SEO",
    href: "#",
    body: "For Shopify, WooCommerce, and DTC brands that need stronger product, category, and collection page visibility. We improve technical structure, product content, internal linking, schema, and search intent alignment so organic traffic supports real buying journeys.    ",
  },
  {
    icon: <IconSearch />,
    title: "Local SEO",
    href: "#",
    body: "For service businesses that need to show up when customers search in specific cities, areas, or nearby locations. We optimize service pages, local intent, Google Business Profile signals, location relevance, reviews, and content support to improve local discovery.    ",
  },
  {
    icon: <IconCode />,
    title: "Growth SEO",
    href: "#",
    body: "For startups, service brands, and companies that want long-term organic growth beyond basic keyword ranking. We focus on technical SEO, content systems, topical authority, page optimization, internal linking, and conversion-focused search visibility.    ",
  },
];

const BENEFITS = [
  "Keyword research based on buyer intent, not random search volume",
  "Technical SEO fixes for crawlability, indexing, speed, and site structure",
  "On-page SEO for service pages, landing pages, blogs, and product pages",
  "Content built around questions your customers actually search",
  "Internal linking that supports important pages instead of leaving them isolated",
  "Monthly reporting that explains what improved, what is stuck, and what comes next",
];

const FAQS = [
  { q: "Can you fix SEO if another agency has already worked on my website?", a: "Yes. Many clients come to us after trying SEO before. We review what has already been done, what is actually working, what is harming performance, and what is missing. Sometimes the issue is not effort. It is poor keyword mapping, weak page structure, low-quality content, random backlinks, or reporting without real execution." },
  { q: "Do backlinks still matter for SEO?", a: "Backlinks can matter, but they should not be treated as the first or only solution. If your website has weak pages, poor technical structure, thin content, and unclear search intent, backlinks alone will not fix the problem. We focus first on building a strong SEO foundation, then strengthen authority where it makes sense." },
  { q: "Do you handle local SEO and ecommerce SEO too?", a: "Yes. We work on local SEO for service businesses and ecommerce SEO for Shopify, WooCommerce, and DTC brands. The strategy changes based on the business model. Local SEO needs location and service relevance, while ecommerce SEO needs product, category, collection, technical, and content optimization." },
  { q: "What do you need from us before starting SEO?", a: "We usually need your website URL, business goals, target locations, important services or products, current analytics access, Search Console access, and any previous SEO work details. If you do not have everything ready, that is okay. We can begin with an audit and identify what needs to be set up first." },
];

// ── Hook: reveal on scroll ────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ═══════════════════════════════════════════════════════════════════
//  HERO
// ═══════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d1628 0%, #111c38 40%, #1a2744 70%, #1e3056 100%)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,196,182,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(46,196,182,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute pointer-events-none" style={{ width: 500, height: 500, top: -150, right: -50, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,196,182,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute pointer-events-none" style={{ width: 350, height: 350, bottom: -100, left: -50, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,90,34,0.10) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute pointer-events-none" style={{ width: 200, height: 200, top: "55%", right: "35%", borderRadius: "50%", background: "radial-gradient(circle, rgba(46,196,182,0.12) 0%, transparent 70%)", filter: "blur(30px)", animation: "floatOrb 7s ease-in-out infinite 3s" }} />

      {/* ══ DESKTOP HERO (lg+) — COMPLETELY UNCHANGED ══ */}
      <div className="hidden lg:flex relative z-10 max-w-7xl mx-auto px-16 py-20 grid-cols-2 gap-12 items-center w-full" style={{ display: "none" }}>
        {/* Note: using inline grid below for desktop */}
      </div>
      <div
        className="hidden lg:grid relative z-10 w-full"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px clamp(48px,5vw,80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* Left text */}
        <div>
          <div className="flex items-center gap-3 mb-5" style={{ animation: "fadeSlideUp 0.6s ease forwards" }}>
            <div className="h-px w-8" style={{ background: "#2ec4b6" }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#2ec4b6", fontFamily: "'Poppins',sans-serif" }}>
              Advanced SEO Techniques
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="block">Search Engine</span>
            <span className="block mt-2 text-[#2ec4b6]">Optimization</span>
            <span className="block mt-2">Services</span>
          </h1>
          <p className="text-base lg:text-lg leading-relaxed mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.72)", fontFamily: "'DM Sans',sans-serif", animation: "fadeSlideUp 0.7s ease 0.2s forwards", opacity: 0 }}>
WebeDigital helps brands improve search visibility through technical SEO, keyword strategy, on-page optimization, content planning and creation, internal linking, and practical execution. We do not chase rankings blindly. We build SEO systems that help the right people find your website, understand your offer, and move closer to action.
</p>
          <div className="flex flex-wrap gap-4" style={{ animation: "fadeSlideUp 0.7s ease 0.3s forwards", opacity: 0 }}>
          <Link href="/contact-us" className="relative overflow-hidden flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 6px 24px rgba(241,90,34,0.35)" }}>
              <span>Let&apos;s Talk Impact</span>
              <IconArrow />
              <span className="absolute inset-0 shimmer-effect" />
            </Link>
            <Link href="/case-studies" className="flex items-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-md border transition-all duration-300 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans',sans-serif" }}>
              View SEO Results
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 mt-14" style={{ animation: "fadeSlideUp 0.7s ease 0.4s forwards", opacity: 0 }}>
            {[["30+", "Brands & Projects Worked On"], ["3 to 4x", " Average Organic Growth"], ["97%", "Retention Rate"]].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-black text-white" style={{ fontFamily: "'Poppins',sans-serif" }}>{num}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right blob image */}
        <div className="relative flex -right-6 items-center justify-center min-h-[420px] lg:min-h-[520px]">
          <div className="absolute" style={{ width: "88%", height: "88%", borderRadius: "62% 38% 46% 54% / 54% 46% 54% 46%", border: "1.5px solid rgba(46,196,182,0.25)", animation: "blobSpin 18s linear infinite" }} />
          <div className="absolute" style={{ width: "94%", height: "94%", borderRadius: "38% 62% 54% 46% / 46% 54% 46% 54%", border: "1px solid rgba(46,196,182,0.12)", animation: "blobSpin 24s linear infinite reverse" }} />
          {[
            { top: "8%", right: "10%", size: 14, color: "#f15a22" },
            { top: "72%", left: "6%", size: 10, color: "#2ec4b6" },
            { bottom: "10%", right: "15%", size: 18, color: "#2ec4b6" },
          ].map((dot, i) => (
            <div key={i} className="absolute rounded-full" style={{ width: dot.size, height: dot.size, background: dot.color, top: (dot as any).top, right: (dot as any).right, left: (dot as any).left, bottom: (dot as any).bottom, opacity: 0.7 }} />
          ))}
          <div className="absolute" style={{ width: "82%", height: "82%", background: "linear-gradient(135deg, rgba(46,196,182,0.30) 0%, rgba(46,196,182,0.12) 40%, rgba(30,48,86,0.6) 100%)", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", filter: "blur(2px)" }} />
          <div className="absolute" style={{ width: "75%", height: "75%", background: "linear-gradient(225deg, rgba(241,90,34,0.18) 0%, transparent 55%)", animation: "blobMorph 9s ease-in-out infinite reverse 2s" }} />
          <div className="relative overflow-hidden shadow-2xl" style={{ width: "70%", height: "70%", minHeight: 320, borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 2px rgba(46,196,182,0.3)" }}>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="SEO team working" className="w-full h-full object-cover" style={{ borderRadius: "inherit" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(46,196,182,0.15) 0%, rgba(26,39,68,0.25) 100%)" }} />
          </div>
        </div>
      </div>

      {/* ══ MOBILE HERO (below lg) — REDESIGNED ══
          Order: eyebrow → H1 → blob image → stats row → CTAs
          The image sits between headline and body/CTAs — visual
          anchor in the middle, text top and bottom.
      */}
      <div className="lg:hidden relative z-10 flex flex-col px-5 pt-14 pb-10">

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px w-6 bg-[#2ec4b6]" />
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#2ec4b6]" style={{ fontFamily: "'Poppins',sans-serif" }}>
            Advanced SEO Techniques
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[2.6rem] font-bold leading-[1.07] text-white mb-6" style={{ fontFamily: "'Poppins',sans-serif" }}>
          Search Engine<br />
          <span className="text-[#2ec4b6]">Optimization</span><br />
          Services
        </h1>

        {/* ── Blob image — between headline and body ── */}
        <div className="relative flex items-center justify-center mb-8" style={{ height: 280 }}>
          {/* Spinning rings */}
          <div className="absolute" style={{ width: "88%", height: "88%", borderRadius: "62% 38% 46% 54% / 54% 46% 54% 46%", border: "1.5px solid rgba(46,196,182,0.22)", animation: "blobSpin 18s linear infinite" }} />
          <div className="absolute" style={{ width: "94%", height: "94%", borderRadius: "38% 62% 54% 46% / 46% 54% 46% 54%", border: "1px solid rgba(46,196,182,0.1)", animation: "blobSpin 24s linear infinite reverse" }} />
          {/* Teal blob bg */}
          <div className="absolute" style={{ width: "78%", height: "78%", background: "linear-gradient(135deg,rgba(46,196,182,0.28) 0%,rgba(30,48,86,0.55) 100%)", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", filter: "blur(2px)" }} />
          {/* Photo */}
          <div className="relative overflow-hidden" style={{ width: "68%", height: "90%", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", boxShadow: "0 20px 60px rgba(0,0,0,0.45), 0 0 0 2px rgba(46,196,182,0.25)" }}>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="SEO team" className="w-full h-full object-cover" style={{ borderRadius: "inherit" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(46,196,182,0.12) 0%,rgba(26,39,68,0.2) 100%)" }} />
          </div>
          {/* Accent dots */}
          <div className="absolute rounded-full" style={{ width: 10, height: 10, background: "#f15a22", top: "10%", right: "8%", opacity: 0.8 }} />
          <div className="absolute rounded-full" style={{ width: 8, height: 8, background: "#2ec4b6", bottom: "12%", left: "5%", opacity: 0.7 }} />
        </div>

        {/* Body copy */}
        <p className="text-[15px] leading-relaxed mb-7 text-white/70" style={{ fontFamily: "'DM Sans',sans-serif" }}>
WebeDigital helps brands improve search visibility through technical SEO, keyword strategy, on-page optimization, content planning and creation, internal linking, and practical execution. We do not chase rankings blindly. We build SEO systems that help the right people find your website, understand your offer, and move closer to action.
</p>

        {/* Stats row — horizontal scroll if needed */}
        <div className="flex gap-6 mb-8 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {[["30+", "Brands & Projects Worked On"], ["3 to 4x", " Average Organic Growth"], ["97%", "Retention Rate"]].map(([num, label]) => (
            <div key={label} className="flex-shrink-0 text-center">
              <div className="text-2xl font-black text-white" style={{ fontFamily: "'Poppins',sans-serif" }}>{num}</div>
              <div className="text-[10px] mt-0.5 text-white/45 whitespace-nowrap">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <Link href="/contact-us" className="relative overflow-hidden flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl w-full" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 6px 24px rgba(241,90,34,0.35)" }}>
            Let&apos;s Talk Impact <IconArrow />
            <span className="absolute inset-0 shimmer-effect" />
          </Link>
          <Link href="/case-studies" className="flex items-center justify-center gap-2 text-white text-sm font-semibold px-6 py-3.5 rounded-xl border w-full" style={{ borderColor: "rgba(255,255,255,0.22)", fontFamily: "'DM Sans',sans-serif" }}>
            View Our Results
          </Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  SERVICES GRID
// ═══════════════════════════════════════════════════════════════════
function ServicesGrid() {
  const ref = useReveal();
  return (
    <section className="py-24 bg-white">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        ref={ref}
        className="hidden lg:block"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px,5vw,80px)",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
            Advanced SEO Services <br /><span style={{ color: "#2ec4b6" }}>Proven</span> to Grow Your Needs
          </h2>
          <p className="text-base text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>
Every business does not need the same SEO strategy. A local service company, an ecommerce store, and a national brand all compete differently. We build SEO around your market, your website structure, your customer intent, and the kind of visibility that can actually support growth.
</p>
        </div>
        <div className="grid md:grid-cols-3 px-16 gap-8">
          {SEO_SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-400 hover:-translate-y-2"
              style={{ border: "1.5px solid rgba(46,196,182,0.15)", boxShadow: "0 4px 30px rgba(26,39,68,0.06)", animationDelay: `${i * 0.1}s`, transition: "all 0.35s ease" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 20px 60px rgba(46,196,182,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 30px rgba(26,39,68,0.06)")}
            >
              <div className="w-28 h-28 rounded-full flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:scale-105" style={{ border: "3px solid", borderColor: "#2ec4b6", background: "linear-gradient(135deg,rgba(46,196,182,0.06) 0%, white 100%)", boxShadow: "0 0 0 6px rgba(46,196,182,0.06)" }}>
                {svc.icon}
              </div>
              <a href={svc.href} className="text-xl font-bold mb-4 underline underline-offset-4 transition-colors hover:text-[#1a9e93]" style={{ color: "#2ec4b6", fontFamily: "'Poppins',sans-serif", textDecorationColor: "#2ec4b6" }}>
                {svc.title}
              </a>
              <p className="text-sm leading-relaxed text-gray-500" style={{ fontFamily: "'DM Sans',sans-serif" }}>{svc.body}</p>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(90deg,#2ec4b6,#f15a22)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ MOBILE — REDESIGNED ══
          Order per card: Icon circle (visual) → Title → Body
          Horizontal scrollable card strip so all 3 are accessible
          without a cramped 3-col grid.
      */}
      <div className="lg:hidden px-5 pt-2 pb-2">
        {/* Section header */}
        <div className="text-center mb-10 px-2">
          <h2 className="text-[1.9rem] font-bold leading-tight mb-3" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
            Advanced SEO Services <span style={{ color: "#2ec4b6" }}>Proven</span> to Grow Your Needs
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>
Every business does not need the same SEO strategy. A local service company, an ecommerce store, and a national brand all compete differently. We build SEO around your market, your website structure, your customer intent, and the kind of visibility that can actually support growth.
</p>
        </div>

        {/* Horizontal card scroller */}
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory" }}
        >
          {SEO_SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="flex-shrink-0 flex flex-col items-center text-center bg-white rounded-2xl p-6"
              style={{
                width: "76vw",
                maxWidth: 300,
                scrollSnapAlign: "start",
                border: "1.5px solid rgba(46,196,182,0.18)",
                boxShadow: "0 4px 24px rgba(26,39,68,0.07)",
              }}
            >
              {/* Icon circle — visual anchor at top */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-5"
                style={{ border: "3px solid #2ec4b6", background: "linear-gradient(135deg,rgba(46,196,182,0.06) 0%,white 100%)", boxShadow: "0 0 0 6px rgba(46,196,182,0.06)" }}
              >
                {svc.icon}
              </div>
              {/* Title */}
              <a href={svc.href} className="text-[17px] font-bold mb-3 underline underline-offset-4" style={{ color: "#2ec4b6", fontFamily: "'Poppins',sans-serif", textDecorationColor: "#2ec4b6" }}>
                {svc.title}
              </a>
              {/* Body */}
              <p className="text-[13px] leading-relaxed text-gray-500" style={{ fontFamily: "'DM Sans',sans-serif" }}>
                {svc.body}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
          {SEO_SERVICES.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? "#2ec4b6" : "rgba(46,196,182,0.25)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  ACCELERATE SECTION
// ═══════════════════════════════════════════════════════════════════
function AccelerateSection() {
  const ref = useReveal();
  return (
    <section className="py-24" style={{ background: "#f5f6fa" }}>
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        ref={ref}
        className="hidden lg:grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px,5vw,80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "center",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Left visual card */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg,#1a2744,#1e3056)", minHeight: 380, boxShadow: "0 30px 80px rgba(26,39,68,0.25)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(46,196,182,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(46,196,182,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
              <div className="text-center mb-8">
                <div className="text-5xl font-black text-white mb-1" style={{ fontFamily: "'Poppins',sans-serif" }}>312%</div>
                <div className="text-sm text-[#2ec4b6] font-semibold tracking-widest uppercase">Organic Traffic Increase</div>
              </div>
              <div className="flex items-end gap-3 h-28 w-full max-w-xs mx-auto">
                {[30, 45, 40, 60, 55, 75, 68, 90, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i >= 7 ? "linear-gradient(180deg,#2ec4b6,#1a9e93)" : "rgba(255,255,255,0.12)" }} />
                ))}
              </div>
              <div className="flex items-center gap-6 mt-6">
                {[["Before SEO", "rgba(255,255,255,0.12)"], ["After SEO", "#2ec4b6"]].map(([label, color]) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ background: color }} />
                    <span className="text-xs text-white/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-50">
              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "#2ec4b6" }}>
                <span className="text-[8px] font-black text-white">ID</span>
              </div>
              <span className="text-xs text-white font-semibold">WebeDigital</span>
            </div>
          </div>
          <div className="flex gap-1 mt-4 ml-40">
            {["#1a2744", "#2ec4b6", "#2ec4b6", "#4dd9cc", "#4dd9cc", "#7ae8df"].map((color, i) => (
              <svg key={i} viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                <polyline points="6,4 14,12 6,20" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ))}
          </div>
        </div>
        {/* Right text */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
            Accelerate Organic Traffic Leads <br /><span style={{ color: "#2ec4b6" }}>With SEO</span>
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "'DM Sans',sans-serif" }}>
          SEO should not only bring visitors. It should bring the right visitors to the right pages with the right intent. Our SEO work focuses on improving how your website is discovered, understood, and trusted by both search engines and potential customers.          </p>
          <ul className="space-y-3 mb-10">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <IconCheck />
                <span className="text-sm font-medium text-gray-700" style={{ fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact-us" className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 6px 24px rgba(241,90,34,0.3)" }}>
            Start Growing Today <IconArrow />
          </Link>
        </div>
      </div>

      {/* ══ MOBILE — REDESIGNED ══
          Order: Heading → Chart image card → body + checklist → CTA
      */}
      <div className="lg:hidden px-5 py-2">

        {/* Heading */}
        <h2 className="text-[1.85rem] font-bold leading-tight mb-6" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
          Accelerate Organic Traffic Leads{" "}
          <span style={{ color: "#2ec4b6" }}>With SEO</span>
        </h2>

        {/* Chart card — full width visual */}
        <div className="rounded-2xl overflow-hidden mb-7" style={{ background: "linear-gradient(135deg,#1a2744,#1e3056)", boxShadow: "0 16px 50px rgba(26,39,68,0.22)" }}>
          <div className="p-6">
            {/* Big number */}
            <div className="text-center mb-5">
              <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "'Poppins',sans-serif" }}>312%</div>
              <div className="text-xs text-[#2ec4b6] font-bold tracking-widest uppercase">Organic Traffic Increase</div>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1.5 h-20 w-full">
              {[30, 45, 40, 60, 55, 75, 68, 90, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i >= 7 ? "linear-gradient(180deg,#2ec4b6,#1a9e93)" : "rgba(255,255,255,0.12)" }} />
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-5 mt-4 justify-center">
              {[["Before SEO", "rgba(255,255,255,0.15)"], ["After SEO", "#2ec4b6"]].map(([label, color]) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
                  <span className="text-[11px] text-white/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <p className="text-[14px] text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans',sans-serif" }}>
        SEO should not only bring visitors. It should bring the right visitors to the right pages with the right intent. Our SEO work focuses on improving how your website is discovered, understood, and trusted by both search engines and potential customers.        </p>

        {/* Checklist */}
        <ul className="space-y-3 mb-7">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <IconCheck />
              <span className="text-[13px] font-medium text-gray-700" style={{ fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl w-full" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 6px 24px rgba(241,90,34,0.3)" }}>
          Start Growing Today <IconArrow />
        </Link>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  CREDIBILITY SECTION
// ═══════════════════════════════════════════════════════════════════
function CredibilitySection() {
  const ref = useReveal();
  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        ref={ref}
        className="hidden lg:grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px,5vw,80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "center",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
          Build Search Visibility <br />That Also Builds <span style={{ color: "#2ec4b6" }}>Awareness</span>
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md" style={{ fontFamily: "'DM Sans',sans-serif" }}>
Ranking higher is useful only when the visitor also trusts what they see after clicking. That is why our SEO work goes beyond keywords. We improve page structure, content quality, search intent alignment, trust signals, internal links, and conversion paths so your website feels stronger before the first call, form submission, or purchase.
</p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { num: "90 Days", label: "Initial Growth Roamap", color: "#2ec4b6" },
              { num: "3 to 4x", label: "Average Organic Growth", color: "#f15a22" },
              { num: "4.8/5", label: "Client Experience Rating", color: "#1a2744" },
              { num: "24/7", label: "Ongoing SEO Monitoring", color: "#2ec4b6" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl p-5" style={{ background: "#f5f6fa", borderLeft: `3px solid ${m.color}` }}>
                <div className="text-2xl font-black mb-1" style={{ color: m.color, fontFamily: "'Poppins',sans-serif" }}>{m.num}</div>
                <div className="text-xs text-gray-500 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact-us" className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 6px 24px rgba(241,90,34,0.3)" }}>
          Build My Organic Growth <IconArrow />
          </Link>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-4 rounded-3xl" style={{ background: "linear-gradient(135deg,#d4f5f1 0%,#c6f0ea 100%)", zIndex: 0 }} />
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-40" style={{ background: "radial-gradient(circle, #2ec4b6 0%, transparent 70%)", filter: "blur(20px)" }} />
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" alt="Brand awareness specialist" className="relative z-10 rounded-2xl object-cover shadow-2xl" style={{ width: "75%", height: 400, objectPosition: "top" }} />
          <div className="absolute bottom-6 right-2 z-20 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#2ec4b6" }}>
              <svg viewBox="0 0 20 20" className="w-5 h-5" fill="white"><path d="M10 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L10 14l-4.8 2.5.9-5.2L2.3 7.6l5.3-.8z" /></svg>
            </div>
            <div>
              <div className="text-xs font-black text-[#1a2744]" style={{ fontFamily: "'Poppins',sans-serif" }}>Strategy-Led SEO Partner</div>
              <div className="text-[10px] text-gray-400">Industry Recognized</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE — REDESIGNED ══
          Order: Heading → Photo (with mint bg + badge) → Metric cards → Body → CTA
      */}
      <div className="lg:hidden px-5 py-2">

        {/* Heading */}
        <h2 className="text-[1.85rem] font-bold leading-tight mb-6" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
        Build Search Visibility That Also Builds{" "}
          <span style={{ color: "#2ec4b6" }}>Trust</span>
        </h2>

        {/* Photo with mint bg — full width */}
        <div className="relative rounded-2xl overflow-hidden mb-7" style={{ background: "linear-gradient(135deg,#d4f5f1,#c6f0ea)", minHeight: 260 }}>
          {/* Teal glow */}
          <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-40" style={{ background: "radial-gradient(circle,#2ec4b6 0%,transparent 70%)", filter: "blur(18px)" }} />
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
            alt="Brand awareness specialist"
            className="w-full object-cover"
            style={{ height: 260, objectPosition: "top center" }}
          />
          {/* Floating badge */}
          <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#2ec4b6" }}>
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="white"><path d="M10 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L10 14l-4.8 2.5.9-5.2L2.3 7.6l5.3-.8z" /></svg>
            </div>
            <div>
              <div className="text-[11px] font-black text-[#1a2744]">Strategy-Led SEO Partner</div>
              <div className="text-[9px] text-gray-400">Industry Recognized</div>
            </div>
          </div>
        </div>

        {/* Metric cards grid — 2×2, full width, clear numbers */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { num: "90 Days", label: "Initial Growth Roadmap", color: "#2ec4b6" },
            { num: "3 to 4x", label: "Average Organic Growth", color: "#f15a22" },
            { num: "4.8/5", label: "Client Experience Rating", color: "#1a2744" },
            { num: "24/7", label: "Ongoing SEO Monitoring", color: "#2ec4b6" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl p-4" style={{ background: "#f5f6fa", borderLeft: `3px solid ${m.color}` }}>
              <div className="text-xl font-black mb-0.5" style={{ color: m.color, fontFamily: "'Poppins',sans-serif" }}>{m.num}</div>
              <div className="text-[11px] text-gray-500 font-medium leading-tight">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Body */}
        <p className="text-[14px] text-gray-500 leading-relaxed mb-7" style={{ fontFamily: "'DM Sans',sans-serif" }}>
Ranking higher is useful only when the visitor also trusts what they see after clicking. That is why our SEO work goes beyond keywords. We improve page structure, content quality, search intent alignment, trust signals, internal links, and conversion paths so your website feels stronger before the first call, form submission, or purchase.
</p>

        {/* CTA */}
        <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-xl w-full" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 6px 24px rgba(241,90,34,0.3)" }}>
        Build My Organic Growth<IconArrow />
        </Link>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  FAQ
// ═══════════════════════════════════════════════════════════════════
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();
  return (
    <section className="py-24 bg-white">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        ref={ref}
        className="hidden lg:block max-w-3xl mx-auto px-6"
        style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
          Frequently Asked <span style={{ color: "#2ec4b6" }}>Questions</span>
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={{ border: "1.5px solid", borderColor: open === i ? "#2ec4b6" : "rgba(26,39,68,0.1)" }}>
              <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" style={{ background: open === i ? "rgba(46,196,182,0.04)" : "white" }} onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-bold text-[#1a2744] text-sm" style={{ fontFamily: "'Poppins',sans-serif" }}>{faq.q}</span>
                <IconChevron open={open === i} />
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? 200 : 0 }}>
                <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MOBILE FAQ — clean accordion, generous padding ══ */}
      <div className="lg:hidden px-5">
        <h2 className="text-[1.85rem] font-bold text-center mb-8" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
          Frequently Asked <span style={{ color: "#2ec4b6" }}>Questions</span>
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid", borderColor: open === i ? "#2ec4b6" : "rgba(26,39,68,0.1)" }}>
              <button
                className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left"
                style={{ background: open === i ? "rgba(46,196,182,0.04)" : "white" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-[#1a2744] text-[14px] leading-snug flex-1" style={{ fontFamily: "'Poppins',sans-serif" }}>{faq.q}</span>
                <span className="flex-shrink-0 mt-0.5"><IconChevron open={open === i} /></span>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? 220 : 0 }}>
                <p className="px-5 pb-5 text-[13px] text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  CTA BANNER
// ═══════════════════════════════════════════════════════════════════
function CTABanner() {
  const ref = useReveal();
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#111c38,#1a2744,#1e3056)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(46,196,182,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(46,196,182,0.05) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute" style={{ width: 400, height: 400, top: -150, right: -100, borderRadius: "50%", background: "radial-gradient(circle,rgba(46,196,182,0.12) 0%,transparent 70%)", filter: "blur(40px)" }} />
      <div
        ref={ref}
        className="relative z-10 text-center"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 clamp(24px,6vw,64px)",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: "rgba(46,196,182,0.15)", border: "1px solid rgba(46,196,182,0.3)" }}>
          <div className="w-2 h-2 rounded-full bg-[#2ec4b6] animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#2ec4b6]">Ready to rank higher?</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Poppins',sans-serif" }}>
        Let’s Turn Your Website Into an <span style={{ color: "#2ec4b6" }}>Organic Growth Channel</span>
        </h2>
        <p className="text-base lg:text-lg text-white/60 mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>
If your website is not ranking, blogs not bringing leads, or organic traffic feels stuck, we can help you build an SEO plan that connects visibility with business growth.
</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-10 py-5 rounded-md transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 8px 30px rgba(241,90,34,0.4)" }}>
          Get a Free SEO Audit <IconArrow />
          </Link>
          <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-10 py-5 rounded-md border transition-all duration-300 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans',sans-serif" }}>
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── GLOBAL STYLES ────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  * { box-sizing: border-box; }
  @keyframes floatOrb {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-18px); }
  }
  @keyframes blobMorph {
    0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    33%  { border-radius: 40% 60% 70% 30% / 30% 70% 30% 70%; }
    66%  { border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%; }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  }
  @keyframes blobSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmerAnim {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .shimmer-effect {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    background-size: 200% 100%;
    animation: shimmerAnim 2.5s linear infinite;
  }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
`;

// ── PAGE EXPORT ──────────────────────────────────────────────────
export default function SeoPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Hero />
        <ServicesGrid />
        <AccelerateSection />
        <CredibilitySection />
        <FAQ />
        <CTABanner />
      </main>
    </>
  );
}