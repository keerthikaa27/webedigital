"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "seo-geo",
    title: "SEO & Content Growth",
    href: "/services/seo-geo",
    description:
      "Improve organic visibility through technical SEO, keyword strategy, on-page optimization, content planning, internal linking, and search-focused website improvements.",
    bg: "/images/seo-bg.jpg",
  },
  {
    id: "paid-media",
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    description:
      "Run paid campaigns across platforms like Google and Meta with sharper targeting, creative testing, landing page alignment, conversion tracking, and performance optimization.",
    bg: "/images/ppc-bg.jpg",
  },
  {
    id: "social-media",
    title: "Social Media Management",
    href: "/services/social-media-marketing",
    description:
      "Build a more consistent brand presence through content calendars, creative direction, platform-ready posts, captions, engagement planning, and social communication.",
    bg: "/images/social-bg.jpg",
  },
  {
    id: "web-development",
    title: "Website Design & Development",
    href: "/services/web-development",
    description:
      "Create or improve Shopify, WordPress, and business websites with responsive design, SEO-friendly structure, clearer messaging, and conversion-focused page layouts.",
    bg: "/images/web-bg.jpg",
  },
];

const caseStudies = [
  {
    id: "1",
    brand: "Dariaan",
    image: "/daarian1.png",
    category: "SEO",
    result: "#1 Core Category Ranking",
    color: "#1a3a5c",
    accent: "#3dbf8f",
  },
  {
    id: "3",
    brand: "MOVER",
    image: "/mover.png",
    category: "Local SEO",
    result: "2.94M Search Impressions",
    color: "#0fe140",
    accent: "#3dbf8f",
  },
];

const steps = [
  {
    num: 1,
    label: "Attract",
    desc: "Reach people who are searching, scrolling, comparing, or discovering brands like yours.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
        <path d="M20 8v12M20 20l8 8M20 20l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="white" />
      </svg>
    ),
  },
  {
    num: 2,
    label: "Engage",
    desc: " Turn first attention into interest with stronger messaging, content, creatives, and campaign direction.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
        <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" stroke="white" strokeWidth="2" />
        <circle cx="20" cy="20" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    num: 3,
    label: "Validate",
    desc: "Build trust through your website, reviews, content, social proof, case studies, and consistent brand presence.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
        <path d="M13 20l5 5 9-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: 4,
    label: "Convert",
    desc: "Guide qualified visitors toward calls, forms, purchases, bookings, or inquiries with clearer pages and CTAs.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
        <path d="M14 20h12M20 14l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 20l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: 5,
    label: "Re-Engage & Upsell",
    desc: "Bring warm audiences back through remarketing, email flows, retention campaigns, and repeat-purchase strategy.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
        <path d="M14 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 24c0 3.3-2.7 6-6 6s-6-2.7-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 22l-2 2 2 2M12 18l2-2-2-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="2" fill="white" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);
  const heroIn = useInView(0.1);
  const stepsIn = useInView(0.1);
  const whyIn = useInView(0.1);
  const servicesIn = useInView(0.05);
  const caseIn = useInView(0.05);

  return (
    <main className="bg-white min-h-screen font-sans">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        ref={heroIn.ref}
        className="relative overflow-hidden bg-[#0e1b30] text-white min-h-[90vh] flex items-center"
      >
        {/* animated bg grid lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* glowing orb */}
        <div
          className="absolute right-[-10%] top-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,173,181,0.18) 0%, transparent 70%)" }}
        />

        {/* ── DESKTOP LAYOUT (md+) — UNTOUCHED ── */}
        <div className="hidden md:grid relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          {/* left */}
          <div>
            <p
              className="text-xs font-bold tracking-[0.25em] text-[#00adb5] uppercase mb-6"
              style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(20px)", transition: "all 0.6s ease 0.1s" }}
            >
              Digital Growth Services

            </p>
            <h1
              className="text-5xl lg:text-7xl font-bold leading-[1.05] mb-8"
              style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(30px)", transition: "all 0.7s ease 0.2s" }}
            >
              Our Services
            </h1>
            <p
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-md"
              style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(20px)", transition: "all 0.6s ease 0.4s" }}
            >
