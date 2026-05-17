"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ════════════════════════════════════════════════════════════════════
   GLOBAL STYLES
   • .smm-inner  → wide-screen fix: caps content + fluid clamp padding
   • .desktop-only / .mobile-only → show/hide helpers
   • All @media (max-width: 768px) blocks = mobile-only design
   • Desktop markup is 100% untouched inside .desktop-only wrappers
════════════════════════════════════════════════════════════════════ */
const GLOBAL_CSS = `
  /* ── Wide-screen container ── */
  .smm-inner {
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left:  clamp(20px, 5vw, 80px);
    padding-right: clamp(20px, 5vw, 80px);
  }

  /* ── Visibility helpers ── */
  @media (max-width: 768px)  { .desktop-only { display: none !important; } }
  @media (min-width: 769px)  { .mobile-only  { display: none !important; } }

  /* ── Scroll-reveal base ── */
  .mob-reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .mob-reveal.visible { opacity: 1; transform: translateY(0); }

  /* ════════════════════════════════════════
     MOBILE BASE TOKENS
  ════════════════════════════════════════ */
  @media (max-width: 768px) {

    /* Section wrapper */
    .mob-section { padding: 60px 20px 68px; }
    .mob-section-dark {
      padding: 60px 20px 68px;
      background: radial-gradient(ellipse at 50% 0%, #0e1b30 0%, #0e1b30 60%, #12154a 100%);
      position: relative;
      overflow: hidden;
    }
    .mob-section-dark::before {
      content: '';
      position: absolute; inset: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
    }
    .mob-section-gray { padding: 60px 20px 68px; background: #f7f8fc; }

    /* Label pill */
    .mob-label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(0,181,165,0.12);
      border: 1px solid rgba(0,181,165,0.3);
      border-radius: 999px;
      padding: 5px 14px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #00b5a5;
      margin-bottom: 14px;
    }
    .mob-label-white { color: #2ec4b6; background: rgba(46,196,182,0.12); border-color: rgba(46,196,182,0.3); }

    /* Headings */
    .mob-h1 {
      font-size: clamp(36px, 9.5vw, 52px);
      font-weight: 800;
      color: #fff;
      line-height: 1.05;
      letter-spacing: -1px;
      margin-bottom: 12px;
      font-family: 'Poppins', sans-serif;
    }
    .mob-h1 span { color: #2ec4b6; }
    .mob-h2 {
      font-size: clamp(26px, 7vw, 38px);
      font-weight: 800;
      color: #1a1f5e;
      line-height: 1.1;
      letter-spacing: -0.5px;
      margin-bottom: 14px;
      font-family: 'Poppins', sans-serif;
    }
    .mob-h2-white { color: #fff; }

    /* Body text */
    .mob-body {
      font-size: 15px;
      line-height: 1.75;
      color: #555;
      margin-bottom: 14px;
    }
    .mob-body-white { color: rgba(255,255,255,0.72); }

    /* Teal accent bar */
    .mob-teal-bar { width: 36px; height: 3px; background: #2ec4b6; border-radius: 2px; margin-bottom: 18px; }

    /* Full-width image */
    .mob-img {
      width: 100%;
      border-radius: 18px;
      overflow: hidden;
      margin-bottom: 28px;
      position: relative;
    }
    .mob-img img { width: 100%; height: 240px; object-fit: cover; object-position: top center; display: block; }

    /* ── CTA buttons ── */
    .mob-btn-orange {
      display: inline-flex; align-items: center; gap: 8px;
      background: linear-gradient(135deg, #f15a22, #ff7a42);
      color: #fff; border-radius: 8px; padding: 15px 28px;
      font-size: 13px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; font-family: 'Poppins', sans-serif;
      box-shadow: 0 6px 20px rgba(241,90,34,0.35);
      border: none; cursor: pointer; text-decoration: none;
    }
    .mob-btn-teal {
      display: inline-flex; align-items: center; gap: 8px;
      background: #00b5a5; color: #fff; border-radius: 8px;
      padding: 14px 26px; font-size: 13px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      font-family: 'Poppins', sans-serif; border: none; cursor: pointer;
      text-decoration: none;
    }

    /* ── HERO mobile ── */
    .mob-hero {
      background: #0e1b30;
      padding: 72px 20px 56px;
      position: relative;
      overflow: hidden;
    }
    .mob-hero::before {
      content: '';
      position: absolute; inset: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
    }
    .mob-hero-eyebrow {
      display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
    }
    .mob-hero-eyebrow-line { width: 28px; height: 2px; background: #2ec4b6; border-radius: 2px; }
    .mob-hero-eyebrow-text {
      font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
      text-transform: uppercase; color: #2ec4b6; font-family: 'Poppins', sans-serif;
    }
    .mob-hero-img-wrap {
      position: relative; width: 100%; border-radius: 16px; overflow: hidden;
      margin-bottom: 28px; box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    }
    .mob-hero-img-wrap img { width: 100%; height: 230px; object-fit: cover; object-position: top; display: block; }
    .mob-hero-img-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(46,196,182,0.15), rgba(14,27,48,0.45));
    }

    /* Hero stats strip */
    .mob-stats-strip {
      display: flex; gap: 0; background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
      overflow: hidden; margin-top: 28px;
    }
    .mob-stat-cell {
      flex: 1; text-align: center; padding: 14px 6px;
      border-right: 1px solid rgba(255,255,255,0.08);
    }
    .mob-stat-cell:last-child { border-right: none; }
    .mob-stat-num {
      display: block; font-size: 19px; font-weight: 900;
      color: #2ec4b6; font-family: 'Poppins', sans-serif; line-height: 1; margin-bottom: 4px;
    }
    .mob-stat-lbl {
      display: block; font-size: 9px; font-weight: 700;
      color: rgba(255,255,255,0.48); letter-spacing: 0.06em;
      text-transform: uppercase; font-family: 'DM Sans', sans-serif;
    }

    /* ── Pain Points mobile ── */
    .mob-pain-list {
      list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px;
    }
    .mob-pain-item {
      display: flex; align-items: flex-start; gap: 10px;
      background: #fff; border-radius: 12px; padding: 14px 16px;
      box-shadow: 0 2px 14px rgba(26,31,94,0.07);
      font-size: 14px; color: #444; line-height: 1.6;
    }
    .mob-pain-num {
      flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%;
      background: #00b5a5; color: #fff; font-size: 11px; font-weight: 800;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Poppins', sans-serif; margin-top: 1px;
    }

    /* ── Strategic (dark cards) mobile ── */
    .mob-strat-scroll {
      display: flex; gap: 14px; overflow-x: auto; padding-bottom: 8px;
      -webkit-overflow-scrolling: touch; scrollbar-width: none; margin-bottom: 0;
    }
    .mob-strat-scroll::-webkit-scrollbar { display: none; }
    .mob-strat-card {
      flex-shrink: 0; width: 240px;
      background: rgba(255,255,255,0.06);
      border: 1.5px solid rgba(46,196,182,0.2);
      border-radius: 18px; padding: 22px 18px;
      display: flex; flex-direction: column; align-items: center; text-align: center; gap: 12px;
    }
    .mob-strat-icon {
      width: 68px; height: 68px; border-radius: 50%;
      border: 2px solid #2ec4b6; background: rgba(46,196,182,0.1);
      display: flex; align-items: center; justify-content: center;
    }
    .mob-strat-title { font-size: 13px; font-weight: 700; color: #00d4c0; font-family: 'Poppins', sans-serif; line-height: 1.35; }
    .mob-strat-body { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.6; }

    /* ── Challenge (stat cards) mobile ── */
    .mob-stat-scroll {
      display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;
      -webkit-overflow-scrolling: touch; scrollbar-width: none; margin-bottom: 0;
    }
    .mob-stat-scroll::-webkit-scrollbar { display: none; }
    .mob-stat-card {
      flex-shrink: 0; width: 270px; background: #fff; border-radius: 16px;
      padding: 20px 18px; box-shadow: 0 4px 24px rgba(26,31,94,0.10);
      border: 1.5px solid rgba(26,31,94,0.07);
      display: flex; flex-direction: column; gap: 8px;
    }
    .mob-stat-card-head { display: flex; align-items: flex-start; gap: 10px; }
    .mob-stat-x {
      width: 34px; height: 34px; min-width: 34px; border-radius: 50%;
      background: #ef4444; display: flex; align-items: center; justify-content: center;
      color: #fff; font-weight: 800; font-size: 14px; margin-top: 1px;
    }
    .mob-stat-card-title { font-size: 13px; font-weight: 700; color: #1a1f5e; line-height: 1.35; font-family: 'Poppins', sans-serif; }
    .mob-stat-card-body { font-size: 13px; color: #666; line-height: 1.6; }

    /* ── Solution checklist mobile ── */
    .mob-solution-list { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 10px; }
    .mob-solution-item { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 600; color: #333; }
    .mob-solution-check {
      width: 28px; height: 28px; border-radius: 50%; background: #b5d64a;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      font-weight: 900; color: #fff; font-size: 13px;
    }

    /* ── How We Help accordion mobile ── */
    .mob-accordion-item {
      border-radius: 12px; overflow: hidden;
      border: 1.5px solid rgba(0,181,165,0.18); margin-bottom: 10px;
      transition: border-color 0.25s;
    }
    .mob-accordion-item.open { border-color: #00b5a5; }
    .mob-accordion-btn {
      width: 100%; display: flex; align-items: center; justify-content: space-between;
      gap: 12px; padding: 14px 16px; background: transparent; border: none; cursor: pointer; text-align: left;
    }
    .mob-accordion-label { display: flex; align-items: center; gap: 10px; }
    .mob-accordion-title { font-size: 13px; font-weight: 700; color: #00b5a5; font-family: 'Poppins', sans-serif; line-height: 1.4; }
    .mob-accordion-body { overflow: hidden; transition: max-height 0.3s ease; }
    .mob-accordion-inner { padding: 0 16px 16px; font-size: 13px; color: #666; line-height: 1.65; }

    /* Social platform hub mobile */
    .mob-platform-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 28px;
    }
    .mob-platform-chip {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 5px; padding: 14px 8px; border-radius: 14px;
      font-size: 11px; font-weight: 700; color: #fff;
      box-shadow: 0 3px 12px rgba(0,0,0,0.12);
    }

    /* ── FAQ mobile ── */
    .mob-faq-section { padding: 60px 20px 68px; background: #fff; }

    /* ── CTA mobile ── */
    .mob-cta {
      padding: 72px 20px 80px; text-align: center; position: relative; overflow: hidden;
      background: radial-gradient(ellipse at 50% 50%, #0e1b30 0%, #0e1b30 60%, #12154a 100%);
    }
    .mob-cta::before {
      content: ''; position: absolute; inset: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
      background-size: 22px 22px; pointer-events: none;
    }
    .mob-cta-h2 {
      font-size: clamp(32px, 8.5vw, 48px); font-weight: 800; color: #fff;
      line-height: 1.05; letter-spacing: -1px; margin-bottom: 16px; font-family: 'Poppins', sans-serif;
    }
    .mob-cta-body { font-size: 15px; line-height: 1.65; color: rgba(255,255,255,0.65); margin-bottom: 32px; }
    .mob-cta-btn {
      display: inline-flex; align-items: center; gap: 8px;
      background: #f97316; color: #fff; border-radius: 8px;
      padding: 16px 36px; font-size: 13px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      font-family: 'Poppins', sans-serif;
      box-shadow: 0 8px 24px rgba(249,115,22,0.4);
      border: none; cursor: pointer; text-decoration: none;
    }

    /* Scroll hint */
    .mob-scroll-hint {
      font-size: 10px; color: #aaa; display: flex; align-items: center;
      gap: 4px; margin-top: 8px; font-family: 'DM Sans', sans-serif; letter-spacing: 0.04em;
    }
    .mob-scroll-hint-white { color: rgba(255,255,255,0.35); }
  }
`;

