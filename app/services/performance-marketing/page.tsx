"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   PAID MEDIA / ADVERTISING SERVICE PAGE
   Desktop: 100% original, untouched.
   Mobile: Innovative, professional, Heading → Image → Content flow.
   Wide-screen: inner-wrap clamps content to 1200px with fluid padding.
───────────────────────────────────────────────────────────────── */

/* ── Icons (unchanged) ── */
const ArrowRight = ({cls="w-4 h-4"}:{cls?:string}) => (
  <svg viewBox="0 0 20 20" fill="none" className={cls} stroke="currentColor" strokeWidth="2.5">
    <line x1="3" y1="10" x2="17" y2="10"/><polyline points="11,4 17,10 11,16" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CheckCircle = ({color="#b5cc3b"}:{color?:string}) => (
  <svg viewBox="0 0 40 40" className="w-8 h-8 flex-shrink-0">
    <circle cx="20" cy="20" r="20" fill={color}/>
    <polyline points="11,20 17,26 29,14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
const XCircle = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 flex-shrink-0">
    <circle cx="24" cy="24" r="24" fill="#f15a22"/>
    <line x1="15" y1="15" x2="33" y2="33" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
    <line x1="33" y1="15" x2="15" y2="33" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0" stroke="#2ec4b6" strokeWidth="2.5">
    <line x1="10" y1="4" x2="10" y2="16"/><line x1="4" y1="10" x2="16" y2="10"/>
  </svg>
);
const MinusIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0" stroke="#2ec4b6" strokeWidth="2.5">
    <line x1="4" y1="10" x2="16" y2="10"/>
  </svg>
);
const IconTarget = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#2ec4b6" strokeWidth="2">
    <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
  </svg>
);
const IconMoney = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#2ec4b6" strokeWidth="2">
    <rect x="3" y="6" width="18" height="12" rx="2"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M7 12h.01M17 12h.01"/>
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#2ec4b6" strokeWidth="2">
    <line x1="4" y1="20" x2="20" y2="20"/>
    <rect x="6" y="10" width="3" height="8"/>
    <rect x="11" y="6" width="3" height="12"/>
    <rect x="16" y="3" width="3" height="15"/>
  </svg>
);
const IconPlay = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#2ec4b6" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10,8 16,12 10,16" fill="#2ec4b6"/>
  </svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="#2ec4b6" strokeWidth="2">
    <path d="M10 14a5 5 0 0 1 0-7l2-2a5 5 0 0 1 7 7l-1 1"/>
    <path d="M14 10a5 5 0 0 1 0 7l-2 2a5 5 0 0 1-7-7l1-1"/>
  </svg>
);

/* ── Scroll reveal hook (unchanged) ── */
function useReveal(threshold=0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){el.style.opacity="1";el.style.transform="translateY(0)";}
    },{threshold});
    obs.observe(el); return ()=>obs.disconnect();
  },[threshold]);
  return ref;
}

/* ── Data (unchanged) ── */
const CHALLENGES = [
  "Your ROAS looks decent, but profit quality does not match the report",
  "Meta and Google both seem to claim credit for the same conversions",
  "Retargeting looks strong, but new customer acquisition feels weak",
  "Cost per lead or cost per purchase increases when you scale budget",
  "Creative tests are running, but the account is not learning clearly",
  "Landing pages and ads are not aligned around one conversion goal",
];
const STAT_CARDS = [
  {title:"Paid Search Marketing Boosts Results", body:"Businesses make an average of $2 in revenue for every dollar spent on Google Ads.", src:"Source"},
  {title:"Paid Search Marketing Is Impactful", body:"Nearly 65% of users click ads when they're looking to make a purchase.", src:"Source"},
  {title:"Conversion Rates Skyrocket With Remarketing", body:"Remarketing can increase conversion rates by up to 150%.", src:"Source"},
];
const SOLUTION_ITEMS = [
  "Paid search marketing strategy and consultation",
  "Google Ads services",
  "Meta Ads management",
  "Social media paid advertising",
  "Remarketing & retargeting campaigns",
  "Display & programmatic advertising",
];
const ICONS = [IconTarget, IconMoney, IconChart, IconPlay, IconLink];
const DOMINATE_CARDS = [
  {title:"Enhance Your Lead Generation Strategy", body:"Let us help you boost your lead generation. We focus on attracting high-quality prospects in substantial volumes to propel your business growth."},
  {title:"Maximize Budget Efficiency and ROI", body:"We'll overhaul your paid search marketing campaigns to ensure efficient spending and optimized cost per acquisition so you can achieve the highest possible return on investment."},
  {title:"Optimize Targeting and Campaign Structure", body:"By refining your audience targeting, campaign structure, and keyword strategies, we'll enhance your efforts to ensure your ads reach the most relevant and engaged audiences."},
  {title:"Leverage Our End-to-End Campaign Management", body:"From strategy and setup to ongoing optimization and reporting, our team manages every aspect of your paid media campaigns for maximum results."},
  {title:"Elevate Audience Targeting", body:"We use advanced segmentation, lookalike audiences, and behavioral data to ensure your ads appear in front of the people most likely to convert."},
];
const DELIVERABLES = [
  {title:"Documented paid search marketing strategy and consultation", body:"We document a comprehensive strategy tailored to your business objectives, competitive landscape, and budget — giving you a clear roadmap to paid media success."},
  {title:"Google Ads", body:"Full-service Google Ads management including Search, Display, Shopping, and Performance Max campaigns crafted for maximum ROI."},
  {title:"Meta Ads", body:"Reach additional high-intent audiences through Meta Advertising, often at lower CPCs than Google with comparable conversion quality."},
  {title:"Paid Social Advertising", body:"Strategic paid campaigns across Facebook, Instagram, LinkedIn, TikTok, and Pinterest — each tailored to platform behavior and your target audience."},
  {title:"Remarketing & Retargeting", body:"Re-engage past visitors and warm leads with precision retargeting across search, display, and social channels to recover lost conversions."},
];

