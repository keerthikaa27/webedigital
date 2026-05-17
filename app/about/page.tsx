"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-shell/site-header";
import { SiteFooter } from "@/components/site-shell/site-footer";

export default function AboutPage() {
  const revealRefs = useRef<NodeListOf<Element> | null>(null);
  const [activeFounder, setActiveFounder] = useState<string | null>(null);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    revealRefs.current = revealEls;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));

    document.querySelectorAll(".hero .reveal").forEach((el) =>
      el.classList.add("visible")
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ─── REVEAL ANIMATION ─── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        /* ─── HERO GEOMETRIC TEAL PATTERN ─── */
        .hero-pattern::before {
          content: '';
          position: absolute;
          left: -60px;
          top: 0;
          bottom: 0;
          width: 55%;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(0,181,173,0.08) 14px, transparent 15px),
            radial-gradient(circle at 80% 30%, rgba(0,181,173,0.06) 18px, transparent 19px),
            radial-gradient(circle at 30% 60%, rgba(0,181,173,0.08) 10px, transparent 11px),
            radial-gradient(circle at 70% 80%, rgba(0,181,173,0.06) 8px, transparent 9px),
            radial-gradient(circle, rgba(0,181,173,0.04) 2px, transparent 3px),
            radial-gradient(circle, rgba(0,181,173,0.03) 1.5px, transparent 2.5px);
          background-size: auto, auto, auto, auto, 60px 60px, 40px 40px;
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat;
        }
        .hero-pattern::after {
          content: '';
          position: absolute;
          right: -60px;
          top: 0;
          bottom: 0;
          width: 55%;
          pointer-events: none;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(0,181,173,0.07) 16px, transparent 17px),
            radial-gradient(circle at 85% 70%, rgba(0,181,173,0.05) 20px, transparent 21px),
            radial-gradient(circle at 60% 40%, rgba(0,181,173,0.08) 9px, transparent 10px),
            radial-gradient(circle at 30% 80%, rgba(0,181,173,0.06) 7px, transparent 8px),
            radial-gradient(circle, rgba(0,181,173,0.04) 2px, transparent 3px),
            radial-gradient(circle, rgba(0,181,173,0.02) 1.5px, transparent 2.5px);
          background-size: auto, auto, auto, auto, 55px 55px, 35px 35px;
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat;
        }

        /* ─── STORY DOTS ─── */
        .story-dots::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .story-dots::after {
          content: '';
          position: absolute; right: 0; top: 0; bottom: 0; width: 45%;
          background: radial-gradient(ellipse at 70% 50%, rgba(0,158,151,0.4) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── DIFF IMAGE PATTERN ─── */
        .diff-bg-pattern::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='25' fill='none' stroke='%2300b5ad' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E") repeat;
          background-size: 60px 60px;
        }

        /* ─── IMPACT DOTS ─── */
        .impact-dots::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(0,181,173,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* ─── TEAM DOTS ─── */
        .team-dots::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .team-dots::after {
          content: '';
          position: absolute; right: 0; top: 0; bottom: 0; width: 50%;
          background: linear-gradient(90deg, transparent, rgba(15,55,110,0.3));
          pointer-events: none;
        }

        /* ─── FINAL CTA ─── */
        .final-cta-bg::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(0,181,173,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(26,119,201,0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ─── CHECK ICON ─── */
        .check-icon-filled::after {
          content: '✓';
          color: #fff;
          font-size: 13px;
          font-weight: 900;
        }

        .header-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          opacity: 0.6;
          pointer-events: none;
        }

        /* ─── TEAM CARD TRANSITIONS ─── */
        .team-default-content {
          position: absolute; top: 0; left: 0; right: 0;
          transition: opacity 0.45s ease, transform 0.45s ease;
          opacity: 1;
          transform: translateX(0);
        }
        .team-bio-content {
          position: absolute; top: 0; left: 0; right: 0;
          transition: opacity 0.45s ease, transform 0.45s ease;
          opacity: 0;
          transform: translateX(-28px);
          pointer-events: none;
        }
        .team-hovered .team-default-content {
          opacity: 0;
          transform: translateX(28px);
          pointer-events: none;
        }
        .team-hovered .team-bio-content {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        /* ─── FOUNDER PHOTO ─── */
        .founder-photo-wrap {
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          box-shadow: 0 24px 64px rgba(0,0,0,0.32);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .team-hovered .founder-photo-wrap {
          box-shadow: 0 32px 80px rgba(0,0,0,0.42);
          transform: translateY(-4px);
        }
        .founder-photo-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .founder-card-wrap:hover .founder-photo-wrap img {
          transform: scale(1.05);
        }

        /* ─── SOCIAL ICON BUTTONS ─── */
        .social-icon-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          transition: background 0.18s, transform 0.18s, border-color 0.18s;
        }
        .social-icon-btn:hover {
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }

        /* ════════════════════════════════════════════════
           WIDE SCREEN FIX
           All inner wrappers use max-w + auto horizontal margin
           so content never stretches past ~1200px on large monitors
        ════════════════════════════════════════════════ */
        .inner-wrap {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(20px, 4vw, 48px);
          padding-right: clamp(20px, 4vw, 48px);
          box-sizing: border-box;
        }

        /* ════════════════════════════════════════════════
           MOBILE STYLES  (max-width: 768px)
           Desktop grid/padding styles are handled via
           Tailwind classes and remain completely untouched.
        ════════════════════════════════════════════════ */

        /* ── Mobile: Hero ── */
        @media (max-width: 768px) {
          .hero-pattern::before,
          .hero-pattern::after { display: none; }

          .mob-hero-wrap {
            padding: 80px 24px 64px;
            text-align: center;
          }
          .mob-hero-eyebrow {
            font-size: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #00b5ad;
            font-weight: 700;
            margin-bottom: 12px;
            display: block;
          }
          .mob-hero-h1 {
            font-size: clamp(32px, 8vw, 48px);
            font-weight: 900;
            color: #1a2447;
            line-height: 1.08;
            letter-spacing: -1.5px;
            margin-bottom: 20px;
            white-space: normal !important;
            margin-left: 0 !important;
          }
          .mob-hero-desc {
            font-size: 15px;
            line-height: 1.7;
            color: #555;
            margin-bottom: 32px;
            max-width: 100%;
          }
          .mob-hero-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 2px solid #1a2447;
            color: #1a2447;
            padding: 14px 28px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          /* Mobile teal accent bar under hero */
          .mob-hero-bar {
            display: flex;
            justify-content: center;
            gap: 24px;
            padding: 18px 24px;
            background: #f7fffe;
            border-top: 1px solid rgba(0,181,173,0.15);
            border-bottom: 1px solid rgba(0,181,173,0.15);
          }
          .mob-hero-stat {
            text-align: center;
          }
          .mob-hero-stat-num {
            display: block;
            font-size: 14px;
            font-weight: 900;
            color: #00b5ad;
            line-height: 1;
          }
          .mob-hero-stat-label {
            display: block;
            font-size: 10px;
            font-weight: 700;
            color: #888;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            margin-top: 3px;
          }
        }

        /* ── Mobile: Our Story ── */
        @media (max-width: 768px) {
          .story-dots::after { display: none; }

          .mob-story-wrap {
            padding: 64px 24px 72px;
            text-align: center;
          }
          .mob-story-h2 {
            font-size: clamp(34px, 9vw, 50px);
            font-weight: 900;
            color: #fff;
            line-height: 1.05;
            letter-spacing: -1px;
            margin-bottom: 24px;
          }
          .mob-story-text {
            font-size: 15px;
            line-height: 1.78;
            color: rgba(255,255,255,0.88);
            margin-bottom: 18px;
            text-align: left;
          }
          .mob-story-divider {
            width: 36px;
            height: 3px;
            background: rgba(255,255,255,0.4);
            margin: 28px auto;
          }
          .mob-story-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            margin-top: 28px;
          }
          .mob-story-badge {
            background: rgba(255,255,255,0.15);
            border: 1px solid rgba(255,255,255,0.25);
            color: #fff;
            border-radius: 6px;
            padding: 6px 14px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          /* Story image: full-width cinematic strip */
          .mob-story-img-strip {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
          }
          .mob-story-img-strip img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .mob-story-img-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,181,173,0.3) 0%, rgba(0,163,156,0.6) 100%);
          }
          .mob-story-img-label {
            position: absolute;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.3);
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 7px 18px;
            border-radius: 999px;
            white-space: nowrap;
          }
        }

        /* ── Mobile: Difference ── */
        @media (max-width: 768px) {
          .mob-diff-wrap {
            padding: 64px 24px 72px;
          }
          .mob-diff-img {
            width: 100%;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 36px;
            position: relative;
          }
          .mob-diff-img img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            display: block;
          }
          .mob-diff-h2 {
            font-size: clamp(28px, 7vw, 40px);
            font-weight: 900;
            color: #1a2447;
            line-height: 1.1;
            letter-spacing: -0.8px;
            margin-bottom: 20px;
          }
          .mob-diff-text {
            font-size: 15px;
            line-height: 1.75;
            color: #444;
            margin-bottom: 16px;
          }
        }

        /* ── Mobile: Impact / How ── */
        @media (max-width: 768px) {
          .mob-impact-wrap {
            padding: 64px 24px 72px;
          }
          .mob-impact-col {
            margin-bottom: 48px;
          }
          .mob-impact-col:last-child {
            margin-bottom: 0;
          }
          .mob-impact-h2 {
            font-size: clamp(26px, 7vw, 38px);
            font-weight: 900;
            color: #1a2447;
            line-height: 1.1;
            letter-spacing: -0.5px;
            margin-bottom: 10px;
          }
          .mob-impact-intro {
            font-size: 14px;
            line-height: 1.7;
            color: #555;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .mob-impact-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .mob-impact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
            color: #1a2447;
            line-height: 1.4;
          }
          .mob-impact-check-empty {
            width: 20px; height: 20px;
            min-width: 20px;
            border: 2px solid #c4cdd8;
            border-radius: 4px;
            margin-top: 1px;
          }
          .mob-impact-check-filled {
            width: 20px; height: 20px;
            min-width: 20px;
            background: #00b5ad;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;
            font-size: 11px;
            color: #fff;
            font-weight: 900;
          }
          .mob-divider-line {
            width: 100%;
            height: 1px;
            background: #e2e8f0;
            margin: 48px 0;
          }
        }

        /* ── Mobile: Team ── */
        @media (max-width: 768px) {
          .team-dots::after { display: none; }

          .mob-team-wrap {
            padding: 64px 24px 72px;
          }
          /* Stacked card layout for founder */
          .mob-founder-card {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 36px;
          }
          .mob-founder-photo {
            width: 100%;
            height: 280px;
            object-fit: cover;
            object-position: top center;
            display: block;
          }
          .mob-founder-info {
            padding: 20px 20px 24px;
          }
          .mob-founder-name {
            font-size: 20px;
            font-weight: 900;
            color: #fff;
            margin-bottom: 2px;
          }
          .mob-founder-role {
            font-size: 11px;
            font-weight: 700;
            color: rgba(255,255,255,0.6);
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .mob-founder-bio {
            font-size: 14px;
            line-height: 1.7;
            color: rgba(255,255,255,0.85);
          }
          .mob-team-headline {
            font-size: clamp(28px, 7vw, 40px);
            font-weight: 900;
            color: #fff;
            line-height: 1.1;
            letter-spacing: -0.5px;
            margin-bottom: 14px;
          }
          .mob-team-desc {
            font-size: 15px;
            line-height: 1.75;
            color: rgba(255,255,255,0.88);
            margin-bottom: 28px;
          }
          .mob-team-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #141c38;
            color: #fff;
            border-radius: 999px;
            padding: 14px 26px;
            font-size: 14px;
            font-weight: 800;
            text-decoration: none;
            letter-spacing: 0.2px;
          }
          .mob-social-row {
            display: flex;
            gap: 8px;
            margin-top: 16px;
          }
        }

        /* ── Mobile: Innovative / Results ── */
        @media (max-width: 768px) {
          .mob-results-wrap {
            padding: 64px 24px 72px;
          }
          .mob-results-img {
            width: 100%;
            margin-bottom: 32px;
          }
          .mob-results-img img {
            width: 100%;
            height: auto;
            display: block;
          }
          .mob-results-h2 {
            font-size: clamp(26px, 7vw, 38px);
            font-weight: 900;
            color: #1a2447;
            line-height: 1.1;
            letter-spacing: -0.5px;
            margin-bottom: 16px;
          }
          .mob-results-divider {
            width: 100%;
            height: 2px;
            background: #e2e8f0;
            margin-bottom: 16px;
          }
          .mob-results-text {
            font-size: 15px;
            line-height: 1.75;
            color: #444;
          }
        }

        /* ── Mobile: Final CTA ── */
        @media (max-width: 768px) {
          .mob-cta-wrap {
            padding: 80px 24px 88px;
            text-align: center;
          }
          .mob-cta-h2 {
            font-size: clamp(36px, 9vw, 56px);
            font-weight: 900;
            color: #fff;
            line-height: 1.05;
            letter-spacing: -1px;
            margin-bottom: 18px;
          }
          .mob-cta-sub {
            font-size: 16px;
            line-height: 1.65;
            color: rgba(255,255,255,0.72);
            margin-bottom: 36px;
          }
          .mob-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #6db33a, #7ec242);
            color: #fff;
            border-radius: 999px;
            padding: 18px 36px;
            font-size: 16px;
            font-weight: 800;
            text-decoration: none;
            letter-spacing: 0.2px;
            box-shadow: 0 8px 30px rgba(126,194,66,0.4);
          }
        }

        /* ── Utility: Hide on mobile ── */
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }

        /* ── Utility: Hide on desktop ── */
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP HERO — untouched */}
      <section
        className="desktop-only hero hero-pattern relative min-h-[520px] flex items-center justify-center text-center px-6 py-[100px] overflow-hidden bg-white"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="inner-wrap relative -inset-2 z-10 max-w-[900px] mx-auto">
          <p className="reveal text-[22px] font-normal text-[#3d3d3d] mb-[6px] tracking-[0.2px]">
            About WebeDigital

          </p>
          <h1 className="reveal reveal-delay-1 font-black text-[#1a2447] leading-[1.05] mb-7 tracking-[-1.5px] text-[clamp(32px,5.5vw,72px)] whitespace-nowrap">
            Practical Digital Marketing <br></br>Built Around Real Growth

          </h1>
          <p className="reveal reveal-delay-2 text-[17px] leading-[1.7] text-[#444] max-w-[760px] mx-auto mb-8">
           WebeDigital helps businesses turn scattered digital efforts into clear, measurable growth. We work across SEO, paid ads, social media, websites, content, and conversion strategy, but the real focus is simple: helping your brand get found, trusted, and chosen by the right audience.

          </p>
          <Link
            href="/case-studies"
            className="reveal reveal-delay-3 inline-flex items-center gap-2 border-2 border-[#48484a] text-[#1a2447] px-[34px] py-4 rounded-full text-base font-bold no-underline tracking-[0.2px] transition-all duration-700 ease-in-out hover:bg-[#00b5ad] hover:border-[#00b5ad] hover:text-[#fafafa]"
          >
            See How We Work
{" "}
            <span className="text-lg">↗</span>
          </Link>
        </div>
      </section>

      {/* MOBILE HERO */}
      <section
        className="mobile-only hero-pattern relative overflow-hidden bg-white"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="mob-hero-wrap">
          <span className="mob-hero-eyebrow reveal">About WebeDigital</span>
          <h1 className="mob-hero-h1 reveal reveal-delay-1">
            Practical Digital Marketing <br></br>Built Around Real Growth
          </h1>
          <p className="mob-hero-desc reveal reveal-delay-2">
            WebeDigital helps businesses turn scattered digital efforts into clear, measurable growth. We work across SEO, paid ads, social media, websites, content, and conversion strategy, but the real focus is simple: helping your brand get found, trusted, and chosen by the right audience.
          </p>
          <Link href="/case-studies" className="mob-hero-btn reveal reveal-delay-3">
            See How We Work <span>↗</span>
          </Link>
        </div>
        
      </section>

      {/* ═══════════════════════════════════════════════
          OUR STORY
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP STORY — untouched */}
      <section
        className="desktop-only story-dots relative py-[120px] overflow-hidden"
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          background: `
            radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(26,31,94,0.28), transparent 35%),
            linear-gradient(135deg, #00b5ad 0%, #00a39c 38%, #0f8f98 68%, #1a1f5e 100%)
          `,
        }}
      >
        <div
          className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full opacity-20 blur-[80px]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #1a1f5e 0%, transparent 70%)" }}
        />
        <div className="inner-wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-[80px] items-center">
            <div className="max-w-[560px]">
              <h2 className="reveal font-black text-white leading-[1.05] mb-9 tracking-[-1px] text-[clamp(38px,5vw,56px)]">
                Our Story
              </h2>
              <p className="reveal reveal-delay-1 text-white/90 text-base leading-[1.8] mb-5">
