"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─────────────────────────────────────────────────────────────────
//  HERO
// ─────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d1628 0%, #111c38 40%, #1a2744 70%, #1e3056 100%)" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Decorative ring */}
      <div className="absolute right-[-60px] top-[-60px] w-64 h-64 rounded-full border border-white/5" />
      <div className="absolute right-[40px] top-[20px] w-4 h-4 rounded-full bg-orange-500 opacity-80" />

      {/* ══ DESKTOP HERO (lg+) — UNCHANGED ══ */}
      <div
        className="hidden lg:grid relative z-10 items-center"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px clamp(48px, 5vw, 80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {/* LEFT TEXT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#00c9b1]" />
            <span className="text-[#00c9b1] text-[11px] font-bold tracking-[0.25em] uppercase">Web Design & Development</span>
          </div>
          <h1 className="text-white font-extrabold leading-[1.05] mb-6" style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)" }}>
            Web Design and<br />Development<br />Services
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
Build a website that does more than look good. WebeDigital creates fast, responsive, SEO-friendly, and conversion-focused websites that help visitors understand your brand, trust your offer, and take the next step with confidence.
</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-widest uppercase transition-colors shadow-lg">
              LET&apos;S TALK IMPACT
            </Link>
            <Link href="/case-studies" className="border-2 border-white/25 hover:border-[#00c9b1] text-white font-semibold px-8 py-4 rounded-lg text-sm tracking-wide transition-colors">
              VIEW OUR WORK
            </Link>
          </div>
        </div>
        {/* RIGHT — blob image */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <div className="relative w-[420px] h-[420px]">
            <div className="absolute inset-[-16px] rounded-[40%_60%_55%_45%/_45%_55%_60%_40%] border border-[#00c9b1]/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-8px] rounded-[55%_45%_40%_60%/_60%_40%_45%_55%] border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "42% 58% 55% 45% / 48% 52% 62% 38%", border: "2px solid rgba(0,201,177,0.3)" }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Web design team" className="w-full h-full object-cover scale-110" style={{ filter: "brightness(0.85) saturate(1.1)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,201,177,0.25) 0%, transparent 60%)" }} />
            </div>
           
          </div>
        </div>
      </div>

      {/* ══ MOBILE HERO — REDESIGNED ══
          Flow: eyebrow → H1 → blob image → body → stats → CTAs
      */}
      <div className="lg:hidden relative z-10 flex flex-col px-5 pt-14 pb-10 min-h-[100svh] justify-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-[2px] bg-[#00c9b1]" />
          <span className="text-[#00c9b1] text-[10px] font-bold tracking-[0.28em] uppercase">Web Design & Development</span>
        </div>
        {/* H1 */}
        <h1 className="text-white font-extrabold leading-[1.07] mb-6" style={{ fontSize: "clamp(2.2rem, 9vw, 3rem)" }}>
          Web Design and<br />Development<br />Services
        </h1>
        {/* Blob image */}
        <div className="relative flex items-center justify-center mb-7" style={{ height: 260 }}>
          <div className="absolute" style={{ width: "88%", height: "88%", borderRadius: "40% 60% 55% 45% / 45% 55% 60% 40%", border: "1.5px solid rgba(0,201,177,0.2)", animation: "spin 20s linear infinite" }} />
          <div className="absolute" style={{ width: "94%", height: "94%", borderRadius: "55% 45% 40% 60% / 60% 40% 45% 55%", border: "1px solid rgba(255,255,255,0.07)", animation: "spin 15s linear infinite reverse" }} />
          <div className="relative overflow-hidden shadow-2xl" style={{ width: "72%", height: "90%", borderRadius: "42% 58% 55% 45% / 48% 52% 62% 38%", border: "2px solid rgba(0,201,177,0.25)" }}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Web design team" className="w-full h-full object-cover" style={{ filter: "brightness(0.85) saturate(1.1)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,201,177,0.2) 0%, transparent 60%)" }} />
          </div>
          
        </div>
        {/* Body */}
        <p className="text-gray-300 text-[15px] leading-relaxed mb-7">