const FAQS = [
  { q: "Why is my ROAS looking good but profit is not improving?", a: "This usually happens when platform-reported ROAS is not showing the full picture. Retargeting, brand search, repeat buyers, or last-click conversions may be taking more credit than they should. We review the account structure, tracking setup, funnel stages, and actual business numbers to understand whether the reported ROAS is truly useful." },
  { q: "Why does my cost per lead increase when I increase the budget?", a: "When budget increases, campaigns often move beyond the easiest audience pockets. If targeting, creative, landing page, and funnel structure are not strong enough, the cost per lead can rise quickly. Scaling needs controlled testing, not just higher spend." },
  { q: "Should I start with Google Ads or Meta Ads?", a: "It depends on your offer and demand type. Google Ads works better when people are already searching for your product or service. Meta Ads works better when the brand needs to create demand, educate the audience, or reach people before they search. Many businesses need both, but not always from day one." },
  { q: "Why are my ads getting clicks but not conversions?", a: "Clicks usually mean the ad is creating interest, but conversions depend on what happens after the click. The issue may be landing page messaging, offer clarity, pricing, trust signals, page speed, form length, audience quality, or mismatch between the ad promise and the page experience." },
  { q: "Why are my ads getting clicks but not conversions?", a: "Clicks usually mean the ad is creating interest, but conversions depend on what happens after the click. The issue may be landing page messaging, offer clarity, pricing, trust signals, page speed, form length, audience quality, or mismatch between the ad promise and the page experience." },
  { q: "Can you manage both Google Ads and Meta Ads?", a: "Yes. We manage Google Ads and Meta Ads with a focus on performance, tracking, conversion quality, budget allocation, creative testing, and campaign optimization. We also look at how both platforms support the overall customer journey instead of judging them in isolation." },
  { q: "Do I need a landing page before running ads?", a: "Not always, but a weak landing page can waste ad spend. If your website does not explain the offer clearly, build trust quickly, and guide visitors toward action, even good ads may underperform. We review landing pages as part of the campaign strategy because ads and pages must work together." },
  { q: "What is the difference between performance marketing and social media management?", a: "Performance marketing focuses on paid campaigns designed to generate measurable outcomes such as leads, sales, bookings, or conversions. Social media management focuses more on organic content, brand presence, consistency, and community engagement. Both can support growth, but they are not the same service." },
  { q: "How long does it take to improve ad performance?", a: "Some improvements can be seen within a few weeks if tracking, targeting, or campaign structure has clear issues. Stronger performance usually takes longer because the account needs enough data for testing audiences, creatives, landing pages, and budget decisions. The goal is not just a quick spike, but a more reliable growth system." },
];

/* ════════════════════════════════════════════════════════════════════
   GLOBAL CSS
   • Desktop: untouched behaviour via .desktop-only / existing styles
   • Mobile: full innovative redesign via .mobile-only + @media rules
   • Wide-screen fix: .pm-inner caps width + uses fluid clamp() padding
════════════════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{overflow-x:hidden;margin:0;}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}

/* ── Wide-screen container: keeps content from stretching on large monitors ── */
.pm-inner {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(20px, 5vw, 80px);
  padding-right: clamp(20px, 5vw, 80px);
}

/* ── Show/hide helpers ── */
@media (max-width: 768px)  { .desktop-only { display: none !important; } }
@media (min-width: 769px)  { .mobile-only  { display: none !important; } }

