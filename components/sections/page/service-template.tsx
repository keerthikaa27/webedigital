import { SiteFrame } from "@/components/site-shell/site-frame";
import { Container } from "@/components/site-shell/container";
import { PageHero } from "@/components/sections/page/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicePageContent } from "@/lib/types";

export function ServiceTemplate({ content }: { content: ServicePageContent }) {
  return (
    <SiteFrame>
      <PageHero
        eyebrow={content.heroLabel}
        title={content.title}
        description={content.intro}
        primaryCta={{ label: "Request Proposal", href: "/contact-us" }}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Highlights"
              title="A page-specific service narrative."
              description="Each service page can own its own headline, support copy, proof modules, FAQs, and conversion points."
            />
          </div>
          <div className="grid gap-4">
            {content.highlights.map((item) => (
              <div key={item} className="rounded-[28px] border border-black/8 bg-[#f5f6f0] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Highlight</p>
                <p className="display-font mt-3 text-3xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#edf2eb] py-16 md:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Process"
            title="Three-step delivery model."
            description="These files are intentionally separate so every service route can evolve into a richer, more exact page later."
          />
          <div className="grid gap-5 xl:grid-cols-3">
            {content.process.map((step, index) => (
              <article key={step.title} className="rounded-[32px] border border-black/8 bg-white p-7 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">0{index + 1}</p>
                <h3 className="display-font mt-4 text-3xl font-bold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
