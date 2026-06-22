"use client";

import { Container } from "@/components/site-shell/container";

export function OriginStorySection() {
  return (
    <section className="relative bg-white py-0 overflow-hidden -mt-32">

      {/* ══════════════════════════════════════════════════════════
          SHARED HEADER — concentric icon + title block
          Same on both breakpoints, centred
          ══════════════════════════════════════════════════════════ */}
       <div style={{ padding: "0 clamp(24px, 5vw, 80px)" }}>
       <Container className="relative">

        {/* CONCENTRIC CIRCLE ICON */}
        <div className="flex justify-center mb-7">
          <div className="relative w-[72px] h-[72px]">
            <div className="absolute inset-0 rounded-full border-[1.5px] border-[#2ec4b6]/35" />
            <div className="absolute inset-[10px] rounded-full border-[1.5px] border-[#2ec4b6]/55" />
            <div className="absolute inset-[20px] rounded-full border-[1.5px] border-[#2ec4b6]/85" />
            <div className="absolute inset-[30px] rounded-full bg-[#2ec4b6]" />
          </div>
        </div>

        {/* TITLE BLOCK */}
        <div className="text-center max-w-[820px] mx-auto mb-16">
          <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.2] font-extrabold text-[#12123b] mb-5">
            WebeDigital Was Built for Practical Digital Growth

          </h2>
          <p className="text-[16px] leading-[1.75] text-[#555]">
            WebeDigital started with one simple belief: growth becomes easier when strategy, execution, and measurement work together. Over time, our work expanded from SEO and content into websites, performance marketing, social media, CRO, and full digital growth execution.

          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            DESKTOP CLUSTER  (md and above) — BYTE-FOR-BYTE UNCHANGED
            ══════════════════════════════════════════════════════════ */}
        <div className="relative justify-center hidden md:flex">

          {/* DOT GRID BACKGROUND */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[320px] opacity-50 pointer-events-none z-0"
            style={{
              backgroundImage: "radial-gradient(#8fd6cd 2px, transparent 2px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* CLUSTER WRAPPER */}
          <div className="relative w-[760px] h-[500px]">

            {/* IMAGE 1 — top-left, large, green bar */}
            <div className="absolute top-0 left-5 flex items-start gap-[6px] z-[2]">
              <div className="w-[7px] h-[148px] rounded bg-[#3da978] flex-shrink-0" />
              <img
                src="/w1.png"
                alt="Team 1996"
                className="w-[210px] h-[148px] object-cover rounded-[14px]"
              />
            </div>

            {/* IMAGE 2 — overlapping, smaller, rotated */}
            <div className="absolute top-[110px] left-[200px] z-[4] -rotate-[5deg]">
              <img
                src="/w2.png"
                alt="Team 2009"
                className="w-[160px] h-[112px] object-cover rounded-[14px]"
              />
            </div>

            {/* IMAGE 3 — mid-left, small, teal bar */}
            <div className="absolute top-[230px] left-5 flex items-start gap-[6px] z-[2]">
              <div className="w-[7px] h-[120px] rounded bg-[#2ec4b6] flex-shrink-0" />
              <img
                src="/w3.png"
                alt="Team 2013"
                className="w-[180px] h-[120px] object-cover rounded-[14px]"
              />
            </div>

            {/* LABEL 2013 — below image 3 */}
            <div className="absolute top-[362px] left-[27px] w-[250px] text-[15px] leading-[1.45] text-[#444] z-[3]">
              <span className="text-[#2ec4b6] font-bold">Performance & Social Expansion – </span>
             We added paid ads, social media management, creative planning, and campaign optimization to support faster and more consistent growth.

            </div>

            {/* IMAGE 4 — bottom-right, large, green bar */}
            <div className="absolute bottom-0 left-[310px] flex items-start gap-[6px] z-[2]">
              <div className="w-[7px] h-[148px] rounded bg-[#3da978] flex-shrink-0" />
              <img
                src="/w4.png"
                alt="Team Today"
                className="w-[210px] h-[148px] object-cover rounded-[14px]"
              />
            </div>

            {/* LABEL 1996 — top-right */}
            <div className="absolute top-[8px] left-[270px] w-[400px] text-[15px] leading-[1.45] text-[#444] z-[3]">
              <span className="text-[#2ec4b6] font-bold"> SEO & Content Foundation – </span>
              We began by helping brands improve visibility through keyword strategy, on-page SEO, blogs, website content, and search-focused planning.
             

            </div>

            {/* LABEL 2009 — mid-right */}
            <div className="absolute top-[140px] left-[390px] w-[400px] text-[15px] leading-[1.45] text-[#444] z-[3]">
              <span className="text-[#2ec4b6] font-bold">Website & Conversion Growth – </span>
              As client needs evolved, we started improving websites, landing pages, Shopify stores, service pages, CTAs, and user journeys.

            </div>

            {/* LABEL TODAY — right of image 4 */}
            <div className="absolute bottom-[10px] left-[560px] w-[270px] text-[15px] leading-[1.45] text-[#444] z-[3]">
              <span className="text-[#2ec4b6] font-bold">TODAY: Full Digital Execution – </span>
              Today, WebeDigital helps brands connect SEO, ads, content, websites, social media, analytics, and CRO into one practical growth direction.

            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            MOBILE TIMELINE  (below md)
            Root cause of the clipping: the cluster wrapper is
            w-[760px] with absolute children at left-[520px] —
            on a 400px screen those elements are 120px off-screen
            with no right padding.

            Fix: vertical timeline. Each milestone = a full-width
            row with a left teal bar, image, year label + text.
            Nothing uses absolute positioning so nothing overflows.
            All images get proper right padding via px-5 on the
            container — the last image is fully visible.
            ══════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-0 md:hidden px-5">

          {/* Dot grid — decorative, behind the timeline */}
          <div
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[600px] opacity-30 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#8fd6cd 2px, transparent 2px)",
              backgroundSize: "18px 18px",
            }}
          />

          {[
            {
              year: "SEO & Content Foundation",
              bar: "#3da978",
              text: "As client needs evolved, we started improving websites, landing pages, Shopify stores, service pages, CTAs, and user journeys.",
              src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
              alt: "Team 1996",
            },
            {
              year: "Website & Conversion Growth",
              bar: "#2ec4b6",
              text: "We added paid ads, social media management, creative planning, and campaign optimization to support faster and more consistent growth.",
              src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
              alt: "Team 2009",
            },
            {
              year: "Performance & Social Expansion",
              bar: "#3da978",
              text: "We added paid ads, social media management, creative planning, and campaign optimization to support faster and more consistent growth.",
              src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=400&q=80",
              alt: "Team 2013",
            },
            {
              year: "TODAY: Full Digital Execution",
              bar: "#2ec4b6",
              text: "Today, WebeDigital helps brands connect SEO, ads, content, websites, social media, analytics, and CRO into one practical growth direction.",
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
              alt: "Team Today",
            },
          ].map((item, i) => (
            <div
              key={item.year}
              className="relative flex flex-col gap-3 pb-10"
              style={{
                /*
                  Left border acts as the timeline spine.
                  paddingLeft gives space for the bar + content.
                */
                borderLeft: `3px solid ${item.bar}`,
                paddingLeft: "20px",
              }}
            >
              {/* Timeline dot on the spine */}
              <div
                style={{
                  position: "absolute",
                  left: "-7px",
                  top: "6px",
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: item.bar,
                  border: "2px solid #fff",
                  boxShadow: "0 0 0 2px " + item.bar,
                }}
              />

              {/* Year label */}
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: item.bar,
                  marginBottom: "2px",
                }}
              >
                {item.year}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.5,
                  color: "#444",
                  marginBottom: "10px",
                }}
              >
                {item.text}
              </p>

              {/*
                Image — full width of the available column.
                width: 100% means it never overflows the px-5
                container, so the last image is never clipped.
              */}
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

      </Container>
      </div>
    </section>
  );
}