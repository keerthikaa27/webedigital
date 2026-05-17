"use client";

// ProblemSection.tsx
// Pixel-accurate recreation of the WebeDigital "The Problem" section
// Matches: dark navy bg, left text block, right stacked cards (alternating indent),
// bottom white elliptical curve, vertical line + concentric circle target

const problemPoints = [
  {
    title: "Scattered Marketing Efforts",
    description:
      "SEO, ads, social media, content, and website work often happen separately. When these channels do not support each other, the brand message becomes weak and the customer journey loses direction.",
  },
  {
    title: "Traffic Without Real Conversions",
    description:
      "Getting visitors is only one part of growth. If your pages do not explain the offer properly, build trust quickly, or guide users toward action, even good traffic can leave without becoming leads or sales.",
  },
  {
    title: "Weak Digital Foundation",
    description:
      "Slow pages, unclear service pages, poor SEO structure, thin content, weak CTAs, broken funnels, and missing tracking can silently reduce performance across every marketing channel.",
  },
  {
    title: "No Clear Growth System",
    description:
      "Random posting, random ads, random blogs, and random website updates rarely create predictable growth. Your digital marketing needs a proper system where every channel has a role and every action connects to a business goal.",
  },
];

function ProblemCard({
  title,
  description,
  alignRight,
}: {
  title: string;
  description: string;
  alignRight?: boolean;
}) {
  return (
    <article
      style={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.22)",
        background: "transparent",
        padding: "36px 48px 40px 44px",
        paddingBottom: "30px",

        // Alternating indent: card 1&3 slightly left, card 2 slightly right
        marginLeft: alignRight ? "auto" : undefined,
        marginRight: alignRight ? undefined : "auto",
        width: "100%",
        maxWidth: "360px",
      }}
    >
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#a8d85b",
          marginBottom: "20px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.88)",
          letterSpacing: "-0.01em",
        }}
      >
        {description}
      </p>
    </article>
  );
}

