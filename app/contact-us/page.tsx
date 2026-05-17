"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  LucideIcon, Mail, Phone, MapPin, ArrowUpRight, ArrowRight, Check, X,
  Calendar, Target, Zap, TrendingUp, Code2, Search, Sparkles,
  Clock, Loader2,
} from "lucide-react";

const cx = (...c: string[]) => c.filter(Boolean).join(" ");
function useISTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(d);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

type InfoRowProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between py-5 border-b border-gray-200 last:border-none">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#00c9b1]/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#00c9b1]" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{label}</p>
          <p className="text-[#0f172a] font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
}

const services = [
  { id: "seo", icon: Search, title: "SEO", desc: "Organic growth engines" },
  { id: "web", icon: Code2, title: "Web Development", desc: "Fast, conversion-ready sites" },
  { id: "performace", icon: Target, title: "Performance Marketing", desc: "Paid acquisition at scale" },
  { id: "social", icon: TrendingUp, title: "Social-Media Marketing", desc: "Unlock funnel leaks" },
];

const budgets = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+"];
const timelines = ["ASAP", "1–2 weeks", "1 month", "Flexible"];
const slots = [
  "Mon · 10:00 AM", "Mon · 3:30 PM", "Tue · 11:00 AM",
  "Wed · 2:00 PM", "Thu · 9:30 AM", "Fri · 4:00 PM",
];


type FloatingInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  textarea?: boolean;
  rows?: number;
};

function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  rows = 4,
}: FloatingInputProps) {  const [focus, setFocus] = useState(false);
  const active = focus || value;
  const Field = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Field
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={textarea ? rows : undefined}
        className={cx(
          "peer w-full bg-white border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-[#0f172a]",
          "focus:border-[#0e1b30] focus:outline-none focus:ring-2 focus:ring-[#00c9b1]/20 transition-all",
          textarea ? "resize-none" : ""
        )}
      />
      <label
        className={cx(
          "absolute left-4 pointer-events-none transition-all duration-200",
          active ? "top-1.5 text-[10px] uppercase tracking-[0.2em] text-[#00c9b1] font-semibold" : "top-4 text-sm text-gray-400"
        )}
      >
        {label}
      </label>
    </div>
  );
}

// ── BOOKING MODAL — Fixed for mobile as a proper bottom sheet ─────────────────
type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