WebeDigital was built for businesses that need more than random posts, reports, campaigns, and website changes. We saw that many brands were investing in digital marketing, but their efforts were not connected to a clear growth direction.
              </p>
              <p className="reveal reveal-delay-2 text-white/90 text-base leading-[1.8] mb-5">
So we created an execution-first digital marketing agency where strategy, creativity, website experience, search visibility, paid campaigns, and performance tracking work together with one practical goal: better business outcomes.
              </p>
              <p className="reveal reveal-delay-3 text-white/90 text-base leading-[1.8] mb-5">
Today, we help startups, ecommerce brands, service businesses, and growth-focused companies build stronger digital presence through work that is planned properly, executed consistently, and improved with real data.
              </p>
              <div className="reveal w-10 h-[3px] bg-white/50 mb-8"></div>
              <div className="reveal flex gap-3 flex-wrap mt-10 items-center">
                {["SEO-Led Strategy", "Performance Marketing", "Website Growth"].map((badge) => (
                  <span
                    key={badge}
                    className="bg-white/15 border border-white/25 text-white rounded px-[14px] py-[6px] text-xs font-bold tracking-[0.5px]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative reveal">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <img
                  src="/aboutus_image.png"
                  alt="Digital marketing team working"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STORY */}
      <section
        className="mobile-only story-dots relative overflow-hidden"
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          background: `
            radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 30%),
            radial-gradient(circle at bottom right, rgba(26,31,94,0.28), transparent 35%),
            linear-gradient(135deg, #00b5ad 0%, #00a39c 38%, #0f8f98 68%, #1a1f5e 100%)
          `,
        }}
      >
        {/* Cinematic full-width image strip at top */}
        <div className="mob-story-img-strip reveal">
          <img src="/aboutus_image.png" alt="WebeDigital team" />
          <div className="mob-story-img-overlay" />
        </div>

        <div className="mob-story-wrap">
          <h2 className="mob-story-h2 reveal">Our Story</h2>
          <p className="mob-story-text reveal reveal-delay-1">