From SEO and paid ads to social media, websites, content, and conversion strategy, WebeDigital helps you build the right digital growth mix for your business stage, audience, and goals.
            </p>
            <div style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(20px)", transition: "all 0.6s ease 0.55s" }}>
              <Link
                href="/contact-us"
                className="inline-block bg-[#e8521a] hover:bg-[#d14610] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(232,82,26,0.5)]"
              >
                Let&rsquo;s Talk Impact
              </Link>
            </div>
          </div>

          {/* right — image card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute -top-20 -left-6 w-80 h-80 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00adb5" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <circle cx="40" cy="40" r="3" fill="#00adb5" />
                  <circle cx="120" cy="120" r="3" fill="#00adb5" />
                  <rect x="60" y="60" width="40" height="40" fill="none" stroke="#00adb5" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute -bottom-20 -right-10 w-[450px] h-[450px] opacity-30 animate-floatBlob">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    fill="#00adb5"
                    d="M45.7,-77.4C58.1,-69.2,66.5,-53.6,72.6,-38.1C78.7,-22.6,82.4,-7.1,81.1,8.1C79.8,23.3,73.4,38.3,63.4,50.1C53.4,61.9,39.8,70.5,25.2,74.9C10.6,79.3,-5,79.5,-20.3,76.1C-35.6,72.7,-50.6,65.7,-62.3,54.7C-74.1,43.7,-82.6,28.6,-85,12.7C-87.4,-3.2,-83.7,-19.9,-75.6,-34.7C-67.5,-49.5,-54.9,-62.3,-40.8,-69.9C-26.7,-77.5,-11.1,-79.9,2.8,-84.7C16.8,-89.6,33.2,-85.7,45.7,-77.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <div
                className="absolute right-0 bottom-0 w-[400px] h-[400px] blur-[120px] opacity-40"
                style={{ background: "radial-gradient(circle, rgba(0,173,181,0.4) 0%, transparent 70%)" }}
              />
            </div>
            <div className="relative">
              <div className="relative top-5">
                <img
                  src="/services.png"
                  alt="Digital marketing"
                  className="relative z-10 w-full max-w-[700px] lg:max-w-none lg:w-[105%] object-cover -translate-y-10 transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE HERO — innovative stacked layout ── */}
        <div className="md:hidden relative z-10 w-full px-5 pt-16 pb-10 flex flex-col">
          {/* pill badge */}
          <div
            className="mb-5"
            style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(16px)", transition: "all 0.5s ease 0.1s" }}
          >
            <span className="inline-flex items-center gap-2 bg-[#00adb5]/10 border border-[#00adb5]/30 text-[#00adb5] text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#00adb5] rounded-full animate-pulse" />
              Digital Growth Services
            </span>
          </div>

          {/* headline — large and impactful */}
          <h1
            className="text-[48px] font-black leading-[0.95] tracking-tight mb-5"
            style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(24px)", transition: "all 0.6s ease 0.2s" }}
          >
            <span className="block text-white">Our</span>
            <span className="block text-[#00adb5]">Services</span>
          </h1>

          {/* floating image — overlaps content for depth */}
          <div
            className="relative w-full mb-6 -mx-1"
            style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "scale(0.95)", transition: "all 0.7s ease 0.3s" }}
          >
            {/* teal glow behind image */}
            <div className="absolute inset-0 bg-[#00adb5]/10 blur-2xl rounded-2xl" />
            <img
              src="/services.png"
              alt="Digital marketing"
              className="relative z-10 w-full object-contain max-h-[240px]"
            />
          </div>

          {/* description */}
          <p
            className="text-white/65 text-[15px] leading-relaxed mb-8"
            style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.4s" }}
          >
            From SEO and paid ads to social media, websites, content, and conversion strategy, WebeDigital helps you build the right digital growth mix for your business stage, audience, and goals.
          </p>

          {/* CTA — full width on mobile */}
          <div
            style={{ opacity: heroIn.inView ? 1 : 0, transform: heroIn.inView ? "none" : "translateY(16px)", transition: "all 0.6s ease 0.5s" }}
          >
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-2 bg-[#e8521a] text-white font-bold text-sm tracking-widest uppercase px-8 py-4 w-full text-center transition-all duration-300 active:scale-95"
            >
              Let&rsquo;s Talk Impact
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 010-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHERE YOUR CUSTOMER IS — Steps
      ══════════════════════════════════════════ */}
      <section ref={stepsIn.ref} className="bg-white py-24 px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">

          {/* heading */}
          <div
            className="text-center mb-16"
            style={{ opacity: stepsIn.inView ? 1 : 0, transform: stepsIn.inView ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0e1b30] mb-5">
              Where Your Customer Is, Your Brand Should Be Ready.
            </h2>
            <p className="text-[#555] text-lg max-w-3xl mx-auto leading-relaxed">
Your customers may discover you through search, ads, social media, referrals, content, or your website. Our services are built around that full journey, so every channel has a clear role instead of becoming a random marketing activity.
            </p>
          </div>

          {/* ── DESKTOP: 5-col grid (untouched) ── */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center group"
                style={{
                  opacity: stepsIn.inView ? 1 : 0,
                  transform: stepsIn.inView ? "none" : "translateY(40px)",
                  transition: `all 0.6s ease ${0.1 + i * 0.12}s`,
                }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#1e4080] flex items-center justify-center group-hover:bg-[#e8521a] group-hover:scale-110 transition-all duration-400 shadow-lg">
                    {step.icon}
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#00adb5] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-[#0e1b30] text-sm mb-1">{step.label}</h3>
                <p className="text-[#777] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* ── MOBILE: horizontal scrolling journey timeline ── */}
          <div className="md:hidden mt-4 -mx-6 px-6 overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-0 min-w-max relative">
              {/* connecting line */}
              <div className="absolute top-10 left-10 right-10 h-[2px] bg-gradient-to-r from-[#1e4080] via-[#00adb5] to-[#e8521a]" style={{ width: `calc(100% - 80px)` }} />

              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center w-[140px] flex-shrink-0 relative z-10"
                  style={{
                    opacity: stepsIn.inView ? 1 : 0,
                    transform: stepsIn.inView ? "none" : "translateY(30px)",
                    transition: `all 0.5s ease ${0.1 + i * 0.1}s`,
                  }}
                >
                  <div className="relative mb-3">
                    <div className="w-20 h-20 rounded-full bg-[#1e4080] flex items-center justify-center shadow-lg border-2 border-white">
                      {step.icon}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00adb5] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0e1b30] text-xs mb-1 leading-tight px-2">{step.label}</h3>
                  <p className="text-[#777] text-[10px] leading-relaxed px-2">{step.desc}</p>
                </div>
              ))}
            </div>
            {/* scroll hint */}
            <p className="text-center text-[#aaa] text-[10px] mt-4 tracking-widest uppercase">Swipe to explore →</p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INTERO
      ══════════════════════════════════════════ */}
      <section ref={whyIn.ref} className="bg-[#0e1b30] text-white py-2 px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* image — desktop only (hidden on mobile, shown below in mobile layout) */}
          <div className="relative hidden lg:block">
            <div className="relative w-full">
              <img
                src="/services-1.png"
                alt="Digital marketing"
                className="w-full h-auto object-contain -translate-y-32"
              />
            </div>
          </div>

          {/* right text — desktop */}
          <div
            className="hidden lg:block"
            style={{ opacity: whyIn.inView ? 1 : 0, transform: whyIn.inView ? "none" : "translateX(40px)", transition: "all 0.7s ease 0.2s" }}
          >
            {[
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                    <rect x="6" y="10" width="28" height="20" rx="2" stroke="#00adb5" strokeWidth="2" />
                    <path d="M6 16h28M14 10v4M26 10v4" stroke="#00adb5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M13 24h14M13 28h8" stroke="#00adb5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: "Services Built Around the Customer Journey",
                body: "We do not look at SEO, ads, social media, and websites as separate boxes. Each service is planned around where your customer is, what they need to trust you, and what should move them closer to action.",
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                    <circle cx="20" cy="20" r="14" stroke="#00adb5" strokeWidth="2" />
                    <path d="M20 12v8l6 4" stroke="#00adb5" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 20h-4M28 20h4M20 8V4M20 36v-4" stroke="#00adb5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "The Right Channel Mix for Your Stage",
                body: "Some brands need organic visibility first. Some need paid campaigns, better landing pages, stronger social presence, or website improvements. We help you choose what matters now, instead of pushing every service at once.",
              },
              {
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                    <path d="M20 8c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8z" stroke="#00adb5" strokeWidth="2" />
                    <path d="M12 28c0 0 4-4 8-4s8 4 8 4" stroke="#00adb5" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="20" cy="18" r="4" stroke="#00adb5" strokeWidth="2" />
                    <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="#00adb5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                title: "Execution That Connects Back to Growth",
                body: "Every service is handled with a clear purpose: better visibility, better traffic quality, stronger trust, improved conversions, or more measurable growth. That keeps the work practical and easier to improve.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 mb-10 last:mb-0">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#00adb5]/40 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-[#00adb5] font-bold uppercase tracking-widest text-sm mt-6 ml-[76px] border-b border-[#00adb5]/40 pb-1 hover:border-[#00adb5] transition-colors"
            >
              Let&rsquo;s Work Together
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

          {/* ── MOBILE: why section as accordion cards ── */}
          <div className="lg:hidden py-12 w-full">
            {/* small image on mobile */}
            <div
              className="relative w-full -mt-28 mb-8"
              style={{ opacity: whyIn.inView ? 1 : 0, transition: "all 0.6s ease" }}
            >
              <img
                src="/services-1.png"
                alt="Digital marketing"
                className="w-full max-h-[500px] object-contain"
              />
            </div>

            {/* feature cards — stacked pill style */}
            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  title: "Services Built Around the Customer Journey",
                  body: "We do not look at SEO, ads, social media, and websites as separate boxes. Each service is planned around where your customer is, what they need to trust you, and what should move them closer to action.",
                  color: "#00adb5",
                },
                {
                  num: "02",
                  title: "The Right Channel Mix for Your Stage",
                  body: "Some brands need organic visibility first. Some need paid campaigns, better landing pages, stronger social presence, or website improvements. We help you choose what matters now, instead of pushing every service at once.",
                  color: "#e8521a",
                },
                {
                  num: "03",
                  title: "Execution That Connects Back to Growth",
                  body: "Every service is handled with a clear purpose: better visibility, better traffic quality, stronger trust, improved conversions, or more measurable growth. That keeps the work practical and easier to improve.",
                  color: "#1e4080",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-sm"
                  style={{
                    opacity: whyIn.inView ? 1 : 0,
                    transform: whyIn.inView ? "none" : "translateX(-20px)",
                    transition: `all 0.5s ease ${0.1 + i * 0.12}s`,
                  }}
                >
                  {/* accent stripe */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: item.color }} />
                  <div className="pl-3 flex items-start gap-4">
                    <span className="text-3xl font-black opacity-20 text-white leading-none mt-0.5">{item.num}</span>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="mt-8 flex items-center justify-center gap-2 border border-[#00adb5]/50 text-[#00adb5] font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full w-full transition-all active:scale-95"
            >
              Let&rsquo;s Work Together
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTEGRATED SERVICES GRID
      ══════════════════════════════════════════ */}
      <section ref={servicesIn.ref} className="bg-white py-24 px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0e1b30] text-center mb-14"
            style={{ opacity: servicesIn.inView ? 1 : 0, transform: servicesIn.inView ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}
          >
            Digital Marketing Services Built for Growth

          </h2>

          {/* ── DESKTOP: 2-col grid (untouched) ── */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                index={i}
                inView={servicesIn.inView}
                hovered={hoveredService === svc.id}
                onHover={() => setHoveredService(svc.id)}
                onLeave={() => setHoveredService(null)}
              />
            ))}
          </div>

          {/* ── MOBILE: tap-to-expand service cards ── */}
          <div className="md:hidden flex flex-col gap-4">
            {services.map((svc, i) => (
              <MobileServiceCard key={svc.id} svc={svc} index={i} inView={servicesIn.inView} />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDIES
      ══════════════════════════════════════════ */}
      <section ref={caseIn.ref} className="bg-[#3dbf8f] py-24 px-6 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white text-center mb-14"
            style={{ opacity: caseIn.inView ? 1 : 0, transform: caseIn.inView ? "none" : "translateY(30px)", transition: "all 0.6s ease" }}
          >
            Case Studies
          </h2>

          {/* ── DESKTOP: 2-col grid (untouched) ── */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <CaseCard
                key={cs.id}
                cs={cs}
                index={i}
                inView={caseIn.inView}
                hovered={hoveredCase === cs.id}
                onHover={() => setHoveredCase(cs.id)}
                onLeave={() => setHoveredCase(null)}
              />
            ))}
          </div>

          {/* ── MOBILE: immersive full-width case cards ── */}
          <div className="md:hidden flex flex-col gap-5">
            {caseStudies.map((cs, i) => (
              <MobileCaseCard key={cs.id} cs={cs} index={i} inView={caseIn.inView} />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — READY TO LEVEL UP
      ══════════════════════════════════════════ */}
      <section className="relative bg-[#0b1524] text-white py-24 px-6 lg:px-16 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#00adb5]/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#00adb5]/10 blur-3xl rounded-full" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right,#00adb5 1px,transparent 1px),linear-gradient(to bottom,#00adb5 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Ready to Build the Right Growth Mix?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
Whether you need SEO, paid ads, social media, website development, or a clearer digital strategy, we can help you identify what should be fixed first and what can create the strongest impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact-us"
              className="bg-[#00adb5] hover:bg-[#00979f] text-bold font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(0,173,181,0.4)] w-full sm:w-auto text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ═══════════════════════════════════════════════
   DESKTOP Service Card — UNTOUCHED
═══════════════════════════════════════════════ */
function ServiceCard({
  svc, index, inView, hovered, onHover, onLeave,
}: {
  svc: typeof services[0];
  index: number;
  inView: boolean;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const overlays = [
    "from-teal-600/80 to-teal-800/90",
    "from-emerald-600/80 to-emerald-900/90",
    "from-teal-700/80 to-slate-800/90",
    "from-cyan-700/80 to-teal-900/90",
  ];

  return (
    <Link
      href={svc.href}
      className={`relative overflow-hidden rounded-xl cursor-pointer group block ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(50px) scale(0.97)",
        transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${0.05 + index * 0.1}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`aspect-[20/9] bg-gradient-to-br ${overlays[index % overlays.length]} relative transition-transform duration-700 group-hover:scale-105`}>
        <div className="absolute inset-0 overflow-hidden opacity-[0.09]">
          <div className="absolute inset-[-40%] rotate-[-18deg] select-none whitespace-pre-wrap text-[12px] leading-[32px] tracking-[18px] text-white">
            {"✧ ".repeat(2000)}
          </div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{ opacity: hovered ? 0 : 1, transform: hovered ? "translateY(-10px)" : "none" }}
        >
          <h3 className="text-white text-2xl font-bold text-center px-6 drop-shadow-lg">{svc.title}</h3>
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "none" : "translateY(20px)" }}
        >
          <div
            className="absolute inset-[6px] border-2 border-white/30 rounded-lg transition-all duration-700"
            style={{ transform: hovered ? "scale(1)" : "scale(0.85)", opacity: hovered ? 1 : 0 }}
          />
          <h3 className="text-white text-2xl font-bold mb-3 drop-shadow-lg">{svc.title}</h3>
          <p className="text-white/85 text-sm max-w-80 leading-relaxed mb-6">{svc.description}</p>
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white hover:text-teal-700 transition-all duration-300 group-hover:shadow-lg">
            Learn More
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
              <path d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 010-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-700"
          style={{
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
            transform: hovered ? "translateX(100%)" : "translateX(-100%)",
          }}
        />
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════
   MOBILE Service Card — tap-to-reveal with expand animation
═══════════════════════════════════════════════ */
function MobileServiceCard({
  svc, index, inView,
}: {
  svc: typeof services[0];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  const overlays = [
    "from-teal-600/90 to-teal-800",
    "from-emerald-600/90 to-emerald-900",
    "from-teal-700/90 to-slate-800",
    "from-cyan-700/90 to-teal-900",
  ];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${overlays[index % overlays.length]} cursor-pointer`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(30px)",
        transition: `all 0.6s ease ${0.05 + index * 0.1}s`,
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* subtle texture */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <div className="absolute inset-[-40%] rotate-[-18deg] select-none whitespace-pre-wrap text-[10px] leading-[28px] tracking-[16px] text-white">
          {"✧ ".repeat(1000)}
        </div>
      </div>

      <div className="relative z-10 p-5">
        {/* header row */}
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg">{svc.title}</h3>
          <div
            className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 ml-3 transition-transform duration-300"
            style={{ transform: expanded ? "rotate(45deg)" : "none" }}
          >
            <svg viewBox="0 0 16 16" fill="white" className="w-3.5 h-3.5">
              <path d="M8 3a1 1 0 011 1v3h3a1 1 0 010 2H9v3a1 1 0 01-2 0V9H4a1 1 0 010-2h3V4a1 1 0 011-1z" />
            </svg>
          </div>
        </div>

        {/* expandable content */}
        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: expanded ? "200px" : "0", opacity: expanded ? 1 : 0 }}
        >
          <p className="text-white/75 text-sm leading-relaxed mt-3 mb-4">{svc.description}</p>
          <Link
            href={svc.href}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all active:scale-95"
          >
            Learn More
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
              <path d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 010-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   DESKTOP Case Card — UNTOUCHED
═══════════════════════════════════════════════ */
function CaseCard({
  cs, index, inView, hovered, onHover, onLeave,
}: {
  cs: typeof caseStudies[0];
  index: number;
  inView: boolean;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <Link
  href={`/case-studies/${cs.id}`}
  className="relative overflow-hidden rounded-2xl cursor-pointer group block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(60px)",
        transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${0.1 + index * 0.15}s`,
        backgroundImage: `
  linear-gradient(
    to top,
    rgba(0,0,0,0.75),
    rgba(0,0,0,0.15)
  ),
  url(${cs.image})
`,
backgroundSize: "cover",
backgroundPosition: "center",
        minHeight: "420px",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="transition-all duration-500" style={{ transform: hovered ? "translateY(-12px)" : "none" }}>
          <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-2">{cs.category}</p>
          <h3 className="text-white text-4xl font-bold mb-1">{cs.brand}</h3>
        </div>
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: hovered ? "100px" : "0", opacity: hovered ? 1 : 0 }}
        >
          <div className="pt-4 border-t border-white/20 mt-4 flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Result</p>
              <p className="font-bold text-2xl" style={{ color: cs.accent }}>{cs.result}</p>
            </div>
            <span className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
              View Case Study
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <path d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 010-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <span className="text-xs font-bold bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
          Case Study
        </span>
      </div>
      <div
        className="absolute top-0 left-0 w-32 h-32 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at top left, ${cs.accent}22 0%, transparent 70%)`,
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }}
      />
    </Link>
  );
}

/* ═══════════════════════════════════════════════
   MOBILE Case Card — always-visible result strip
═══════════════════════════════════════════════ */
function MobileCaseCard({
  cs, index, inView,
}: {
  cs: typeof caseStudies[0];
  index: number;
  inView: boolean;
}) {
  return (
    <Link
  href={`/case-studies/${cs.id}`}
  className="relative overflow-hidden rounded-2xl block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: `all 0.6s ease ${0.1 + index * 0.15}s`,
        backgroundImage: `
  linear-gradient(
    to top,
    rgba(0,0,0,0.75),
    rgba(0,0,0,0.15)
  ),
  url(${cs.image})
`,
backgroundSize: "cover",
backgroundPosition: "center",
        minHeight: "200px",
      }}
    >
      {/* bg pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
        }}
      />
      {/* corner glow */}
      <div
        className="absolute top-0 left-0 w-32 h-32"
        style={{ background: `radial-gradient(circle at top left, ${cs.accent}22 0%, transparent 70%)` }}
      />

      <div className="relative z-10 p-6">
        {/* top row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-1">{cs.category}</p>
            <h3 className="text-white text-3xl font-black">{cs.brand}</h3>
          </div>
          <span className="text-[10px] font-bold bg-white/10 border border-white/20 text-white px-2.5 py-1 rounded-full">
            Case Study
          </span>
        </div>

        {/* result — always visible on mobile */}
        <div className="border-t border-white/15 pt-4 flex items-center justify-between">
          <div>
            <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Result</p>
            <p className="font-black text-xl" style={{ color: cs.accent }}>{cs.result}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 border border-white/25 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            View
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5">
              <path d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 010-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}