/* ══════════════════════════════════════════════════
   MOBILE GLOBAL BASE
══════════════════════════════════════════════════ */
@media (max-width: 768px) {

  /* Shared mobile section wrapper */
  .mob-section {
    padding: 60px 20px 64px;
  }

  /* Section label pill */
  .mob-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(46,196,182,0.12);
    border: 1px solid rgba(46,196,182,0.3);
    border-radius: 999px;
    padding: 5px 14px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 14px;
  }

  /* Section heading */
  .mob-h2 {
    font-size: clamp(26px, 7.5vw, 36px);
    font-weight: 800;
    color: #1a2744;
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
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 16px;
  }
  .mob-body-white { color: rgba(255,255,255,0.75); }

  /* Full-width rounded image */
  .mob-img {
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 28px;
    position: relative;
  }
  .mob-img img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
  }

  /* Accent teal divider */
  .mob-teal-bar {
    width: 36px;
    height: 3px;
    background: #2ec4b6;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  /* CTA button - orange */
  .mob-btn-orange {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg,#f15a22,#ff7a42);
    color: #fff;
    border-radius: 8px;
    padding: 15px 28px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 6px 20px rgba(241,90,34,0.35);
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  /* CTA button - teal/lime */
  .mob-btn-teal {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #b5cc3b;
    color: #fff;
    border-radius: 8px;
    padding: 14px 26px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: 'Poppins', sans-serif;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

/* ── HERO mobile ── */
  .mob-hero {
    background: linear-gradient(135deg,#0d1628 0%,#111c38 50%,#1a2744 100%);
    padding: 72px 20px 56px;
    position: relative;
    overflow: hidden;
  }
  .mob-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(46,196,182,0.15) 1px, transparent 1px);
    background-size: 22px 22px;
    pointer-events: none;
  }
  .mob-hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  .mob-hero-eyebrow-line {
    width: 28px;
    height: 2px;
    background: #2ec4b6;
    border-radius: 2px;
  }
  .mob-hero-eyebrow-text {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
  }
  .mob-hero-h1 {
    font-size: clamp(38px, 10vw, 56px);
    font-weight: 800;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -1px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
  }
  .mob-hero-h1 span { color: #2ec4b6; }
  .mob-hero-sub {
    font-size: 15px;
    font-weight: 700;
    color: #f15a22;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 14px;
  }
  .mob-hero-sub span { color: #fff; }
  .mob-hero-body {
    font-size: 14px;
    line-height: 1.75;
    color: rgba(255,255,255,0.68);
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 28px;
  }

  /* Hero image — cinematic strip with overlay badge */
  .mob-hero-img-wrap {
    position: relative;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 32px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }
  .mob-hero-img-wrap img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }
  .mob-hero-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(46,196,182,0.18), rgba(26,39,68,0.5));
  }
  .mob-hero-badge {
    position: absolute;
    bottom: 14px;
    right: 14px;
    background: #fff;
    border-radius: 12px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  .mob-hero-badge-icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2ec4b6, #1a9e93);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mob-hero-badge-title {
    font-size: 11px;
    font-weight: 800;
    color: #1a2744;
    font-family: 'Poppins', sans-serif;
    display: block;
  }
  .mob-hero-badge-sub {
    font-size: 9px;
    color: #999;
    font-family: 'DM Sans', sans-serif;
    display: block;
  }

  /* Stats strip below hero */
  .mob-hero-stats {
    display: flex;
    gap: 0;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 28px;
  }
  .mob-hero-stat {
    flex: 1;
    text-align: center;
    padding: 14px 8px;
    border-right: 1px solid rgba(255,255,255,0.08);
  }
  .mob-hero-stat:last-child { border-right: none; }
  .mob-hero-stat-num {
    display: block;
    font-size: 20px;
    font-weight: 900;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
    line-height: 1;
    margin-bottom: 4px;
  }
  .mob-hero-stat-label {
    display: block;
    font-size: 9px;
    font-weight: 700;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
  }

/* ── Success (Case Study) mobile ── */
  .mob-success-section {
    background: #fff;
    padding: 60px 20px 64px;
  }
  /* horizontal scroll stats track */
  .mob-result-pills {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 6px;
    margin-bottom: 24px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .mob-result-pills::-webkit-scrollbar { display: none; }
  .mob-result-pill {
    flex-shrink: 0;
    background: linear-gradient(135deg, #1a2744, #243558);
    border-radius: 12px;
    padding: 16px 18px;
    min-width: 160px;
    text-align: center;
  }
  .mob-result-pill-num {
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
    line-height: 1;
    margin-bottom: 6px;
  }
  .mob-result-pill-label {
    display: block;
    font-size: 11px;
    color: rgba(255,255,255,0.75);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.4;
  }

/* ── Strategy (New Paid Media Strategy) mobile ── */
  .mob-strategy-section {
    background: #f7f8fc;
    padding: 60px 20px 64px;
  }
  .mob-ads-badge {
    width: 80px;
    height: 80px;
    background: #2ec4b6;
    border-radius: 16px 16px 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 900;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }
  .mob-challenges-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mob-challenges-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    font-family: 'DM Sans', sans-serif;
    background: #fff;
    border-radius: 10px;
    padding: 12px 14px;
    box-shadow: 0 2px 12px rgba(26,39,68,0.06);
  }
  .mob-challenges-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2ec4b6;
    flex-shrink: 0;
  }

/* ── Challenge (Standing Out) mobile ── */
  .mob-challenge-section {
    background: #fff;
    padding: 60px 20px 64px;
  }
  /* Stat cards — horizontal scroll on mobile */
  .mob-stat-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 8px;
    margin-bottom: 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .mob-stat-scroll::-webkit-scrollbar { display: none; }
  .mob-stat-card {
    flex-shrink: 0;
    width: 270px;
    background: #fff;
    border-radius: 16px;
    padding: 20px 18px;
    box-shadow: 0 4px 24px rgba(26,39,68,0.10);
    border: 1.5px solid rgba(26,39,68,0.07);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mob-stat-card-head {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .mob-stat-card-title {
    font-size: 13px;
    font-weight: 700;
    color: #1a2744;
    font-family: 'Poppins', sans-serif;
    line-height: 1.35;
  }
  .mob-stat-card-body {
    font-size: 13px;
    color: #666;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
  }
  .mob-scroll-hint {
    font-size: 10px;
    color: #aaa;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.05em;
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

/* ── Solution mobile ── */
  .mob-solution-section {
    background: #f7f8fc;
    padding: 60px 20px 64px;
  }
  .mob-solution-list {
    list-style: none;
    margin: 0 0 28px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mob-solution-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    font-family: 'DM Sans', sans-serif;
  }
  .mob-solution-check {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #b5cc3b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

/* ── Dominate mobile ── */
  .mob-dominate-section {
    background: #1a2744;
    padding: 60px 20px 64px;
    position: relative;
    overflow: hidden;
  }
  .mob-dominate-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
  }
  /* horizontal scroll cards */
  .mob-dominate-scroll {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    padding-bottom: 8px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .mob-dominate-scroll::-webkit-scrollbar { display: none; }
  .mob-dominate-card {
    flex-shrink: 0;
    width: 240px;
    background: rgba(255,255,255,0.05);
    border: 1.5px solid rgba(46,196,182,0.2);
    border-radius: 18px;
    padding: 22px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
  .mob-dominate-icon {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 2px solid #2ec4b6;
    background: rgba(46,196,182,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mob-dominate-card-title {
    font-size: 13px;
    font-weight: 700;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
    line-height: 1.35;
  }
  .mob-dominate-card-body {
    font-size: 12px;
    color: rgba(255,255,255,0.65);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
  }

/* ── Results / Accordion mobile ── */
  .mob-results-section {
    background: #fff;
    padding: 60px 20px 64px;
  }
  .mob-accordion-item {
    border-radius: 12px;
    overflow: hidden;
    border: 1.5px solid rgba(26,39,68,0.10);
    margin-bottom: 10px;
    transition: border-color 0.25s;
  }
  .mob-accordion-item.open {
    border-color: #2ec4b6;
  }
  .mob-accordion-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  .mob-accordion-title {
    font-size: 13px;
    font-weight: 700;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
    line-height: 1.4;
  }
  .mob-accordion-body {
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  .mob-accordion-body-inner {
    padding: 0 16px 16px;
    font-size: 13px;
    color: #666;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.65;
  }

/* ── Top Agency mobile ── */
  .mob-agency-section {
    background: #f7f8fc;
    padding: 60px 20px 64px;
  }
  .mob-awards-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .mob-award-item {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 2px 12px rgba(26,39,68,0.07);
    font-size: 14px;
    font-weight: 700;
    color: #1a2744;
    font-family: 'Poppins', sans-serif;
  }

/* ── FAQ mobile ── */
  .mob-faq-section {
    background: #fff;
    padding: 60px 20px 64px;
  }

/* ── CTA Banner mobile ── */
  .mob-cta-section {
    background: linear-gradient(135deg,#111c38,#1a2744,#1e3056);
    padding: 72px 20px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .mob-cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(46,196,182,0.07) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
  }
  .mob-cta-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(46,196,182,0.15);
    border: 1px solid rgba(46,196,182,0.3);
    border-radius: 999px;
    padding: 6px 14px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #2ec4b6;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
  }
  .mob-cta-h2 {
    font-size: clamp(34px, 9vw, 52px);
    font-weight: 800;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -1px;
    margin-bottom: 16px;
    font-family: 'Poppins', sans-serif;
  }
  .mob-cta-h2 span { color: #2ec4b6; }
  .mob-cta-body {
    font-size: 15px;
    line-height: 1.65;
    color: rgba(255,255,255,0.6);
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 32px;
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
  }
  .mob-cta-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .mob-cta-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg,#f15a22,#ff7a42);
    color: #fff;
    border-radius: 8px;
    padding: 16px 32px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 8px 24px rgba(241,90,34,0.4);
    border: none;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    max-width: 320px;
  }
  .mob-cta-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #fff;
    border-radius: 8px;
    padding: 14px 32px;
    font-size: 13px;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    border: 1.5px solid rgba(255,255,255,0.25);
    cursor: pointer;
    width: 100%;
    justify-content: center;
    max-width: 320px;
  }
}
`;

/* ══════════════════════════════════════════════════════════════════
   HERO (desktop = unchanged, mobile = innovative)
══════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <>
      {/* ── DESKTOP HERO (untouched) ── */}
      <section className="desktop-only relative overflow-hidden" style={{background:"linear-gradient(135deg,#0d1628 0%,#111c38 45%,#1a2744 75%,#1e3a5f 100%)",minHeight:"calc(100vh - 80px)",display:"flex",alignItems:"center"}}>
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(rgba(46,196,182,0.18) 1px,transparent 1px)",backgroundSize:"28px 28px"}}/>
        <div className="absolute pointer-events-none" style={{width:600,height:600,top:-200,right:-100,borderRadius:"50%",background:"radial-gradient(circle,rgba(46,196,182,0.12) 0%,transparent 70%)",filter:"blur(50px)"}}/>
        <div className="absolute pointer-events-none" style={{width:400,height:400,bottom:-150,left:-80,borderRadius:"50%",background:"radial-gradient(circle,rgba(241,90,34,0.10) 0%,transparent 70%)",filter:"blur(40px)"}}/>
        <div className="pm-inner relative z-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div style={{animation:"fadeUp 0.7s ease forwards"}}>
            <div className="flex items-center gap-3 mb-5" style={{ animation: "fadeSlideUp 0.6s ease forwards" }}>
              <div className="h-px w-8" style={{ background: "#2ec4b6" }} />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#2ec4b6", fontFamily: "'Poppins',sans-serif" }}>Advanced Advertising</span>
            </div>
            <h1 className="text-6xl xl:text-7xl font-bold leading-[1.04] text-white mb-5" style={{fontFamily:"'Poppins',sans-serif"}}>
              Performance Marketing<br/><span style={{color:"#2ec4b6"}}>Services</span>
            </h1>
            <p className="text-xl font-bold mb-4" style={{color:"#f15a22",fontFamily:"'Poppins',sans-serif"}}>
              Increase ROI and Decrease Cost per Click{" "}
              <span className="text-white">With WebeDigital!</span>
            </p>
            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{color:"rgba(255,255,255,0.70)",fontFamily:"'DM Sans',sans-serif"}}>
WebeDigital helps brands run Ads with clearer strategy, sharper targeting, better tracking, and stronger conversion intent. We study where money is being spent, where leads are coming from, and what needs to change so your ad spend has a better chance of turning into real business growth.
</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-9 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{background:"linear-gradient(135deg,#f15a22,#ff7a42)",fontFamily:"'Poppins',sans-serif",boxShadow:"0 6px 24px rgba(241,90,34,0.35)"}}>
              Let&apos;s Talk Impact <ArrowRight/>
            </Link>
          </div>
          <div className="relative flex items-center justify-center" style={{ minHeight: 420 }}>
            <div className="absolute" style={{width:"90%",height:"90%",background:"linear-gradient(135deg, rgba(46,196,182,0.25), rgba(30,58,95,0.6))",transform:"rotate(-3deg)",borderRadius:"24px",zIndex:0}}/>
            <div className="relative overflow-hidden shadow-2xl" style={{width:"72%",height:380,clipPath:"polygon(0 0, 100% 0, 100% 85%, 0 100%)",borderRadius:"24px",zIndex:1,boxShadow:"0 30px 80px rgba(0,0,0,0.45)"}}>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80" className="w-full h-full object-cover" alt="Paid media team"/>
              <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(46,196,182,0.12), rgba(26,39,68,0.30))"}}/>
            </div>
            <div className="absolute bottom-6 right-0 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 z-10">
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-[#2ec4b6] to-[#1a9e93]">
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="white"><path d="M10 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L10 14l-4.8 2.5.9-5.2L2.3 7.6l5.3-.8z"/></svg>
              </div>
              <div>
                <div className="text-xs font-black text-[#1a2744]">Google + Meta Ads</div>
                <div className="text-[10px] text-gray-400">Campaign execution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE HERO ── */}
      <section className="mobile-only mob-hero">
        {/* Heading */}
        <div className="mob-hero-eyebrow">
          <span className="mob-hero-eyebrow-line"/>
          <span className="mob-hero-eyebrow-text">Advanced Advertising</span>
        </div>
        <h1 className="mob-hero-h1">Performance Marketing<br/><span>Services</span></h1>
        <p className="mob-hero-sub">Increase ROI &amp; Decrease Cost per Click <span>With WebeDigital!</span></p>

        {/* Image */}
        <div className="mob-hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80" alt="Paid media team"/>
          <div className="mob-hero-img-overlay"/>
          <div className="mob-hero-badge">
            <div className="mob-hero-badge-icon">
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="white"><path d="M10 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L10 14l-4.8 2.5.9-5.2L2.3 7.6l5.3-.8z"/></svg>
            </div>
            <div>
              <span className="mob-hero-badge-title">Google + Meta Ads</span>
              <span className="mob-hero-badge-sub">Campaign execution</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <p className="mob-hero-body">
WebeDigital helps brands run Ads with clearer strategy, sharper targeting, better tracking, and stronger conversion intent. We study where money is being spent, where leads are coming from, and what needs to change so your ad spend has a better chance of turning into real business growth.
</p>
<Link href="/contact-us" className="mob-btn-orange">Let&apos;s Talk Impact <ArrowRight cls="w-3.5 h-3.5"/></Link>

        {/* Stats strip */}
        <div className="mob-hero-stats">
          <div className="mob-hero-stat"><span className="mob-hero-stat-num">$2</span><span className="mob-hero-stat-label">Avg. Revenue per $1 Spent</span></div>
          <div className="mob-hero-stat"><span className="mob-hero-stat-num">65%</span><span className="mob-hero-stat-label">Users Click Ads to Buy</span></div>
          <div className="mob-hero-stat"><span className="mob-hero-stat-num">150%</span><span className="mob-hero-stat-label">Remarketing Conversion Lift</span></div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SUCCESS SECTION
══════════════════════════════════════════════════════════════════ */
function SuccessSection() {
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-24 bg-white">
        <div className="pm-inner">
          <h2 className="text-4xl font-bold text-center mb-14" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>What Smarter Performance Marketing Looks Like</h2>
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div>
              <h3 className="text-3xl font-bold mb-4" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>Conor Bidet</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6" style={{fontFamily:"'DM Sans',sans-serif"}}>
Conor Bidet had paid campaigns running across Meta and Google, but the account needed better clarity before it could scale confidently. The reported numbers looked workable, but the deeper issue was attribution confusion, inflated retargeting performance, and unclear budget allocation between campaigns that were creating demand and campaigns that were only collecting credit at the end.
</p>
              <p className="font-bold mb-3" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>The Results:</p>
              <ul className="space-y-2 mb-8 text-gray-700" style={{fontFamily:"'DM Sans',sans-serif"}}>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1a2744] flex-shrink-0"/>Blended ROAS improved from 2.21x to 4.2x</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1a2744] flex-shrink-0"/>Wasted spend was reduced by identifying weak and inflated campaign signals</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1a2744] flex-shrink-0"/>Budget allocation became clearer across Google Ads and Meta Ads</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1a2744] flex-shrink-0"/>The account became easier to scale because decisions were based on cleaner performance data</li>

              </ul>
              <Link href="/case-studies" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5" style={{background:"#b5cc3b",color:"#fff",fontFamily:"'Poppins',sans-serif"}}>
                Read the Case Study <ArrowRight/>
              </Link>
            </div>
            <div className="relative flex items-center justify-center" style={{minHeight:360}}>
              <div className="absolute inset-0 rounded-2xl" style={{background:"linear-gradient(135deg,#e8f4f8,#d0eef8)",transform:"rotate(-3deg)"}}/>
              <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{width:"92%",height:340}}>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Client spotlight" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center" style={{background:"rgba(26,39,68,0.35)"}}>
                  <div className="text-center text-white px-6">
                    <div className="text-xs font-bold tracking-widest uppercase mb-2 opacity-80">Client Spotlight</div>
                    <div className="text-3xl font-black" style={{fontFamily:"'Poppins',sans-serif"}}>CONOR BIDET</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 flex gap-1">
                {["#1a2744","#2ec4b6","#2ec4b6","#4dd9cc","#4dd9cc","#7ae8df"].map((c,i)=>(
                  <svg key={i} viewBox="0 0 24 24" className="w-6 h-6" fill="none"><polyline points="6,4 14,12 6,20" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-success-section">
        {/* Heading */}
        <span className="mob-label">Case Study</span>
        <h2 className="mob-h2" style={{marginBottom:20}}>What Smarter Performance Marketing Looks Like</h2>

        {/* Image */}
        <div className="mob-img">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Conor Bidet case study"/>
          <div style={{position:"absolute",inset:0,background:"rgba(26,39,68,0.38)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:4}}>
            <span style={{fontSize:10,fontWeight:700,letterSpacing:"0.15em",color:"rgba(255,255,255,0.75)",fontFamily:"'Poppins',sans-serif",textTransform:"uppercase"}}>Client Spotlight</span>
            <span style={{fontSize:26,fontWeight:900,color:"#fff",fontFamily:"'Poppins',sans-serif"}}>CONOR BIDET</span>
          </div>
        </div>

        {/* Scrollable result pills */}
        <p style={{fontSize:11,fontWeight:700,color:"#2ec4b6",fontFamily:"'Poppins',sans-serif",letterSpacing:"0.05em",marginBottom:10,textTransform:"uppercase"}}>The Results</p>
        <div className="mob-result-pills">
          <div className="mob-result-pill">
            <span className="mob-result-pill-num">2.21x to 4.2x</span>
            <span className="mob-result-pill-label">Blended ROAS improved</span>
          </div>
          <div className="mob-result-pill">
            <span className="mob-result-pill-num">Wasted spend was reduced</span>
            <span className="mob-result-pill-label">by identifying weak and inflated campaign signals</span>
          </div>
          <div className="mob-result-pill">
            <span className="mob-result-pill-num">Budget allocation became clearer</span>
            <span className="mob-result-pill-label">across Google Ads and Meta Ads</span>
          </div>
          <div className="mob-result-pill">
            <span className="mob-result-pill-num">The account became easier to scale</span>
            <span className="mob-result-pill-label">because decisions were based on cleaner performance data</span>
          </div>
        </div>
        <p className="mob-scroll-hint" style={{marginBottom:24}}>
          <svg viewBox="0 0 16 16" width="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4,6 8,10 12,6"/></svg>
          Swipe to see all results
        </p>

        {/* Content */}
        <p className="mob-body">
Conor Bidet had paid campaigns running across Meta and Google, but the account needed better clarity before it could scale confidently. The reported numbers looked workable, but the deeper issue was attribution confusion, inflated retargeting performance, and unclear budget allocation between campaigns that were creating demand and campaigns that were only collecting credit at the end.
</p>
<Link href="/case-studies" className="mob-btn-teal">Read the Case Study <ArrowRight cls="w-3.5 h-3.5"/></Link>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   NEW STRATEGY SECTION
══════════════════════════════════════════════════════════════════ */
function NewStrategySection() {
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-24" style={{background:"#f7f8fc"}}>
        <div className="pm-inner">
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div className="relative flex items-center justify-center" style={{minHeight:420}}>
              <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#e0f7f5,#c6f0ea)",borderRadius:"40% 60% 60% 40% / 40% 40% 60% 60%"}}/>
              <div className="relative overflow-hidden shadow-2xl" style={{width:"78%",height:380,borderRadius:"30% 70% 70% 30% / 30% 30% 70% 70%"}}>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" alt="Paid media strategy" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute top-10 right-4 flex items-center justify-center text-white text-3xl font-black rounded-2xl shadow-xl" style={{width:110,height:110,background:"#2ec4b6",borderRadius:"18px 18px 18px 0",fontFamily:"'Poppins',sans-serif",transform:"rotate(-5deg)"}}>ADS</div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-5 leading-tight" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>
              Is It Time for a New Performance Marketing Strategy?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
Many ad accounts do not fail suddenly. They slowly become harder to scale. The dashboard still shows conversions, but lead quality drops, cost per acquisition rises, ROAS feels unstable, and every new budget increase starts feeling risky.
</p>
              <p className="font-bold mb-4" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>Here are common signs your paid campaigns need a deeper performance review:</p>
              <ul className="space-y-3">
                {CHALLENGES.map(c=>(
                  <li key={c} className="flex items-center gap-3 text-gray-700" style={{fontFamily:"'DM Sans',sans-serif"}}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background:"#2ec4b6"}}/>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-strategy-section">
        {/* Heading */}
        <span className="mob-label">Strategy</span>
        <h2 className="mob-h2">Is It Time for a New Paid Media Strategy?</h2>

        {/* Image */}
        <div className="mob-img">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" alt="Paid media strategy"/>
          <div className="mob-ads-badge" style={{position:"absolute",top:14,right:14,margin:0}}>ADS</div>
        </div>

        {/* Content */}
        <p className="mob-body">
          Sticking to a one-size-fits-all approach in paid search marketing can cause your campaigns to lose their edge over time and produce lackluster results.
        </p>
        <p style={{fontSize:13,fontWeight:700,color:"#2ec4b6",fontFamily:"'Poppins',sans-serif",marginBottom:14}}>
          Common challenges we solve:
        </p>
        <ul className="mob-challenges-list">
          {CHALLENGES.map(c => (
            <li key={c} className="mob-challenges-item">
              <span className="mob-challenges-dot"/>
              {c}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CHALLENGE SECTION (Standing Out)
══════════════════════════════════════════════════════════════════ */
function ChallengeSection() {
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-24 bg-white overflow-hidden">
        <div className="pm-inner">
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div className="pt-6">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>The Challenge</p>
              <h2 className="text-5xl font-bold mb-7 leading-tight" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>
                Standing Out in a Competitive Market
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
                One of the biggest challenges in paid search marketing — and one of the most impactful things you can do — is differentiating your business in an oversaturated market.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
                But fear not — this challenge can be overcome with a tailored strategy and the expertise of seasoned professionals.
              </p>
              <p className="text-base text-gray-600 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>
                As an experienced search engine marketing agency, we understand the complexities of campaign management, bid strategies, audience segmentation, and performance optimization.
              </p>
            </div>
            <div className="relative flex flex-col gap-5 justify-center min-h-[420px] pt-10">
              {STAT_CARDS.map((card,i)=>(
                <div key={i} className="relative rounded-2xl p-6 flex items-start gap-4 bg-white" style={{boxShadow:"0 4px 30px rgba(26,39,68,0.09)",border:"1.5px solid rgba(26,39,68,0.06)"}}>
                  <XCircle/>
                  <div>
                    <h4 className="font-bold text-base mb-2" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>{card.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-challenge-section">
        {/* Heading */}
        <span className="mob-label">The Challenge</span>
        <h2 className="mob-h2">Standing Out in a Competitive Market</h2>

        {/* Image — stat cards in horizontal scroll strip */}
        <div style={{marginBottom:28}}>
          <p style={{fontSize:11,fontWeight:700,color:"#2ec4b6",fontFamily:"'Poppins',sans-serif",letterSpacing:"0.05em",marginBottom:10,textTransform:"uppercase"}}>Key Statistics</p>
          <div className="mob-stat-scroll">
            {STAT_CARDS.map((card,i) => (
              <div key={i} className="mob-stat-card">
                <div className="mob-stat-card-head">
                  <div style={{flexShrink:0,marginTop:2}}>
                    <svg viewBox="0 0 48 48" style={{width:36,height:36}}>
                      <circle cx="24" cy="24" r="24" fill="#f15a22"/>
                      <line x1="15" y1="15" x2="33" y2="33" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                      <line x1="33" y1="15" x2="15" y2="33" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="mob-stat-card-title">{card.title}</p>
                </div>
                <p className="mob-stat-card-body">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="mob-scroll-hint">
            <svg viewBox="0 0 16 16" width="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4,6 8,10 12,6"/></svg>
            Swipe for more stats
          </p>
        </div>

        {/* Content */}
        <p className="mob-body">
          Differentiating your business in an oversaturated market is one of the biggest challenges — and one of the most impactful things you can do — in paid search marketing. With countless competitors vying for the same audience, converting leads can be daunting.
        </p>
        <p className="mob-body">
          As an experienced search engine marketing agency, we understand campaign management, bid strategies, audience segmentation, and performance optimization inside out. We navigate these challenges for you.
        </p>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SOLUTION SECTION
══════════════════════════════════════════════════════════════════ */
function SolutionSection() {
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-24" style={{background:"#f7f8fc"}}>
        <div className="pm-inner">
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div className="relative" style={{minHeight:400}}>
              <div className="absolute inset-0 rounded-3xl" style={{background:"linear-gradient(135deg,#e0f7f5,#cce8f4)",transform:"rotate(2deg)"}}/>
              <div className="relative overflow-hidden shadow-xl" style={{height:400,borderRadius:"60px 20px 60px 20px"}}>
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80" alt="Expert paid media team" className="w-full h-full object-cover"/>
                <div className="absolute inset-0" style={{background:"linear-gradient(180deg,transparent 50%,rgba(26,39,68,0.4) 100%)"}}/>
              </div>
              <div className="absolute -bottom-12 left-4 z-20 flex gap-1">
                {["#1a2744","#2ec4b6","#2ec4b6","#4dd9cc","#4dd9cc","#7ae8df"].map((c,i)=>(
                  <svg key={i} viewBox="0 0 24 24" className="w-7 h-7" fill="none"><polyline points="6,4 14,12 6,20" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>The Solution</p>
              <h2 className="text-4xl font-bold mb-7 leading-tight" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>
                Leverage Our Expertise to Skyrocket Your Paid Search Results
              </h2>
              <ul className="space-y-4">
                {SOLUTION_ITEMS.map((item,i)=>(
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{background:"#b5cc3b"}}>
                      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4,10 8,14 16,6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="font-bold text-gray-700 text-sm" style={{fontFamily:"'DM Sans',sans-serif"}}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="mt-9 inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{background:"linear-gradient(135deg,#f15a22,#ff7a42)",fontFamily:"'Poppins',sans-serif",boxShadow:"0 6px 24px rgba(241,90,34,0.30)"}}>
                Get Started Today <ArrowRight/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-solution-section">
        {/* Heading */}
        <span className="mob-label">The Solution</span>
        <h2 className="mob-h2">Leverage Our Expertise to Skyrocket Your Results</h2>

        {/* Image */}
        <div className="mob-img">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80" alt="Expert paid media team"/>
        </div>

        {/* Content */}
        <ul className="mob-solution-list">
          {SOLUTION_ITEMS.map((item,i) => (
            <li key={i} className="mob-solution-item">
              <span className="mob-solution-check">
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4,10 8,14 16,6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link href="/contact-us" className="mob-btn-orange" style={{marginTop:8}}>Get Started Today <ArrowRight cls="w-3.5 h-3.5"/></Link>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   DOMINATE SECTION
══════════════════════════════════════════════════════════════════ */
function DominateSection() {
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only relative pb-24 overflow-hidden" style={{background:"#1a2744"}}>
        <div className="absolute top-0 left-0 right-0 h-24 bg-[#f7f8fc]" style={{borderRadius:"0 0 50% 50% / 0 0 100% 100%"}}/>
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)",backgroundSize:"22px 22px"}}/>
        <div className="pm-inner relative z-10 pt-48">
          <h2 className="text-4xl font-bold text-center text-white mb-16" style={{fontFamily:"'Poppins',sans-serif"}}>
            Dominate With a Strategic Approach to Paid Search
          </h2>
          <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-10" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            {DOMINATE_CARDS.slice(0,3).map((card,i)=>{
              const Icon = ICONS[i];
              return (
                <div key={i} className="flex flex-col items-center text-center p-6">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center mb-5" style={{border:"2.5px solid #2ec4b6",background:"rgba(46,196,182,0.08)"}}>
                    <Icon />
                  </div>
                  <h4 className="font-bold text-base mb-3" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>{card.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{card.body}</p>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {DOMINATE_CARDS.slice(3).map((card,i)=>{
              const Icon = ICONS[i+3];
              return (
                <div key={i} className="flex flex-col items-center text-center p-6">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center mb-5" style={{border:"2.5px solid #2ec4b6",background:"rgba(46,196,182,0.08)"}}>
                    <Icon />
                  </div>
                  <h4 className="font-bold text-base mb-3" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>{card.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-dominate-section">
        {/* Heading */}
        <span className="mob-label" style={{background:"rgba(46,196,182,0.15)"}}>Our Approach</span>
        <h2 className="mob-h2 mob-h2-white" style={{marginBottom:28}}>Dominate With a Strategic Approach to Paid Search</h2>

        {/* Scrollable feature cards (= image equivalent here) */}
        <div className="mob-dominate-scroll" style={{marginBottom:28}}>
          {DOMINATE_CARDS.map((card,i) => {
            const Icon = ICONS[i] || ICONS[0];
            return (
              <div key={i} className="mob-dominate-card">
                <div className="mob-dominate-icon"><Icon/></div>
                <p className="mob-dominate-card-title">{card.title}</p>
                <p className="mob-dominate-card-body">{card.body}</p>
              </div>
            );
          })}
        </div>
        <p className="mob-scroll-hint" style={{color:"rgba(255,255,255,0.35)"}}>
          <svg viewBox="0 0 16 16" width="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4,6 8,10 12,6"/></svg>
          Swipe to explore all strategies
        </p>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   RESULTS SECTION + ACCORDION
══════════════════════════════════════════════════════════════════ */
function ResultsSection() {
  const [openDesktop, setOpenDesktop] = useState<number|null>(null);
  const [openMobile, setOpenMobile] = useState<number|null>(null);
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-24 bg-white">
        <div className="pm-inner">
          <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center mb-14" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div>
              <h2 className="text-4xl font-bold mb-5" style={{color:"#1a2744",fontFamily:"'Poppins',sans-serif"}}>How We Help You Get Results</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>
                Based on your unique needs, we will create a plan to help you boost your paid search marketing results through a customized strategy.
                Based on your unique needs, we will create a plan to help you boost your paid search marketing through a customized strategy.
                Based on your unique needs, we will create a plan to help you boost paid search marketing results through a customized strategy.
              </p>
              <p className="font-bold text-gray-800 mb-2" style={{fontFamily:"'Poppins',sans-serif"}}>The following deliverables are common components of a paid search marketing strategy:</p>
            </div>
            <div className="relative" style={{minHeight:300}}>
              <div className="overflow-hidden shadow-xl" style={{height:300,borderRadius:"20px 60px 20px 60px"}}>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80" alt="SEO Performance review" className="w-full h-full object-cover"/>
              </div>
              
            </div>
          </div>
          <div className="flex justify-center">
            <div className="space-y-3 w-full max-w-3xl">
              {DELIVERABLES.map((d,i)=>(
                <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={{border:"1.5px solid",borderColor:openDesktop===i?"#2ec4b6":"rgba(26,39,68,0.10)"}}>
                  <button className="w-full flex items-center gap-4 px-5 py-4 text-left" style={{background:openDesktop===i?"rgba(46,196,182,0.04)":"white"}} onClick={()=>setOpenDesktop(openDesktop===i?null:i)}>
                    <span className="flex-1 font-bold text-sm" style={{color:"#2ec4b6",fontFamily:"'Poppins',sans-serif"}}>{d.title}</span>
                    {openDesktop===i?<MinusIcon/>:<PlusIcon/>}
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{maxHeight:openDesktop===i?200:0}}>
                    <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-results-section">
        {/* Heading */}
        <span className="mob-label">Deliverables</span>
        <h2 className="mob-h2">How We Help You Get Results</h2>

        {/* Image */}
        <div className="mob-img">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80" alt="Results"/>
          {/* inline mini-chart overlay */}
          
        </div>

        {/* Content */}
        <p className="mob-body">
          Based on your unique needs, we create a customised plan to boost your paid search marketing results. The following are common deliverables in every strategy we build.
        </p>

        {/* Accordion */}
        <div style={{marginTop:8}}>
          {DELIVERABLES.map((d,i) => (
            <div key={i} className={`mob-accordion-item${openMobile===i?" open":""}`}>
              <button className="mob-accordion-btn" onClick={() => setOpenMobile(openMobile===i?null:i)}>
                <span className="mob-accordion-title">{d.title}</span>
                {openMobile===i ? <MinusIcon/> : <PlusIcon/>}
              </button>
              <div className="mob-accordion-body" style={{maxHeight:openMobile===i?200:0}}>
                <div className="mob-accordion-body-inner">{d.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


/* ══════════════════════════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════════════════════════ */
function FAQ() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const ref = useReveal();
  const IconChevron = ({ open }: { open: boolean }) => (
    <svg viewBox="0 0 20 20" fill="none" className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} stroke="currentColor" strokeWidth="2">
      <polyline points="4,7 10,13 16,7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-20 bg-white">
        <div ref={ref} className="pm-inner" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
            Frequently Asked <span style={{ color: "#2ec4b6" }}>Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={{ border: "1.5px solid", borderColor: openDesktop === i ? "#2ec4b6" : "rgba(26,39,68,0.1)" }}>
                <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" style={{ background: openDesktop === i ? "rgba(46,196,182,0.04)" : "white" }} onClick={() => setOpenDesktop(openDesktop === i ? null : i)}>
                  <span className="font-bold text-[#1a2744] text-sm" style={{ fontFamily: "'Poppins',sans-serif" }}>{faq.q}</span>
                  <IconChevron open={openDesktop === i} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openDesktop === i ? 200 : 0 }}>
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans',sans-serif" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-faq-section">
        <span className="mob-label">FAQ</span>
        <h2 className="mob-h2">Frequently Asked <span style={{color:"#2ec4b6"}}>Questions</span></h2>
        <div style={{marginTop:20}}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`mob-accordion-item${openMobile===i?" open":""}`}>
              <button className="mob-accordion-btn" onClick={() => setOpenMobile(openMobile===i?null:i)}>
                <span className="mob-accordion-title" style={{color:"#1a2744"}}>{faq.q}</span>
                <svg viewBox="0 0 20 20" fill="none" style={{width:18,height:18,flexShrink:0,transition:"transform 0.3s",transform:openMobile===i?"rotate(180deg)":"none"}} stroke="#2ec4b6" strokeWidth="2">
                  <polyline points="4,7 10,13 16,7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="mob-accordion-body" style={{maxHeight:openMobile===i?220:0}}>
                <div className="mob-accordion-body-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CTA BANNER
══════════════════════════════════════════════════════════════════ */
function CTABanner() {
  const ref = useReveal();
  return (
    <>
      {/* DESKTOP (untouched) */}
      <section className="desktop-only py-24 relative overflow-hidden" style={{background:"linear-gradient(135deg,#111c38,#1a2744,#1e3056)"}}>
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"radial-gradient(rgba(46,196,182,0.07) 1px,transparent 1px)",backgroundSize:"24px 24px"}}/>
        <div className="absolute pointer-events-none" style={{width:500,height:500,top:-200,right:-100,borderRadius:"50%",background:"radial-gradient(circle,rgba(46,196,182,0.12) 0%,transparent 70%)",filter:"blur(40px)"}}/>
        <div ref={ref} className="pm-inner relative z-10 text-center" style={{opacity:0,transform:"translateY(28px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{background:"rgba(46,196,182,0.15)",border:"1px solid rgba(46,196,182,0.3)"}}>
            <div className="w-2 h-2 rounded-full bg-[#2ec4b6]"/>
            <span className="text-xs font-bold tracking-widest uppercase text-[#2ec4b6]">Ready to scale your ads?</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight" style={{fontFamily:"'Poppins',sans-serif"}}>
            Let&apos;s Talk <span style={{color:"#2ec4b6"}}>Impact</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Schedule a free discovery call and learn how our paid media expertise can deliver measurable ROI for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-10 py-5 rounded-md transition-all duration-300 hover:-translate-y-1" style={{background:"linear-gradient(135deg,#f15a22,#ff7a42)",fontFamily:"'Poppins',sans-serif",boxShadow:"0 8px 30px rgba(241,90,34,0.4)"}}>
              Get a Free Quote <ArrowRight/>
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white text-sm font-bold px-10 py-5 rounded-md border transition-all duration-300 hover:bg-white/10" style={{borderColor:"rgba(255,255,255,0.25)",fontFamily:"'DM Sans',sans-serif"}}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mobile-only mob-cta-section">
        <div style={{position:"relative",zIndex:1}}>
          <div className="mob-cta-pill">
            <span style={{width:6,height:6,borderRadius:"50%",background:"#2ec4b6",display:"inline-block"}}/>
            Ready to scale your ads?
          </div>
          <h2 className="mob-cta-h2">Let&apos;s Talk <span>Impact</span></h2>
          <p className="mob-cta-body">
            Schedule a free discovery call and learn how our paid media expertise can deliver measurable ROI for your business.
          </p>
          <div className="mob-cta-btns">
            <Link href="/contact-us" className="mob-cta-btn-primary">Get a Free Quote <ArrowRight cls="w-3.5 h-3.5"/></Link>
            <Link href="/case-studies" className="mob-cta-btn-secondary">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════════════════════════ */
export default function PaidMediaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      <main style={{fontFamily:"'DM Sans',sans-serif"}}>
        <Hero/>
        <SuccessSection/>
        <NewStrategySection/>
        <ChallengeSection/>
        <SolutionSection/>
        <DominateSection/>
        <ResultsSection/>
        <FAQ />
        <CTABanner/>
      </main>
    </>
  );
}