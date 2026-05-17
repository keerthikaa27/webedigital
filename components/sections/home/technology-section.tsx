"use client";

import Link from "next/link";
import { Container } from "@/components/site-shell/container";

export function TechnologySection() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          DESKTOP  (lg and above) — BYTE-FOR-BYTE IDENTICAL to original
          Only change: outer max-w wrapper with clamp() padding fixes
          the large-screen gap where content stops at Container's
          fixed max-width but the dark bg stretches full-viewport.
          ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white hidden lg:block"
        style={{ clipPath: "ellipse(120% 100% at 50% 100%)" }}
      >
        <div className="relative bg-[#0d0f2c] pt-20 pb-48">
          <div className="relative bg-[#0d0f2c] pt-10 pb-20">

            {/* DOT TEXTURE */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Desktop padding fix wrapper */}
            <div
              style={{
                maxWidth: "1300px",
                margin: "0 auto",
                padding: "0 clamp(48px, 5vw, 80px)",
              }}
            >
              <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

                {/* LEFT */}
                <div className="max-w-[620px]">
                  <h2 className="text-[clamp(2.4rem,3vw,3rem)] font-extrabold leading-tight">
                    Built for How People Search, Compare, and Decide Today

                  </h2>
                  <p className="mt-6 text-[17px] leading-relaxed text-white/80">
                    Your customers do not discover brands from one place anymore. They search on Google, notice ads, check social media, compare websites, read content, and look for trust signals before taking action.

                  </p>
                  <p className="mt-4 text-[17px] leading-relaxed text-white/80">
                    WebeDigital helps your brand show up with clarity across this journey, so your marketing feels connected, credible, and easier to measure.

                  </p>
                  <Link
                    href="/services/seo-geo"
                    className="mt-10 inline-block rounded-full bg-[#ff5a2c] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#e14a1f]"
                  >
                    See How We Build Growth

                  </Link>
                </div>

                {/* RIGHT UI */}
                <div className="relative flex justify-center">

                  {/* MAIN CARD */}
                  <div className="relative w-[420px] rounded-[26px] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                    <div className="flex gap-3 mb-4">
                      <div className="w-14 h-3 rounded-full bg-[#2c344f]" />
                      <div className="w-14 h-3 rounded-full bg-[#3da978]" />
                      <div className="w-14 h-3 rounded-full bg-[#a6d96a]" />
                    </div>
                    <p className="text-center text-[18px] font-semibold text-[#1a1a2e]">
                      Ready when you are.
                    </p>
                    <div className="mt-5 flex items-center rounded-full border border-gray-300 px-4 py-3">
                      <span className="text-gray-400 text-sm mr-3">＋</span>
                      <input
                        placeholder="Ask anything"
                        className="flex-1 outline-none text-sm text-gray-500 bg-transparent"
                      />
                      <div className="flex items-center gap-3 ml-3">
                        <span className="text-gray-400 text-sm">🎤</span>
                        <div className="w-8 h-8 rounded-full bg-[#0d0f2c] flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TOP FLOAT CARD */}
                  <div className="absolute -top-14 right-0 w-[220px] rounded-[18px] bg-white p-4 shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full border-4 border-[#3da978]" />
                      <div className="flex-1">
                        <div className="h-2 bg-[#3da978] rounded mb-1" />
                        <div className="h-2 bg-gray-300 rounded w-[70%]" />
                      </div>
                    </div>
                    <div className="h-2 bg-gray-300 rounded mb-1" />
                    <div className="h-2 bg-gray-300 rounded w-[60%]" />
                  </div>

                  {/* BOTTOM GRAPH */}
                  <div className="absolute -bottom-6 left-0 w-[160px] rounded-[18px] bg-[#1fa4b3] p-4 shadow-xl">
                    <p className="text-white text-xs mb-2">AI Visibility</p>
                    <div className="flex items-end gap-2 h-[60px]">
                      <div className="w-4 h-6 bg-[#a6d96a]" />
                      <div className="w-4 h-10 bg-[#a6d96a]" />
                      <div className="w-4 h-8 bg-[#a6d96a]" />
                    </div>
                  </div>
                </div>
              </Container>
            </div>

          </div>

          {/* BOTTOM CURVE */}
          <div
            className="absolute bottom-0 left-0 w-full h-[180px] bg-white z-10"
            style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MOBILE  (below lg)
          Completely separate section — no shared DOM with desktop
          so desktop clipPath/curves never affect mobile rendering.

          Layout:
          • Dark navy bg with dot texture (same brand feel)
          • Heading → paragraphs → CTA button (centred)
          • Full-width image blended into a teal/navy shield shape
            using mix-blend-mode + gradient overlay — no placeholder
          • Proper wide elliptical white arch at bottom matching
            the desktop curve aesthetic
          ══════════════════════════════════════════════════════════ */}
      <section className="relative block lg:hidden overflow-hidden bg-[#0d0f2c] text-white">

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* ── Text content ── */}
        <div className="relative z-10 px-6 pt-14 pb-8 text-center">

          <h2
            style={{ fontSize: "clamp(1.9rem, 8vw, 2.6rem)" }}
            className="font-extrabold leading-[1.08] text-white"
          >
            Built for How People Search, Compare, and Decide Today

          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-white/75 max-w-[340px] mx-auto">
          Your customers do not discover brands from one place anymore. They search on Google, notice ads, check social media, compare websites, read content, and look for trust signals before taking action.

          </p>

          <p className="mt-3 text-[15px] leading-relaxed text-white/75 max-w-[340px] mx-auto">
            WebeDigital helps your brand show up with clarity across this journey, so your marketing feels connected, credible, and easier to measure.

          </p>

          <Link
            href="/services/seo-geo"
            className="mt-8 inline-block rounded-full bg-[#ff5a2c] px-9 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#e14a1f]"
          >
            See How We Build Growth

          </Link>
        </div>

        {/* ── Image blended into shield/arch shape ── */}
        {/*
          Strategy: a real Unsplash tech/data image sits inside a
          container clipped to a tall arch (circle top, flat bottom).
          Two gradient overlays — a teal-to-navy at bottom + a navy
          vignette at top — blend the photo seamlessly into the dark
          section background. mix-blend-mode: luminosity desaturates
          the photo so it reads as part of the dark brand palette.
          No placeholder div, no fake skeleton — genuine image.
        */}
        <div
          className="relative mx-auto mt-2"
          style={{
            width: "min(340px, 88vw)",
            height: "min(380px, 95vw)",
            /* Arch: semicircle top, straight bottom */
            borderRadius: "50% 50% 0 0 / 55% 55% 0 0",
            overflow: "hidden",
          }}
        >
          {/* The real photo */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85"
            alt="Data analytics dashboard"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              mixBlendMode: "luminosity",
              opacity: 0.55,
            }}
            draggable={false}
          />

          {/* Teal brand tint — makes the image feel on-brand */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(160deg, rgba(29,158,179,0.55) 0%, rgba(13,15,44,0.7) 100%)",
            }}
          />

          {/* Top dark vignette — blends arch edge into bg */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "30%",
              background:
                "linear-gradient(to bottom, rgba(13,15,44,0.6) 0%, transparent 100%)",
            }}
          />

          {/* Bottom fade — dissolves into the white curve below */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background:
                "linear-gradient(to top, rgba(13,15,44,0.85) 0%, transparent 100%)",
            }}
          />

          {/* Floating AI Visibility badge — inside the shape, bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: "28px",
              left: "20px",
              background: "rgba(31,164,179,0.92)",
              borderRadius: "14px",
              padding: "10px 14px",
              backdropFilter: "blur(6px)",
              zIndex: 10,
            }}
          >
            <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, marginBottom: "6px" }}>
              AI Visibility
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "36px" }}>
              <div style={{ width: "8px", height: "16px", background: "#a6d96a", borderRadius: "2px" }} />
              <div style={{ width: "8px", height: "28px", background: "#a6d96a", borderRadius: "2px" }} />
              <div style={{ width: "8px", height: "22px", background: "#a6d96a", borderRadius: "2px" }} />
              <div style={{ width: "8px", height: "34px", background: "#a6d96a", borderRadius: "2px" }} />
              <div style={{ width: "8px", height: "20px", background: "#a6d96a", borderRadius: "2px" }} />
            </div>
          </div>

          {/* Floating "Ready" badge — top-right inside shape */}
          <div
            style={{
              position: "absolute",
              top: "32px",
              right: "20px",
              background: "rgba(255,255,255,0.95)",
              borderRadius: "12px",
              padding: "8px 12px",
              zIndex: 10,
              minWidth: "110px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: "3px solid #3da978",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ height: "5px", background: "#3da978", borderRadius: "3px", marginBottom: "3px" }} />
                <div style={{ height: "5px", background: "#e5e7eb", borderRadius: "3px", width: "60%" }} />
              </div>
            </div>
            <p style={{ fontSize: "10px", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>
              Ready when you are.
            </p>
          </div>
        </div>

        {/* ── White elliptical arch at bottom ──
            Use a tall percentage-based ellipse (same visual as
            desktop) — wide enough (200%) that on a narrow phone
            it renders as a smooth arch rather than a thin sliver.
            The extra bottom padding on the section gives it room. */}
        <div style={{ position: "relative", height: "110px", marginTop: "-10px" }}>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "200%",
              height: "140px",
              background: "#ffffff",
              borderRadius: "100% 100% 0 0 / 100% 100% 0 0",
              zIndex: 10,
            }}
          />
        </div>

      </section>
    </>
  );
}