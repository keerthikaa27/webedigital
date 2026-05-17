import { Container } from "@/components/site-shell/container";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* ── DOT TEXTURE BLOBS (shared) ── */}
     <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block">
        <div
          className="absolute right-0 top-0 w-[500px] h-[350px]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 2.5px, transparent 0.4px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage: "radial-gradient(circle at center, black 5%, transparent 100%)",
            maskImage: "radial-gradient(circle at center, black 5%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-[30%] top-[40%] w-[400px] h-[300px]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.14) 2.5px, transparent 0.2px)",
            backgroundSize: "20px 20px",
            WebkitMaskImage: "radial-gradient(circle at center, black 5%, transparent 100%)",
            maskImage: "radial-gradient(circle at center, black 5%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-0 bottom-0 w-[450px] h-[320px]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.12) 2.5px, transparent 0.2px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage: "radial-gradient(circle at center, black 5%, transparent 100%)",
            maskImage: "radial-gradient(circle at center, black 5%, transparent 100%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════
          DESKTOP  (md and above) — BYTE-FOR-BYTE UNCHANGED
          Padding fix: Container gets clamp() horizontal padding so
          on large monitors content scales with the viewport instead
          of hard-stopping at the Container's fixed max-width and
          leaving white dead gutters on either side.
          ══════════════════════════════════════════════════════════ */}
      <div
  style={{
    padding: "0 clamp(32px, 5vw, 80px)",
    maxWidth: "1300px",
    margin: "0 auto",
  }}
>
  <Container className="relative z-10 hidden md:block">

        {/* BLUE FEATURE BLOCK */}
        <div className="relative mb-32">
          <div className="bg-[#2f5aa6] text-white rounded-[40px] px-12 py-2 max-w-[1050px]">
            <div className="grid grid-cols-[320px_1fr] items-center gap-12">
              <div className="relative">
                <img
                  src="/mohbymeera.png"
                  className="h-[520px] scale-[1.39] object-contain ml-4 -mb-16"
                />
              </div>
              <div>
                <p className="text-[22px] leading-[1.6] max-w-[520px]">
                  “We started from zero organic presence. WebeDigital took us from nothing to strong, consistent growth in just a few months. Their content systems and SEO strategy gave us compounding results that are still working today.”              </p>
                
                <p className="mt-8 text-[#000000] font-semibold tracking-wide">
                Manisha Maheshwari - Founder, Moh by Meera
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STAGGERED CARDS */}
        <div className="relative mt-20 space-y-10">

          {/* CARD 1 — right */}
          <div className="relative max-w-[520px] ml-auto">
            <img
              src="/daarian.png"
              className="absolute -left-20 top-1 h-16 w-16 rounded-full shadow"
            />
            <div className="bg-[#ffffff] rounded-[18px] px-6 py-6 -mt-44 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] font-semibold mb-6 tracking-[0.18em] text-[#1aa3a8] uppercase">
                Dr. Debasis Chakraborty - Founder & CEO, Dariaan
              </p>
              <p className="-mt-4  text-[14px] leading-[1.8] text-[#4a5568]">
“We were struggling to rank for our core keywords despite working with multiple agencies. WebeDigital delivered #1 rankings across almost all of them within months. Their technical SEO systems completely changed our visibility in the fashion startup accelerator space.”              </p>
            </div>
          </div>

          {/* CARD 2 — centre-left */}
          <div className="relative max-w-[620px] ml-96">
            <img
              src="/boxnmove.jpg"
              className="absolute -left-20 top-1 h-16 w-16 rounded-full shadow"
            />
            <div className="bg-[#ffffff] rounded-[18px] px-7 py-6 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
              <p className="text-[12px] font-semibold tracking-[0.18em] text-[#1aa3a8] uppercase">
                
