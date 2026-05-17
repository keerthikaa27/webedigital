import Link from "next/link";
import { BrandMark } from "@/components/site-shell/brand-mark";
import { Container } from "@/components/site-shell/container";
import { primaryNavigation } from "@/data/navigation";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/webedigitalseo/" },
  { label: "Twitter", href: "#" },
];

const services = [
  {
    label: "Search Engine Optimization",
    href: "/services/seo-geo",
  },
  {
    label: "Performance Marketing",
    href: "/services/performance-marketing",
  },
  {
    label: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    label: "Web Design & Development",
    href: "/services/web-development",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#080b20] text-white relative overflow-hidden">

      {/* Subtle top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#02bbfe] to-transparent opacity-60" />

      {/* ══════════════════════════════════════════════════════════
          DESKTOP  (md and above) — BYTE-FOR-BYTE UNCHANGED
          Padding fix: maxWidth raised + clamp() horizontal padding
          so on large monitors the content tracks the viewport width
          instead of hard-stopping and leaving dark dead gutters.
          ══════════════════════════════════════════════════════════ */}
      <div
        className="hidden md:block"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(32px, 5vw, 80px)",
        }}
      >
        <Container className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_1fr_1.2fr]">

            {/* Col 1 – Brand */}
            <div className="space-y-6">
              <BrandMark light />
              <p className="text-[13px] leading-[1.8] text-white/55 max-w-[280px]">
                Webe Digital is a performance-driven marketing agency helping brands scale through strategy, creativity, and data.
              </p>
              <div className="space-y-2 pt-2">
                <a
                  href="mailto:hello@webedigital.com"
                  className="flex items-center gap-2.5 text-[13px] text-white/65 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-[#ff3b5c]/20 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  info@webedigital.com
                </a>
                <a
                  href="tel:+91 9376091963"
                  className="flex items-center gap-2.5 text-[13px] text-white/65 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-[#ff3b5c]/20 transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </span>
                  +91 9376091963
                </a>
              </div>
            </div>

            {/* Col 2 – Navigation */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#02bbfe] mb-6">
                Navigate
              </h3>
              <ul className="space-y-3">
                {primaryNavigation.map((group) => (
                  <li key={group.label}>
                    <Link
                      href={group.href ?? group.children?.[0]?.href ?? "/"}
                      className="text-[13px] text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 opacity-0 group-hover:opacity-100 text-[#02bbfe]">→</span>
                      {group.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 – Services */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#02bbfe] mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[13px] text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 opacity-0 group-hover:opacity-100 text-[#02bbfe]">→</span>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 – Newsletter + Socials */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#02bbfe] mb-6">
                Stay in the Loop
              </h3>
              <p className="text-[13px] text-white/55 leading-[1.75] mb-5">
                Get marketing insights, case studies, and agency updates — straight to your inbox.
              </p>
              <div className="flex gap-0 mb-8">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/6 border border-white/12 rounded-l-lg px-4 py-2.5 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#02bbfe]/50 transition-colors"
                />
                <button className="bg-[#02bbfe] hover:bg-[#02bbfe] transition-colors text-white text-[12px] font-semibold px-4 py-2.5 rounded-r-lg tracking-wide">
                  JOIN
                </button>
              </div>
              <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/40 mb-3">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[11px] font-medium text-white/55 hover:text-white border border-white/12 hover:border-[#02bbfe]/50 hover:bg-[#ff3b5c]/8 rounded-md px-3 py-1.5 transition-all tracking-wide"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
              © 2026 Webe Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE  (below md)
          Layout requested:
          • Col 1 (Brand + contact)   — full width, centred
          • Col 2 (Navigate) + Col 3 (Services) — side by side, equal width
          • Col 4 (Newsletter + Socials) — full width, centred
          • Bottom bar — centred on mobile
          ══════════════════════════════════════════════════════════ */}
      <div className="block md:hidden px-6 py-14">

        {/* ── COL 1: Brand — centred ── */}
        <div className="flex flex-col items-center text-center space-y-5 mb-10">
          <BrandMark light />
          <p className="text-[13px] leading-[1.8] text-white/55 max-w-[280px]">
            Webe Digital is a performance-driven marketing agency helping brands scale through strategy, creativity, and data.
          </p>
          {/* Contact — centred */}
          <div className="flex flex-col items-center gap-3 pt-1">
            <a
              href="mailto:info@webedigital.com"
              className="flex items-center gap-2.5 text-[13px] text-white/65"
            >
              <span className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              info@webedigital.com
            </a>
            <a
              href="tel:+91 9376091963"
              className="flex items-center gap-2.5 text-[13px] text-white/65"
            >
              <span className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </span>
              +91 9376091963
            </a>
          </div>
        </div>

        {/* Thin divider */}
        <div className="border-t border-white/8 mb-10" />

        {/* ── COL 2 + COL 3: Navigate & Services — side by side ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-10">

          {/* Navigate */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#02bbfe] mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {primaryNavigation.map((group) => (
                <li key={group.label}>
                  <Link
                    href={group.href ?? group.children?.[0]?.href ?? "/"}
                    className="text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {group.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#02bbfe] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors leading-snug block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Thin divider */}
        <div className="border-t border-white/8 mb-10" />

        {/* ── COL 4: Newsletter + Socials — centred ── */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#02bbfe] mb-4">
            Stay in the Loop
          </h3>
          <p className="text-[13px] text-white/55 leading-[1.75] mb-5 max-w-[300px]">
            Get marketing insights, case studies, and agency updates — straight to your inbox.
          </p>

          {/* Email input — full width */}
          <div className="flex w-full max-w-[320px] mb-8">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/6 border border-white/12 rounded-l-lg px-4 py-2.5 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#02bbfe]/50 transition-colors"
            />
            <button className="bg-[#02bbfe] text-white text-[12px] font-semibold px-4 py-2.5 rounded-r-lg tracking-wide">
              JOIN
            </button>
          </div>

          {/* Socials */}
          <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/40 mb-3">
            Follow Us
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] font-medium text-white/55 hover:text-white border border-white/12 hover:border-[#02bbfe]/50 rounded-md px-3 py-1.5 transition-all tracking-wide"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar — centred on mobile ── */}
        <div className="mt-12 border-t border-white/8 pt-7 flex flex-col items-center gap-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
            © 2026 Webe Digital. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[11px] text-white/30 hover:text-white/60 transition-colors tracking-wide"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}