// ─── DATA ────────────────────────────────────────────────────────────────────
const painPoints = [
  "You are posting regularly, but the audience is not responding, saving, sharing, or taking the next step.",
  "Your content looks active, but it does not clearly explain why someone should trust your brand.",
  "Your team struggles to create platform-specific content that feels natural on Instagram, LinkedIn, Facebook, or YouTube.",
  "Your social media presence feels inconsistent because there is no clear content system, brand voice, or monthly direction.",
];

const strategicCards = [
  {
    title: "Content Strategy That Stops Random Posting",
    desc: "We help you build a clear social media direction so every post, reel, carousel, caption, and story has a purpose instead of being created only to keep the page active.",
    icon: (
      <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: "Accounts That Look Active, Clear, and Trustworthy",
    desc: "We organize your social presence with better content themes, visual consistency, captions, profile messaging, highlights, and posting flow so visitors understand your brand faster.",
    icon: (
      <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
      </svg>
    ),
  },
  {
    title: "Content That Supports Real Business Conversations",
    desc: "We create social content that educates, reminds, reassures, and moves people closer to enquiries, website visits, product interest, or direct conversations with your brand.",
    icon: (
      <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
];

const challengeStats = [
  { title: "Social Media Marketing Is Growing", body: "There were 5.79 billion social media user identities worldwide in April 2026, equal to nearly 70% of the global population." },
  { title: "Video Now Carries the Message", body: "91% of businesses use video as a marketing tool, which shows why reels, short videos, explainers, and founder-led content are now central to social strategy." },
  { title: "Meta Still Owns Daily Attention", body: "Meta’s family of apps reached 3.58 billion daily active people on average in December 2025, which makes Facebook, Instagram, WhatsApp, and Messenger difficult to ignore." },
];

const deliverableGroups = [
  ["Documented social media marketing strategy and consultation", "Analytics reporting"],
  ["Meta advertising", "LinkedIn advertising"],
  ["Pinterest advertising", "X (Twitter) advertising"],
];

const accordionItems = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#00b5a5]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: "Social media marketing strategy and consultation",
    content: "We develop a comprehensive social media marketing strategy tailored to your business goals. Our team will consult with you to understand your target audience, competitive landscape, and unique value proposition to craft a plan that drives real results.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#00b5a5]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Analytics reporting",
    content: "We provide detailed analytics reports so you always know how your social media campaigns are performing. Track engagement, reach, conversions, and ROI with transparent, easy-to-understand dashboards and monthly reporting.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#00b5a5]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Meta advertising",
    content: "Our Meta advertising experts manage your Facebook and Instagram ad campaigns from strategy to execution. We handle audience targeting, creative development, budget optimization, and continuous testing to maximize your return on ad spend.",
  },
  
];

const FAQS = [
  { q: "Why are we posting regularly but still not getting enquiries?", a: "Regular posting does not always mean strategic posting. If your content does not explain your offer, answer buyer doubts, show proof, build trust, or guide people toward the next step, the page may look active but still fail to create enquiries." },
  { q: "Do we need to post reels every day to grow?", a: "Not necessarily. Reels can help reach, but posting daily without a clear idea can make the brand look noisy. A better approach is to mix reels, carousels, stories, static posts, testimonials, educational content, and offer-led content based on what your audience needs to see before trusting you." },
  { q: "What should we post if our business is not very visual?", a: "Every business has content angles, even if the product or service is not visually exciting. We can create content around customer problems, myths, comparisons, behind-the-scenes work, founder insights, FAQs, process explanations, proof, reviews, and decision-making guidance." },
  { q: "Can social media generate leads without paid ads?", a: "Yes, but it usually works best when the content builds trust consistently and gives people clear reasons to take action. Organic social media can support enquiries, website visits, DMs, and brand recall, but the strategy must be built around audience intent, not random posting." },
  { q: "How do you decide what content should be posted?", a: "We first understand your business, audience, offer, objections, competitors, and current social presence. Then we build content pillars around education, trust, proof, product or service clarity, brand personality, and conversion support." },
  { q: "What is the difference between social media marketing and performance marketing?", a: "Social media marketing focuses on organic content, brand presence, consistency, engagement, and trust-building. Performance marketing focuses on paid campaigns through platforms like Google and Meta Ads. Both can support growth, but they are not the same service." },
  { q: "How long does social media marketing take to show results?", a: "You can usually see early improvements in profile quality, consistency, engagement, and content clarity within the first month. Stronger trust, better enquiries, and audience recall usually take longer because social media works through repeated exposure and consistency." },
];

const platforms = [
  { name: "LinkedIn", color: "#0077b5", label: "in" },
  { name: "Pinterest", color: "#e60023", label: "P" },
  { name: "Facebook", color: "#1877f2", label: "f" },
  { name: "YouTube", color: "#ff0000", label: "▶" },
  { name: "Twitter/X", color: "#111", label: "𝕏" },
  { name: "Instagram", color: "#e1306c", label: "IG" },
];

// ════════════════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only relative overflow-hidden bg-[#0e1b30]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="smm-inner py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-20">
            <div className="flex items-center gap-3 mb-5" style={{ animation: "fadeSlideUp 0.6s ease forwards" }}>
              <div className="h-px w-8" style={{ background: "#2ec4b6" }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#2ec4b6", fontFamily: "'Poppins',sans-serif" }}>Social Media Marketing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="block">Social Media</span>
              <span className="block mt-2 text-[#2ec4b6]">Marketing</span>
              <span className="block mt-2">Services</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
Build a social presence that feels consistent, credible, and worth following. WebeDigital helps brands plan, create, and manage social media content that speaks to the right audience, builds trust over time, and supports real business conversations.
</p>
<Link
href="/contact-us"
className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded text-sm tracking-wide transition-colors"
>
LET&apos;S TALK IMPACT
</Link>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute right-[2px] top-[55%] -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
                <div className="absolute inset-0 rounded-[55%]" />
                <div className="absolute inset-0 rounded-[55%] border border-[#2ec4b6]/20 animate-arc1" />
                <div className="absolute inset-[30px] rounded-[60%] border border-[#2ec4b6]/15 animate-arc2" />
              </div>
              <img src="/seoservice.png" className="relative z-10 max-w-[520px] w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE HERO ── */}
      <section className="mobile-only mob-hero">
        <div className="mob-hero-eyebrow">
          <span className="mob-hero-eyebrow-line" />
          <span className="mob-hero-eyebrow-text">Social Media Marketing</span>
        </div>

        {/* H1 */}
        <h1 className="mob-h1">
          Social Media <span>Marketing</span> Services
        </h1>

        {/* Image */}
        <div className="mob-hero-img-wrap">
          <img src="/seoservice.png" alt="Social media marketing" style={{ height: 230, objectFit: "cover", objectPosition: "center top" }} />
          <div className="mob-hero-img-overlay" />
        </div>

        {/* Body + CTA */}
        <p className="mob-body mob-body-white" style={{ marginBottom: 28 }}>
Build a social presence that feels consistent, credible, and worth following. WebeDigital helps brands plan, create, and manage social media content that speaks to the right audience, builds trust over time, and supports real business conversations.
</p>
<Link href="/contact-us" className="mob-btn-orange">LET&apos;S TALK IMPACT</Link>

        {/* Stats strip */}
        <div className="mob-stats-strip">
          <div className="mob-stat-cell"><span className="mob-stat-num">$234B</span><span className="mob-stat-lbl">2024 Ad Spend</span></div>
          <div className="mob-stat-cell"><span className="mob-stat-num">71%</span><span className="mob-stat-lbl">Videos for Social</span></div>
          <div className="mob-stat-cell"><span className="mob-stat-num">#1</span><span className="mob-stat-lbl">Facebook ROI</span></div>
        </div>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// PAIN POINTS
// ════════════════════════════════════════════════════════════════════
function PainPointsSection() {
  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only px-14 py-20 bg-white">
        <div className="smm-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1a1f5e] leading-tight mb-6">
              Is It Time for a New Social Media Marketing Strategy?
            </h2>
            <p className="text-gray-600 mb-6">
You may already be posting on social media, but still feel like the content is not building enough attention, trust, profile visits, website clicks, or enquiries. That usually happens when posts are created in pieces without a clear content direction, platform understanding, or audience psychology behind them.
</p>
            <p className="text-[#00b5a5] font-bold mb-5">
If any of these feel familiar, your social media needs more than just another content calendar:
</p>
            <ol className="space-y-4">
              {painPoints.map((p, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="font-bold text-gray-800 shrink-0">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative flex justify-center mt-10 lg:justify-end">
            <div className="relative">
              <img src="/seoservice1.webp" alt="Digital marketing" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-section" style={{ background: "#fff" }}>
        {/* Heading */}
        <span className="mob-label">Strategy</span>
        <h2 className="mob-h2">Is It Time for a New Social Media Marketing Strategy?</h2>

        {/* Image */}
        <div className="mob-img">
          <img src="/seoservice1.webp" alt="Digital marketing" />
        </div>

        {/* Body */}
        <p className="mob-body">
You may already be posting on social media, but still feel like the content is not building enough attention, trust, profile visits, website clicks, or enquiries. That usually happens when posts are created in pieces without a clear content direction, platform understanding, or audience psychology behind them.
</p>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#00b5a5", marginBottom: 14, letterSpacing: "0.02em" }}>
        If any of these feel familiar, your social media needs more than just another content calendar:

        </p>

        {/* Numbered list cards */}
        <ul className="mob-pain-list">
          {painPoints.map((p, i) => (
            <li key={i} className="mob-pain-item">
              <span className="mob-pain-num">{i + 1}</span>
              {p}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// STRATEGIC
// ════════════════════════════════════════════════════════════════════
function StrategicSection() {
  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only relative py-24" style={{ background: "radial-gradient(ellipse at 50% 0%, #0e1b30 0%, #0e1b30 50%, #12154a 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: "0 0 50% 50%" }} />
        <div className="smm-inner relative py-24">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Win With a Strategic Approach to Social Media Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategicCards.map((c, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-teal-400 flex items-center justify-center mb-5 bg-[#1e2660]">
                  {c.icon}
                </div>
                <h3 className="text-[#00d4c0] font-bold text-lg mb-3">{c.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: "50% 50% 0 0" }} />
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-section-dark">
        {/* Heading */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="mob-label mob-label-white">Our Approach</span>
          <h2 className="mob-h2 mob-h2-white" style={{ marginBottom: 28 }}>
            Win With a Strategic Approach to Social Media Marketing
          </h2>

          {/* Horizontal scroll cards */}
          <div className="mob-strat-scroll">
            {strategicCards.map((c, i) => (
              <div key={i} className="mob-strat-card">
                <div className="mob-strat-icon">{c.icon}</div>
                <p className="mob-strat-title">{c.title}</p>
                <p className="mob-strat-body">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mob-scroll-hint mob-scroll-hint-white" style={{ marginTop: 10 }}>
            <svg viewBox="0 0 16 16" width="11" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4,6 8,10 12,6" /></svg>
            Swipe to explore all strategies
          </p>
        </div>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// CHALLENGE
// ════════════════════════════════════════════════════════════════════
function ChallengeSection() {
  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only py-24 px-16 bg-white">
        <div className="smm-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#00b5a5] font-bold tracking-widest text-sm mb-3">THE CHALLENGE</p>
            <h2 className="text-5xl font-bold text-[#1a1f5e] leading-tight mb-8">
Generating Trust and Qualified Traffic From Social Media
</h2>
            <p className="text-gray-600 mb-6">
Many businesses struggle with social media because the page looks active, but the content does not build enough trust to influence buying decisions. People may see your posts, but they do not always understand your value, remember your brand, or feel ready to reach out.
</p>
            <p className="text-gray-600">
We understand this gap because we work with brands that face it every day. Social media is no longer just about posting more. It is about showing up with the right message, the right format, and the right consistency so your audience slowly starts seeing you as a serious choice.
</p>
          </div>
          <div className="flex flex-col gap-5 justify-center h-full">
            {challengeStats.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">✕</div>
                <div>
                  <h4 className="text-[#1a1f5e] font-bold text-lg mb-1">{s.title}</h4>
                  <p className="text-gray-600 text-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-section" style={{ background: "#fff" }}>
        {/* Heading */}
        <span className="mob-label">The Challenge</span>
        <h2 className="mob-h2">Generating Trust and Qualified Traffic From Social Media</h2>

        {/* Stats — horizontal scroll */}
        <p style={{ fontSize: 11, fontWeight: 700, color: "#00b5a5", letterSpacing: "0.05em", marginBottom: 10, textTransform: "uppercase" }}>Key Statistics</p>
        <div className="mob-stat-scroll" style={{ marginBottom: 6 }}>
          {challengeStats.map((s, i) => (
            <div key={i} className="mob-stat-card">
              <div className="mob-stat-card-head">
                <div className="mob-stat-x">✕</div>
                <p className="mob-stat-card-title">{s.title}</p>
              </div>
              <p className="mob-stat-card-body">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mob-scroll-hint" style={{ marginBottom: 24 }}>
          <svg viewBox="0 0 16 16" width="11" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4,6 8,10 12,6" /></svg>
          Swipe to see all stats
        </p>

        {/* Body */}
        <p className="mob-body">
Many businesses struggle with social media because the page looks active, but the content does not build enough trust to influence buying decisions. People may see your posts, but they do not always understand your value, remember your brand, or feel ready to reach out.
</p>
        <p className="mob-body">
We understand this gap because we work with brands that face it every day. Social media is no longer just about posting more. It is about showing up with the right message, the right format, and the right consistency so your audience slowly starts seeing you as a serious choice.
</p>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// SOLUTION
// ════════════════════════════════════════════════════════════════════
function SolutionSection() {
  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only py-24 px-16 bg-gray-50">
        <div className="smm-inner grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full">
            <img src="/seoservice2.webp" alt="Digital marketing" className="w-full max-w-[600px] object-contain" />
          </div>
          <div>
            <p className="text-[#00b5a5] font-bold tracking-widest text-sm mb-3">THE SOLUTION</p>
            <h2 className="text-4xl font-bold text-[#1a1f5e] leading-tight mb-8">
              Tap Into Our Expertise to Boost Your Social Media Marketing Results
            </h2>
            <div className="flex flex-col gap-6">
              {deliverableGroups.map((group, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#b5d64a] flex items-center justify-center text-white font-bold text-lg">✓</div>
                  <div className="flex flex-col gap-1">
                    {group.map((item, j) => <p key={j} className="text-gray-700">{item}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-section-gray">
        {/* Heading */}
        <span className="mob-label">The Solution</span>
        <h2 className="mob-h2">Tap Into Our Expertise to Boost Your Social Media Marketing Results</h2>

        {/* Image */}
        <div className="mob-img">
          <img src="/seoservice2.webp" alt="Solution" />
        </div>

        {/* Checklist */}
        <ul className="mob-solution-list">
          {deliverableGroups.flat().map((item, i) => (
            <li key={i} className="mob-solution-item">
              <span className="mob-solution-check">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// HOW WE HELP
// ════════════════════════════════════════════════════════════════════
function HowWeHelpSection() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only py-24 px-16 bg-white">
        <div className="smm-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#1a1f5e] mb-5">How We Help You Get Results</h2>
              <p className="text-gray-600 mb-3">
                Based on your individual needs, we&apos;ll create a fully customized plan to help you boost your social media marketing results through a tailored content strategy.
              </p>
              <p className="text-gray-800 font-bold mb-8">
                The following deliverables are common components of a social media marketing strategy:
              </p>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {accordionItems.map((item, i) => (
                  <div key={i} className="border-b border-gray-200 last:border-b-0">
                    <button onClick={() => setOpenDesktop(openDesktop === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        {item.icon}
                        <span className="text-[#00b5a5] font-bold">{item.title}</span>
                      </div>
                      <span className="text-[#00b5a5] text-2xl font-light shrink-0 ml-3">{openDesktop === i ? "−" : "+"}</span>
                    </button>
                    {openDesktop === i && (
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{item.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Social platform diagram */}
            <div className="flex justify-center items-start pt-28">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-[#00b5a5] flex items-center justify-center shadow-xl z-10">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                {[
                  { name: "in", color: "#0077b5", top: "-16px", left: "50%", transform: "translateX(-50%)" },
                  { name: "P", color: "#e60023", top: "50%", left: "-16px", transform: "translateY(-50%)" },
                  { name: "f", color: "#1877f2", top: "50%", right: "-16px", transform: "translateY(-50%)" },
                  { name: "▶", color: "#ff0000", bottom: "30%", left: "-16px" },
                  { name: "𝕏", color: "#000000", bottom: "30%", right: "-16px" },
                  { name: "📷", color: "#e1306c", bottom: "-16px", left: "50%", transform: "translateX(-50%)" },
                ].map((p, i) => (
                  <div key={i} className="absolute w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg z-10"
                    style={{ backgroundColor: p.color, top: p.top, left: p.left, bottom: p.bottom, right: p.right, transform: p.transform }}>
                    {p.name === "📷" ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    ) : p.name}
                  </div>
                ))}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  <line x1="144" y1="0" x2="144" y2="144" stroke="#cbd5e1" strokeWidth="1.5" />
                  <line x1="0" y1="144" x2="144" y2="144" stroke="#cbd5e1" strokeWidth="1.5" />
                  <line x1="288" y1="144" x2="144" y2="144" stroke="#cbd5e1" strokeWidth="1.5" />
                  <line x1="144" y1="288" x2="144" y2="144" stroke="#cbd5e1" strokeWidth="1.5" />
                  <line x1="0" y1="200" x2="144" y2="144" stroke="#cbd5e1" strokeWidth="1.5" />
                  <line x1="288" y1="200" x2="144" y2="144" stroke="#cbd5e1" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-section" style={{ background: "#fff" }}>
        {/* Heading */}
        <span className="mob-label">Deliverables</span>
        <h2 className="mob-h2">How We Help You Get Results</h2>

        {/* Platform grid (visual = image equivalent) */}
        <div className="mob-platform-grid" style={{ marginBottom: 6 }}>
          {platforms.map((p) => (
            <div key={p.name} className="mob-platform-chip" style={{ background: p.color }}>
              <span style={{ fontSize: 18, fontWeight: 900 }}>{p.label}</span>
              <span style={{ fontSize: 9, opacity: 0.88 }}>{p.name}</span>
            </div>
          ))}
        </div>

        {/* Body */}
        <p className="mob-body" style={{ marginBottom: 8 }}>
          Based on your individual needs, we&apos;ll create a fully customised plan. The following deliverables are common components of every social media strategy we build.
        </p>

        {/* Accordion */}
        <div style={{ marginTop: 4 }}>
          {accordionItems.map((item, i) => (
            <div key={i} className={`mob-accordion-item${openMobile === i ? " open" : ""}`}>
              <button className="mob-accordion-btn" onClick={() => setOpenMobile(openMobile === i ? null : i)}>
                <div className="mob-accordion-label">
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span className="mob-accordion-title">{item.title}</span>
                </div>
                <svg viewBox="0 0 20 20" fill="none" style={{ width: 18, height: 18, flexShrink: 0, transition: "transform 0.3s", transform: openMobile === i ? "rotate(45deg)" : "none" }} stroke="#00b5a5" strokeWidth="2.5">
                  <line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" />
                </svg>
              </button>
              <div className="mob-accordion-body" style={{ maxHeight: openMobile === i ? 220 : 0 }}>
                <div className="mob-accordion-inner">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// FAQ
// ════════════════════════════════════════════════════════════════════
function FAQ() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const ref = useReveal();

  const IconChevron = ({ isOpen }: { isOpen: boolean }) => (
    <svg viewBox="0 0 20 20" fill="none" className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} stroke="currentColor" strokeWidth="2">
      <polyline points="4,7 10,13 16,7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only py-20 bg-white">
        <div ref={ref} className="max-w-3xl mx-auto px-6" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
            Frequently Asked <span style={{ color: "#2ec4b6" }}>Questions</span>
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={{ border: "1.5px solid", borderColor: openDesktop === i ? "#2ec4b6" : "rgba(26,39,68,0.1)" }}>
                <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" style={{ background: openDesktop === i ? "rgba(46,196,182,0.04)" : "white" }} onClick={() => setOpenDesktop(openDesktop === i ? null : i)}>
                  <span className="font-bold text-[#1a2744] text-sm" style={{ fontFamily: "'Poppins',sans-serif" }}>{faq.q}</span>
                  <IconChevron isOpen={openDesktop === i} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openDesktop === i ? 200 : 0 }}>
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-faq-section">
        <span className="mob-label">FAQ</span>
        <h2 className="mob-h2">Frequently Asked <span style={{ color: "#2ec4b6" }}>Questions</span></h2>
        <div style={{ marginTop: 20 }}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`mob-accordion-item${openMobile === i ? " open" : ""}`} style={{ borderColor: openMobile === i ? "#2ec4b6" : "rgba(26,39,68,0.1)" }}>
              <button className="mob-accordion-btn" onClick={() => setOpenMobile(openMobile === i ? null : i)}>
                <span className="mob-accordion-title" style={{ color: "#1a1f5e" }}>{faq.q}</span>
                <svg viewBox="0 0 20 20" fill="none" style={{ width: 18, height: 18, flexShrink: 0, transition: "transform 0.3s", transform: openMobile === i ? "rotate(180deg)" : "none" }} stroke="#2ec4b6" strokeWidth="2">
                  <polyline points="4,7 10,13 16,7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="mob-accordion-body" style={{ maxHeight: openMobile === i ? 220 : 0 }}>
                <div className="mob-accordion-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// CTA BANNER
// ════════════════════════════════════════════════════════════════════
function CtaBanner() {
  return (
    <>
      {/* ── DESKTOP (untouched) ── */}
      <section className="desktop-only relative py-20 text-center overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 50%, #0e1b30 0%, #0e1b30 60%, #12154a 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="smm-inner relative">
          <h2 className="text-4xl font-bold text-white mb-5">Ready to Grow with Social Media Marketing?</h2>
          <p className="text-gray-300 mb-8">
            Let&apos;s build a strategy tailored to your business and start driving real results from social media.
          </p>
          <Link href="/contact-us" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded text-sm tracking-wide transition-colors">
            REQUEST A DEMO
          </Link>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="mobile-only mob-cta">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="mob-cta-h2">Ready to Grow with Social Media Marketing?</h2>
          <p className="mob-cta-body">
            Let&apos;s build a strategy tailored to your business and start driving real results from social media.
          </p>
          <Link href="/contact-us" className="mob-cta-btn">REQUEST A DEMO</Link>
        </div>
      </section>
    </>
  );
}

// ════════════════════════════════════════════════════════════════════
// PAGE
// ════════════════════════════════════════════════════════════════════
export default function SocialMediaMarketingPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <div className="min-h-screen font-sans">
        <HeroSection />
        <PainPointsSection />
        <StrategicSection />
        <ChallengeSection />
        <SolutionSection />
        <HowWeHelpSection />
        <FAQ />
        <CtaBanner />
      </div>
    </>
  );
}