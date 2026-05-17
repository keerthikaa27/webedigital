"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CASE_STUDIES, SERVICE_COLORS, type CaseStudyContentBlock } from "@/lib/casestudies";

/* ── Scroll-reveal hook ─────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Reading-progress bar ─────────────────────────────────────────────────── */
function ReadingProgress({ color }: { color: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gray-200">
      <div
        className="h-full transition-all duration-100"
        style={{ width: `${progress}%`, background: color }}
      />
    </div>
  );
}

/* ── Floating nav ─────────────────────────────────────────────────────────── */
function FloatingNav() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 transition-all duration-500 hidden xl:flex ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 pointer-events-none"
      }`}
    >
      <Link
        href="/case-studies"
        title="Back to Case Studies"
        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#00c9b1] hover:border-[#00c9b1] transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
        className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#00c9b1] hover:border-[#00c9b1] transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

/* ── Content block renderer ──────────────────────────────────────────────── */
function renderBlock(block: CaseStudyContentBlock, idx: number, color: string) {
  const bodyFont = { fontFamily: "'Inter', 'Helvetica Neue', sans-serif" };
  const headFont = { fontFamily: "'Sora', 'Inter', sans-serif" };

  switch (block.type) {
    case "paragraph":
      return (
        <p key={idx} className="text-gray-700 text-[1.0625rem] leading-[1.9] mb-6" style={bodyFont}>
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2
          key={idx}
          className="text-[#0f1b3d] text-[1.4rem] font-bold leading-[1.25] mt-12 mb-4"
          style={headFont}
        >
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          key={idx}
          className="text-[#0f1b3d] text-[1.1rem] font-semibold leading-[1.3] mt-8 mb-3"
          style={headFont}
        >
          {block.text}
        </h3>
      );

    case "blockquote":
      return (
        <blockquote
          key={idx}
          className="my-8 text-[#334155] text-[1.05rem] leading-[1.8] italic"
          style={{
            borderLeft: `3px solid ${color}`,
            background: `${color}08`,
            padding: "1rem 1.25rem",
            borderRadius: "0 8px 8px 0",
            ...bodyFont,
          }}
        >
          {block.text}
        </blockquote>
      );

    case "image":
      return (
        <div key={idx} className="my-10 text-center">
          <img
            src={block.src}
            alt={block.alt ?? "Case study image"}
            className="w-full rounded-xl object-cover max-h-[480px]"
          />
          {block.caption && (
            <p className="text-sm text-gray-400 mt-2 italic" style={bodyFont}>
              {block.caption}
            </p>
          )}
        </div>
      );

    case "list":
      return (
        <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-gray-700 text-[1.05rem] leading-[1.8]" style={bodyFont}>
              {item}
            </li>
          ))}
        </ul>
      );

    case "feature-list":
      return (
        <ul key={idx} className="mb-8 space-y-5">
          {block.items.map((item, i) => (
            <li key={i} className="pl-4" style={{ borderLeft: `2px solid ${color}60` }}>
              <span className="font-semibold text-[#0f1b3d] text-[0.95rem]" style={headFont}>
                {item.title}
              </span>
              <p className="text-gray-700 text-[1.0rem] leading-[1.8] mt-1" style={bodyFont}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div key={idx} className="overflow-x-auto my-10 rounded-xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f8fafc]">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-5 py-3 font-semibold text-[#0f1b3d] border-b border-gray-200"
                    style={headFont}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-5 py-3 border-b border-gray-100 text-gray-700" style={bodyFont}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "stat-highlight":
      return (
        <div key={idx} className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
          {block.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center"
              style={{
                background: `${stat.color ?? color}0d`,
                border: `1px solid ${stat.color ?? color}25`,
              }}
            >
              <div
                className="font-extrabold text-3xl mb-1"
                style={{ color: stat.color ?? color, fontFamily: "'Sora', 'Inter', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase leading-tight" style={bodyFont}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      );

    case "link-paragraph":
      return (
        <p key={idx} className="mb-6 text-gray-700 text-[1.0625rem] leading-[1.9]" style={bodyFont}>
          {block.before}
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors"
            style={{ color }}
          >
            {block.linkText}
          </a>
          {block.after}
        </p>
      );

    default:
      return null;
  }
}

/* ── Related Study Card ──────────────────────────────────────────────────── */
function RelatedCard({
  id,
  client,
  headline,
  service,
  image,
  color,
}: {
  id: string;
  client: string;
  headline: string;
  service: string;
  image: string;
  color: string;
}) {
  return (
    <Link href={`/case-studies/${id}`} className="group block">
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
        <div className="relative h-44 overflow-hidden">
          <img
            src={image}
            alt={client}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ backgroundColor: color }}
          >
            {service}
          </span>
        </div>
        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>
            {client}
          </p>
          <h4
            className="text-[#0f1b3d] font-semibold text-[0.95rem] leading-snug transition-colors"
            style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
          >
            {headline}
          </h4>
        </div>
      </div>
    </Link>
  );
}

/* ── Main page ───────────────────────────────────────────────────────────── */
export default function CaseStudyDetailPage() {
  const params = useParams();
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  const study = CASE_STUDIES?.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-500 bg-gray-50">
        <p className="text-5xl">📭</p>
        <p className="text-lg font-medium">Case study not found.</p>
        <Link
          href="/case-studies"
          className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#00c9b1] hover:underline"
        >
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  const serviceColor = SERVICE_COLORS[study.service] ?? study.color;

  /* JSON-LD schema */
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.seoTitle ?? study.headline,
    description: study.seoDescription ?? study.excerpt,
    image: study.image,
    publisher: {
      "@type": "Organization",
      name: "WebEdigital",
      logo: { "@type": "ImageObject", url: "https://webedigital.com/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://webedigital.com/case-studies/${study.id}`,
    },
    keywords: study.keywords?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ReadingProgress color={serviceColor} />
      <FloatingNav />

      <main className="bg-[#f8fafc] min-h-screen">
        {/* ── Hero Banner ──────────────────────────────────────────────────── */}
        <div
          className="relative pt-[90px] pb-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f1b3d 0%, #0d2a3a 100%)" }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
            style={{ background: serviceColor }}
          />

          <div className="relative max-w-[760px] mx-auto px-6">
            {/* Back link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold mb-6 hover:gap-3 transition-all"
              style={{ color: serviceColor }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              All Case Studies
            </Link>

            {/* Tags row */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              <span
                className="text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: serviceColor }}
              >
                {study.service}
              </span>
              <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/10">
                {study.industry}
              </span>
            </div>

            {/* Client name */}
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: serviceColor }}
            >
              {study.client}
            </p>

            {/* Title */}
            <h1
              className="text-white font-bold leading-[1.15] mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                fontFamily: "'Sora', 'Inter', sans-serif",
              }}
            >
              {study.headline}
            </h1>

            {/* Meta chips */}
            <div className="flex items-center gap-3 mt-2">
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
    style={{ backgroundColor: serviceColor }}
  >
    VM
  </div>

  <div>
    <p className="text-white font-semibold leading-none">
      Vaibhav Maheshwari
    </p>

    
  </div>
