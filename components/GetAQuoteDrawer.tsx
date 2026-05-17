"use client";

import { useState, useEffect, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────
type QuoteData = {
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

// ── Custom SVG icon set (no emoji anywhere) ──────────────────────────────────
type IconProps = { className?: string; stroke?: string; fill?: string };

const IconSearch = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
    <path d="M8.5 11h5M11 8.5v5" opacity="0.45" />
  </svg>
);
const IconMegaphone = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10v4a2 2 0 0 0 2 2h1l2 4h2l-2-4h2l7 3V5l-7 3H6a2 2 0 0 0-2 2z" />
    <path d="M20 11v2" opacity="0.6" />
  </svg>
);
const IconQuill = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4c-8 1-12 5-14 11l-2 5 5-2c6-2 10-6 11-14z" />
    <path d="M14 10l-6 6" opacity="0.6" />
  </svg>
);
const IconLayers = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L3 8l9 5 9-5-9-5z" />
    <path d="M3 13l9 5 9-5" opacity="0.55" />
    <path d="M3 17l9 5 9-5" opacity="0.3" />
  </svg>
);
const IconBarsTrend = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <rect x="6" y="12" width="3" height="8" />
    <rect x="11" y="8" width="3" height="12" />
    <rect x="16" y="14" width="3" height="6" />
    <path d="M4 6l5 3 5-5 6 4" opacity="0.55" />
  </svg>
);
const IconPalette = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2 0-2 2-2 3-2h1a3 3 0 0 0 3-3 9 9 0 0 0-9-11z" />
    <circle cx="8" cy="10" r="1.2" />
    <circle cx="12" cy="7" r="1.2" />
    <circle cx="16" cy="10" r="1.2" />
  </svg>
);

const IconTrendUp = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l6-6 4 4 8-9" />
    <path d="M14 6h7v7" />
  </svg>
);
const IconTarget = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" opacity="0.6" />
    <circle cx="12" cy="12" r="1.5" fill={stroke} />
  </svg>
);
const IconStar = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.9 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8L12 3z" />
  </svg>
);
const IconCoins = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="9" cy="7" rx="6" ry="2.6" />
    <path d="M3 7v4c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6V7" />
    <path d="M3 11v4c0 1.4 2.7 2.6 6 2.6 1 0 2-.1 2.8-.3" />
    <ellipse cx="17" cy="15" rx="4.5" ry="2" />
    <path d="M12.5 15v3c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-3" />
  </svg>
);
const IconLoop = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12a8 8 0 0 1 14-5" />
    <polyline points="18,3 18,7 14,7" />
    <path d="M20 12a8 8 0 0 1-14 5" />
    <polyline points="6,21 6,17 10,17" />
  </svg>
);
const IconRocket = ({ className = "w-5 h-5", stroke = "currentColor" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4s6 1 6 6-6 10-6 10-4-2-6-4-4-6-4-6 5-6 10-6z" />
    <circle cx="15" cy="9" r="1.8" />
    <path d="M8 16l-3 3 4-1" opacity="0.7" />
    <path d="M6 14l-2 1 1-3" opacity="0.5" />
  </svg>
);

const IconClose = ({ className = "w-3 h-3" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="5" y1="5" x2="15" y2="15" />
    <line x1="15" y1="5" x2="5" y2="15" />
  </svg>
);
const IconArrowRight = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="10" x2="17" y2="10" />
    <polyline points="11,4 17,10 11,16" />
  </svg>
);
const IconArrowLeft = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="17" y1="10" x2="3" y2="10" />
    <polyline points="9,4 3,10 9,16" />
  </svg>
);
const IconCheck = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,8 6,11 13,4" />
  </svg>
);
const IconLock = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5" />
    <path d="M5 7V5a3 3 0 0 1 6 0v2" />
  </svg>
);
const IconPaperPlane = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L2 9l8 3 3 8 9-18z" />
    <path d="M10 12l5-5" opacity="0.6" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const SERVICES: { id: string; label: string; desc: string; Icon: React.FC<IconProps> }[] = [
  { id: "seo",       label: "Search Engine Optimisation", desc: "Rank higher, drive organic traffic",   Icon: IconSearch },
  { id: "paid",      label: "Paid Media Advertising",           desc: "Google, Meta & programmatic ads",      Icon: IconMegaphone },
  { id: "social",    label: "Social Media Marketing",   desc: "Platform-native paid campaigns",        Icon: IconLayers },
  { id: "web",       label: "Web Design & Development",           desc: "Convert more of your traffic",          Icon: IconPalette },
];



