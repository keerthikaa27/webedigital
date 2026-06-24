export default function HeroRight() {
  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP (lg and above)
          h-full fills the parent grid row (600px).
          Image is fixed 480px — identical everywhere.
          ══════════════════════════════════════════ */}
      <div className="relative hidden h-full w-full items-end justify-center lg:flex">

        {/* Person cutout */}
        <img
          src="/cutout-removebg-preview.png"
          alt="Vaibhav Maheshwari"
          className="absolute bottom-0 z-20 select-none animate-fadeIn"
          style={{
            right: "3%",
            height: "480px",
            width: "auto",
            maxWidth: "450px",
            marginBottom: "40px",
            filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.25))",
          }}
        />

        {/* Name tag */}
        <div
          className="absolute z-30 animate-fadeIn"
          style={{
            right: "4%",
            bottom: "-8px",
            width: "450px",
            maxWidth: "450px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "12px 20px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "fit-content",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#0d2b4e",
                letterSpacing: "-0.01em",
              }}
            >
              Vaibhav Maheshwari, WebeDigital
            </span>
            <span style={{ color: "#d1d5db", fontSize: "14px" }}>•</span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#2db89a",
              }}
            >
              Founder &amp; Growth Strategist
            </span>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          MOBILE (below lg) — completely unchanged
          ══════════════════════════════════════════ */}
      <div className="flex w-full flex-col items-center pb-8 pt-6 lg:hidden">

        <div
          className="relative flex items-end justify-center overflow-hidden"
          style={{
            width: "min(340px, 92vw)",
            height: "min(400px, 108vw)",
            borderRadius: "50% 50% 0 0 / 55% 55% 0 0",
            background: "linear-gradient(160deg, #2db89a 0%, #148a6e 100%)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=70"
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,60,50,0.45)] to-transparent" />
          <img
            src="/cutout-removebg-preview.png"
            alt="Vaibhav Maheshwari"
            className="relative z-10 select-none"
            style={{
              height: "96%",
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              objectPosition: "bottom center",
              filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        {/* Name tag below dome on mobile */}
        <div
          className="mt-4 w-full max-w-[300px]"
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "12px 20px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          }}
        >
          <p style={{ fontSize: "15px", fontWeight: 700, color: "#0d2b4e" }}>
            Vaibhav Maheshwari
          </p>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#2db89a" }}>
            Founder &amp; Growth Strategist
          </p>
        </div>

      </div>
    </>
  );
}