function BookingModal({ open, onClose }: BookingModalProps) {  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "", budget: "", timeline: "", priority: "",
    name: "", email: "", company: "", slot: "",
  });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep(0); setDone(false);
        setData({ service: "", budget: "", timeline: "", priority: "", name: "", email: "", company: "", slot: "" });
      }, 300);
      return () => clearTimeout(t);
    }
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const update = (k: string, v: string) =>
    setData((d) => ({ ...d, [k]: v }));
  const steps = [
    { label: "Focus", valid: !!data.service },
    { label: "Scope", valid: !!data.budget && !!data.timeline },
    { label: "You", valid: !!(data.name && data.email) },
    { label: "Time", valid: !!data.slot },
  ];

  const progress = ((step + 1) / steps.length) * 100;

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
    } catch (err) {
      console.error(err);
    }
  };

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else handleSubmit();
  };

  return (
    <div
      data-testid="booking-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0e1b30]/85 backdrop-blur-md"
      />

      {/* Sheet — slides up from bottom on mobile, centred dialog on sm+ */}
      <div
        className={cx(
          "relative w-full bg-white shadow-2xl border border-white/10",
          /* Mobile: bottom sheet with rounded top corners, full width, max height 92vh */
          "rounded-t-[28px] sm:rounded-3xl",
          "sm:max-w-2xl",
          "max-h-[92vh] overflow-y-auto"
        )}
        style={{ animation: "slideUp 0.3s cubic-bezier(0.32,0.72,0,1)" }}
      >
        {/* Drag handle — mobile only */}
        <div className="flex justify-center pt-3 pb-0 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          data-testid="booking-modal-close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10 transition"
        >
          <X size={17} className="text-[#0f172a]" />
        </button>

        {/* Header */}
        <div className="bg-[#0e1b30] px-5 sm:px-8 pt-5 sm:pt-8 pb-5 sm:pb-6 text-white">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#00c9b1] mb-3">
            <Sparkles size={13} />
            Strategy Call · 30 min
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl sm:text-4xl font-extrabold">
              {String(step + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <p className="text-base sm:text-lg font-semibold">
                {done ? "You're all set" : steps[step].label}
              </p>
              <p className="text-white/50 text-xs sm:text-sm">
                {done ? "We'll confirm your slot shortly." : "Takes under 60 seconds."}
              </p>
            </div>
          </div>
          {/* Desktop progress bar */}
<div className="hidden sm:block h-1 bg-white/10 rounded-full overflow-hidden">
  <div
    className="h-full bg-[#00c9b1] transition-all duration-500 ease-out"
    style={{ width: done ? "100%" : `${progress}%` }}
  />
</div>
          {/* Step dots on mobile */}
          <div className="flex gap-1.5 mt-3 sm:hidden">
            {steps.map((_, i) => (
              <div
                key={i}
                className="h-1 flex-1 rounded-full transition-all duration-300"
                style={{ background: i <= step ? "#00c9b1" : "rgba(255,255,255,0.15)" }}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-8 py-6 sm:py-10 min-h-[260px]">
          {done ? (
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#00c9b1] flex items-center justify-center mb-5" style={{ animation: "pop 0.4s ease" }}>
                <Check size={26} className="text-[#0e1b30]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                Booked — see you {data.slot.split(" · ")[0]}
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                A calendar invite is heading to <b>{data.email}</b>. We'll review your goals and come prepared with ideas.
              </p>
            </div>
          ) : step === 0 ? (
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-5">What should we focus on?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => {
                  const active = data.service === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => update("service", s.id)}
                      data-testid={`service-${s.id}`}
                      className={cx(
                        "text-left p-4 rounded-2xl border-2 transition-all w-full",
                        active ? "border-[#00c9b1] bg-[#00c9b1]/5" : "border-gray-200 hover:border-gray-300"
                      )}
                    >
                      <s.icon size={20} className={active ? "text-[#00c9b1]" : "text-[#0f172a]"} />
                      <p className="font-semibold text-[#0f172a] mt-2 text-sm">{s.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : step === 1 ? (
            <div className="space-y-7">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Budget</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      onClick={() => update("budget", b)}
                      className={cx(
                        "p-3 rounded-2xl border-2 text-sm font-medium transition-all flex items-center justify-center",
                        data.budget === b ? "border-[#00c9b1] bg-[#00c9b1]/5 text-[#0f172a]" : "border-gray-200 hover:border-gray-300 text-gray-600"
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Timeline</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      onClick={() => update("timeline", t)}
                      className={cx(
                        "p-3 rounded-2xl border-2 text-sm font-medium transition-all flex items-center justify-center",
                        data.timeline === t ? "border-[#00c9b1] bg-[#00c9b1]/5 text-[#0f172a]" : "border-gray-200 hover:border-gray-300 text-gray-600"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Priority</p>
                <div className="grid grid-cols-3 gap-2.5">
                  {["Speed", "Quality", "Cost"].map((p) => (
                    <button
                      key={p}
                      onClick={() => update("priority", p)}
                      className={cx(
                        "p-3 rounded-xl border text-sm transition-all",
                        data.priority === p ? "bg-[#0e1b30] text-white border-[#0e1b30]" : "border-gray-200 text-gray-600 hover:border-gray-300"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-4">
              <FloatingInput label="Full Name" value={data.name} onChange={(v) => update("name", v)} />
              <FloatingInput label="Work Email" type="email" value={data.email} onChange={(v) => update("email", v)} />
              <FloatingInput label="Company (optional)" value={data.company} onChange={(v) => update("company", v)} />
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-5">Pick a slot that works</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => update("slot", s)}
                    className={cx(
                      "flex items-center gap-2 p-3.5 rounded-xl border-2 transition text-left",
                      data.slot === s ? "border-[#00c9b1] bg-[#00c9b1]/5" : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Clock size={14} className={data.slot === s ? "text-[#00c9b1]" : "text-gray-400"} />
                    <span className="text-xs font-medium text-[#0f172a]">{s}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer nav */}
        {!done && (
          <div className="px-5 sm:px-8 py-4 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => step > 0 && setStep(step - 1)}
              disabled={step === 0}
              className={cx("text-sm font-medium transition", step === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-[#0f172a]")}
            >
              Back
            </button>
            <button
              onClick={next}
              disabled={!steps[step].valid}
              data-testid="booking-next-btn"
              className={cx(
                "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition text-sm",
                steps[step].valid ? "bg-[#00c9b1] text-[#0e1b30] hover:bg-[#00d9c0]" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              {step === steps.length - 1 ? "Confirm" : "Continue"}
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop {
          0%   { transform: scale(0.3); opacity: 0; }
          60%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .check-path {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: drawCheck 0.5s ease forwards;
          animation-delay: 0.3s;
        }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        .animate-scaleIn { animation: scaleIn 0.4s ease forwards; }
        .animate-ripple { animation: ripple 1s ease-out infinite; }
      `}</style>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const time = useISTClock();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "", WebsiteURL: "", email: "", company: "", service: "", message: "",
  });
  const [status, setStatus] = useState<
  "idle" | "loading" | "success" | "error"
>("idle");

  const onChange = (k: string, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));
  const submit = async (e: FormEvent<HTMLFormElement>) => {    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ firstName: "", WebsiteURL: "", email: "", company: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const serviceChips = ["SEO", "Web Development", "Performance Marketing", "Social-Media Marketing", "Not sure"];

  return (
    <>
      {/* ── HERO (shared — works on all screens) ── */}
      <section
        className="relative bg-[#0e1b30] pt-32 overflow-hidden flex flex-col"
        data-testid="contact-hero"
      >
        {/* Starfield */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 12% 18%, #fff, transparent),
                radial-gradient(1px 1px at 27% 44%, #fff, transparent),
                radial-gradient(1px 1px at 41% 12%, #fff, transparent),
                radial-gradient(1px 1px at 55% 33%, #fff, transparent),
                radial-gradient(1px 1px at 68% 8%,  #fff, transparent),
                radial-gradient(1px 1px at 77% 25%, #fff, transparent),
                radial-gradient(1px 1px at 84% 48%, #fff, transparent),
                radial-gradient(1px 1px at 92% 20%, #fff, transparent),
                radial-gradient(1px 1px at 8% 55%,  #fff, transparent),
                radial-gradient(1px 1px at 19% 70%, #fff, transparent),
                radial-gradient(1px 1px at 34% 62%, #fff, transparent),
                radial-gradient(1px 1px at 48% 78%, #fff, transparent),
                radial-gradient(1px 1px at 62% 54%, #fff, transparent),
                radial-gradient(1px 1px at 73% 68%, #fff, transparent),
                radial-gradient(1px 1px at 88% 74%, #fff, transparent),
                radial-gradient(1px 1px at 96% 62%, #fff, transparent)
              `,
              animation: "twinkle 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage: `
                radial-gradient(2px 2px at 23% 22%, #fff 0%, rgba(255,255,255,0.2) 40%, transparent 70%),
                radial-gradient(2px 2px at 64% 18%, #fff 0%, rgba(255,255,255,0.2) 40%, transparent 70%),
                radial-gradient(2.5px 2.5px at 82% 38%, #fff 0%, rgba(0,201,177,0.5) 40%, transparent 70%),
                radial-gradient(2px 2px at 15% 65%, #fff 0%, rgba(255,255,255,0.2) 40%, transparent 70%),
                radial-gradient(2px 2px at 78% 60%, #fff 0%, rgba(255,255,255,0.2) 40%, transparent 70%)
              `,
              animation: "twinkle2 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Aurora band */}
        <div
          className="absolute inset-x-0 top-[35%] h-[55%] pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(0,201,177,0.30) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 75% 60%, rgba(241,90,34,0.15) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        {/* Shooting star */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute"
            style={{
              top: "22%", left: "-10%", width: "140px", height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(0,201,177,0.9), #fff)",
              filter: "drop-shadow(0 0 6px rgba(0,201,177,0.8))",
              transform: "rotate(-18deg)",
              animation: "shoot 12s ease-in infinite",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center pb-28 pt-1 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/80 text-xs uppercase tracking-[0.25em] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00c9b1] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c9b1]" />
            </span>
            Get In Touch
          </div>
          <h1 className="font-bold text-white leading-[1.05] mb-6 tracking-tight" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
            Let&apos;s Find What’s
            <span className="block mt-2">
              <span className="italic font-serif font-normal text-[#00c9b1]">Blocking&nbsp;</span>
              <span className="text-[#00c9b1]">Your Growth</span>
              <span className="text-[#f15a22]">.</span>
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mx-auto">
          Tell us where growth feels stuck, whether it is search visibility, performance marketing, website conversions, content, social media, or the overall digital direction. We’ll review your message and help you understand the smartest next step, not push a generic package.
          </p>
        </div>

        {/* City skyline */}
        <div className="relative w-full pointer-events-none">
          <div className="absolute inset-x-0 bottom-[55px] h-20 opacity-50" style={{ background: "radial-gradient(ellipse 55% 100% at 50% 100%, rgba(0,201,177,0.35), transparent 70%)", filter: "blur(20px)" }} />
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-[140px] md:h-[170px] block absolute inset-x-0 bottom-[55px]" aria-hidden="true">
            <path d="M0,180 L0,120 L40,120 L40,95 L70,95 L70,130 L110,130 L110,80 L140,80 L140,110 L180,110 L180,90 L220,90 L220,115 L260,115 L260,70 L300,70 L300,100 L340,100 L340,85 L380,85 L380,125 L420,125 L420,95 L470,95 L470,110 L510,110 L510,75 L550,75 L550,105 L590,105 L590,90 L640,90 L640,120 L680,120 L680,85 L720,85 L720,100 L770,100 L770,70 L810,70 L810,115 L850,115 L850,90 L900,90 L900,105 L940,105 L940,80 L980,80 L980,120 L1020,120 L1020,95 L1070,95 L1070,85 L1110,85 L1110,110 L1150,110 L1150,75 L1200,75 L1200,105 L1240,105 L1240,90 L1290,90 L1290,115 L1330,115 L1330,80 L1380,80 L1380,110 L1440,110 L1440,180 Z" fill="#152238" />
          </svg>
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="w-full h-[110px] md:h-[130px] block relative" aria-hidden="true">
            <defs><filter id="ridgeGlow2"><feGaussianBlur stdDeviation="1.5" /></filter></defs>
            <path d="M0,80 L60,80 L60,55 L100,55 L100,70 L150,70 L150,40 L200,40 L200,60 L250,60 L250,30 L310,30 L310,55 L370,55 L370,45 L420,45 L420,70 L470,70 L470,35 L530,35 L530,50 L590,50 L590,25 L650,25 L650,55 L710,55 L710,40 L770,40 L770,60 L830,60 L830,30 L890,30 L890,50 L950,50 L950,35 L1010,35 L1010,60 L1070,60 L1070,40 L1130,40 L1130,55 L1190,55 L1190,30 L1250,30 L1250,50 L1310,50 L1310,65 L1370,65 L1370,45 L1440,45 L1440,140 L0,140 Z" fill="#0a1324" />
            {[[75,65],[165,55],[215,70],[270,45],[325,65],[445,60],[485,50],[545,65],[605,40],[665,70],[725,55],[785,70],[845,45],[905,60],[965,50],[1025,70],[1085,55],[1145,65],[1205,45],[1265,60],[1325,75],[1385,55]].map(([x,y],i) => (
              <rect key={i} x={x} y={y} width="2" height="2" fill="#00c9b1" opacity="0.85" style={{ animation: `winBlink ${3+(i%4)}s ease-in-out ${i*0.2}s infinite` }} />
            ))}
          </svg>
        </div>

        <style>{`
          @keyframes twinkle  { 0%,100% { opacity: 0.3; } 50% { opacity: 0.9; } }
          @keyframes twinkle2 { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
          @keyframes shoot {
            0%   { transform: translate(0, 0) rotate(-18deg); opacity: 0; }
            6%   { opacity: 1; }
            22%  { transform: translate(130vw, 40vh) rotate(-18deg); opacity: 0; }
            100% { transform: translate(130vw, 40vh) rotate(-18deg); opacity: 0; }
          }
          @keyframes winBlink { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════
          DESKTOP MAIN — BYTE-FOR-BYTE UNCHANGED
          Padding fix: max-w-7xl + clamp() so wide monitors
          don't create dead white gutters outside the grid.
          ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 lg:py-24 hidden lg:block" data-testid="contact-main">
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 clamp(32px, 4vw, 80px)",
          }}
        >
          <div className="lg:grid lg:grid-cols-12 gap-16">
            {/* LEFT */}
            <div className="lg:col-span-5 px-16 space-y-12">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#00c9b1] font-semibold mb-3">Say Hello</p>
                <h2 className="text-3xl font-bold text-[#0f172a] leading-tight">
                  Three simple ways to<br />start a conversation.
                </h2>
              </div>
              <div>
                <InfoRow icon={Mail} label="Email" value="info@webedigital.com" />
                <InfoRow icon={Phone} label="Phone" value="+91 93760 91963" />
                <InfoRow icon={MapPin} label="Location" value="Kota, Rajasthan, India" />
              </div>
              <div className="relative bg-[#0f172a] text-white p-8 rounded-3xl overflow-hidden group" data-testid="cta-card">
                <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: "conic-gradient(from 0deg, transparent, rgba(0,201,177,0.6), transparent 30%, transparent 70%, rgba(241,90,34,0.4), transparent)", animation: "spin 8s linear infinite" }} />
                <div className="absolute inset-[1px] bg-[#0f172a] rounded-3xl" />
                <div className="absolute -top-20 -right-10 w-64 h-64 rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, #00c9b1 0%, transparent 60%)" }} />
                <div className="relative">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#00c9b1] mb-4"><Zap size={14} /> Fast Lane</div>
                  <h4 className="text-2xl font-bold mb-3 leading-tight">Prefer a<br />quick strategy call?</h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">Book a short call and walk away with practical clarity on what needs attention first, whether that is your website, SEO, ads, content, or conversion flow.</p>
                  <button onClick={() => setBookingOpen(true)} data-testid="book-meeting-btn" className="group/btn inline-flex items-center gap-3 bg-[#00c9b1] text-[#0e1b30] px-6 py-3 rounded-full font-semibold hover:bg-white transition-all hover:gap-4">
                    <Calendar size={16} />
                    Book a Meeting
                    <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform" />
                  </button>
                </div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 px-16">
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 lg:p-12 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.12)]" data-testid="contact-form-card">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00c9b1]/10 rounded-bl-[60px] rounded-tr-3xl" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f15a22] font-semibold mb-3">Project Brief</p>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0f172a] mb-2">Tell us what you want to improve</h2>
                  <p className="text-gray-500 text-sm mb-10">It takes around 2 minutes. Reviewed by our team, not an automated bot.</p>
                  {status === "success" ? (
                    <div className="py-10 text-center">
                      <div className="relative flex items-center justify-center mb-6">
                        <span className="absolute w-20 h-20 rounded-full border-2 border-[#00c9b1]/30 animate-ripple" />
                        <div className="w-14 h-14 rounded-full bg-[#00c9b1] flex items-center justify-center animate-scaleIn shadow-[0_10px_40px_rgba(0,201,177,0.4)]">
                          <svg viewBox="0 0 40 40" className="w-7 h-7">
                            <polyline points="8,20 17,29 32,12" fill="none" stroke="#0e1b30" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="check-path" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2">Message received</h3>
                      <p className="text-gray-500 mb-6 max-w-sm mx-auto">We&apos;ll get back to you within 24 hours with a clear next step.</p>
                      <button onClick={() => setStatus("idle")} className="text-sm font-medium text-[#00c9b1] hover:underline">Send another →</button>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
                      <div className="grid grid-cols-2 gap-4">
                        <FloatingInput label="First Name" value={form.firstName} onChange={(v) => onChange("firstName", v)} />
                        <FloatingInput label="Website URL" value={form.WebsiteURL} onChange={(v) => onChange("WebsiteURL", v)} />
                      </div>
                      <FloatingInput label="Email Address" type="email" value={form.email} onChange={(v) => onChange("email", v)} />
                      <FloatingInput label="Company Name" value={form.company} onChange={(v) => onChange("company", v)} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">What do you need?</p>
                        <div className="flex flex-wrap gap-2">
                          {serviceChips.map((s) => (
                            <button key={s} type="button" onClick={() => onChange("service", s)} data-testid={`service-chip-${s.toLowerCase().replace(/\s/g, "-")}`}
                              className={cx("px-4 py-2 rounded-full border text-sm transition-all", form.service === s ? "bg-[#0e1b30] text-white border-[#0e1b30]" : "border-gray-300 text-gray-600 hover:border-[#0e1b30] hover:text-[#0e1b30]")}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <FloatingInput label="Tell us about your website, current goal, growth blocker, timeline, or the result you want to achieve." textarea rows={4} value={form.message} onChange={(v) => onChange("message", v.slice(0, 500))} />
                        <div className="flex justify-between mt-2 text-xs text-gray-400">
                          <span>{status === "error" && <span className="text-[#f15a22]">Something went wrong. Try again.</span>}</span>
                          <span>{form.message.length}/500</span>
                        </div>
                      </div>
                      <button type="submit" disabled={status === "loading"} data-testid="submit-inquiry-btn"
                        className="group w-full bg-[#f15a22] hover:bg-[#e14d18] disabled:opacity-70 text-white font-semibold py-4 rounded-xl transition-all inline-flex items-center justify-center gap-3 hover:gap-4">
                        {status === "loading" ? (<><Loader2 size={18} className="animate-spin" />Sending...</>) : (<>Send Project Brief<ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>)}
                      </button>
                      <p className="text-center text-xs text-gray-400 pt-2">By submitting, you agree to our <a href="#" className="underline hover:text-[#0f172a]">privacy policy</a>.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MOBILE CONTACT — INNOVATIVE REDESIGN
          Order as requested: FORM first → info + booking CTA
          Everything in a clean single column with generous
          padding, clear section separation, and breathing room.
          ══════════════════════════════════════════════════════ */}
      <section className="block lg:hidden bg-white" data-testid="contact-main-mobile">
        <div className="px-5 pt-10 pb-16 space-y-6">

          {/* ── 1. CONTACT FORM — comes first on mobile ── */}
          <div>
            {/* Section label with orange accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-10 rounded-full bg-[#f15a22]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f15a22] font-bold">Project Brief</p>
                <h2 className="text-xl font-extrabold text-[#0f172a] leading-tight">Send us a message</h2>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-6 pl-4">Filled in 2 minutes. Reviewed by a human, not a bot.</p>

            {status === "success" ? (
              <div className="bg-gray-50 rounded-2xl py-12 text-center px-6">
                <div className="relative flex items-center justify-center mb-5">
                  <span className="absolute w-16 h-16 rounded-full border-2 border-[#00c9b1]/30 animate-ripple" />
                  <div className="w-12 h-12 rounded-full bg-[#00c9b1] flex items-center justify-center animate-scaleIn">
                    <svg viewBox="0 0 40 40" className="w-6 h-6">
                      <polyline points="8,20 17,29 32,12" fill="none" stroke="#0e1b30" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="check-path" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Message received</h3>
                <p className="text-gray-500 text-sm mb-5">We'll get back within 24 hours with a clear next step.</p>
                <button onClick={() => setStatus("idle")} className="text-sm font-medium text-[#00c9b1] hover:underline">Send another →</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4" data-testid="contact-form">
                <div className="grid grid-cols-2 gap-3">
                  <FloatingInput label="First Name" value={form.firstName} onChange={(v) => onChange("firstName", v)} />
                  <FloatingInput label="Website URL" value={form.WebsiteURL} onChange={(v) => onChange("WebsiteURL", v)} />
                </div>
                <FloatingInput label="Email Address" type="email" value={form.email} onChange={(v) => onChange("email", v)} />
                <FloatingInput label="Company Name" value={form.company} onChange={(v) => onChange("company", v)} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">What do you need?</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceChips.map((s) => (
                      <button key={s} type="button" onClick={() => onChange("service", s)}
                        data-testid={`service-chip-${s.toLowerCase().replace(/\s/g, "-")}`}
                        className={cx("px-3 py-2 rounded-full border text-xs font-medium transition-all", form.service === s ? "bg-[#0e1b30] text-white border-[#0e1b30]" : "border-gray-300 text-gray-600 hover:border-[#0e1b30]")}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <FloatingInput label="Tell us about your website, current goal, growth blocker, timeline, or the result you want to achieve." textarea rows={4} value={form.message} onChange={(v) => onChange("message", v.slice(0, 500))} />
                  <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                    <span>{status === "error" && <span className="text-[#f15a22]">Something went wrong. Try again.</span>}</span>
                    <span>{form.message.length}/500</span>
                  </div>
                </div>
                <button type="submit" disabled={status === "loading"} data-testid="submit-inquiry-btn"
                  className="w-full bg-[#f15a22] hover:bg-[#e14d18] disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all inline-flex items-center justify-center gap-2 text-sm tracking-wide">
                  {status === "loading" ? (<><Loader2 size={16} className="animate-spin" />Sending...</>) : (<>Send Project Brief <ArrowRight size={16} /></>)}
                </button>
                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our <a href="#" className="underline hover:text-[#0f172a]">privacy policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* ── Divider with "or" label ── */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium tracking-wide px-2">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* ── 3. CONTACT INFO ── */}
          <div>
            <div className="flex items-center gap-3 mb-5 mt-2">
              <div className="w-1 h-10 rounded-full bg-[#00c9b1]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#00c9b1] font-bold">Say Hello</p>
                <h2 className="text-xl font-extrabold text-[#0f172a] leading-tight">Three ways to connect</h2>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl divide-y divide-gray-100 overflow-hidden">
              {[
                { icon: Mail, label: "Email", value: "hello@webedigital.com", href: "mailto:hello@webedigital.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: MapPin, label: "Location", value: "Kota, Rajasthan, India", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00c9b1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00c9b1]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#00c9b1]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold">{label}</p>
                    <p className="text-[#0f172a] font-medium text-sm truncate">{value}</p>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-[#00c9b1] flex-shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* ── 2. BOOK A MEETING CTA ── */}
          <div className="relative bg-[#0f172a] text-white rounded-2xl p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "conic-gradient(from 0deg, transparent, rgba(0,201,177,0.6), transparent 30%, transparent 70%, rgba(241,90,34,0.4), transparent)", animation: "spin 8s linear infinite" }} />
            <div className="absolute inset-[1px] bg-[#0f172a] rounded-2xl" />
            <div className="absolute -top-12 -right-6 w-36 h-36 rounded-full opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, #00c9b1 0%, transparent 60%)" }} />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#00c9b1] mb-3">
                <Zap size={13} /> Fast Lane
              </div>
              <h4 className="text-lg font-bold mb-2 leading-snug">Prefer a quick discussion?</h4>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Book a 30-min strategy call. Walk away with actionable insights — no pitch, no fluff.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                data-testid="book-meeting-btn"
                className="inline-flex items-center gap-2 bg-[#00c9b1] text-[#0e1b30] px-5 py-3 rounded-full font-bold text-sm w-full justify-center transition-all"
              >
                <Calendar size={15} />
                Book a Meeting
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          

        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}