const BUDGETS = [
  { id: "b1", label: "Under $5,000/mo",          tag: "Starter" },
  { id: "b2", label: "$5,000 – $15,000/mo",       tag: "Growth" },
  { id: "b3", label: "$15,000 – $50,000/mo",     tag: "Enterprise" },
  { id: "b4", label: "$50,000+/mo",              tag: "Custom" },
];

const TIMELINES = ["ASAP", "Within 1 month", "3 months", "3–6 months", "6-9 months"];

const STEPS = [
  { num: 1, title: "Services",           subtitle: "What are you looking for?" },
  { num: 2, title: "Budget & Timeline",  subtitle: "Let's align expectations" },
  { num: 3, title: "Your Details",       subtitle: "Who should we reach out to?" },
];

// ── Step hero illustrations (all SVG, no emoji) ─────────────────────────────
function StepIllustration({ step }: { step: number }) {
  const items = [
    // 1 — concentric target (services)
    <svg key={1} viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2ec4b6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2ec4b6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="54" fill="url(#g1)" stroke="rgba(46,196,182,0.25)" />
      <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(46,196,182,0.35)" strokeDasharray="3 4" />
      <circle cx="60" cy="60" r="22" fill="#2ec4b6" opacity="0.18" stroke="#2ec4b6" strokeWidth="1.5" />
      <path d="M50 60l6 6 14-14" stroke="#2ec4b6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="100" cy="30" r="4" fill="#f15a22" />
      <circle cx="18" cy="78" r="3.5" fill="#2ec4b6" opacity="0.6" />
      <circle cx="92" cy="94" r="3" fill="#f15a22" opacity="0.55" />
    </svg>,
    
    // 3 — coin stack (budget)
    <svg key={3} viewBox="0 0 120 120" className="w-full h-full">
      {[84, 66, 48].map((y, i) => (
        <g key={i}>
          <ellipse cx="58" cy={y} rx="36" ry="9"
                   fill={i === 0 ? "#1a9e93" : i === 1 ? "rgba(46,196,182,0.55)" : "rgba(46,196,182,0.3)"} />
          <rect x="22" y={y - 10} width="72" height="10"
                fill={i === 0 ? "#157d75" : i === 1 ? "rgba(46,196,182,0.45)" : "rgba(46,196,182,0.22)"} />
          <ellipse cx="58" cy={y - 10} rx="36" ry="9"
                   fill={i === 0 ? "#2ec4b6" : i === 1 ? "rgba(46,196,182,0.7)" : "rgba(46,196,182,0.38)"} />
        </g>
      ))}
      <circle cx="95" cy="34" r="14" fill="rgba(241,90,34,0.12)" stroke="#f15a22" strokeWidth="1.5" />
      <text x="95" y="39" textAnchor="middle" fill="#f15a22" fontSize="13" fontWeight="700" fontFamily="'Poppins',sans-serif">%</text>
    </svg>,
    // 4 — contact card (info)
    <svg key={4} viewBox="0 0 120 120" className="w-full h-full">
      <rect x="14" y="18" width="92" height="84" rx="11" fill="rgba(26,39,68,0.05)" stroke="rgba(46,196,182,0.3)" />
      <circle cx="34" cy="42" r="9" fill="rgba(46,196,182,0.25)" stroke="#2ec4b6" strokeWidth="1.4" />
      <path d="M30 42l3 3 6-6" stroke="#2ec4b6" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="50" y="36" width="48" height="5" rx="2.5" fill="rgba(46,196,182,0.45)" />
      <rect x="50" y="44" width="34" height="4" rx="2" fill="rgba(26,39,68,0.2)" />
      <rect x="22" y="62" width="76" height="5" rx="2.5" fill="rgba(26,39,68,0.15)" />
      <rect x="22" y="72" width="62" height="5" rx="2.5" fill="rgba(26,39,68,0.12)" />
      <rect x="22" y="82" width="40" height="5" rx="2.5" fill="rgba(241,90,34,0.35)" />
    </svg>,

  ];
  return items[step - 1] || items[0];
}