</div>
          </div>
        </div>

        {/* ── Hero Image ───────────────────────────────────────────────────── */}
        <div className="max-w-[760px] mx-auto px-6 mt-14">
          <Reveal>
            <div className="w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "16/9" }}>
              <img src={study.image} alt={study.headline} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>

        {/* ── Stats bar ────────────────────────────────────────────────────── */}
        <div className="max-w-[760px] mx-auto px-6 mt-8">
          <Reveal delay={60}>
            <div className="grid grid-cols-3 gap-4">
              {study.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: `${serviceColor}0d`,
                    border: `1px solid ${serviceColor}30`,
                  }}
                >
                  <div
                    className="font-extrabold text-3xl mb-1"
                    style={{ color: serviceColor, fontFamily: "'Sora', 'Inter', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Challenge / Solution summary ─────────────────────────────────── */}
        <div className="max-w-[760px] mx-auto px-6 mt-8">
          <Reveal delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">Primary Goal</p>
                <p className="text-[#0f1b3d] text-sm leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {study.primaryGoal}
                </p>
              </div>
              <div
                className="rounded-xl p-5 border shadow-sm"
                style={{ background: `${serviceColor}08`, borderColor: `${serviceColor}25` }}
              >
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: serviceColor }}>
                  Core Focus
                </p>
                <p className="text-[#0f1b3d] text-sm leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                {study.coreFocus}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Article body ─────────────────────────────────────────────────── */}
        <article className="max-w-[760px] mx-auto px-6 py-12">
          {/* Excerpt lead */}
          <Reveal delay={60}>
            <p
              className="text-[#334155] text-[1.15rem] leading-[1.8] mb-10 pb-10 border-b border-gray-200 font-medium"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {study.excerpt}
            </p>
          </Reveal>

          {/* Content blocks */}
          <div className="post-body">
            {study.content.map((block, idx) => renderBlock(block, idx, serviceColor))}
          </div>

          {/* ── Divider ───────────────────────────────────────────────────── */}
          <div className="border-t border-gray-200 mt-16 mb-12" />

          {/* ── Prev / Next nav ───────────────────────────────────────────── */}
          <nav className="flex justify-between gap-6">
            <div className="flex-1">
              {study.prevStudy && (
                <Link href={`/case-studies/${study.prevStudy.id}`} className="group block">
                  <span className="block text-gray-400 text-[0.72rem] uppercase tracking-widest mb-1 font-semibold">
                    ← Previous
                  </span>
                  <span className="block text-[#0f1b3d] text-[0.875rem] leading-snug group-hover:text-[#00c9b1] transition-colors font-medium">
                    {study.prevStudy.client}: {study.prevStudy.headline}
                  </span>
                </Link>
              )}
            </div>
            <div className="flex-1 text-right">
              {study.nextStudy && (
                <Link href={`/case-studies/${study.nextStudy.id}`} className="group block">
                  <span className="block text-gray-400 text-[0.72rem] uppercase tracking-widest mb-1 font-semibold">
                    Next →
                  </span>
                  <span className="block text-[#0f1b3d] text-[0.875rem] leading-snug group-hover:text-[#00c9b1] transition-colors font-medium">
                    {study.nextStudy.client}: {study.nextStudy.headline}
                  </span>
                </Link>
              )}
            </div>
          </nav>

          {/* ── Related Studies ───────────────────────────────────────────── */}
          {study.relatedStudies.length > 0 && (
            <section className="mt-16">
              <Reveal>
                <h2
                  className="text-[#0f1b3d] text-[1.4rem] font-bold mb-8"
                  style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
                >
                  Related Case Studies
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {study.relatedStudies.map((rs, i) => (
                  <Reveal key={rs.id} delay={i * 80}>
                    <RelatedCard {...rs} />
                  </Reveal>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* ── CTA Banner ───────────────────────────────────────────────────── */}
        <section
          className="relative py-20 overflow-hidden mt-8"
          style={{ background: "linear-gradient(135deg, #0f1b3d 0%, #0d2a3a 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-[2px]" style={{ background: serviceColor }} />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: serviceColor }}
              >
                Your Turn
              </span>
              <div className="w-6 h-[2px]" style={{ background: serviceColor }} />
            </div>
            <h2
              className="text-white font-bold text-3xl mb-4"
              style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
            >
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Let's build a tailored digital marketing strategy that drives real, measurable results — just like we did for {study.client}.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide transition-colors shadow-lg"
              >
                START GROWING TODAY
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg text-sm tracking-wide transition-colors"
              >
                MORE CASE STUDIES
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}