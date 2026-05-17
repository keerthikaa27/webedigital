"use client";

import Link from "next/link";
import {
  Globe,
  MapPin,
  Megaphone,
  Hash,
  BarChart3,
  PenTool,
  Mail,
  ShoppingCart,
  Code,
  Settings,
  Tag,
  RefreshCcw,
} from "lucide-react";

const iconMap: any = {
  "National SEO": Globe,
  "Local SEO": MapPin,
  "Paid Media": BarChart3,
  "Social Media": Hash,
  "Digital PR": Megaphone,
  "Content Marketing": PenTool,
  "Email Marketing": Mail,
  "Amazon Marketing": ShoppingCart,
  "Web Design": Code,
  "CRO": Settings,
  "Offer Content": Tag,
  "Remarketing": RefreshCcw,
  "Email Nurture": Mail,
};

// ─────────────────────────────────────────────────────────────
// DESKTOP FUNNEL ROW — UNCHANGED from original
// ─────────────────────────────────────────────────────────────
function FunnelRow({ width, color, label, items }: any) {
  return (
    <div className={`relative ${width} h-[120px] flex items-center px-12`}>

      {/* MAIN SHAPE */}
      <div
        className={`absolute inset-0 ${color}`}
        style={{
          clipPath: `polygon(0% 0%, 94% 0%, 100% 50%, 94% 100%, 8% 100%)`,
        }}
      />

      {/* FOLD STRIP */}
      <div
        className="absolute right-[6%] top-0 h-full w-[40px]"
        style={{
          background: "rgba(0,0,0,0.15)",
          clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
        }}
      />

      {/* CONTENT */}
      <div
        className="relative z-10 flex w-full items-center justify-between gap-6"
        style={{ paddingLeft: "60px", paddingRight: "90px" }}
      >
        {items.map((item: string, i: number) => {
          const Icon = iconMap[item];
          return (
            <Link
              key={i}
              href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex flex-col items-center text-center text-white transition-all duration-300 hover:text-white/40"
              style={{ flex: 1 }}
            >
              <div className="mb-3 transition-all duration-300">
                {Icon && <Icon size={36} strokeWidth={1.0} />}
              </div>
              <span className="text-[15px] font-normal leading-tight tracking-wide">
                {item}
              </span>
            </Link>
          );
        })}
      </div>

      {/* LABEL */}
      <span className="absolute right-[-130px] text-[20px] font-bold text-[#3da978]">
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MOBILE FUNNEL ROW
// Uses percentage widths so the funnel tapers naturally on any
// screen. Label sits below the row, centred.
// ─────────────────────────────────────────────────────────────
function MobileFunnelRow({
  widthPct,   // e.g. "100%", "83%", "70%", "57%"
  color,
  label,
  items,
}: {
  widthPct: string;
  color: string;
  label: string;
  items: string[];
}) {
  return (
    <div className="flex w-full flex-col items-center gap-1">
      {/* Arrow shape */}
      <div
        style={{
          position: "relative",
          width: widthPct,
          // height scales with number of items so icons never crowd
          height: items.length <= 2 ? "90px" : items.length <= 3 ? "100px" : "110px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background arrow */}
        <div
          className={color}
          style={{
            position: "absolute",
            inset: 0,
            clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
          }}
        />
        {/* Fold strip */}
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: 0,
            height: "100%",
            width: "28px",
            background: "rgba(0,0,0,0.15)",
            clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
          }}
        />
        {/* Icons row — fits inside the arrow */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingLeft: "8px",
            paddingRight: "36px",
          }}
        >
          {items.map((item, i) => {
            const Icon = iconMap[item];
            return (
              <Link
                key={i}
                href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-center text-center text-white"
                style={{ flex: 1, minWidth: 0 }}
              >
                {Icon && (
                  <Icon
                    size={items.length >= 5 ? 20 : items.length >= 4 ? 22 : 26}
                    strokeWidth={1.2}
                    style={{ marginBottom: "4px", flexShrink: 0 }}
                  />
                )}
                <span
                  style={{
                    fontSize: items.length >= 5 ? "9px" : items.length >= 4 ? "10px" : "11px",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                  }}
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Stage label below the row */}
      <span
        style={{
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "0.08em",
          color: "#3da978",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────────────────────
export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-18 pb-40">

      {/* ── Heading (shared, always centred) ── */}
      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#2ec4b6] uppercase">
          THE SOLUTION
        </p>
        <h2 className="mt-4 text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold leading-[1.1] text-[#12123b]">
          A Complete Digital Growth 
          <br />
          System Built Around Your Business

        </h2>
        <p className="mt-6 text-[18px] leading-relaxed text-gray-600">
          We connect SEO, paid ads, social media, content, website development, and conversion strategy into one clear growth system, so every channel supports the same business goal instead of working in isolation.

        </p>
      </div>

      {/* ══════════════════════════════════════════════════════
          DESKTOP FUNNEL  (md and above) — COMPLETELY UNCHANGED
          Root cause of left/right gaps on large screens:
          Fixed pixel widths (w-[800px] etc.) are absolute but the
          section is full-width. On a 1440px+ monitor the rows sit
          centred at their fixed px sizes with white space either side.
          Fix: wrap the entire funnel stack in a max-w container that
          uses clamp() padding so the visual margin between the funnel
          and the screen edge scales with viewport width instead of
          being a hard pixel gap. The rows themselves stay pixel-perfect.
          ══════════════════════════════════════════════════════ */}
      <div className="relative mt-20 hidden md:flex flex-col items-center gap-2">
        {/*
          This wrapper is the ONLY addition to the desktop block.
          It centres the funnel stack and uses clamp padding so on
          large monitors there's no raw white void — the padding grows
          proportionally instead of creating a fixed dead zone.
        */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 clamp(0px, 4vw, 60px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* REACH */}
          <FunnelRow
            width="w-[800px]"
            color="bg-gradient-to-r from-[#64c18c] to-[#3da978]"
            label="REACH"
            items={["National SEO", "Local SEO", "Paid Media", "Social Media", "Digital PR"]}
          />

          {/* ATTRACT */}
          <FunnelRow
            width="w-[665px]"
            color="bg-gradient-to-r from-[#1fa4b3] to-[#178a99]"
            label="ATTRACT"
            items={["Content Marketing", "Paid Media", "Email Marketing", "Amazon Marketing"]}
          />

          {/* CONVERT */}
          <FunnelRow
            width="w-[555px]"
            color="bg-gradient-to-r from-[#2c7fb1] to-[#226999]"
            label="CONVERT"
            items={["Web Design", "CRO", "Offer Content"]}
          />

          {/* RE-ENGAGE */}
          <FunnelRow
            width="w-[455px]"
            color="bg-gradient-to-r from-[#2b3e75] to-[#1e2c55]"
            label="RE-ENGAGE"
            items={["Remarketing", "Email Nurture"]}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE FUNNEL  (below md)
          Same 4-tier tapering funnel, built with % widths so it
          fits any phone screen. Labels sit centred below each row.
          ══════════════════════════════════════════════════════ */}
      <div
        className="mt-12 flex flex-col items-center gap-3 md:hidden"
        style={{ padding: "0 16px" }}
      >
        {/* REACH — widest */}
        <MobileFunnelRow
          widthPct="100%"
          color="bg-gradient-to-r from-[#64c18c] to-[#3da978]"
          label="REACH"
          items={["National SEO", "Local SEO", "Paid Media", "Social Media", "Digital PR"]}
        />

        {/* ATTRACT */}
        <MobileFunnelRow
          widthPct="83%"
          color="bg-gradient-to-r from-[#1fa4b3] to-[#178a99]"
          label="ATTRACT"
          items={["Content Marketing", "Paid Media", "Email Marketing", "Amazon Marketing"]}
        />

        {/* CONVERT */}
        <MobileFunnelRow
          widthPct="67%"
          color="bg-gradient-to-r from-[#2c7fb1] to-[#226999]"
          label="CONVERT"
          items={["Web Design", "CRO", "Offer Content"]}
        />

        {/* RE-ENGAGE — narrowest */}
        <MobileFunnelRow
          widthPct="52%"
          color="bg-gradient-to-r from-[#2b3e75] to-[#1e2c55]"
          label="RE-ENGAGE"
          items={["Remarketing", "Email Nurture"]}
        />
      </div>
    </section>
  );
}