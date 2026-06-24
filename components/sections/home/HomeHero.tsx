"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CubeFloor from "./CubeFloor";



export function HomeHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative isolate overflow-hidden wd-hero-bg">
      <div className="relative z-20 flex justify-center pt-8 px-4">
        
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[70%]">
        {mounted ? <CubeFloor /> : null}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#eafaf6] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1700px] flex-col items-center justify-center px-6 text-center">

        <div className="animate-fadeUp">
          <p className="mb-5 text-[18px] md:text-[20px] font-semibold text-[#2EC4B6]">
            Integrated Digital Growth Team for Modern Brands
          </p>

          <h1 className="mx-auto max-w-4xl font-extrabold leading-[1.02] tracking-tight text-[#0d2b4e] text-[2.4rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[4rem]">
            Digital Marketing
            <br />
            That Builds Visibility,
            <br />
            Leads, and Revenue
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-white/90">
            WebeDigital helps brands grow through SEO, performance marketing,
            social media management, website development, content, and
            conversion-focused strategy. We connect search, ads, content,
            design, and analytics into one growth system that helps your brand
            get discovered, trusted, and chosen.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-block rounded-full bg-[#e8491e] px-9 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_-8px_rgba(232,73,30,0.55)] transition-transform duration-300 hover:scale-105 hover:bg-[#cf3d14]"
            >
              Get a Free Growth Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;