// ── Progress bar ─────────────────────────────────────────────────────────────
function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(26,39,68,0.08)" }}>
            <div className="h-full rounded-full transition-all duration-500"
                 style={{
                   width: i < current ? "100%" : "0%",
                   background: i === current - 1
                     ? "linear-gradient(90deg,#2ec4b6,#1a9e93)"
                     : "#2ec4b6",
                 }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[11px] font-semibold" style={{ color: "#2ec4b6", fontFamily: "'DM Sans',sans-serif" }}>
          Step {current} of {total}
        </span>
        <span className="text-[11px]" style={{ color: "rgba(26,39,68,0.4)", fontFamily: "'DM Sans',sans-serif" }}>
          {Math.round((current / total) * 100)}% complete
        </span>
      </div>
    </div>
  );
}

// ── Step 1: Services ─────────────────────────────────────────────────────────
function Step1({ data, setData }: { data: QuoteData; setData: (d: QuoteData) => void }) {
  const toggle = (id: string) => {
    const next = data.services.includes(id)
      ? data.services.filter(s => s !== id)
      : [...data.services, id];
    setData({ ...data, services: next });
  };
  return (
    <div className="grid grid-cols-1 gap-3">
      {SERVICES.map(svc => {
        const active = data.services.includes(svc.id);
        const Icon = svc.Icon;
        return (
          <button key={svc.id} onClick={() => toggle(svc.id)} type="button"
            data-testid={`quote-service-${svc.id}`}
            className="flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200"
            style={{
              border: `1.5px solid ${active ? "#2ec4b6" : "rgba(26,39,68,0.09)"}`,
              background: active ? "linear-gradient(135deg,rgba(46,196,182,0.08),rgba(46,196,182,0.03))" : "white",
              boxShadow: active ? "0 6px 22px rgba(46,196,182,0.14)" : "none",
            }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                 style={{ background: active ? "#2ec4b6" : "rgba(26,39,68,0.06)", color: active ? "white" : "#1a2744" }}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>{svc.label}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(26,39,68,0.45)", fontFamily: "'DM Sans',sans-serif" }}>{svc.desc}</div>
            </div>
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ background: active ? "#2ec4b6" : "rgba(26,39,68,0.06)", color: active ? "white" : "transparent" }}>
              <IconCheck />
            </div>
          </button>
        );
      })}
    </div>
  );
}