Build a website that does more than look good. WebeDigital creates fast, responsive, SEO-friendly, and conversion-focused websites that help visitors understand your brand, trust your offer, and take the next step with confidence.
</p>
        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <Link href="/contact-us" className="bg-orange-500 text-white font-bold px-6 py-4 rounded-xl text-sm tracking-widest uppercase text-center shadow-lg">
            LET&apos;S TALK IMPACT
          </Link>
          <Link href="/case-studies" className="border-2 border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm tracking-wide text-center">
            VIEW OUR WORK
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  PAIN POINTS
// ─────────────────────────────────────────────────────────────────
function PainPointsSection() {
  const points = [
    {
      num: "1",
      title: "Low Search Visibility and Weak Page Structure",
      body: "If your website is not ranking for important keywords, the issue may not be content alone. Poor page structure, missing SEO basics, weak internal linking, slow templates, or unclear service pages can make it harder for search engines and customers to understand your website.",
    },
    {
      num: "2",
      title: "Poor Engagement and Low Conversions",
      body: "High traffic means very little if visitors leave quickly or fail to take action. We improve layout, messaging, CTAs, trust sections, forms, and user flow so your website guides people toward enquiries, purchases, bookings, or calls.",
    },
    {
      num: "3",
      title: "A Website That No Longer Matches Your Brand",
      body: "As your business matures, your website should reflect that growth. If the design looks outdated, the copy feels unclear, or the experience does not match the quality of your service, visitors may lose trust before they even speak with you.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px, 5vw, 80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div>
          <h2 className="text-[#1a1f5e] font-extrabold text-4xl leading-snug mb-6">
            Is It Time for a New Web Design and Development Strategy?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
Your website may have been built when you only needed an online presence. But as your business grows, a basic or patched-up website can start holding everything back. Your ads may send traffic to pages that do not convert. Your SEO may struggle because the structure is weak. Your visitors may leave because the message is unclear, the loading feels slow, or the experience does not feel trustworthy enough.
</p>
          <p className="text-[#00c9b1] font-bold text-lg mb-8">
If you are struggling in any of these areas, WebeDigital’s web design and development services can help:
</p>
          <div className="flex flex-col gap-8">
            {points.map((p) => (
              <div key={p.num} className="flex gap-5">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#00c9b1]/10 border border-[#00c9b1]/30 flex items-center justify-center text-[#00c9b1] font-extrabold text-sm">
                  {p.num}
                </div>
                <div>
                  <h3 className="text-[#1a1f5e] font-extrabold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT — stacked image collage */}
        <div className="relative top-36 h-[540px]">
          <div className="absolute -top-16 right-0 w-[320px] h-[380px] overflow-hidden" style={{ transform: "rotate(3deg)" }}>
            <img src="/webdev1.png" alt="Team working" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-5 left-0 w-[260px] h-[300px] overflow-hidden" style={{ transform: "rotate(-4deg)" }}>
            <img src="/webdev.png" alt="Designer" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-[-190px] right-[20px] w-[250px] h-[270px] overflow-hidden z-0 opacity-95" style={{ transform: "rotate(8deg)" }}>
            <img src="/webdev3.png" alt="Creative team" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-[160px] right-[-20px] bg-[#1a1f5e] text-white rounded-2xl px-5 py-4 shadow-2xl z-10">
            <div className="text-[10px] text-[#00c9b1] font-bold tracking-widest uppercase mb-1">Avg. Conversion Lift</div>
            <div className="text-3xl font-extrabold">+68%</div>
          </div>
          <div className="absolute top-[200px] left-[210px] w-16 h-16 bg-[#00c9b1] rounded-2xl opacity-20" />
        </div>
      </div>

      {/* ══ MOBILE PAIN POINTS — REDESIGNED ══
          Flow: H2 → intro text → teal callout → numbered point cards (full width)
          No collage images on mobile (they're local /webdev*.png files that may not load correctly sized)
          Instead: use a clean horizontal stat badge above the points
      */}
      <div className="lg:hidden px-5 py-2">
        {/* Heading */}
        <h2 className="text-[1.85rem] font-extrabold leading-tight text-[#1a1f5e] mb-5">
          Is It Time for a New Web Design Strategy?
        </h2>
        {/* Intro */}
        <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
Your website may have been built when you only needed an online presence. But as your business grows, a basic or patched-up website can start holding everything back. Your ads may send traffic to pages that do not convert. Your SEO may struggle because the structure is weak. Your visitors may leave because the message is unclear, the loading feels slow, or the experience does not feel trustworthy enough.
</p>
        {/* Teal callout */}
        <div className="rounded-2xl p-4 mb-7" style={{ background: "rgba(0,201,177,0.07)", border: "1.5px solid rgba(0,201,177,0.2)" }}>
          <p className="text-[#00c9b1] font-bold text-[14px] leading-snug">
If you are struggling in any of these areas, WebeDigital’s web design and development services can help:
</p>
        </div>
        {/* Conversion stat badge */}
        <div className="flex items-center gap-4 bg-[#1a1f5e] text-white rounded-2xl px-5 py-4 mb-7 shadow-lg">
          <div className="flex-shrink-0">
            <div className="text-3xl font-extrabold text-[#00c9b1]">+68%</div>
            <div className="text-[10px] text-gray-300 tracking-widest uppercase font-bold">Avg. Conversion Lift</div>
          </div>
          <div className="w-px h-12 bg-white/15 flex-shrink-0" />
          <p className="text-[12px] text-gray-300 leading-relaxed">Our clients see an average 68% lift in conversion rates within 6 months.</p>
        </div>
        {/* Point cards */}
        <div className="flex flex-col gap-4">
          {points.map((p) => (
            <div key={p.num} className="rounded-2xl p-5 bg-white shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#00c9b1]/10 border border-[#00c9b1]/30 flex items-center justify-center text-[#00c9b1] font-extrabold text-sm flex-shrink-0">
                  {p.num}
                </div>
                <h3 className="text-[#1a1f5e] font-extrabold text-[15px] leading-snug">{p.title}</h3>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  STRATEGIC SECTION
// ─────────────────────────────────────────────────────────────────
function StrategicSection() {
  const cards = [
    {
      icon: (
        <svg className="w-9 h-9 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      ),
      title: "Turn Visitors Into Better Leads",
      desc: "Your website should work like your best sales conversation. We structure pages so visitors quickly understand what you offer, why it matters, and what action they should take next.",
    },
    {
      icon: (
        <svg className="w-9 h-9 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      title: "Support SEO From the Foundation",
      desc: "We build websites with clean structure, crawlable pages, proper headings, internal linking, fast loading, and content sections that help your SEO work instead of fighting against it.",
    },
    {
      icon: (
        <svg className="w-9 h-9 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      ),
      title: "Make Your Brand Easier to Trust",
      desc: "Design is not just about visuals. Clear messaging, consistent branding, proof sections, smooth navigation, and polished page layouts help visitors feel more confident about your business.",
    },
    {
      icon: (
        <svg className="w-9 h-9 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47" />
        </svg>
      ),
      title: "Connect Your Marketing Channels",
      desc: "A strong website gives your SEO, ads, social media, email, and content marketing one clear destination. Every campaign performs better when the page experience is built to support it.",
    },
    {
      icon: (
        <svg className="w-9 h-9 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Create a Faster, Smoother User Experience",
      desc: "We focus on responsive layouts, mobile usability, page speed, clean navigation, and frictionless actions so users can move through your website without confusion or delay.",
    },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% -10%, #0d1628 0%, #111c38 40%, #1e3056 100%)" }}>
      {/* dot pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* curved top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>
      {/* curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        className="hidden lg:block relative py-28 pt-28"
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "112px clamp(48px, 5vw, 80px) 112px" }}
      >
        <h2 className="text-white font-extrabold text-4xl text-center mb-4">
          Win With a Strategic Approach to Web Design and Development
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
A website built without strategy is just a digital brochure. We build websites that support search, marketing, trust, and conversion together.
</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#00c9b1]/60 bg-[#00c9b1]/10 flex items-center justify-center mb-5">{c.icon}</div>
              <h3 className="text-[#00c9b1] font-extrabold text-lg mb-3">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {cards.slice(3).map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 rounded-full border-2 border-[#00c9b1]/60 bg-[#00c9b1]/10 flex items-center justify-center mb-5">{c.icon}</div>
              <h3 className="text-[#00c9b1] font-extrabold text-lg mb-3">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MOBILE STRATEGIC — REDESIGNED ══
          Heading → horizontal scrollable icon cards
      */}
      <div className="lg:hidden relative z-10 px-5 pt-24 pb-24">
        <h2 className="text-white font-extrabold text-[1.85rem] text-center leading-tight mb-3">
          Win With a Strategic Approach
        </h2>
        <p className="text-gray-400 text-[14px] text-center leading-relaxed mb-8 max-w-xs mx-auto">
A website built without strategy is just a digital brochure. We build websites that support search, marketing, trust, and conversion together.
</p>
        {/* Horizontal scroller */}
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollSnapType: "x mandatory" }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center text-center rounded-2xl p-6"
              style={{
                width: "72vw",
                maxWidth: 280,
                scrollSnapAlign: "start",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,201,177,0.18)",
              }}
            >
              {/* Icon circle — visual anchor */}
              <div className="w-16 h-16 rounded-full border-2 border-[#00c9b1]/60 bg-[#00c9b1]/10 flex items-center justify-center mb-4 flex-shrink-0">
                {c.icon}
              </div>
              <h3 className="text-[#00c9b1] font-extrabold text-[15px] mb-3 leading-snug">{c.title}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        {/* Scroll dots */}
        <div className="flex justify-center gap-2 mt-5">
          {cards.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? "#00c9b1" : "rgba(0,201,177,0.25)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  CHALLENGE SECTION
// ─────────────────────────────────────────────────────────────────
function ChallengeSection() {
  const stats = [
    { title: "Website ROI Is Hard Without Strategy", body: "A beautiful website can still underperform if it does not support search intent, clear messaging, lead capture, analytics, and conversion goals.", highlight: "underperform", color: "#f15a22" },
    { title: "Speed and Stability Affect User Experience", body: "Google’s Core Web Vitals measure loading, interactivity, and visual stability, with good-experience targets including LCP within 2.5 seconds, INP within 200 milliseconds, and CLS below 0.1", highlight: "Core Web Vitals", color: "#00c9b1" },
    { title: "Mobile Experience Cannot Be Ignored", body: "Google uses the mobile version of a site’s content for indexing and ranking, so a weak mobile experience can directly limit how well your website supports search visibility.", highlight: "indexing and ranking", color: "#1a1f5e" },
  ];

  return (
    <section className="py-24 bg-white">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px, 5vw, 80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <p className="text-[#00c9b1] font-extrabold tracking-[0.2em] text-xs uppercase mb-4">The Challenge</p>
          <h2 className="text-[#1a1f5e] font-extrabold leading-tight mb-8" style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}>
          Creating a Website That Looks Good and Actually Performs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
Designing a good website is no longer only about making the page look beautiful. A modern website has to balance visual appeal, loading speed, SEO structure, mobile experience, content clarity, and conversion flow at the same time.
</p>
          <p className="text-gray-600 leading-relaxed">
We understand this challenge because we work with businesses where the website becomes the center of every growth channel. If the website is weak, SEO becomes harder, ads become expensive, and visitors lose confidence before taking action.
</p>
        </div>
        <div className="relative top-5">
          <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full border border-gray-100" />
          <div className="absolute top-[-20px] right-[-20px] w-[140px] h-[140px] rounded-full border border-gray-100" />
          <div className="flex flex-col gap-5">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-extrabold text-base shadow-md">✕</div>
                <div>
                  <h4 className="text-[#1a1f5e] font-extrabold text-base mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ MOBILE CHALLENGE — REDESIGNED ══
          Flow: label → heading → body → stat cards with big numbers prominent
      */}
      <div className="lg:hidden px-5 py-2">
        <p className="text-[#00c9b1] font-extrabold tracking-[0.2em] text-[10px] uppercase mb-3">The Challenge</p>
        <h2 className="text-[1.85rem] font-extrabold leading-tight text-[#1a1f5e] mb-5">
          Creating a Website That Looks Good and Actually Performs
        </h2>
        <p className="text-gray-600 text-[14px] leading-relaxed mb-7">
          Designing a good website is no longer only about making the page look beautiful. A modern website has to balance visual appeal, loading speed, SEO structure, mobile experience, content clarity, and conversion flow at the same time.
        </p>
        {/* Stat cards — big number at top for instant impact */}
        <div className="flex flex-col gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              {/* Coloured number band */}
              <div className="px-5 pt-4 pb-3 flex items-center gap-4" style={{ background: `${s.color}12`, borderLeft: `4px solid ${s.color}` }}>
                <div className="text-3xl font-black" style={{ color: s.color, fontFamily: "'Poppins',sans-serif" }}>{s.highlight}</div>
                <div className="w-px h-8 bg-gray-200" />
                <h4 className="text-[#1a1f5e] font-extrabold text-[14px] leading-snug flex-1">{s.title}</h4>
              </div>
              {/* Body */}
              <div className="bg-white px-5 py-3">
                <p className="text-gray-500 text-[13px] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  SOLUTION SECTION
// ─────────────────────────────────────────────────────────────────
function SolutionSection() {
  const groups = [
    ["Website strategy and structure planning", "SEO-friendly page architecture", "Analytics and conversion tracking setup"],
    ["Shopify and WordPress development", "Service business and ecommerce websites", "Landing pages and campaign pages"],
    ["Conversion-focused page layouts", "Mobile responsive development", "Speed, UX, and technical improvements"],
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px, 5vw, 80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT — circular image */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, #00c9b1 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80" alt="Solution" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(26,31,94,0.4) 100%)" }} />
          </div>
          <div className="absolute top-[30px] right-[10px] z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00c9b1]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#00c9b1]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-semibold">Strategy</div>
                <div className="text-[#1a1f5e] text-xs font-extrabold">Complete</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[40px] left-[20px] w-14 h-14 rounded-full bg-[#00c9b1] opacity-20 z-0" />
        </div>
        {/* RIGHT */}
        <div>
          <p className="text-[#00c9b1] font-extrabold tracking-[0.2em] text-xs uppercase mb-4">The Solution</p>
          <h2 className="text-[#1a1f5e] font-extrabold leading-tight mb-8" style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}>
            Tap Into Web Design and Development to Boost Your Results
          </h2>
          <div className="flex flex-col gap-7">
            {groups.map((group, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#b5d64a] flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  {group.map((item, j) => <p key={j} className="text-gray-700 text-[15px]">{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ MOBILE SOLUTION — REDESIGNED ══
          Flow: label → heading → circular image (full width) → service group cards
      */}
      <div className="lg:hidden px-5 py-2">
        <p className="text-[#00c9b1] font-extrabold tracking-[0.2em] text-[10px] uppercase mb-3">The Solution</p>
        <h2 className="text-[1.85rem] font-extrabold leading-tight text-[#1a1f5e] mb-6">
          Tap Into Web Design to Boost Your Results
        </h2>

        {/* Circular image — centred, full-width feel */}
        <div className="relative flex justify-center mb-8">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-25"
            style={{ backgroundImage: "radial-gradient(circle, #00c9b1 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }}
          />
          <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
              alt="Solution"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(26,31,94,0.35) 100%)" }} />
          </div>
          {/* Strategy badge */}
          <div className="absolute top-4 right-6 z-20 bg-white rounded-2xl shadow-xl px-3 py-2 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#00c9b1]/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-[#00c9b1]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-[9px] text-gray-400 font-semibold">Strategy</div>
                <div className="text-[#1a1f5e] text-[10px] font-extrabold">Complete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service groups as cards */}
        <div className="flex flex-col gap-4">
          {groups.map((group, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#b5d64a] flex items-center justify-center shadow-md flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </div>
                <div className="flex flex-col gap-1">
                  {group.map((item, j) => (
                    <p key={j} className="text-gray-700 text-[14px] leading-snug">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  HOW WE HELP
// ─────────────────────────────────────────────────────────────────
const ACCORDION_ITEMS = [
  {
    title: "Brand strategy and design",
    icon: (<svg className="w-7 h-7 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535" /></svg>),
    body: "We develop comprehensive brand identities that translate seamlessly to digital. From color palettes and typography to logo placement and visual hierarchy, every design decision reinforces your brand's authority and builds trust with your audience.",
  },
  {
    title: "Website support",
    icon: (<svg className="w-7 h-7 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>),
    body: "Our ongoing support ensures your website never falls behind. We monitor performance, apply updates, fix issues, and continuously optimize to keep your site running at peak performance as your business evolves.",
  },
  {
    title: "Page layout modifications",
    icon: (<svg className="w-7 h-7 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    body: "Strategic page layout modifications improve information hierarchy, guide the user's eye toward key CTAs, and reduce friction in the conversion journey. We analyze user behaviour data to inform every layout decision.",
  },
  {
    title: "Global style updates",
    icon: (<svg className="w-7 h-7 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" /></svg>),
    body: "We implement consistent visual updates across your entire site simultaneously — typography, colour schemes, spacing, and brand elements — ensuring every page presents a cohesive, modern identity.",
  },
  {
    title: "Mobile optimization",
    icon: (<svg className="w-7 h-7 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>),
    body: "With 59% of traffic coming from mobile, your site must perform flawlessly on every screen size. We audit, rebuild, and continuously test mobile experiences to ensure speed, readability, and seamless navigation.",
  },
  {
    title: "Editing, retouching, and optimizing photography",
    icon: (<svg className="w-7 h-7 text-[#00c9b1]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>),
    body: "Visual content defines your brand's first impression. We professionally edit, optimise, and contextualise photography for web — ensuring fast load times without sacrificing the quality that builds credibility.",
  },
];

function HowWeHelpSection() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        className="hidden lg:grid"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(48px, 5vw, 80px)",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div>
          <h2 className="text-[#1a1f5e] font-extrabold text-4xl mb-4">How We Help You Get Results</h2>
          <p className="text-gray-600 mb-2 leading-relaxed">
            Based on your individual needs, we'll create a fully customized plan to help you boost your results through tailored web design and development.
          </p>
          <p className="text-gray-800 font-extrabold mb-8">
            The following are common components of a web design and development strategy:
          </p>
          <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100">
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenDesktop(openDesktop === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <span className="text-[#00c9b1] font-extrabold text-[15px]">{item.title}</span>
                  </div>
                  <span className="text-[#00c9b1] text-2xl font-light shrink-0">{openDesktop === i ? "−" : "+"}</span>
                </button>
                {openDesktop === i && (
                  <div className="px-6 pb-5 pl-[72px] text-gray-500 text-sm leading-relaxed">{item.body}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:flex flex-col items-center justify-center pt-8">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ height: "380px" }}>
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80" alt="Team reviewing web performance" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,31,94,0.5) 0%, transparent 60%)" }} />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-xs text-[#00c9b1] font-bold tracking-widest uppercase mb-1">Results Driven</div>
              <div className="text-2xl font-extrabold">Web Strategy</div>
            </div>
          </div>
          <div className="absolute top-[-10px] right-[-20px] bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 w-[200px]">
            <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">SEO Performance</div>
            <div className="flex items-end gap-1 h-12">
              {[30, 45, 35, 55, 50, 70, 80, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i >= 5 ? "#00c9b1" : "#e2e8f0" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ MOBILE HOW WE HELP — REDESIGNED ══
          Flow: heading → team image → body intro → accordion
      */}
      <div className="lg:hidden px-5 py-2">
        {/* Heading */}
        <h2 className="text-[1.85rem] font-extrabold text-[#1a1f5e] leading-tight mb-5">
          How We Help You Get Results
        </h2>

        {/* Team image — full width, rounded */}
        <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg" style={{ height: 200 }}>
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
            alt="Team reviewing web performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,31,94,0.55) 0%, transparent 60%)" }} />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-[10px] text-[#00c9b1] font-bold tracking-widest uppercase mb-0.5">Results Driven</div>
            <div className="text-lg font-extrabold">Web Strategy</div>
          </div>
          {/* Mini chart badge */}
          <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-3 w-[110px]">
            <div className="text-[9px] text-gray-400 font-bold tracking-widest uppercase mb-1.5">SEO Score</div>
            <div className="flex items-end gap-0.5 h-7">
              {[30, 45, 35, 55, 50, 70, 80, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i >= 5 ? "#00c9b1" : "#e2e8f0" }} />
              ))}
            </div>
          </div>
        </div>

        {/* Intro text */}
        <p className="text-gray-600 text-[14px] leading-relaxed mb-2">
          Based on your individual needs, we'll create a fully customized plan through tailored web design and development.
        </p>
        <p className="text-gray-800 font-extrabold text-[14px] mb-6">
          Common components of a web design strategy:
        </p>

        {/* Accordion */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 divide-y divide-gray-100">
          {ACCORDION_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenMobile(openMobile === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
                style={{ background: openMobile === i ? "rgba(0,201,177,0.04)" : "white" }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-[#00c9b1] font-extrabold text-[14px] leading-snug">{item.title}</span>
                </div>
                <span className="text-[#00c9b1] text-xl font-light shrink-0">{openMobile === i ? "−" : "+"}</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openMobile === i ? 200 : 0 }}
              >
                <p className="px-5 pb-4 text-gray-500 text-[13px] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  FAQ
// ─────────────────────────────────────────────────────────────────
function FAQ() {
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const ref = useReveal();

  const FAQS = [
    { q: "My website looks fine. Why is it still not generating leads?", a: "A website can look good visually and still fail commercially. Usually, the issue is unclear messaging, weak CTAs, poor page flow, missing trust signals, slow loading, confusing navigation, or pages that do not answer what the visitor needs before taking action." },
    { q: "Should I redesign my website or just improve the existing one?", a: "It depends on the current condition of your website. If the design is outdated but the structure is usable, improvement may be enough. But if the site has poor UX, weak SEO structure, slow templates, messy pages, or a layout that cannot support growth, a proper redesign is usually better." },
    { q: "Can you build websites that are SEO-friendly from the start?", a: "Yes. We plan website structure, page hierarchy, headings, URL logic, internal linking, content sections, mobile experience, and technical basics with SEO in mind from the beginning. This helps the website support organic growth instead of needing major fixes later." },
    { q: "Do you work on Shopify and WordPress websites?", a: "Yes. We work on Shopify and WordPress websites, including new website builds, redesigns, landing pages, product pages, service pages, collection pages, speed improvements, SEO structure, and conversion-focused updates." },
    { q: "Why are visitors leaving my website without contacting us?", a: "Visitors usually leave when the page does not answer their question quickly enough. Common reasons include vague copy, weak above-the-fold messaging, slow loading, lack of proof, confusing navigation, too many distractions, poor mobile layout, or forms that feel too much effort." },
    { q: "Can better website design improve ad performance?", a: "Yes. Ads bring people to the website, but the page decides whether they convert. A better landing page or website can improve trust, reduce friction, clarify the offer, and help paid traffic turn into leads, purchases, or bookings more effectively." },
    { q: "How long does a website design and development project take?", a: "A small business website or landing page can usually move faster, while a complete Shopify, WordPress, or custom website takes longer depending on the number of pages, features, content, integrations, and revisions. After reviewing your requirement, we can give a realistic timeline." },
    { q: "What do you need from us before starting?", a: "We usually need your current website URL, business goals, reference websites, brand assets, service or product details, target audience, required pages, and any existing analytics or SEO access. If some of these are missing, we can help define them during the planning stage." },
  ];

  const IconChevron = ({ open }: { open: boolean }) => (
    <svg viewBox="0 0 20 20" fill="none" className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} stroke="currentColor" strokeWidth="2">
      <polyline points="4,7 10,13 16,7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section className="py-20 bg-white">
      {/* ══ DESKTOP — UNCHANGED ══ */}
      <div
        ref={ref}
        className="hidden lg:block max-w-3xl mx-auto px-6"
        style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12" style={{ color: "#1a2744", fontFamily: "'Poppins',sans-serif" }}>
          Frequently Asked <span style={{ color: "#2ec4b6" }}>Questions</span>
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden transition-all duration-300" style={{ border: "1.5px solid", borderColor: openDesktop === i ? "#2ec4b6" : "rgba(26,39,68,0.1)" }}>
              <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" style={{ background: openDesktop === i ? "rgba(46,196,182,0.04)" : "white" }} onClick={() => setOpenDesktop(openDesktop === i ? null : i)}>
                <span className="font-bold text-[#1a2744] text-sm">{faq.q}</span>
                <IconChevron open={openDesktop === i} />
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openDesktop === i ? 200 : 0 }}>
                <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ MOBILE FAQ ══ */}
      <div className="lg:hidden px-5">
        <h2 className="text-[1.85rem] font-bold text-center mb-8" style={{ color: "#1a2744" }}>
          Frequently Asked <span style={{ color: "#00c9b1" }}>Questions</span>
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid", borderColor: openMobile === i ? "#00c9b1" : "rgba(26,31,94,0.1)" }}>
              <button
                className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left"
                style={{ background: openMobile === i ? "rgba(0,201,177,0.04)" : "white" }}
                onClick={() => setOpenMobile(openMobile === i ? null : i)}
              >
                <span className="font-bold text-[#1a2744] text-[14px] leading-snug flex-1">{faq.q}</span>
                <span className="flex-shrink-0 mt-0.5"><IconChevron open={openMobile === i} /></span>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openMobile === i ? 220 : 0 }}>
                <p className="px-5 pb-5 text-[13px] text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  CTA BANNER
// ─────────────────────────────────────────────────────────────────
function CTABanner() {
  const IconArrow = () => (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
      <line x1="3" y1="10" x2="17" y2="10" />
      <polyline points="11,4 17,10 11,16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ref = useReveal();
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#111c38,#1a2744,#1e3056)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(46,196,182,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(46,196,182,0.05) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute" style={{ width: 400, height: 400, top: -150, right: -100, borderRadius: "50%", background: "radial-gradient(circle,rgba(46,196,182,0.12) 0%,transparent 70%)", filter: "blur(40px)" }} />
      <div
        ref={ref}
        className="relative z-10 text-center"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(24px, 6vw, 64px)", opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full" style={{ background: "rgba(46,196,182,0.15)", border: "1px solid rgba(46,196,182,0.3)" }}>
          <div className="w-2 h-2 rounded-full bg-[#2ec4b6] animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#2ec4b6]">Ready to Build a Website That Drives Real Results?</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Let&apos;s Talk <span style={{ color: "#2ec4b6" }}>Impact</span>
        </h2>
        <p className="text-base lg:text-lg text-white/60 mb-10 leading-relaxed">
          Let's build a web presence that converts visitors into customers and powers all your digital marketing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-wider px-10 py-5 rounded-md transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg,#f15a22,#ff7a42)", boxShadow: "0 8px 30px rgba(241,90,34,0.4)" }}>
            Get a Free Quote <IconArrow />
          </Link>
          <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-10 py-5 rounded-md border transition-all duration-300 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────────────────────────
export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeroSection />
      <PainPointsSection />
      <StrategicSection />
      <ChallengeSection />
      <SolutionSection />
      <HowWeHelpSection />
      <FAQ />
      <CTABanner />
    </main>
  );
}