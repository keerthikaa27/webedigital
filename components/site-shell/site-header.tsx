"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GetAQuoteDrawer } from "@/components/GetAQuoteDrawer";


const servicesLinks = [
  { label: "SEO Services", href: "/services/seo-geo" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Web Design & Development", href: "/services/web-development" },
];

type DropdownKey = "about" | "services" | "resources" | null;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-1 h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Dropdown({
  links,
  open,
}: {
  links: { label: string; href: string }[];
  open: boolean;
}) {
  return (
    <div
      className={`
        absolute left-0 top-full z-50 w-64 rounded-2xl bg-white py-3 shadow-lg
        transition-all duration-300 origin-top
        ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
      `}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="flex items-center px-5 py-2 text-[15px] text-gray-500 transition-colors hover:text-teal-600"
        >
          <span className="mr-2 text-teal-500">•</span>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

// ── MOBILE MENU OVERLAY ────────────────────────────────────────────────────────
// Concept: "Editorial split" — the menu slides in as a full-screen dark panel
// with oversized typographic nav items numbered like a magazine index.
// Each link has a teal underline that wipes in on hover.
// Services expand inline with an animated accordion.
// Bottom dock shows contact info + CTA.
// The hamburger morphs into an X with a smooth SVG path animation.

function MobileMenu({
  open,
  onClose,
  onQuote,
}: {
  open: boolean;
  onClose: () => void;
  onQuote: () => void;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Reset services accordion when menu closes
  useEffect(() => {
    if (!open) setServicesOpen(false);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navItems = [
    { num: "01", label: "About", href: "/about", hasChildren: false },
    { num: "02", label: "Services", href: "/services", hasChildren: true },
    { num: "03", label: "Blog", href: "/blog", hasChildren: false },
    { num: "04", label: "Case Studies", href: "/case-studies", hasChildren: false },
    { num: "05", label: "Contact", href: "/contact-us", hasChildren: false },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        aria-hidden="true"
      />

      {/* Panel — slides in from right */}
      <div
        className="fixed inset-y-0 right-0 z-[70] w-full max-w-[340px] lg:hidden flex flex-col"
        style={{
          background: "linear-gradient(160deg, #0d1b2a 0%, #0f2336 60%, #0a1a2e 100%)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
          boxShadow: open ? "-20px 0 60px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Top bar inside panel */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          {/* Mini brand mark */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 46 46" fill="none">
              <rect x="2" y="6" width="42" height="6" rx="3" fill="#2EC4B6" />
              <rect x="2" y="16" width="32" height="6" rx="3" fill="#2EC4B6" />
              <rect x="2" y="26" width="24" height="6" rx="3" fill="#2EC4B6" />
              <rect x="2" y="36" width="16" height="6" rx="3" fill="#2EC4B6" />
            </svg>
            <div className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight text-white">Webe</span>
              <span className="-mt-0.5 block text-[7px] font-bold uppercase tracking-[0.25em] text-[#2EC4B6]">Digital</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-[#2EC4B6]/50 hover:text-[#2EC4B6] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Teal divider line */}
        <div
          className="mx-6 h-px"
          style={{
            background: "linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.1))",
            opacity: open ? 1 : 0,
            transition: "opacity 0.3s ease 0.2s",
          }}
        />

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-6 pt-6">
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li key={item.label}>
                {item.hasChildren ? (
                  /* Services — accordion */
                  <div>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="group flex w-full items-center justify-between py-3"
                      style={{
                        opacity: open ? 1 : 0,
                        transform: open ? "translateX(0)" : "translateX(24px)",
                        transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
                      }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span
                          className="text-[10px] font-bold tracking-[0.2em] tabular-nums"
                          style={{ color: "#2EC4B6" }}
                        >
                          {item.num}
                        </span>
                        <span className="text-[20px] font-bold leading-none text-white group-hover:text-[#2EC4B6] transition-colors duration-200">
                          {item.label}
                        </span>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={servicesOpen ? "#2EC4B6" : "rgba(255,255,255,0.4)"}
                        strokeWidth="2.5" strokeLinecap="round"
                        style={{ transform: servicesOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s ease, stroke 0.2s" }}
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>

                    {/* Accordion sub-items */}
                    <div
                      style={{
                        maxHeight: servicesOpen ? `${servicesLinks.length * 52}px` : "0",
                        overflow: "hidden",
                        transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <ul
                        className="pl-8 pb-2 space-y-0.5"
                        style={{
                          borderLeft: "1.5px solid rgba(46,196,182,0.25)",
                          marginLeft: "6px",
                        }}
                      >
                        {servicesLinks.map((s, si) => (
                          <li key={s.label}>
                            <Link
                              href={s.href}
                              onClick={onClose}
                              className="flex items-center gap-2 py-2.5 text-[13px] font-medium text-white/55 hover:text-[#2EC4B6] transition-colors duration-150 group"
                            >
                              <span
                                className="w-1 h-1 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                                style={{ background: "#2EC4B6" }}
                              />
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Regular link */
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-3 py-3"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? "translateX(0)" : "translateX(24px)",
                      transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
                    }}
                  >
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] tabular-nums flex-shrink-0"
                      style={{ color: "#2EC4B6" }}
                    >
                      {item.num}
                    </span>
                    {/* Text with animated underline */}
                    <span className="relative text-[20px] font-bold leading-none text-white group-hover:text-[#2EC4B6] transition-colors duration-200">
                      {item.label}
                      <span
                        className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out"
                        style={{ background: "#2EC4B6" }}
                      />
                    </span>
                  </Link>
                )}

                {/* Thin separator */}
                {i < navItems.length - 1 && (
                  <div className="h-px bg-white/6" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom dock — CTA + contact snippet */}
        <div
          className="px-6 pb-8 pt-5 space-y-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.4s ease 0.45s, transform 0.4s ease 0.45s",
          }}
        >
          {/* CTA button */}
          <button
            onClick={() => { onClose(); onQuote(); }}
            className="w-52 rounded-xl bg-[#f15a29] py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-[#d94e21] active:scale-[0.98]"
          >
            Book a Growth Call
          </button>

          {/* Contact pill */}
          <Link
            href="/contact-us"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-52 rounded-xl border border-white/12 py-3 text-[12px] font-semibold text-white/55 hover:border-[#2EC4B6]/40 hover:text-[#2EC4B6] transition-all duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            hello@webedigital.com
          </Link>

          {/* Tagline */}
          <p className="text-center text-[10px] font-medium tracking-[0.15em] uppercase text-white/20">
            Performance-Driven Marketing Agency
          </p>
        </div>
      </div>
    </>
  );
}

// ── ANIMATED HAMBURGER BUTTON ──────────────────────────────────────────────────
function HamburgerButton({
  open,
  onClick,
  dark,
}: {
  open: boolean;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 lg:hidden"
      style={{
        background: open ? "rgba(46,196,182,0.12)" : "rgba(0,0,0,0.04)",
        border: open ? "1px solid rgba(46,196,182,0.3)" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        strokeLinecap="round"
        strokeWidth="2"
        stroke={open ? "#2EC4B6" : dark ? "#0d2b4e" : "#0d2b4e"}
      >
        {/* Top line — rotates to first arm of X */}
        <line
          x1="1" y1="2" x2="19" y2="2"
          style={{
            transformOrigin: "10px 2px",
            transform: open ? "rotate(45deg) translateY(5px)" : "rotate(0deg) translateY(0)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
        {/* Middle line — fades out */}
        <line
          x1="1" y1="7" x2="19" y2="7"
          style={{
            opacity: open ? 0 : 1,
            transform: open ? "scaleX(0)" : "scaleX(1)",
            transformOrigin: "center",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        />
        {/* Bottom line — rotates to second arm of X */}
        <line
          x1="1" y1="12" x2="19" y2="12"
          style={{
            transformOrigin: "10px 12px",
            transform: open ? "rotate(-45deg) translateY(-5px)" : "rotate(0deg) translateY(0)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </svg>
    </button>
  );
}

// ── SITE HEADER ────────────────────────────────────────────────────────────────
export function SiteHeader({ variant }: { variant?: "default" | "overlay" }) {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (key: DropdownKey) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav className="sticky top-0 z-50 w-full" ref={navRef}>
        <div
          className={`flex w-full items-center justify-between transition-all duration-500
  ${
    variant === "overlay"
      ? "bg-transparent shadow-none border-none absolute top-0 left-0"
      : "bg-white shadow-[0_6px_25px_rgba(0,0,0,0.05)]"
  }

  h-auto px-5 py-4
  lg:h-[120px] lg:px-12 lg:py-0
`}
        >
          {/* Logo */}
          {/* Logo */}
<Link href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="WebeDigital"
    className="h-[42px] w-auto object-contain lg:h-[42px]"
  />
</Link>
          {/* ── DESKTOP NAV — UNCHANGED ── */}
          <div className="hidden items-center gap-8 lg:flex">
            <div className="relative">
              <Link
                href="/about"
                className="text-[14px] font-semibold uppercase tracking-wide text-[#0d2b4e] hover:text-[#2db89a]"
              >
                About
              </Link>
            </div>

            <div className="relative">
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  onClick={() => setActiveDropdown(null)}
                  className={`flex items-center px-4 py-2 text-[15px] font-semibold uppercase tracking-wide transition-colors ${
                    activeDropdown === "services"
                      ? "text-teal-600"
                      : "text-[#0d2b4e] hover:text-teal-600"
                  }`}
                >
                  Services
                  <ChevronIcon open={activeDropdown === "services"} />
                </Link>
                <Dropdown links={servicesLinks} open={activeDropdown === "services"} />
              </div>
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-[15px] font-semibold uppercase tracking-wide text-[#0d2b4e] transition-colors hover:text-teal-600"
            >
              Blog
            </Link>

            <div className="relative">
              <Link
                href="/case-studies"
                className="text-[14px] font-semibold uppercase tracking-wide text-[#0d2b4e] hover:text-[#2db89a]"
              >
                Case Studies
              </Link>
            </div>

            <Link
              href="/contact-us"
              className="px-4 py-2 text-[15px] font-semibold uppercase tracking-wide text-[#0d2b4e] transition-colors hover:text-teal-600"
            >
              Contact Us
            </Link>
          </div>

          {/* ── RIGHT SIDE: desktop CTA + mobile hamburger ── */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA — hidden on mobile */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDrawerOpen(true);
              }}
              type="button"
              className="hidden lg:block rounded-lg bg-[#f15a29] px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-all hover:bg-[#d94e21]"
            >
             Book a Growth Call
            </button>

            {/* Mobile hamburger */}
            <HamburgerButton
              open={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            />
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onQuote={() => setDrawerOpen(true)}
      />

      {/* ── QUOTE DRAWER ── */}
      <GetAQuoteDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}