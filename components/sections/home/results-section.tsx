import { Container } from "@/components/site-shell/container";

export function ResultsSection() {
  const data = [
    {
      title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
      desc: "By Vaibhav M. / April 6, 2026",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
      desc: "By Vaibhav M. / April 7, 2026",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
      desc: "By Vaibhav M. / April 8, 2026",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="relative bg-[#f4f6f3] py-20">

      {/* 🔥 subtle dotted background EXACT */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <Container className="relative z-10">

        {/* 🔥 HEADING EXACT STYLE */}
        <div className="text-center mb-14">
          <h2 className="text-[clamp(2.2rem,3vw,2.8rem)] font-extrabold tracking-[-0.02em] text-[#121542]">
            Growth You Can Measure
          </h2>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid gap-8 lg:grid-cols-3">

          {data.map((item, i) => (
            <div
              key={i}
              className="
                rounded-[26px]
                bg-[#f1f3ef]
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              "
            >

              {/* IMAGE */}
              <img
                src={item.img}
                alt=""
                className="h-[220px] w-full object-cover"
              />

              {/* CONTENT */}
              <div className="px-6 py-6">

                {/* 🔥 METRIC LINK STYLE (IMPORTANT) */}
                <p className="
                  text-[18px]
                  font-semibold
                  text-[#1aa3a8]
                  underline
                  underline-offset-4
                  decoration-[1.5px]
                ">
                  {item.title}
                </p>

                {/* DESCRIPTION */}
                <p className="
                  mt-3
                  text-[15px]
                  leading-[1.7]
                  text-[#4a5568]
                ">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}