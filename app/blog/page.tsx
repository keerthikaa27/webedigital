"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// ── TYPES ────────────────────────────────────────────────────────────────────
type Blog = {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  author: string;
  authorInitials: string;
  image: string;
};

// ── DATA ─────────────────────────────────────────────────────────────────────
const ALL_TAGS = ["All", "SEO", "PPC", "Content", "Social Media", "Web Design", "Analytics"];

const BLOGS: Blog[] = [
  {
    id: "website-traffic-but-no-leads" ,
    title: "Your Website Is Getting Traffic, But Leads Are Still Dead? Here’s the Real Problem",
    excerpt:
      "Core updates have reshaped how Google evaluates authority. Here's what our data across 300+ client sites reveals about the signals that matter most right now.",
    tag: "SEO",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    author: "Vaibhav Maheshwari",
    authorInitials: "VM",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
  },
  {
    id: "seo-agency-no-leads",
    title:
      "Paying an SEO Agency Every Month But Still No Leads? Read This Before You Continue",
    excerpt:
      "SEO reports full of rankings, impressions, and traffic can still leave businesses with no real leads. Learn how to identify whether your agency is building meaningful SEO progress or just reporting activity.",
    tag: "SEO",
    date: "May 2026",
    readTime: "19 min read",
    author: "Vaibhav Maheshwari",
    authorInitials: "VM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    id: "fashion-accelerator-seo-case-study",
    title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
    excerpt:
      "Ranking #1 is rarely about doing more SEO. It is about owning the category more clearly than everyone else. Here is how focused execution helped a fashion accelerator take control of its core keyword landscape in under 90 days.",
    tag: "SEO",
    date: "Jun 2026",
    readTime: "12 min read",
    author: "Vaibhav M.",
    authorInitials: "VM",
    image: "/fashion.png",
  },
  {
    id: "golf-dtc-brand-organic-growth",
    title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
    excerpt:
      "Traffic alone does not create scale. Structure does. This case study cum blog shows how we turned a messy organic setup into a growth system that drove 80K+ clicks and millions of impressions for a leading US-based golf brand.",
    tag: "SEO",
    date: "Jun 2026",
    readTime: "11 min read",
    author: "Vaibhav M.",
    authorInitials: "VM",
    image: "/golf.png",
  },
  {
    id: "why-most-paid-campaigns-fail",
    title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
    excerpt:
      "If Meta and Google both look profitable, but scaling still feels strangely hard, your attribution model may be the real problem. This breakdown shows how a cleaner reporting view helped unlock a 4.2x ROAS outcome.",
    tag: "PPC",
    date: "Jun 2026",
    readTime: "10 min read",
    author: "Vaibhav M.",
    authorInitials: "VM",
    image: "/Roas.png",
  },
  
];

const TAG_COLORS: Record<string, string> = {
  SEO: "#0e9f8e",
  PPC: "#e07b39",
  Content: "#6366f1",
  "Social Media": "#0ea5e9",
  "Web Design": "#ec4899",
  Analytics: "#10b981",
};

