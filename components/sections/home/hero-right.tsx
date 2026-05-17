"use client";

export default function HeroRight() {
  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP  (lg and above) — UNCHANGED
          ══════════════════════════════════════════ */}
      <div className="relative hidden h-[580px] w-full items-end justify-center lg:flex">

        {/* Person cutout */}
        <img
          src="/cutout-removebg-preview.png"
          alt="Tom Augustine"
          className="absolute bottom-0 right-[5%] z-20 select-none animate-fadeIn"
          style={{
            height: "95%",
            maxWidth: "520px",
            filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.25))",
          }}
        />

        {/* Floating name tag */}
        <div className="absolute bottom-16 left-[10%] z-30 bg-white px-6 py-3 shadow-xl animate-fadeUp delay-200">
          <span className="text-[15px] font-bold text-[#1B2D4F] whitespace-nowrap">
            Tom Augustine, Intero Web Division, Columbus, OH
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MOBILE  (below lg)
          Layout: teal dome shape centred on screen,
          person photo anchored to bottom of dome,
          name tag below.
          The global arc background is hidden on
          mobile (see HomeHero), so this shape
          provides all the teal colour.
          ══════════════════════════════════════════ */}
      <div className="flex w-full flex-col items-center pb-8 pt-6 lg:hidden">

        {/* Dome + photo wrapper */}
        <div
          className="relative flex items-end justify-center overflow-hidden"
          style={{
            width: "min(340px, 92vw)",
            height: "min(400px, 108vw)",
            /* Dome = circle top-half: radius 50% on all four corners,
               but bottom corners are 0 so it's a flat-bottomed arch */
            borderRadius: "50% 50% 0 0 / 55% 55% 0 0",
            background: "linear-gradient(160deg, #2db89a 0%, #148a6e 100%)",
          }}
        >
          {/* City texture inside the dome */}
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=70"
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          {/* Depth fade at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,60,50,0.45)] to-transparent" />

          {/* Person photo — fills the dome */}
          <img
            src="/cutout-removebg-preview.png"
            alt="Tom Augustine"
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

        {/* Name tag — sits just below the dome */}
        <div className="mt-3 bg-white px-5 py-2.5 shadow-md">
          <span className="text-[13px] font-bold text-[#1B2D4F]">
            Tom Augustine — Intero Web Division, Columbus OH
          </span>
        </div>
      </div>
    </>
  );
}