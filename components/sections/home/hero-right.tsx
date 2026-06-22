"use client";

export default function HeroRight() {
  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP  (lg and above) — UNCHANGED
          ══════════════════════════════════════════ */}
      <div className="relative hidden lg:flex w-full items-end justify-center min-h-[700px] xl:min-h-[760px] 2xl:min-h-[860px]">
  <img
    src="/cutout-removebg-preview.png"
    alt="Tom Augustine"
    className="absolute bottom-0 right-[2%] z-20 select-none animate-fadeIn"
    style={{
      height: "clamp(620px, 48vw, 900px)",
      width: "auto",
      maxWidth: "42vw",
      filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.25))",
    }}
  />
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

        
      </div>
    </>
  );
}