"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// ── TYPES ─────────────────────────────────────────────────────────────────────
type CaseStudy = {
  id: string;
  client: string;
  industry: string;
 service: string;
  headline: string;
  excerpt: string;
  image: string;
  stats: { value: string; label: string }[];
  color: string;

  primaryGoal?: string;
  coreFocus?: string;

  timeline?: string;
  teamSize?: string;

  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];

  content?: any[];

  prevStudy?: {
    id: string;
    client: string;
    headline: string;
  } | null;

  nextStudy?: {
    id: string;
    client: string;
    headline: string;
  } | null;

  relatedStudies?: {
    id: string;
    client: string;
    headline: string;
    service: string;
    image: string;
    color: string;
  }[];
};

// ── DATA ──────────────────────────────────────────────────────────────────────
const ALL_SERVICES = ["All", "SEO", "PPC", "Content", "Social Media", "Web Design"];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1-ranking-for-fashion-startup-accelerator",
    client: "Dariaan",
    industry: "Fashion, Retail, Startup Acceleration",
    service: "SEO",
    headline:
      "#1 Rankings for Fashion Startup Accelerator Keywords in 90 Days",
    excerpt:
      "Dariaan had a strong positioning in the fashion startup space, but its search visibility did not reflect its authority. WebeDigital helped build clearer keyword ownership, stronger category relevance, and a more connected SEO structure that led to #1 rankings for core category searches.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    stats: [
      { value: "#1", label: "Core Category Rankings" },
      { value: "90 Days", label: "SEO Growth Timeline" },
      { value: "5+", label: "High-Intent Keywords Strengthened" },
    ],
    color: "#00c9b1",
  },
  {
    id: "US-based-golf-brand",
    client: "US-Based Golf Brand",
    industry: "Golf, Ecommerce, DTC",
    service: "SEO",
    headline:
      "80K+ Organic Clicks and 3M+ Impressions Through Structured SEO Growth",
    excerpt:
      "A leading US-based golf brand already had visibility, but its SEO growth was scattered and difficult to scale. WebeDigital strengthened the content system, page prioritization, and internal linking structure to create a more reliable organic growth engine.",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    stats: [
      { value: "80K+", label: "Organic Clicks" },
      { value: "3M+", label: "Search Impressions" },
      { value: "90 Days", label: "Growth Window" },
    ],
    color: "#f97316",
  },
  {
    id: "mover",
    client: "MOVER",
    industry: "Local Moving, Packers and Movers, Intracity Logistics",
    service: "Local SEO",
    headline:
      "How WebeDigital Turned MOVER’s Slow Search Growth Into 45K+ Clicks and 2.94M Impressions",
    excerpt:
      "MOVER already had demand around its services, but its search visibility was inconsistent and under-structured. WebeDigital strengthened local SEO, service-page relevance, content systems, and internal linking to create a stronger organic growth engine.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80",
    stats: [
      { value: "45K+", label: "Organic Clicks" },
      { value: "2.94M", label: "Search Impressions" },
      { value: "7.6", label: "Average Position" },
    ],
    color: "#6366f1",
  },
  
];