WebeDigital was built for businesses that need more than random posts, reports, campaigns, and website changes. We saw that many brands were investing in digital marketing, but their efforts were not connected to a clear growth direction.
          </p>
          <p className="mob-story-text reveal reveal-delay-2">
So we created an execution-first digital marketing agency where strategy, creativity, website experience, search visibility, paid campaigns, and performance tracking work together with one practical goal: better business outcomes.
          </p>
          <p className="mob-story-text reveal reveal-delay-3">
Today, we help startups, ecommerce brands, service businesses, and growth-focused companies build stronger digital presence through work that is planned properly, executed consistently, and improved with real data.
          </p>
          <div className="mob-story-divider" />
          <div className="mob-story-badges reveal">
            {["SEO-Led Strategy", "Performance Marketing", "Website Growth"].map((badge) => (
              <span key={badge} className="mob-story-badge">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DIFFERENCE
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP DIFFERENCE — untouched */}
      <section
        className="desktop-only bg-white px-12 py-[120px]"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="inner-wrap mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="reveal relative">
            <div className="diff-bg-pattern relative w-full rounded-2xl h-[480px] bg-gradient-to-br from-[#e8f4f3] to-[#d1ece9] flex items-center justify-center shadow-[0_30px_80px_rgba(0,0,0,0.1)] overflow-hidden">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="45" r="22" fill="#00b5ad" opacity="0.3" />
                <circle cx="35" cy="80" r="16" fill="#00b5ad" opacity="0.2" />
                <circle cx="85" cy="80" r="16" fill="#1a77c9" opacity="0.2" />
                <path d="M20 100 Q60 70 100 100" stroke="#00b5ad" strokeWidth="2" fill="none" opacity="0.4" />
              </svg>
              <img
                src="/aboutus_image2.png"
                alt="Digital marketing team working"
                className="w-full h-[420px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-24 -right-16 bg-white rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.08)] w-[280px] z-10 border border-[#f3f3f3]">
  {/* Header */}
  <div className="mb-4">
    <p className="text-[11px] font-bold tracking-[1.2px] text-[#00b7b0] uppercase">
      Trusted Approach
    </p>
   
  </div>

  {/* Labels */}
  <div className="flex flex-col gap-3">
    {[
      {
        title: "Strategy First",
        desc: "Every campaign starts with business clarity.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l6-3m-6 3V2m6 15l5.447-2.724A1 1 0 0021 13.382V2.618a1 1 0 00-.553-.894L15 0m0 17V0"
            />
          </svg>
        ),
      },
      {
        title: "Execution Driven",
        desc: "Fast-moving implementation with precision.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        title: "Measured Growth",
        desc: "Decisions backed by performance data.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19V6m0 0L7 10m4-4l4 4"
            />
          </svg>
        ),
      },
    ].map((item) => (
      <div
        key={item.title}
        className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fafc] hover:bg-[#f1f5f9] transition-all duration-300"
      >
        <div className="min-w-[42px] h-[42px] rounded-xl bg-[#0f2b5b] text-white flex items-center justify-center shadow-md">
          {item.icon}
        </div>

        <div>
          <h5 className="text-[14px] font-bold text-[#0f2b5b] leading-none mb-1">
            {item.title}
          </h5>
          <p className="text-[12px] leading-[18px] text-[#667085] font-medium">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
          </div>
          <div className="reveal reveal-delay-1">
            <h2 className="font-black text-[#1a2447] leading-[1.1] mb-7 tracking-[-0.8px] text-[clamp(30px,4vw,44px)]">
              The WebeDigital Difference
            </h2>
            <p className="text-base leading-[1.75] text-[#444] mb-[22px]">
              Our difference is not that we offer many digital marketing services. The real difference is how we connect them. Before we suggest SEO, ads, social media, content, or website changes, we first understand your business model, your audience, your offer, and the exact point where growth is getting blocked.

            </p>
            <p className="text-base leading-[1.75] text-[#444] mb-[22px]">
             This helps us avoid surface-level marketing. Every campaign, page, post, keyword, and creative decision is built around a clear role in the customer journey, whether that role is discovery, trust, lead generation, sales, or retention.

            </p>
          </div>
        </div>
      </section>

      {/* MOBILE DIFFERENCE */}
      <section
        className="mobile-only bg-white"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="mob-diff-wrap">
          {/* Image first on mobile */}
          <div className="mob-diff-img reveal">
            <img src="/aboutus_image2.png" alt="WebeDigital difference" />
          </div>

          <h2 className="mob-diff-h2 reveal reveal-delay-1">
            The WebeDigital Difference
          </h2>
          <p className="mob-diff-text reveal reveal-delay-1">
           Our difference is not that we offer many digital marketing services. The real difference is how we connect them. Before we suggest SEO, ads, social media, content, or website changes, we first understand your business model, your audience, your offer, and the exact point where growth is getting blocked.

          </p>
          <p className="mob-diff-text reveal reveal-delay-2">
            This helps us avoid surface-level marketing. Every campaign, page, post, keyword, and creative decision is built around a clear role in the customer journey, whether that role is discovery, trust, lead generation, sales, or retention.

          </p>
          {/* Teal stat strip — innovative mobile accent */}
        <div className="mob-hero-bar reveal">
          <div className="mob-hero-stat">
            <span className="mob-hero-stat-num">Strategy First</span>
          </div>
          <div className="mob-hero-stat">
            <span className="mob-hero-stat-num">Execution Driven
</span>
          </div>
          <div className="mob-hero-stat">
            <span className="mob-hero-stat-num">Measured Growth</span>
          </div>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          IMPACT / HOW
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP IMPACT — untouched */}
      <section
        className="desktop-only impact-dots relative bg-white px-16 py-24 overflow-hidden"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="inner-wrap mx-auto grid grid-cols-[1fr_1px_1fr] gap-0 relative z-10">
          <div className="pr-6">
            <h2 className="reveal font-black text-[#1a2447] leading-[1.1] mb-4 tracking-[-0.5px] text-[clamp(28px,3.5vw,40px)]">
              The Impact
              <br />
              Our Clients Want
            </h2>
            <p className="reveal reveal-delay-1 text-[15px] leading-[1.7] text-[#444] mb-8 font-semibold">
              Most clients do not come to us just because they want “marketing.” They come because they want their digital presence to work harder for the business.

            </p>
            <ul className="flex flex-col gap-4 list-none">
              {[
                { text: "Be found by the right audience", delay: "reveal-delay-1" },
                { text: "Build trust before the first call or purchase", delay: "reveal-delay-1" },
                { text: "Turn website traffic into qualified leads or sales", delay: "reveal-delay-2" },
                { text: "Make content, ads, SEO, and website pages support each other", delay: "reveal-delay-2" },
                { text: "Create a digital system that can be tracked, improved, and scaled", delay: "reveal-delay-3" },
              ].map((item) => (
                <li
                  key={item.text}
                  className={`reveal ${item.delay} flex items-start gap-[14px] text-[15px] text-[#1a2447] font-semibold leading-[1.4]`}
                >
                  <span className="w-[22px] h-[22px] min-w-[22px] border-2 border-[#c4cdd8] rounded mt-[1px] shrink-0 inline-block"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#dde3ec] mx-12"></div>
          <div className="pl-12">
            <h2 className="reveal font-black text-[#1a2447] leading-[1.1] mb-4 tracking-[-0.5px] text-[clamp(28px,3.5vw,40px)]">
              How We
              <br />
              Achieve Results
            </h2>
            <p className="reveal reveal-delay-1 text-[15px] leading-[1.7] text-[#444] mb-8 font-semibold">
             We do not start with assumptions. We study what already exists, find the weak points, and then build a practical execution plan around the channels that matter most.

            </p>
            <ul className="flex flex-col gap-4 list-none">
              {[
                { text: "Audit your website, search presence, ads, and content", delay: "reveal-delay-1" },
                { text: "Fix SEO, website structure, and conversion gaps", delay: "reveal-delay-1" },
                { text: "Build content around buyer intent and real search demand", delay: "reveal-delay-2" },
                { text: "Launch and improve paid campaigns with clearer tracking", delay: "reveal-delay-2" },
                { text: "Optimize pages, CTAs, forms, and user journeys", delay: "reveal-delay-2" },
                { text: "Review performance and keep improving what moves results", delay: "reveal-delay-3" },

              ].map((item) => (
                <li
                  key={item.text}
                  className={`reveal ${item.delay} flex items-start gap-[14px] text-[15px] text-[#1a2447] font-semibold leading-[1.4]`}
                >
                  <span className="check-icon-filled w-[22px] h-[22px] min-w-[22px] bg-[#00b5ad] rounded flex items-center justify-center mt-[1px] shrink-0"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MOBILE IMPACT */}
      <section
        className="mobile-only impact-dots relative bg-white overflow-hidden"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="mob-impact-wrap relative z-10">
          {/* Impact column */}
          <div className="mob-impact-col">
            <h2 className="mob-impact-h2 reveal">
              The Impact Our Clients Want
            </h2>
            <p className="mob-impact-intro reveal reveal-delay-1">
             Most clients do not come to us just because they want “marketing.” They come because they want their digital presence to work harder for the business.

            </p>
            <ul className="mob-impact-list">
              {[
                "Be found by the right audience",
                "Build trust before the first call or purchase",
                " Turn website traffic into qualified leads or sales",
                "Make content, ads, SEO, and website pages support each other",
                "Create a digital system that can be tracked, improved, and scaled",
              ].map((item, i) => (
                <li key={item} className={`mob-impact-item reveal reveal-delay-${Math.min(i + 1, 3)}`}>
                  <span className="mob-impact-check-empty" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mob-divider-line" />

          {/* How column */}
          <div className="mob-impact-col">
            <h2 className="mob-impact-h2 reveal">
              How We Achieve Results
            </h2>
            <p className="mob-impact-intro reveal reveal-delay-1">
We do not start with assumptions. We study what already exists, find the weak points, and then build a practical execution plan around the channels that matter most.
            </p>
            <ul className="mob-impact-list">
              {[
                "Audit your website, search presence, ads, and content",
                "Fix SEO, website structure, and conversion gaps",
                "Build content around buyer intent and real search demand",
                "Launch and improve paid campaigns with clearer tracking",
                "Optimize pages, CTAs, forms, and user journeys",
                "Review performance and keep improving what moves results",
              ].map((item, i) => (
                <li key={item} className={`mob-impact-item reveal reveal-delay-${Math.min(i + 1, 3)}`}>
                  <span className="mob-impact-check-filled">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TEAM
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP TEAM — untouched */}
      <section
        className="desktop-only team-dots relative bg-[#00b5ad] px-20 py-24 overflow-hidden"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <style>{`
          .team-dots::before {
            content: '';
            position: absolute; inset: 0;
            background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px);
            background-size: 24px 24px;
            pointer-events: none;
          }
          .team-dots::after {
            content: '';
            position: absolute; right: 0; top: 0; bottom: 0; width: 50%;
            background: linear-gradient(90deg, transparent, rgba(15,55,110,0.3));
            pointer-events: none;
          }
        `}</style>
        <div
          className={`inner-wrap mx-auto grid grid-cols-2 gap-[80px] items-center relative z-10 ${
            activeFounder === "john" ? "team-hovered" : ""
          }`}
          onMouseEnter={() => setActiveFounder("john")}
          onMouseLeave={() => setActiveFounder(null)}
        >
          <div className="relative min-h-[420px]">
            <div className="team-default-content">
              <h2 className="font-black text-white leading-[1.1] mb-5 tracking-[-0.5px] text-[clamp(26px,4vw,40px)]">
                Meet the Founder 

                <br />
                Behind WebeDigital
              </h2>
              <p className="text-base leading-[1.75] text-white/90 mb-8">
                WebeDigital is founder-led because growth needs close attention, not just task management. From strategy to execution, our work is guided by practical experience across SEO, performance marketing, website development, content systems, social media, and conversion-focused digital growth.

              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#141c38] text-white rounded-full px-7 py-[14px] text-[15px] font-extrabold no-underline transition-all duration-200 hover:bg-[#fbfbfc] hover:text-[#141c38] hover:-translate-y-0.5 tracking-[0.2px]"
              >
                Talk to Our Founder <span>↗</span>
              </Link>
            </div>
            <div className="team-bio-content">
              <h2 className="font-black text-white leading-[1.1] mb-[6px] tracking-[-0.5px] text-[clamp(26px,4vw,40px)]">
                Vaibhav Maheshwari
              </h2>
              <p className="text-[11px] font-bold text-white/60 tracking-[1px] uppercase mb-5">
                Founder & Growth Strategist

              </p>
              <p className="text-base leading-[1.75] text-white/90 mb-7">
                Vaibhav Maheshwari leads WebeDigital with a hands-on approach to digital growth. His work focuses on helping brands improve search visibility, strengthen website experience, run better campaigns, create content that supports buyer decisions, and build marketing systems that are easier to measure and improve.

              </p>
              <div className="h-[1px] bg-white/20 mb-6" />
              <div className="flex gap-[10px] items-center">
                <a className="social-icon-btn" href="https://www.linkedin.com/in/collasphere/" target="_blank" rel="noreferrer">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" fillOpacity="0.9"/>
                    <path d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-3.5a2 2 0 014 0v3.5M11.5 10.5v6" stroke="#0077B5" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </a>
                <a className="social-icon-btn" href="https://twitter.com" target="_blank" rel="noreferrer">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#fff" fillOpacity="0.9"/>
                    <path d="M5 5l5.3 6.2L5 19h2l4-4.8L15.2 19H19l-5.6-6.6L18.8 5h-2l-3.6 4.3L9.2 5H5z" fill="#000"/>
                  </svg>
                </a>
                <a className="social-icon-btn" href="mailto:maheshwari01vaibhav@gmail.com">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#fff" fillOpacity="0.9"/>
                    <path d="M4 8l8 5 8-5M4 8h16v10H4V8z" stroke="#00b5ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="founder-card-wrap w-[400px]">
              <div className="founder-photo-wrap">
                <img src="/vaibhav.png" alt="Vaibhav Maheshwari" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-base font-bold text-white/90">Vaibhav Maheshwari</p>
                <span className="text-xs text-white/60">Founder &amp; CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE TEAM */}
      <section
        className="mobile-only team-dots relative bg-[#00b5ad] overflow-hidden"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="mob-team-wrap relative z-10">
          {/* Founder card — image + bio in one card */}
          

          {/* Headline and CTA below */}
          <h2 className="mob-team-headline reveal">
            Meet the Founder Behind WebeDigital
          </h2>
          <p className="mob-team-desc reveal reveal-delay-1">
WebeDigital is founder-led because growth needs close attention, not just task management. From strategy to execution, our work is guided by practical experience across SEO, performance marketing, website development, content systems, social media, and conversion-focused digital growth.
          </p>
          <div className="mob-founder-card reveal">
            <img
              src="/vaibhav.png"
              alt="Vaibhav Maheshwari"
              className="mob-founder-photo"
            />
            <div className="mob-founder-info">
              <p className="mob-founder-name">Vaibhav Maheshwari</p>
              <p className="mob-founder-role">Founder &amp; CEO</p>
              <p className="mob-founder-bio">
Vaibhav Maheshwari leads WebeDigital with a hands-on approach to digital growth. His work focuses on helping brands improve search visibility, strengthen website experience, run better campaigns, create content that supports buyer decisions, and build marketing systems that are easier to measure and improve.
              </p>
              {/* Social icons inside card */}
              <div className="mob-social-row">
                <a className="social-icon-btn" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#fff" fillOpacity="0.9"/>
                    <path d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-3.5a2 2 0 014 0v3.5M11.5 10.5v6" stroke="#0077B5" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </a>
                <a className="social-icon-btn" href="https://twitter.com" target="_blank" rel="noreferrer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#fff" fillOpacity="0.9"/>
                    <path d="M5 5l5.3 6.2L5 19h2l4-4.8L15.2 19H19l-5.6-6.6L18.8 5h-2l-3.6 4.3L9.2 5H5z" fill="#000"/>
                  </svg>
                </a>
                <a className="social-icon-btn" href="mailto:john@interodigital.com">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#fff" fillOpacity="0.9"/>
                    <path d="M4 8l8 5 8-5M4 8h16v10H4V8z" stroke="#00b5ad" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <Link href="#" className="mob-team-cta reveal reveal-delay-2">
            Talk to Our Founder <span>↗</span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INNOVATIVE / RESULTS
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP RESULTS — untouched */}
      <section
        className="desktop-only bg-[#ffffff] px-12 py-24"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="inner-wrap mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="reveal relative">
            <div className="relative">
              <img
                src="/aboutus_image3.png"
                alt="Digital marketing team working"
                className="w-full h-full scale-90"
              />
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <h2 className="font-black text-[#1a2447] leading-[1.1] tracking-[-0.5px] text-[clamp(28px,4vw,42px)]">
              Practical Strategy,
              <br />
              Real Execution
            </h2>
            <div className="w-full h-[2px] bg-[#e2e8f0] my-5"></div>
            <p className="text-base leading-[1.75] text-[#444]">
             Good ideas only matter when they are executed properly. At WebeDigital, we turn strategy into action through website improvements, SEO fixes, paid campaign optimization, content planning, social media execution, and conversion-focused updates that are reviewed with real performance data.

            </p>
          </div>
        </div>
      </section>

      {/* MOBILE RESULTS */}
      <section
        className="mobile-only bg-white"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="mob-results-wrap">
          {/* Image first on mobile */}
          <div className="mob-results-img reveal">
            <img src="/aboutus_image3.png" alt="Innovative strategies" />
          </div>
          <h2 className="mob-results-h2 reveal reveal-delay-1">
            Practical Strategy, Real Execution
          </h2>
          <div className="mob-results-divider" />
          <p className="mob-results-text reveal reveal-delay-2">
Good ideas only matter when they are executed properly. At WebeDigital, we turn strategy into action through website improvements, SEO fixes, paid campaign optimization, content planning, social media execution, and conversion-focused updates that are reviewed with real performance data.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════ */}

      {/* DESKTOP CTA — untouched */}
      <section
        className="desktop-only final-cta-bg relative bg-[#141c38] text-center px-12 py-[120px] overflow-hidden"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="inner-wrap relative z-10 mx-auto">
          <h2 className="reveal font-black text-white leading-[1.05] mb-6 tracking-[-1px] text-[clamp(38px,6vw,68px)]">
            Let’s Build Growth You Can{" "}
            <span className="text-[#7ec242]">Actually Track</span>
          </h2>
          <p className="reveal reveal-delay-1 text-lg text-white/75 mb-12 leading-[1.6]">
            Ready to improve your website, visibility, campaigns, content, and conversions 

            <br />
             with a clearer digital growth plan? Let’s find what is blocking performance and 
             <br/> what should be improved first.
          </p>
          <Link
            href="/contact-us"
            className="reveal reveal-delay-2 inline-flex items-center gap-[10px] bg-gradient-to-br from-[#6db33a] to-[#7ec242] text-white rounded-full px-10 py-[18px] text-[17px] font-extrabold no-underline shadow-[0_6px_28px_rgba(126,194,66,0.4),0_2px_10px_rgba(0,0,0,0.2)] transition-all duration-[250ms] ease-[ease] tracking-[0.2px] hover:from-[#5ea32e] hover:to-[#6db33a] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(126,194,66,0.5),0_4px_16px_rgba(0,0,0,0.25)]"
          >
            Talk to Our Team <span className="text-xl">↗</span>
          </Link>
        </div>
      </section>

      {/* MOBILE CTA */}
      <section
        className="mobile-only final-cta-bg relative bg-[#141c38] overflow-hidden"
        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
      >
        <div className="mob-cta-wrap relative z-10">
          <h2 className="mob-cta-h2 reveal">
            Let’s Build Growth You Can{" "}
            <span style={{ color: "#7ec242" }}>Actually Track</span>
          </h2>
          <p className="mob-cta-sub reveal reveal-delay-1">
Ready to improve your website, visibility, campaigns, content, and conversions with a clearer digital growth plan? Let’s find what is blocking performance and what should be improved first.
          </p>
          <Link href="/contact-us" className="mob-cta-btn reveal reveal-delay-2">
            Talk To Our Team <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}