const POSTS_PER_PAGE = 3;

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #0f1b3d 0%, #162040 40%, #0d2a3a 100%)",
      }}
    >
      {/* Transparent background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#00c9b1" }}
      />

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto px-6 py-28">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-[#00c9b1]/30 bg-[#00c9b1]/10">
          <span className="w-2 h-2 rounded-full bg-[#00c9b1]" />
          <span className="text-[#00c9b1] text-xs font-bold tracking-[0.25em] uppercase">
            Growth Insights & Practical Guides

          </span>
        </div>

        <h1
          className="text-white font-bold leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          <span className="text-[#00c9b1]">Insights </span>
          
          That Help You Build Smarter Digital Growth

        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
         Read practical ideas, execution lessons, and growth-focused guides from the WebeDigital team across SEO, paid ads, social media, websites, content, and conversion strategy.

        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#articles"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide transition-colors shadow-lg"
          >
            EXPLORE ARTICLES
          </Link>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 text-white/20 mt-16">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
            Scroll to explore
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ── INTRO STRIP ───────────────────────────────────────────────────────────────
function IntroStrip() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1f5e 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* heading */}
        <h2 className="text-[#1a1f5e] font-extrabold text-4xl mb-4 leading-tight">
          Useful Ideas,{" "}
          <span className="text-[#00c9b1]">Built</span> From Real Digital Work

        </h2>

        {/* description */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-14">
          Our articles are written to help business owners, founders, and marketing teams understand what actually improves visibility, traffic, trust, and conversions, not just what sounds good in theory.

        </p>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Execution-Led Insights",
              desc: "Lessons shaped by real work across SEO, paid campaigns, websites, content, and social media.",
            },
            {
              title: "Decision-Focused Guides",
              desc: "Clear explanations that help you choose what to fix, test, improve, or prioritize next.",
            },
            {
              title: "Growth Over Noise",
              desc: "No empty trends or recycled advice, just practical thinking connected to measurable business outcomes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-gradient-to-br from-white via-[#f8fffe] to-[#eefcf9] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,201,177,0.12)]"
            >
              {/* top glow */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#00c9b1]/10 blur-3xl transition-all duration-500 group-hover:bg-[#00c9b1]/20" />

              {/* mesh line */}
              <div className="absolute inset-0 opacity-[0.05]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#00c9b1 1px, transparent 1px), linear-gradient(to right, #00c9b1 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
              </div>

              {/* subtle radial overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,201,177,0.12),transparent_20%)]" />

              <div className="relative z-10">
                <h4 className="font-bold text-[#1a1f5e] text-xl mb-3">{item.title}</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>

              {/* hover bottom accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#00c9b1] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BLOG CARD ─────────────────────────────────────────────────────────────────
function BlogCard({ blog }: { blog: Blog }) {
  const tagColor = TAG_COLORS[blog.tag] ?? "#00c9b1";
  return (
    <Link href={`/blog/${blog.id}`} className="block">
      <article className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className="absolute top-4 left-4 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ backgroundColor: tagColor }}
          >
            {blog.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium mb-3">
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readTime}</span>
          </div>

          <h3 className="text-[#1a1f5e] font-bold text-lg leading-snug mb-3 line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
            {blog.excerpt}
          </p>

          {/* Author + CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                style={{ backgroundColor: tagColor }}
              >
                <img
  src="/vaibhav.png"
  alt={blog.author}
  className="w-8 h-8 rounded-full object-cover"
/>
              </div>
              <span className="text-gray-700 text-xs font-semibold">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#00c9b1] group-hover:gap-2.5 transition-all">
              Read More
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── MOBILE BLOG CARD (horizontal swipe card) ──────────────────────────────────
function MobileBlogCard({ blog }: { blog: Blog }) {
  const tagColor = TAG_COLORS[blog.tag] ?? "#00c9b1";
  return (
    <Link href={`/blog/${blog.id}`} className="block">
      <article className="relative flex gap-0 bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100/80 active:scale-[0.98] transition-transform duration-150">
        {/* Left color strip */}
        <div
          className="w-1.5 flex-shrink-0"
          style={{ backgroundColor: tagColor }}
        />

        {/* Thumbnail */}
        <div className="relative w-28 flex-shrink-0 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            style={{ minHeight: "112px" }}
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-3.5 flex-1 min-w-0">
          {/* Tag + date row */}
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full"
              style={{ backgroundColor: tagColor }}
            >
              {blog.tag}
            </span>
            <span className="text-[10px] text-gray-400 font-medium">{blog.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-[#1a1f5e] font-bold text-[13px] leading-snug line-clamp-2 mb-1.5">
            {blog.title}
          </h3>

          {/* Author row */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0"
                style={{ backgroundColor: tagColor }}
              >
                <img
  src="/vaibhav.png"
  alt={blog.author}
  className="w-full h-full object-cover"
/>
              </div>
              <span className="text-[10px] text-gray-500 font-semibold truncate">{blog.author}</span>
            </div>
            <span className="text-[10px] text-gray-400">{blog.date}</span>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="flex items-center pr-3 flex-shrink-0">
          <svg className="w-3.5 h-3.5 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </article>
    </Link>
  );
}

// ── MOBILE HERO ───────────────────────────────────────────────────────────────
function MobileHero() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #0f1b3d 0%, #0d2a3a 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.08,
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-[15%] right-[-20%] w-72 h-72 rounded-full opacity-20 blur-[80px] pointer-events-none"
        style={{ background: "#00c9b1" }}
      />
      <div
        className="absolute bottom-[30%] left-[-15%] w-56 h-56 rounded-full opacity-15 blur-[60px] pointer-events-none"
        style={{ background: "#e07b39" }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Diagonal decorative lines */}
      <svg
        className="absolute top-0 right-0 opacity-[0.06] w-48 h-48"
        viewBox="0 0 200 200"
        fill="none"
      >
        {[0, 20, 40, 60, 80, 100].map((offset) => (
          <line
            key={offset}
            x1={offset}
            y1="0"
            x2="200"
            y2={200 - offset}
            stroke="#00c9b1"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Main content — bottom-anchored card */}
      <div className="relative z-10 px-5 pb-10 pt-24 flex flex-col items-center text-center">

        {/* Floating category chip */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#00c9b1]/30 bg-[#00c9b1]/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c9b1] animate-pulse" />
          <span className="text-[#00c9b1] text-[10px] font-bold tracking-[0.2em] uppercase">
            Growth Insights & Practical Guides

          </span>
        </div>

        {/* Headline */}
<h1
  className="text-white font-extrabold leading-[1.08] mb-4 max-w-[340px]"
  style={{ fontSize: "clamp(2rem, 9vw, 3rem)" }}
>
          <span className="text-[#00c9b1]">Insights</span> That
          <br />
          Help You Build Smarter Digital Growth

          <br />
          
        </h1>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-[300px]">
Read practical ideas, execution lessons, and growth-focused guides from the WebeDigital team across SEO, paid ads, social media, websites, content, and conversion strategy.
        </p>


        {/* CTA */}
        <Link
  href="#articles"
  className="flex items-center justify-center gap-2 bg-orange-500 active:bg-orange-600 text-white font-bold px-6 py-4 rounded-xl text-sm tracking-wide shadow-[0_8px_30px_rgba(224,123,57,0.4)] w-[240px]"
>
          EXPLORE ARTICLES
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>

        {/* Scroll cue */}
        <div className="flex items-center justify-center gap-2 mt-8 text-white/20">
          <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-[9px] tracking-[0.3em] uppercase font-semibold">scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ── MOBILE INTRO STRIP ────────────────────────────────────────────────────────
function MobileIntroStrip() {
  return (
    <section className="relative py-10 overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #1a1f5e 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative px-5">
        {/* Heading */}
        <div className="mb-7 flex flex-col items-center text-center">
  <p className="text-[#00c9b1] text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
    Why Read With Us
  </p>

  <h2 className="text-[#1a1f5e] font-extrabold text-2xl leading-tight max-w-[320px]">
    Useful Ideas, <span className="text-[#00c9b1]">Built </span>From 
    <br />
    Real Digital Work
  </h2>

  <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-[300px]">
    Our articles are written to help business owners, founders, and marketing teams understand what actually improves visibility, traffic, trust, and conversions, not just what sounds good in theory.

  </p>
</div>

        {/* Horizontal scrolling feature cards */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {[
            {
              title: "Execution-Led Insights",
              desc: "Lessons shaped by real work across SEO, paid campaigns, websites, content, and social media.",
              color: "#0e9f8e",
            },
            {
              title: "Decision-Focused Guides",
              desc: "Clear explanations that help you choose what to fix, test, improve, or prioritize next.",
              color: "#e07b39",
            },
            {
              title: "Growth Over Noise",
              desc: "No empty trends or recycled advice, just practical thinking connected to measurable business outcomes.",
              color: "#6366f1",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-52 rounded-2xl overflow-hidden p-5"
              style={{
                background: `linear-gradient(135deg, ${item.color}12 0%, ${item.color}06 100%)`,
                border: `1px solid ${item.color}20`,
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-12 h-12 rounded-bl-full opacity-20"
                style={{ backgroundColor: item.color }}
              />

              <h4 className="font-bold text-[#1a1f5e] text-sm mb-1.5">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>

              {/* Bottom line accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-1/3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MOBILE FILTER BAR ─────────────────────────────────────────────────────────
function MobileFilterBar({
  activeTag,
  setActiveTag,
}: {
  activeTag: string;
  setActiveTag: (t: string) => void;
}) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {ALL_TAGS.map((tag) => {
        const isActive = activeTag === tag;
        const color = TAG_COLORS[tag];
        return (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-[10px] font-bold tracking-wide uppercase transition-all duration-200"
            style={
              isActive
                ? {
                    backgroundColor: color ?? "#1a1f5e",
                    color: "#fff",
                    boxShadow: color ? `0 4px 14px ${color}40` : undefined,
                  }
                : {
                    backgroundColor: "#f3f4f6",
                    color: "#6b7280",
                  }
            }
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

// ── MOBILE PAGINATION ─────────────────────────────────────────────────────────
function MobilePagination({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mt-8 px-1">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Prev
      </button>

      {/* Page dots */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className="transition-all duration-200 rounded-full"
            style={{
              width: p === current ? "24px" : "8px",
              height: "8px",
              backgroundColor: p === current ? "#00c9b1" : "#d1d5db",
            }}
          />
        ))}
      </div>

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#f3f4f6", color: "#6b7280" }}
      >
        Next
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

// ── PAGINATION (desktop) ──────────────────────────────────────────────────────
function Pagination({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 justify-center mt-14">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="w-10 h-10 rounded-xl border border-gray-200 text-gray-400 flex items-center justify-center hover:border-[#00c9b1] hover:text-[#00c9b1] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200 ${
            p === current
              ? "bg-[#00c9b1] text-white shadow-md"
              : "border border-gray-200 text-gray-500 hover:border-[#00c9b1] hover:text-[#00c9b1]"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="w-10 h-10 rounded-xl border border-gray-200 text-gray-400 flex items-center justify-center hover:border-[#00c9b1] hover:text-[#00c9b1] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeTag === "All" ? BLOGS : BLOGS.filter((b) => b.tag === activeTag);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ── HERO: desktop vs mobile ── */}
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block md:hidden">
        <MobileHero />
      </div>

      {/* ── INTRO STRIP: desktop vs mobile ── */}
      <div className="hidden md:block">
        <IntroStrip />
      </div>
      <div className="block md:hidden">
        <MobileIntroStrip />
      </div>

      {/* ── ARTICLES SECTION ── */}
      {/* DESKTOP */}
      <section id="articles" className="hidden md:block max-w-7xl mx-auto px-6 lg:px-16 py-20">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[#1a1f5e] text-3xl font-extrabold">
              {activeTag === "All" ? "All Posts" : activeTag}
            </h2>
          </div>
          <p className="text-gray-400 text-sm">
            Showing {paginated.length} of {filtered.length} articles · Page {currentPage} of{" "}
            {totalPages}
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border ${
                activeTag === tag
                  ? "bg-[#1a1f5e] text-white border-[#1a1f5e] shadow-md"
                  : "border-gray-200 text-gray-500 bg-white hover:border-[#00c9b1] hover:text-[#00c9b1]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#00c9b1] via-gray-200 to-transparent mb-10" />

        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {paginated.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="font-semibold">No articles in this category yet.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination total={totalPages} current={currentPage} onChange={setCurrentPage} />
        )}
      </section>

      {/* MOBILE ARTICLES */}
      <section id="articles" className="block md:hidden px-5 py-8 bg-gray-50">
        {/* Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[#00c9b1] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
              Browse
            </p>
            <h2 className="text-[#1a1f5e] text-2xl font-extrabold">
              {activeTag === "All" ? "All Posts" : activeTag}
            </h2>
          </div>
          <span className="text-[10px] text-gray-400 font-medium text-right">
            {filtered.length} articles
            <br />
            pg {currentPage}/{totalPages}
          </span>
        </div>

        {/* Filter bar — horizontal scroll */}
        <div className="mb-5">
          <MobileFilterBar activeTag={activeTag} setActiveTag={setActiveTag} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#00c9b1] via-gray-200 to-transparent mb-6" />

        {/* Article list */}
        {paginated.length > 0 ? (
          <div className="flex flex-col gap-3.5">
            {paginated.map((blog) => (
              <MobileBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">📭</p>
            <p className="font-semibold text-sm">No articles in this category yet.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <MobilePagination
            total={totalPages}
            current={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1b3d 0%, #0d2a3a 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Mobile-specific glow orb */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-[60px] pointer-events-none md:hidden"
          style={{ background: "#00c9b1" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold md:text-4xl text-2xl mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-300 mb-8 md:text-lg text-sm">
            Let's build a tailored digital marketing strategy that drives real, measurable results.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold md:px-10 px-7 py-4 rounded-lg text-sm tracking-wide transition-colors shadow-lg"
          >
            START GROWING TODAY
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}