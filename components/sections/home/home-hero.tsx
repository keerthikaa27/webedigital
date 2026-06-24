"use client";

import Link from "next/link";
import { Container } from "@/components/site-shell/container";
import HeroRight from "@/components/sections/home/hero-right";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "600px", height: "clamp(600px, 52vw, 760px)" }}
    >
      {/* ─── ARC BACKGROUND (desktop only) ─── */}
      <div
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(135deg, #2db89a 0%, #1a9e82 60%, #148a6e 100%)",
          clipPath: "ellipse(58% 140% at 108% 50%)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
          draggable={false}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,60,50,0.45)] to-transparent" />
      </div>

      {/* ─── CONTENT GRID ─── */}
      <Container
        className="
          relative z-10
          grid
          h-full
          min-h-[inherit]
          w-full
          max-w-[1700px]
          mx-auto
          items-center
          gap-10
          px-8
          xl:px-16
          2xl:px-24
          lg:grid-cols-[1.1fr_0.9fr]
          py-12
          lg:py-0
        "
      >
        {/* TEXT */}
        <div className="animate-fadeUp flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-[22px] sm:text-[26px] lg:text-[clamp(18px,1.4vw,22px)] font-semibold text-[#2EC4B6]">
            Integrated Digital Growth Team for Modern Brands
          </p>

          <h1 className="mb-6 text-[2.6rem] sm:text-[3.2rem] lg:text-[clamp(2.4rem,3vw,3.8rem)] font-extrabold leading-[1.05] text-[#0d2b4e]">
            Digital Marketing That <br /> Builds Visibility, Leads, and Revenue
          </h1>

          <p className="mb-8 max-w-[480px] text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
            WebeDigital helps brands grow through SEO, performance marketing,
            social media management, website development, content, and
            conversion-focused strategy. We do not look at marketing as separate
            tasks. We connect search, ads, content, design, and analytics into
            one growth system that helps your brand get discovered, trusted, and
            chosen.
          </p>

          <Link
            href="/contact-us"
            className="inline-block w-fit rounded-full bg-[#e8491e] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 hover:bg-[#cf3d14]"
          >
            Get a Free Growth Audit
          </Link>
        </div>

        {/* IMAGE */}
        <HeroRight />
      </Container>
    </section>
  );
}