Praveen Yadav – Founder, BOXnMOVE  
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-[#4a5568]">
“We had worked with another agency before and saw zero results. Within weeks of joining WebeDigital our organic traffic and leads started growing exponentially. Their systems delivered instant momentum and have been compounding ever since.”
            </p>
            </div>
          </div>

          {/* CARD 3 — right */}
          <div className="relative max-w-[540px] ml-auto">
            <img
              src="/tengin.webp"
              className="absolute -left-20 top-1 h-16 w-16 rounded-full shadow"
            />
            <div className="bg-[#ffffff] rounded-[18px] px-6 py-6 shadow-[0_8px_25px_rgba(0,0,0,0.08)] -mt-2">
              <p className="text-[14px] font-semibold mb-6 tracking-[0.18em] text-[#1aa3a8] uppercase">
               
Madhu Kargunda – Founder, Tengin 
              </p>
              <p className="-mt-2 text-[14px] leading-[1.8] text-[#4a5568]">
“WebeDigital took our messy website and gave it a complete professional revamp. They introduced us to proper SEO, built strong content and blog systems from scratch, and our social media presence grew significantly. The results were fast and very noticeable.”
             </p>
            </div>
          </div>

        </div>
      </Container>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE  (below md) — INNOVATIVE REDESIGN
          Concept: "Tape wall" — each testimonial is a card that
          looks pinned to a board with a coloured top-bar accent,
          avatar overlapping the top edge, and a large decorative
          opening-quote mark. The hero quote gets a full-bleed
          blue banner with the person name on a coloured ribbon.
          Cards alternate a subtle left/right tilt (-1deg / +1deg)
          for a human, non-template feel.
          No fixed pixel widths. No ml-auto/ml-96. No overflow.
          ══════════════════════════════════════════════════════════ */}
      <div className="block md:hidden px-5 ">
         {/* ── SECTION LABEL ── */}
        <p
          style={{
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1aa3a8",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          What Our Clients Say
        </p>

        {/* ── HERO QUOTE — full-bleed blue banner ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #2f5aa6 0%, #1e3f80 100%)",
            borderRadius: "24px",
            padding: "36px 24px 28px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "48px",
          }}
        >
          {/* Large decorative quote mark */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "16px",
              fontSize: "50px",
              lineHeight: 1,
              color: "rgba(255,255,255,0.10)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            "
          </div>

          {/* Dot texture inside banner */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 0)",
    backgroundSize: "16px 16px",
    pointerEvents: "none",
  }}
/>
          

          {/* Quote text */}
          <p
            style={{
              position: "relative",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#ffffff",
              fontStyle: "italic",
              marginBottom: "24px",
            }}
          >
            "We started from zero organic presence. Precrux took us from nothing to strong, consistent growth in just a few months. Their content systems and SEO strategy gave us compounding results that are still working today.”

          </p>

          {/* Author ribbon */}
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "100px",
              padding: "6px 16px 6px 6px",
            }}
          >
            {/* Avatar circle */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
                border: "2px solid rgba(255,255,255,0.5)",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src="/image-removebg-preview.png"
                alt="Bianca Buliga"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "0.04em",
              }}
            >
              Manisha Maheshwari - Founder, Moh by Meera
            </span>
          </div>
        </div>

       

        {/* ── TESTIMONIAL CARDS — tape-wall style ── */}
        {[
          {
            img: "https://i.pravatar.cc/150?img=20",
            name: "Dr. Debasis Chakraborty - Founder & CEO",
            company: "Dariaan",
            accent: "#3da978",
            tilt: "-1.2deg",
            text: "We were struggling to rank for our core keywords despite working with multiple agencies. Precrux delivered #1 rankings across almost all of them within months. Their technical SEO systems completely changed our visibility in the fashion startup accelerator space.",
            readMore: false,
          },
          {
            img: "https://i.pravatar.cc/150?img=21",
            name: "Praveen Yadav - Founder",
            company: "BOXnMOVE",
            accent: "#2f5aa6",
            tilt: "1deg",
            text: "We had worked with another agency before and saw zero results. Within weeks of joining Precrux our organic traffic and leads started growing exponentially. Their systems delivered instant momentum and have been compounding ever since.",
            readMore: false,
          },
          {
            img: "https://i.pravatar.cc/150?img=22",
            name: "Madhu Kargunda - Founder ",
            company: "Tengin",
            accent: "#1aa3a8",
            tilt: "-0.8deg",
            text: "Precrux took our messy website and gave it a complete professional revamp. They introduced us to proper SEO, built strong content and blog systems from scratch, and our social media presence grew significantly. The results were fast and very noticeable.",
            readMore: true,
          },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              background: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 6px 32px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)",
              marginBottom: "36px",
              /* Tape-wall tilt */
              transform: `rotate(${t.tilt})`,
              /* Slight stagger indent alternates left/right */
              marginLeft: i % 2 === 0 ? "0px" : "12px",
              marginRight: i % 2 === 0 ? "12px" : "0px",
              overflow: "visible",
            }}
          >
            {/* Coloured top accent bar */}
            <div
              style={{
                height: "5px",
                background: t.accent,
                borderRadius: "20px 20px 0 0",
              }}
            />

            {/* Avatar — overlaps top bar */}
            <div
              style={{
                position: "absolute",
                top: "-22px",
                left: "20px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: `3px solid ${t.accent}`,
                background: "#fff",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "22px 20px 20px" }}>
              {/* Name + company */}
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: t.accent,
                  marginBottom: "10px",
                  marginTop: "8px",
                }}
              >
                {t.name}
                <span style={{ color: "#999", fontWeight: 400 }}> – {t.company}</span>
              </p>

              {/* Large opening quote */}
              <div
                style={{
                  fontSize: "52px",
                  lineHeight: 0.8,
                  color: t.accent,
                  opacity: 0.18,
                  fontFamily: "Georgia, serif",
                  marginBottom: "4px",
                  userSelect: "none",
                }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "#4a5568",
                }}
              >
                {t.text}
              </p>

              

              {/* Star rating */}
              <div
                style={{
                  display: "flex",
                  gap: "3px",
                  marginTop: "14px",
                }}
              >
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill={t.accent}
                    style={{ opacity: 0.85 }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Bottom breathing room */}
        <div style={{ height: "16px" }} />
      </div>

    </section>
  );
}