// ── Step 3: Budget & Timeline ────────────────────────────────────────────────
function Step2({ data, setData }: { data: QuoteData; setData: (d: QuoteData) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: "#1a2744", fontFamily: "'DM Sans',sans-serif" }}>Monthly Budget</p>
        <div className="flex flex-col gap-2">
          {BUDGETS.map(b => {
            const active = data.budget === b.id;
            return (
              <button key={b.id} onClick={() => setData({ ...data, budget: b.id })} type="button"
                data-testid={`quote-budget-${b.id}`}
                className="flex items-center justify-between px-5 py-4 rounded-2xl transition-all"
                style={{
                  border: `1.5px solid ${active ? "#2ec4b6" : "rgba(26,39,68,0.09)"}`,
                  background: active ? "linear-gradient(135deg,rgba(46,196,182,0.08),rgba(46,196,182,0.03))" : "white",
                }}>
                <span className="font-semibold text-sm" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>{b.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                        style={{ background: active ? "#2ec4b6" : "rgba(26,39,68,0.06)", color: active ? "white" : "rgba(26,39,68,0.5)", fontFamily: "'DM Sans',sans-serif" }}>
                    {b.tag}
                  </span>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center"
                       style={{ background: active ? "#2ec4b6" : "rgba(26,39,68,0.06)", color: active ? "white" : "transparent" }}>
                    <IconCheck />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: "#1a2744", fontFamily: "'DM Sans',sans-serif" }}>Preferred Timeline</p>
        <div className="flex flex-wrap gap-2">
          {TIMELINES.map(t => {
            const active = data.timeline === t;
            return (
              <button key={t} onClick={() => setData({ ...data, timeline: t })} type="button"
                data-testid={`quote-timeline-${t.replace(/\s+/g, "-").toLowerCase()}`}
                className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  border: `1.5px solid ${active ? "#f15a22" : "rgba(26,39,68,0.09)"}`,
                  background: active ? "#f15a22" : "white",
                  color: active ? "white" : "#1a2744",
                  fontFamily: "'DM Sans',sans-serif",
                }}>
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Step 3: Info ─────────────────────────────────────────────────────────────
function Step3({ data, setData }: { data: QuoteData; setData: (d: QuoteData) => void }) {
  const [focused, setFocused] = useState<string | null>(null);
  const fieldStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    border: `1.5px solid ${focused === name ? "#2ec4b6" : "rgba(26,39,68,0.12)"}`,
    borderRadius: 14,
    padding: "13px 16px",
    fontSize: 14,
    fontFamily: "'DM Sans',sans-serif",
    color: "#1a2744",
    outline: "none",
    background: focused === name ? "rgba(46,196,182,0.03)" : "white",
    transition: "border-color 0.2s, background 0.2s",
  });
  const label = (text: string) => (
    <label className="block text-xs font-bold uppercase tracking-[0.12em] mb-2"
           style={{ color: "#1a2744", fontFamily: "'DM Sans',sans-serif" }}>{text}</label>
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          {label("Full Name *")}
          <input data-testid="quote-input-name" type="text" placeholder="Alex Johnson" value={data.name}
                 onChange={e => setData({ ...data, name: e.target.value })}
                 style={fieldStyle("name")} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
        </div>
        <div>
          {label("Company")}
          <input data-testid="quote-input-company" type="text" placeholder="Acme Inc." value={data.company}
                 onChange={e => setData({ ...data, company: e.target.value })}
                 style={fieldStyle("company")} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />
        </div>
      </div>
      <div>
        {label("Work Email *")}
        <input data-testid="quote-input-email" type="email" placeholder="alex@company.com" value={data.email}
               onChange={e => setData({ ...data, email: e.target.value })}
               style={fieldStyle("email")} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
      </div>
      <div>
        {label("Phone Number")}
        <input data-testid="quote-input-phone" type="tel" placeholder="+1 (555) 000-0000" value={data.phone}
               onChange={e => setData({ ...data, phone: e.target.value })}
               style={fieldStyle("phone")} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} />
      </div>
      <div>
        {label("Additional Context")}
        <textarea data-testid="quote-input-message" rows={4} placeholder="Tell us anything else that might help us prepare…"
                  value={data.message} onChange={e => setData({ ...data, message: e.target.value })}
                  style={{ ...fieldStyle("msg"), resize: "none" }}
                  onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
      </div>
    </div>
  );
}



// ═════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
export function GetAQuoteDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); // controls exit animation
  const contentRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<QuoteData>({
    services: [], budget: "", timeline: "",
    name: "", email: "", phone: "", company: "", message: "",
  });

  // Open/close: mount for exit animation
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // let the exit animation play before unmounting & resetting
      const t = setTimeout(() => {
        setMounted(false);
        setStep(1);
        setSubmitted(false);
        setSubmitError(null);
      }, 620);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const canProceed = () => {
    if (step === 1) return data.services.length > 0;
    if (step === 2) return !!data.budget;
    if (step === 3) return !!data.name && !!data.email;
    return true;
  };

  const navigate = (dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      if (dir === "next") setStep(s => Math.min(s + 1, TOTAL));
      else setStep(s => Math.max(s - 1, 1));
      if (contentRef.current) contentRef.current.scrollTop = 0;
      setAnimating(false);
    }, 220);
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          services: data.services.map(id => SERVICES.find(s => s.id === id)?.label || id),
          budget: BUDGETS.find(b => b.id === data.budget)?.label || "",
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Request failed. Please try again.");
      }
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const TOTAL = 3;
  if (!mounted && !isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── PAPER-FLYING ENTRANCE (from LEFT → CENTER) ── */
        @keyframes paperFlyIn {
          0%   { transform: translate(-130vw, 18vh) rotate(-24deg) rotateY(-55deg) rotateX(18deg) scale(0.55); opacity: 0; filter: blur(3px); }
          45%  {                                                                                                opacity: 1; filter: blur(0); }
          70%  { transform: translate(2vw,  -2vh) rotate(4deg)    rotateY(8deg)   rotateX(-2deg) scale(1.02); }
          85%  { transform: translate(-0.5vw, 0)  rotate(-1.2deg) rotateY(-2deg)  rotateX(0.5deg) scale(1.005); }
          100% { transform: translate(0, 0)       rotate(0)       rotateY(0)      rotateX(0)      scale(1);     opacity: 1; }
        }
        /* ── PAPER-FLYING EXIT (CENTER → RIGHT) ── */
        @keyframes paperFlyOut {
          0%   { transform: translate(0, 0) rotate(0) rotateY(0) rotateX(0) scale(1); opacity: 1; }
          35%  { transform: translate(4vw, -3vh) rotate(6deg) rotateY(10deg) rotateX(-3deg) scale(1.01); opacity: 1; }
          100% { transform: translate(135vw, -12vh) rotate(32deg) rotateY(55deg) rotateX(-12deg) scale(0.55); opacity: 0; filter: blur(3px); }
        }
        @keyframes overlayIn  { from { opacity: 0; backdrop-filter: blur(0px); } to { opacity: 1; backdrop-filter: blur(12px); } }
        @keyframes overlayOut { from { opacity: 1; backdrop-filter: blur(12px); } to { opacity: 0; backdrop-filter: blur(0px); } }

        @keyframes auraPulse {
          0%,100% { opacity: 0.55; transform: translate(-50%,-50%) scale(1); }
          50%     { opacity: 0.85; transform: translate(-50%,-50%) scale(1.08); }
        }
        @keyframes driftA { 0%,100% { transform: translate(0,0); } 50% { transform: translate(18px,-12px); } }
        @keyframes driftB { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-22px,14px); } }

        @keyframes stepInNext { from { transform: translateX(32px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes stepInPrev { from { transform: translateX(-32px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fadeScaleIn { from { transform: scale(0.92); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes confettiFall {
          0%   { transform: translateY(-10px) rotate(0deg);  opacity: 1; }
          100% { transform: translateY(90px)  rotate(360deg); opacity: 0; }
        }

        .gq-paper-in   { animation: paperFlyIn  0.95s cubic-bezier(0.2, 0.9, 0.2, 1.05) both; }
        .gq-paper-out  { animation: paperFlyOut 0.6s cubic-bezier(0.55, 0, 0.9, 0.35) forwards; }
        .gq-overlay-in { animation: overlayIn   0.45s ease forwards; }
        .gq-overlay-out{ animation: overlayOut  0.4s  ease forwards; }
        .gq-step-next  { animation: stepInNext  0.3s cubic-bezier(0.22,1,0.36,1) forwards; }
        .gq-step-prev  { animation: stepInPrev  0.3s cubic-bezier(0.22,1,0.36,1) forwards; }
        .gq-fade-scale { animation: fadeScaleIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .gq-confetti-1 { animation: confettiFall 1.3s ease 0.0s forwards; }
        .gq-confetti-2 { animation: confettiFall 1.3s ease 0.1s forwards; }
        .gq-confetti-3 { animation: confettiFall 1.3s ease 0.2s forwards; }
        .gq-confetti-4 { animation: confettiFall 1.3s ease 0.3s forwards; }
        .gq-confetti-5 { animation: confettiFall 1.3s ease 0.4s forwards; }

        .gq-aura       { animation: auraPulse 4.5s ease-in-out infinite; }
        .gq-driftA     { animation: driftA 8s ease-in-out infinite; }
        .gq-driftB     { animation: driftB 9s ease-in-out infinite; }

        .gq-scroll::-webkit-scrollbar { width: 4px; }
        .gq-scroll::-webkit-scrollbar-track { background: transparent; }
        .gq-scroll::-webkit-scrollbar-thumb { background: rgba(46,196,182,0.3); border-radius: 4px; }

        /* ── fold shadow down the middle for paper feel ── */
        .gq-paper-fold::before {
          content: "";
          position: absolute; inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, transparent 0%, rgba(26,39,68,0.03) 50%, transparent 100%);
          mix-blend-mode: multiply;
        }

        @media (max-width: 640px) {
          .gq-panel {
            width: 94vw !important;
            max-width: 94vw !important;
            height: auto !important;
            max-height: 92vh !important;
            border-radius: 22px !important;
          }
        }
      `}</style>

      {/* ── BACKDROP ─────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        data-testid="quote-overlay"
        className={isOpen ? "gq-overlay-in" : "gq-overlay-out"}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background:
            "radial-gradient(1200px 800px at 20% 40%, rgba(46,196,182,0.18), transparent 60%)," +
            "radial-gradient(900px 700px at 80% 70%, rgba(241,90,34,0.12), transparent 60%)," +
            "rgba(10,18,32,0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          perspective: "1600px",
        }}
      >
        {/* soft aura orbs floating on the backdrop */}
        <div className="gq-aura" style={{
          position: "absolute", top: "28%", left: "30%",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,196,182,0.3), transparent 70%)",
          filter: "blur(30px)",
          transform: "translate(-50%,-50%)",
        }} />
        <div className="gq-driftA" style={{
          position: "absolute", top: "12%", right: "10%",
          width: 120, height: 120, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(241,90,34,0.25), transparent 70%)",
          filter: "blur(20px)",
        }} />
        <div className="gq-driftB" style={{
          position: "absolute", bottom: "10%", left: "12%",
          width: 180, height: 180, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,196,182,0.25), transparent 70%)",
          filter: "blur(28px)",
        }} />
      </div>

      {/* ── CENTERED PAPER PANEL ─────────────────────────────────── */}
      <div
        data-testid="quote-panel-wrapper"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1600px",
          perspectiveOrigin: "50% 40%",
          pointerEvents: "none",
        }}
      >
        <div
          data-testid="quote-panel"
          className={`gq-panel gq-paper-fold ${isOpen ? "gq-paper-in" : "gq-paper-out"}`}
          onClick={e => e.stopPropagation()}
          style={{
            position: "relative",
            pointerEvents: "auto",
            width: "min(620px, 94vw)",
            maxHeight: "min(92vh, 820px)",
            height: "auto",
            background: "linear-gradient(180deg, #ffffff 0%, #fbfbf8 100%)",
            borderRadius: 22,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            transformStyle: "preserve-3d",
            boxShadow:
              "0 40px 90px rgba(10,18,32,0.35)," +
              "0 10px 30px rgba(10,18,32,0.18)," +
              "inset 0 1px 0 rgba(255,255,255,0.8)",
            border: "1px solid rgba(26,39,68,0.06)",
          }}
        >
          {/* top accent rule */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg,#2ec4b6,#1a9e93 45%,#f15a22)",
            opacity: 0.9, zIndex: 1,
          }} />

          {/* paper grain texture overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.35,
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(26,39,68,0.04), transparent 40%)," +
              "radial-gradient(circle at 80% 90%, rgba(241,90,34,0.04), transparent 40%)",
          }} />

          {/* ── HEADER ── */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0"
               style={{ borderBottom: "1px solid rgba(26,39,68,0.07)" }}>
            

          <button
  onClick={onClose}
  data-testid="quote-close-btn"
  aria-label="Close"
  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:rotate-90"
  
>
  <IconClose />
</button>
          </div>

          {submitted ? (
            // ── SUCCESS STATE ────────────────────────────────────────
            <div className="flex-1 flex flex-col items-center gq-scroll justify-center px-8 py-10 text-center gq-fade-scale relative overflow-y-auto">
              {[
                { c: "#2ec4b6", x: "20%", s: 10 },
                { c: "#f15a22", x: "75%", s: 7 },
                { c: "#b5cc3b", x: "45%", s: 9 },
                { c: "#2ec4b6", x: "60%", s: 6 },
                { c: "#f15a22", x: "30%", s: 8 },
              ].map((d, i) => (
                <div key={i} className={`gq-confetti-${i + 1}`}
                     style={{ position: "absolute", top: "10%", left: d.x, width: d.s, height: d.s, borderRadius: "50%", background: d.c }} />
              ))}

              <div className="flex flex-col items-center pt-20">

  {/* Circle wrapper */}
  <div className="relative flex items-center justify-center mb-6">
    
    {/* outer ring */}
    <div className="absolute w-32 h-32 rounded-full border-2 border-[#2ec4b6]/30"></div>

    {/* main circle */}
    <div
      className="w-24 h-24 rounded-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg,#2ec4b6,#1a9e93)",
        boxShadow: "0 20px 60px rgba(46,196,182,0.35)",
      }}
    >
      <svg viewBox="0 0 40 40" className="w-12 h-12">
        <polyline
          points="6,20 16,30 34,10"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>

  </div>

</div>

              <h2 className="text-3xl font-bold mb-3" style={{ color: "#1a2744", fontFamily: "'Poppins',serif" }}>
                Request Received
              </h2>
              <p className="text-base leading-relaxed mb-8"
                 style={{ color: "rgba(26,39,68,0.6)", fontFamily: "'DM Sans',sans-serif", maxWidth: 360 }}>
                Thanks <strong style={{ color: "#1a2744" }}>{data.name}</strong>. Our senior strategist will review your details and reach out within <strong style={{ color: "#2ec4b6" }}>4 business hours</strong>.
              </p>

              <div className="w-full max-w-md rounded-2xl p-5 mb-8"
                   style={{ background: "rgba(46,196,182,0.07)", border: "1.5px solid rgba(46,196,182,0.2)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-3"
                     style={{ color: "#2ec4b6", fontFamily: "'DM Sans',sans-serif" }}>What Happens Next</div>
                {["Discovery call scheduled within 24h", "Custom strategy prepared for you", "Transparent proposal — no surprises"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-1.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: "#2ec4b6" }}>
                      <IconCheck />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "#1a2744", fontFamily: "'DM Sans',sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={onClose}
                data-testid="quote-success-close-btn"
                className="w-full max-w-md py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-transform hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", fontFamily: "'Poppins',sans-serif", boxShadow: "0 8px 30px rgba(241,90,34,0.28)" }}>
                Close
              </button>
            </div>
          ) : (
            <>
              {/* ── STEP TABS + PROGRESS ── */}
              <div className="px-6 pt-5 pb-4 flex-shrink-0">
                <div className="flex gap-2 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                  {STEPS.map(s => (
                    <div key={s.num} className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300"
                           style={{
                             background: s.num === step ? "#1a2744"
                               : s.num < step ? "rgba(46,196,182,0.12)" : "rgba(26,39,68,0.05)",
                           }}>
                        <div className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0"
                             style={{
                               background: s.num === step ? "#2ec4b6"
                                 : s.num < step ? "#2ec4b6" : "rgba(26,39,68,0.2)",
                               fontSize: 9,
                             }}>
                          {s.num < step
                            ? <IconCheck />
                            : <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700 }}>{s.num}</span>}
                        </div>
                        <span className="text-[11px] font-bold hidden sm:block"
                              style={{
                                color: s.num === step ? "white"
                                  : s.num < step ? "#2ec4b6" : "rgba(26,39,68,0.35)",
                                fontFamily: "'DM Sans',sans-serif",
                              }}>
                          {s.title}
                        </span>
                      </div>
                      {s.num < TOTAL && <div className="w-3 h-px" style={{ background: "rgba(26,39,68,0.12)" }} />}
                    </div>
                  ))}
                </div>
                <ProgressBar current={step} total={TOTAL} />
              </div>

              {/* ── STEP CONTENT ── */}
              <div ref={contentRef} className="flex-1 overflow-y-auto gq-scroll px-6 pb-2" style={{ minHeight: 0 }}>
                <div className="flex items-center gap-5 mb-6 py-2">
                  <div className="w-16 h-16 flex-shrink-0">
                    <StepIllustration step={step} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black leading-tight" style={{ color: "#1a2744", fontFamily: "'DM Sans',sans-serif"  }}>
                      {STEPS[step - 1].title}
                    </h2>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(26,39,68,0.5)", fontFamily: "'DM Sans',sans-serif" }}>
                      {STEPS[step - 1].subtitle}
                    </p>
                  </div>
                </div>

                <div className={animating ? "opacity-0" : direction === "next" ? "gq-step-next" : "gq-step-prev"}
                     style={{ willChange: "transform, opacity" }}>
                  {step === 1 && <Step1 data={data} setData={setData} />}
                  {step === 2 && <Step2 data={data} setData={setData} />}
                  {step === 3 && <Step3 data={data} setData={setData} />}
                </div>
                <div className="h-4" />
              </div>

              {/* ── FOOTER ── */}
              <div className="px-6 py-5 flex-shrink-0"
                   style={{ borderTop: "1px solid rgba(26,39,68,0.07)", background: "rgba(247,248,252,0.85)" }}>
                {!canProceed() && step < 5 && (
                  <p className="text-xs text-center mb-3" style={{ color: "rgba(241,90,34,0.85)", fontFamily: "'DM Sans',sans-serif" }}>
                    {step === 1
  ? "Please select at least one service to continue."
  : step === 2
  ? "Please select a budget range."
  : "Name and email are required."}
                  </p>
                )}
                {submitError && (
                  <p className="text-xs text-center mb-3" style={{ color: "#f15a22", fontFamily: "'DM Sans',sans-serif" }}>
                    {submitError}
                  </p>
                )}

                <div className="flex gap-3">
                  {step > 1 && (
                    <button onClick={() => navigate("prev")}
                      data-testid="quote-back-btn"
                      className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-transform hover:-translate-y-0.5"
                      style={{ border: "1.5px solid rgba(26,39,68,0.12)", color: "#1a2744", fontFamily: "'DM Sans',sans-serif", background: "white" }}>
                      <IconArrowLeft /> Back
                    </button>
                  )}

                  {step < TOTAL ? (
                    <button onClick={() => canProceed() && navigate("next")}
                      data-testid="quote-next-btn"
                      disabled={!canProceed()}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
                      style={{
                        background: canProceed() ? "linear-gradient(135deg,#1a2744,#1e3a5f)" : "rgba(26,39,68,0.2)",
                        fontFamily: "'Poppins',sans-serif",
                        cursor: canProceed() ? "pointer" : "not-allowed",
                        letterSpacing: "0.05em",
                        boxShadow: canProceed() ? "0 6px 20px rgba(26,39,68,0.20)" : "none",
                      }}>
                      Continue <IconArrowRight />
                    </button>
                  ) : (
                    <button onClick={handleSubmit}
                      data-testid="quote-submit-btn"
                      disabled={submitting}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg,#f15a22,#ff7a42)",
                        fontFamily: "'Poppins',sans-serif",
                        letterSpacing: "0.05em",
                        boxShadow: "0 6px 24px rgba(241,90,34,0.28)",
                        cursor: submitting ? "wait" : "pointer",
                        opacity: submitting ? 0.85 : 1,
                      }}>
                      {submitting ? "Sending…" : (<>Submit Request <IconPaperPlane /></>)}
                    </button>
                  )}
                </div>

                <p className="flex items-center justify-center gap-1.5 text-[11px] mt-3"
                   style={{ color: "rgba(26,39,68,0.4)", fontFamily: "'DM Sans',sans-serif" }}>
                  <IconLock /> No spam. No obligations. Response within 4 business hours.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default GetAQuoteDrawer;