const SERVICE_COLORS: Record<string, string> = {
  SEO: "#00c9b1",
  PPC: "#f97316",
  Content: "#6366f1",
  "Social Media": "#0ea5e9",
  "Web Design": "#10b981",
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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "#00c9b1" }}
      />
      <div className="relative text-center max-w-4xl mx-auto px-6 py-28">
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-[#00c9b1]/30 bg-[#00c9b1]/10">
          <span className="w-2 h-2 rounded-full bg-[#00c9b1]" />
          <span className="text-[#00c9b1] text-xs font-bold tracking-[0.25em] uppercase">Real Results. Real Clients.</span>
        </div>
        <h1 className="text-white font-bold leading-[1.05] mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
          Campaigns That{" "}
          <span className="text-[#00c9b1]">Moved </span>
          The Needle
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Explore in-depth case studies from clients across industries — every one backed by
          data, strategy, and measurable growth.
        </p>
        <div className="flex flex-col items-center gap-2 text-white/20">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ── DESKTOP CASE STUDY CARD ────────────────────────────────────────────────────
function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <Link href={`/case-studies/${cs.id}`} className="block">
      <article className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
          <div className="relative lg:w-[42%] h-64 lg:h-auto overflow-hidden shrink-0">
            <img src={cs.image} alt={cs.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div
              className="absolute inset-0"
              style={{ background: isEven ? `linear-gradient(to right, transparent 50%, ${cs.color}22 100%)` : `linear-gradient(to left, transparent 50%, ${cs.color}22 100%)` }}
            />
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-[11px] font-bold text-[#1a1f5e] tracking-wide">
              {cs.industry}
            </div>
            <div
              className="absolute bottom-5 left-5 rounded-full px-3 py-1.5 text-[10px] font-bold text-white tracking-widest uppercase"
              style={{ backgroundColor: cs.color }}
            >
              {cs.service}
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 lg:p-10 flex-1">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-2" style={{ color: cs.color }}>
                {cs.client}
              </p>
              <h3 className="text-[#1a1f5e] font-extrabold text-2xl leading-snug mb-4">{cs.headline}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">{cs.excerpt}</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {cs.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center"
                    style={{ background: `${cs.color}10`, border: `1px solid ${cs.color}25` }}
                  >
                    <div className="font-extrabold text-2xl mb-1" style={{ color: cs.color }}>{stat.value}</div>
                    <div className="text-[10px] text-gray-500 font-semibold tracking-wide leading-tight uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-5 border-t border-gray-100">
            <div className="flex items-center gap-3">
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold tracking-wide"
    style={{ backgroundColor: cs.color }}
  >
    VM
  </div>

  <div className="flex flex-col leading-tight">
    <span className="text-[#1a1f5e] text-sm font-semibold">
      Vaibhav Maheshwari
    </span>

    
  </div>
</div>
              <div className="flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3" style={{ color: cs.color }}>
                View Full Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── MOBILE CASE STUDY CARD ─────────────────────────────────────────────────────
// Innovative card: full-bleed image with gradient overlay, stats row prominently
// below image in a dark band, then headline + excerpt in white card below.
function MobileCaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link href={`/case-studies/${cs.id}`} className="block">
      <article
        className="overflow-hidden rounded-3xl shadow-lg border border-gray-100"
        style={{ background: "#fff" }}
      >
        {/* Image with overlaid chips + gradient */}
        <div className="relative h-52 overflow-hidden">
          <img src={cs.image} alt={cs.client} className="w-full h-full object-cover" />
          {/* Dark gradient bottom */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${cs.color}ee 0%, rgba(0,0,0,0.3) 60%, transparent 100%)` }}
          />
          {/* Industry + service chips */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-bold text-[#1a1f5e] tracking-wide">
              {cs.industry}
            </span>
            <span
              className="rounded-full px-3 py-1 text-[10px] font-bold text-white tracking-widest uppercase"
              style={{ backgroundColor: cs.color }}
            >
              {cs.service}
            </span>
          </div>
          {/* Client initial + name on bottom of image */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.25)", border: "1.5px solid rgba(255,255,255,0.6)" }}
            >
              {cs.client[0]}
            </div>
            <span className="text-white text-xs font-bold tracking-wide">{cs.client}</span>
          </div>
        </div>

        {/* Stats band — prominently displayed, dark bg for contrast */}
        <div
          className="grid grid-cols-3 divide-x"
          style={{
            background: `${cs.color}15`,
            borderBottom: `2px solid ${cs.color}30`,
          }}
        >
          {cs.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-4 px-2 text-center">
              <span
                className="font-extrabold text-xl leading-none mb-1"
                style={{ color: cs.color }}
              >
                {stat.value}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wide text-gray-500 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-[#1a1f5e] font-extrabold text-[17px] leading-snug mb-3">
            {cs.headline}
          </h3>
          <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
            {cs.excerpt}
          </p>
          <div
            className="inline-flex items-center gap-2 text-sm font-bold"
            style={{ color: cs.color }}
          >
            View Full Study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── PAGINATION ─────────────────────────────────────────────────────────────────
function Pagination({ total, current, onChange }: { total: number; current: number; onChange: (p: number) => void }) {
  return (
    <div className="flex items-center gap-2 justify-center mt-10">
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
            p === current ? "bg-[#1a1f5e] text-white shadow-md" : "border border-gray-200 text-gray-500 hover:border-[#00c9b1] hover:text-[#00c9b1]"
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
export default function CaseStudiesPage() {
  const [activeService, setActiveService] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeService === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.service === activeService);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [activeService]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      {/* ══════════════════════════════════════════════════════
          DESKTOP CASE STUDIES SECTION — UNCHANGED
          Padding fix: px-16 → clamp via inline override so on
          large monitors the content doesn't hard-stop at 1280px
          leaving dead gray gutters.
          ══════════════════════════════════════════════════════ */}
      <section
        className="hidden md:block py-20"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px clamp(40px, 5vw, 80px)",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2" />
            <h2 className="text-[#1a1f5e] text-3xl font-bold">
              {activeService === "All" ? "All Case Studies" : `${activeService} Results`}
            </h2>
          </div>
          <p className="text-gray-400 text-sm">
            {filtered.length} case stud{filtered.length === 1 ? "y" : "ies"} · Page {currentPage} of {totalPages}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 mb-10">
          {ALL_SERVICES.map((s) => {
            const col = SERVICE_COLORS[s];
            const isActive = activeService === s;
            return (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border ${
                  isActive ? "text-white border-transparent shadow-md" : "border-gray-200 text-gray-500 bg-white hover:border-[#00c9b1] hover:text-[#00c9b1]"
                }`}
                style={isActive ? { backgroundColor: col ?? "#1a1f5e", borderColor: col ?? "#1a1f5e" } : {}}
              >
                {s}
              </button>
            );
          })}
        </div>
        <div className="w-full h-px bg-gradient-to-r from-[#00c9b1] via-gray-200 to-transparent mb-10" />
        {paginated.length > 0 ? (
          <div className="flex flex-col gap-12">
            {paginated.map((cs, i) => (
              <CaseStudyCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-4xl mb-3">📂</p>
            <p className="font-semibold">No case studies in this category yet.</p>
          </div>
        )}
        {totalPages > 1 && (
          <Pagination total={totalPages} current={currentPage} onChange={setCurrentPage} />
        )}
      </section>

      {/* ══════════════════════════════════════════════════════
          MOBILE CASE STUDIES — INNOVATIVE REDESIGN
          ══════════════════════════════════════════════════════ */}
      <section className="block md:hidden bg-gray-50">

        {/* Sticky filter bar — horizontally scrollable, stays at top while browsing */}
        <div
          className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          style={{ padding: "12px 16px" }}
        >
          {/* Count + label */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold text-[#1a1f5e] uppercase tracking-widest">
              {activeService === "All" ? "All Case Studies" : `${activeService}`}
            </p>
            <span className="text-[11px] text-gray-400 font-medium">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          {/* Filter chips — horizontal scroll, no wrap */}
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {ALL_SERVICES.map((s) => {
              const col = SERVICE_COLORS[s];
              const isActive = activeService === s;
              return (
                <button
                  key={s}
                  onClick={() => setActiveService(s)}
                  className="flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase transition-all duration-200 border"
                  style={
                    isActive
                      ? { backgroundColor: col ?? "#1a1f5e", borderColor: col ?? "#1a1f5e", color: "#fff" }
                      : { borderColor: "#e5e7eb", color: "#6b7280", background: "#fff" }
                  }
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="px-4 pt-6 pb-10 flex flex-col gap-6">
          {paginated.length > 0 ? (
            paginated.map((cs) => (
              <MobileCaseStudyCard key={cs.id} cs={cs} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">📂</p>
              <p className="font-semibold text-sm">No case studies in this category yet.</p>
            </div>
          )}
          {totalPages > 1 && (
            <Pagination total={totalPages} current={currentPage} onChange={setCurrentPage} />
          )}
        </div>
      </section>

      {/* ── TRUST STRIP (shared) ── */}
      <section className="bg-white border-y border-gray-100 py-14">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}
        >
          {[
            { value: "150+", label: "Campaigns Delivered" },
            { value: "94%", label: "Client Retention" },
            { value: "3.8×", label: "Average ROI" },
            { value: "12+", label: "Industries Served" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[#1a1f5e] font-extrabold text-4xl mb-1">{s.value}</div>
              <div className="text-gray-400 text-xs font-bold tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA (shared, padding fixed) ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1b3d 0%, #0d2a3a 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative mx-auto px-6 text-center" style={{ maxWidth: "700px" }}>
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-[#00c9b1]" />
            <span className="text-[#00c9b1] text-xs font-bold tracking-[0.2em] uppercase">Your Turn</span>
            <div className="w-6 h-[2px] bg-[#00c9b1]" />
          </div>
          <h2 className="text-white font-extrabold text-4xl mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Tell us about your business and goals. We'll build a strategy designed to deliver results like the ones above.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg text-sm tracking-wide transition-colors shadow-lg"
            >
              START GROWING TODAY
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg text-sm tracking-wide transition-colors"
            >
              READ OUR BLOG
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}