function BottomTarget() {
  return (
    // Centered at the bottom, sits on top of the white curve
    <div
      style={{
        position: "absolute",
        bottom: "-8px",
        height: "240px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      {/* Vertical line */}
      <div
        style={{
          width: "1px",
          height: "120px",
          background: "rgba(255,255,255,0.45)",
        }}
      />
      {/* Concentric circles */}
      <div style={{ position: "relative", width: "80px", height: "80px", bottom: "20px" }}>
        {/* Outer ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(156,236,255,0.6)",
          }}
        />
        {/* Mid ring */}
        <div
          style={{
            position: "absolute",
            inset: "14px",
            borderRadius: "50%",
            border: "1px solid rgba(156,236,255,0.6)",
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: "absolute",
            inset: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(156,236,255,0.6)",
          }}
        />
        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#1ec8ea",
          }}
        />
      </div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#191537",
        paddingTop: "80px",
        paddingBottom: "0",
      }}
    >
      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT  (768px and above)
          Two-column grid — UNCHANGED from original
          ══════════════════════════════════════════ */}
      <div className="hidden md:block">
        {/*
          DESKTOP PADDING FIX:
          Root cause — maxWidth "1200px" with fixed "padding: 0 48px" means
          on screens wider than 1200px the content stops expanding but the
          dark background continues, leaving large dead gutters.
          Fix: raise maxWidth to 1400px so it tracks the viewport further,
          and switch horizontal padding to a responsive clamp() so it scales
          smoothly from 48px (small laptop) up to 80px (large monitor) and
          never creates a visible gap on screens up to ~1400px wide.
        */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(48px, 5vw, 80px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            paddingBottom: "360px",
          }}
        >
          {/* ── LEFT: Text Block ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* "THE PROBLEM" label */}
            <p
              style={{
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#00bdf2",
                marginBottom: "16px",
              }}
            >
              The Problem
            </p>

            {/* Large heading */}
            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 60px)",
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: "-0.01em",
                color: "#ffffff",
                marginBottom: "32px",
              }}
            >
              Having a Good
              <br />
              Product or Service
              <br />
               Isn&apos;t Enough 
              <br />
              If People Cannot Find, Trust, or Choose You


            </h2>

            {/* Body text */}
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "-0.01em",
                maxWidth: "460px",
              }}
            >
              Many businesses already have a strong product, a valuable service, or a serious offer. The real problem is that their digital presence does not communicate it clearly enough. Their website may not rank. Their ads may not convert. Their social media may not build trust. Their content may not answer what buyers are actually searching for.
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "-0.01em",
                maxWidth: "460px",
              }}
            >
              That is where growth starts getting stuck. You are visible in some places, missing in others, and the customer journey feels disconnected.

            </p>
          </div>

          {/* ── RIGHT: Stacked Cards ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              paddingTop: "0",
            }}
          >
            {/* Card 1: Disconnected Strategies — left-ish */}
            <div style={{ marginLeft: "0", marginRight: "auto", width: "100%", maxWidth: "490px" }}>
              <ProblemCard
                title={problemPoints[0].title}
                description={problemPoints[0].description}
                alignRight={false}
              />
            </div>

            {/* Card 2: Technology Falling Behind — shifts right */}
            <div style={{ marginLeft: "auto", marginRight: "0", width: "100%", maxWidth: "490px" }}>
              <ProblemCard
                title={problemPoints[1].title}
                description={problemPoints[1].description}
                alignRight={true}
              />
            </div>

            {/* Card 3: Struggling to Build Trust — back left */}
            <div style={{ marginLeft: "0", marginRight: "auto", width: "100%", maxWidth: "490px" }}>
              <ProblemCard
                title={problemPoints[2].title}
                description={problemPoints[2].description}
                alignRight={false}
              />
            </div>
            {/* Card 4: Technology Falling Behind — shifts right */}
            <div style={{ marginLeft: "auto", marginRight: "0", width: "100%", maxWidth: "490px" }}>
              <ProblemCard
                title={problemPoints[3].title}
                description={problemPoints[3].description}
                alignRight={true}
              />
            </div>
          </div>
        </div>

        {/* ── White Elliptical Curve at bottom — desktop ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "160%",
            height: "200px",
            background: "#ffffff",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            zIndex: 2,
          }}
        />

        {/* ── Target (line + circles) — desktop ── */}
        <BottomTarget />
      </div>

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT  (below 768px)
          Single column: label → heading → body →
          then all 3 cards stacked full-width,
          followed by the white curve + target.
          ══════════════════════════════════════════ */}
      <div className="block md:hidden" style={{ paddingBottom: "200px" }}>

        {/* ── Text block ── */}
        <div style={{ padding: "0 24px 40px 24px" }}>

          {/* Label */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00bdf2",
              marginBottom: "14px",
            }}
          >
            The Problem
          </p>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(36px, 10vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              marginBottom: "24px",
            }}
          >
            Having a Good
              <br />
              Product or Service
              <br />
               Isn&apos;t Enough 
              <br />
              If People Cannot Find, Trust, or Choose You
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.01em",
            }}
          >
            Many businesses already have a strong product, a valuable service, or a serious offer. The real problem is that their digital presence does not communicate it clearly enough. Their website may not rank. Their ads may not convert. Their social media may not build trust. Their content may not answer what buyers are actually searching for.
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "-0.01em",
                maxWidth: "460px",
              }}
            >
              That is where growth starts getting stuck. You are visible in some places, missing in others, and the customer journey feels disconnected.

            </p>
        </div>

        {/* ── Cards stacked full-width ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "0 20px",
          }}
        >
          {problemPoints.map((point) => (
            <article
              key={point.title}
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "transparent",
                padding: "28px 24px",
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#a8d85b",
                  marginBottom: "14px",
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {point.description}
              </p>
            </article>
          ))}
        </div>

        {/* ── White elliptical curve — mobile ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "220%",        /* wider % so the ellipse looks full on narrow screens */
            height: "140px",
            background: "#ffffff",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            zIndex: 2,
          }}
        />

        {/* ── Target — mobile (smaller, tighter) ── */}
        <div
          style={{
            position: "absolute",
            bottom: "-4px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 10,
            height: "180px",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              width: "1px",
              height: "90px",
              background: "rgba(255,255,255,0.45)",
            }}
          />
          {/* Concentric circles */}
          <div style={{ position: "relative", width: "64px", height: "64px", bottom: "16px" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(156,236,255,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "11px",
                borderRadius: "50%",
                border: "1px solid rgba(156,236,255,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "22px",
                borderRadius: "50%",
                border: "1px solid rgba(156,236,255,0.6)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "11px",
                height: "11px",
                borderRadius: "50%",
                background: "#1ec8ea",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;