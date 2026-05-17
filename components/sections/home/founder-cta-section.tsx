"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FounderCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0e1b30] py-[140px]">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c2b2]/10 blur-[140px]" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ══════════════════════════════════════════════════════════
          DESKTOP  (md and above) — BYTE-FOR-BYTE UNCHANGED
          Padding fix: max-w raised to 1300px and horizontal padding
          switched to clamp() so on large monitors the dark bg
          doesn't create a wide gutter around the fixed 1050px block.
          ══════════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 mx-auto hidden flex-col items-center text-center md:flex"
        style={{
          maxWidth: "1300px",
          padding: "0 clamp(40px, 6vw, 120px)",
        }}
      >
        {/* Small Label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#8ef5e8]">
          Founder-Led Digital Growth
        </p>

        {/* Heading */}
        <h2 className="text-[1rem] font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-[4rem]">
          Growth Feels <span className="text-[#00d1c0]">Different</span>
          <span className="block">
            When Strategy and Execution Stay Connected.
          </span>
        </h2>

        {/* Founder Circle */}
        <div className="relative my-14">
          <div className="absolute inset-0 scale-125 rounded-full bg-[#00c2b2]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 p-[6px] backdrop-blur-xl">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/vaibhav.png"
                alt="Founder"
                width={160}
                height={160}
                className="h-[160px] w-[160px] object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-[-14px] rounded-full border border-[#00c2b2]/20" />
        </div>

        {/* Founder Text */}
        <div className="max-w-[700px]">
          <p className="text-[1.12rem] leading-8 text-white md:text-[1.18rem]">
            Work directly with a founder-led team that understands how search, paid ads, social media, websites, content, and conversion strategy support each other. WebeDigital keeps the focus on practical execution, clear priorities, and growth decisions that are easier to track.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[#8ef5e8]">
            Founder & Growth Strategist
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#00cdbd] px-9 py-4 text-[15px] font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-white"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-9 py-4 text-[15px] font-medium text-white/80 transition-all duration-300 hover:border-[#00cdbd]/40 hover:bg-white/5"
          >
            Explore Case Studies
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE  (below md) — INNOVATIVE REDESIGN
          
          Flow (as requested): Heading → small circle image → content
          
          Design concept: "Signal card" — the section reads like
          a premium founder spotlight. A thin teal top-border accent
          line, large expressive heading, then a compact founder
          identity block (tiny circle + name + title inline), then
          body copy, then CTAs full-width.
          
          Key fixes vs original:
          - Heading was text-[1rem] on mobile — broken. Now clamp()
            scales from 2rem to 2.8rem based on viewport.
          - py-[140px] is unchanged on section but the inner card
            gets tight vertical rhythm with proper gap spacing.
          - Image is intentionally small (80px) as requested — sits
            inline with the founder name like a byline, not a hero.
          - CTAs are full-width stacked with generous tap targets.
          - No fixed pixel widths anywhere — everything is % or fluid.
          ══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col md:hidden px-6">

        {/* Top teal accent rule */}
        <div
          className="mb-8 h-px w-16 mx-auto"
          style={{ background: "linear-gradient(90deg, transparent, #00c2b2, transparent)" }}
        />

        {/* Label */}
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.32em] text-[#8ef5e8] mb-5">
          Founder-Led Digital Growth
        </p>

        {/* ── HEADING — the dominant element ── */}
        {/*
          Root cause of original mobile breakage:
          text-[1rem] was the mobile size, md:text-[4rem] the desktop.
          On a 390px phone, 1rem = 16px headline looks like body text.
          Fix: clamp(2rem, 8vw, 2.8rem) — scales 32px → ~44px smoothly.
        */}
        <h2
          className="text-center font-bold leading-[1.06] tracking-[-0.03em] text-white mb-8"
          style={{ fontSize: "clamp(2rem, 8vw, 2.8rem)" }}
        >
          Growth Feels{" "}
          <span className="text-[#00d1c0]">Different</span>
          <span className="block mt-1">
            When Strategy and Execution Stay Connected.
          </span>
        </h2>

        {/* ── FOUNDER IDENTITY BLOCK — small circle as requested ── */}
        {/*
          Small circle (80px) + founder title in a glassmorphism pill —
          reads as a byline / author credit rather than a portrait hero.
          Positioned between heading and body — heading → image → content.
        */}
       <div className="mx-auto mb-8 flex flex-col items-center text-center">
  
  {/* Circle image */}
  <div className="relative mb-4">
    
    {/* Glow */}
    <div
      className="absolute inset-0 rounded-full blur-xl"
      style={{
        background: "rgba(0,194,178,0.35)",
        transform: "scale(1.25)",
      }}
    />

    {/* Image */}
    <div className="relative overflow-hidden rounded-full">
      <Image
        src="/vaibhav.png"
        alt="Founder"
        width={90}
        height={90}
        priority
        className="h-[90px] w-[90px] rounded-full object-cover"
      />
    </div>

    {/* Outer ring */}
    <div
      className="absolute rounded-full"
      style={{
        inset: "-8px",
        border: "1px solid rgba(0,194,178,0.22)",
      }}
    />
  </div>

  {/* Text */}
  <p className="text-white font-bold text-[18px] leading-tight">
    Founder
  </p>

  <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#8ef5e8] font-semibold">
    Growth Strategist
  </p>

</div>

        {/* ── BODY COPY — after heading + image ── */}
        <div
          className="mx-auto mb-8 text-center"
          style={{ maxWidth: 360 }}
        >
          <p className="text-[15px] leading-[1.75] text-white/75">
            Work directly with a founder-led team that understands how search, paid ads, social media, websites, content, and conversion strategy support each other.
          </p>
          <p className="mt-4 text-[15px] leading-[1.75] text-white/75">
            WebeDigital keeps the focus on practical execution, clear priorities, and growth decisions that are easier to track.
          </p>
        </div>

        

        {/* ── CTAs — full width, generous tap targets ── */}
        <div className="mx-auto flex flex-col items-center gap-3">
  <Link
    href="/contact-us"
    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#00cdbd] px-6 py-4 text-[14px] font-bold text-black transition-all duration-300 active:scale-[0.98]"
  >
    Book a Strategy Call

    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>

  <Link
    href="/case-studies"
    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-[14px] font-medium text-white/80 transition-all duration-300"
    style={{ borderColor: "rgba(0,205,189,0.2)" }}
  >
    Explore Case Studies
  </Link>
</div>

        {/* Bottom teal rule */}
        <div
          className="mt-10 h-px w-16 mx-auto"
          style={{ background: "linear-gradient(90deg, transparent, #00c2b2, transparent)" }}
        />
      </div>
    </section>
  );
}